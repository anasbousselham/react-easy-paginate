[![NPM](https://nodei.co/npm/react-easy-paginate.png)](https://nodei.co/npm/react-easy-paginate/)

# react-easy-paginate

A react-easy-paginate Package

## Installation

Install `react-easy-paginate` with [npm](https://www.npmjs.com/):

```
$ npm install react-easy-paginate --save
```

## Usage

#### javascript

```javascript
import paginate from "react-easy-paginate";

const movies = paginate(
  this.state.movies,
  this.state.currentPage,
  this.state.pageSize
);
```

## Demo

Read the code of [demo/demo.jsx][1]. You will quickly understand
how to make `react-easy-paginate` work with a list of objects.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).

[1]: https://github.com/anasbousselham/react-easy-paginate/blob/master/src/index.js
