"use strict";

import { strict as assert } from 'node:assert';

// Mock browser globals BEFORE importing when-all-ready (module top-level code runs at import time)
var loadHandlers = [];
globalThis.document = { readyState: 'loading' };
globalThis.window = {
    addEventListener: function(type, fn) {
        if (type === 'load') loadHandlers.push(fn);
    }
};

const { whenAllReady, errors } = await import('../when-all-ready.js');

describe('when-all-ready', function() {
    it('runs handlers in order after load, isolates errors, accumulates them in errors[]', async function() {
        var calls = [];

        whenAllReady(async function first() {
            calls.push('first-start');
            await new Promise(function(r){ setTimeout(r, 10); });
            calls.push('first-end');
        });

        whenAllReady(function failing() {
            throw new Error('boom');
        });

        whenAllReady(function third() {
            calls.push('third');
        });

        whenAllReady(function() { calls.push('anon'); }, 'explicit-name');

        // Simulate the load event
        loadHandlers.forEach(function(fn){ fn(); });

        // Wait for the queue to settle
        await new Promise(function(r){ setTimeout(r, 60); });

        assert.deepEqual(calls, ['first-start', 'first-end', 'third', 'anon']);
        assert.equal(errors.length, 1);
        assert.equal(errors[0].error.message, 'boom');
        assert.equal(errors[0].moduleName, 'failing');
        assert.equal(errors[0].moduleNameWasDeduced, true);
    });

    it('explicit moduleName is preserved and moduleNameWasDeduced is false', async function() {
        var prevErrors = errors.length;
        whenAllReady(function() { throw new Error('boom2'); }, 'my-module');
        await new Promise(function(r){ setTimeout(r, 20); });
        assert.equal(errors.length, prevErrors + 1);
        assert.equal(errors[errors.length - 1].moduleName, 'my-module');
        assert.equal(errors[errors.length - 1].moduleNameWasDeduced, false);
    });
});
