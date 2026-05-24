# when-all-ready
A small utility to run handlers when the document is ready, even if the `load` event already fired.

[![npm-version](https://img.shields.io/npm/v/when-all-ready.svg)](https://npmjs.org/package/when-all-ready)
[![downloads](https://img.shields.io/npm/dm/when-all-ready.svg)](https://npmjs.org/package/when-all-ready)
[![build](https://github.com/emilioplatzer/when-all-ready/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/emilioplatzer/when-all-ready/actions/workflows/build-and-test.yml)
[![security](https://socket.dev/api/badge/npm/package/when-all-ready)](https://socket.dev/npm/package/when-all-ready)


language: ![English](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-en.png)
also available in:
[![Spanish](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-es.png)](LEEME.md)


## Usage

```js
import whenAllReady from 'when-all-ready';

whenAllReady(function () {
  console.log('All set');
});
```

## Install

```sh
npm install when-all-ready
```

## License

MIT

