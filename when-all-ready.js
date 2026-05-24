"use strict";

var queue = new Promise(function(resolve){
    if (document.readyState === 'complete') {
        resolve();
    } else {
        window.addEventListener('load', function(){ resolve(); });
    }
});

export var errors = [];

function enqueue(fn, moduleName, moduleNameWasDeduced) {
    queue = queue.then(async function(){
        try {
            await fn();
        } catch (error) {
            errors.push({ error: error, moduleName: moduleName, moduleNameWasDeduced: moduleNameWasDeduced });
        }
    });
}

export function whenAllReady(fn, moduleName) {
    var moduleNameWasDeduced = moduleName === undefined;
    var resolvedName = moduleName !== undefined ? moduleName : (fn.name || '');
    enqueue(fn, resolvedName, moduleNameWasDeduced);
}
