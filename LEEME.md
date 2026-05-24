<!--multilang v0 es:LEEME.md en:README.md -->
# when-all-ready
<!--lang:es-->
Ejecuta funciones cuando el documento está listo, incluso si el evento `load` ya se había disparado.
<!--lang:en-->
A small utility to run handlers when the document is ready, even if the `load` event already fired.
[!--lang:*--]

<!-- cucardas -->
[![npm-version](https://img.shields.io/npm/v/when-all-ready.svg)](https://npmjs.org/package/when-all-ready)
[![downloads](https://img.shields.io/npm/dm/when-all-ready.svg)](https://npmjs.org/package/when-all-ready)
[![build](https://github.com/emilioplatzer/when-all-ready/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/emilioplatzer/when-all-ready/actions/workflows/build-and-test.yml)
[![security](https://socket.dev/api/badge/npm/package/when-all-ready)](https://socket.dev/npm/package/when-all-ready)

<!--multilang buttons-->

idioma: ![castellano](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-es.png)
también disponible en:
[![inglés](https://raw.githubusercontent.com/codenautas/multilang/master/img/lang-en.png)](README.md)

<!--lang:es-->

## Uso

```js
import whenAllReady from 'when-all-ready';

whenAllReady(function () {
  console.log('Todo listo');
});
```

## Instalación

```sh
npm install when-all-ready
```

## Licencia

MIT

<!--lang:en-->

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

[!--lang:*--]
