# tea-properties

> Deep object inspection and modification given a stringed path.

## Installation

### Node.js

`tea-properties` is available on [npm](http://npmjs.org).

    $ npm install tea-properties

### Component

`tea-properties` is available as a [component](https://github.com/component/component).

    $ component install qualiancy/tea-properties

## Usage

### .get(obj, path)

* **@param** _{Object}_ object 
* **@param** _{String}_ path 
* **@return** _{Object}_  value or `undefined`

Retrieve the value in an object given a string path.

```js
var obj = {
    prop1: {
        arr: ['a', 'b', 'c']
      , str: 'Hello'
    }
  , prop2: {
        arr: [ { nested: 'Universe' } ]
      , str: 'Hello again!'
    }
};
```

The following would be the results.

```js
var properties = require('tea-properties');
properties.get(obj, 'prop1.str'); // Hello
properties.get(obj, 'prop1.att[2]'); // b
properties.get(obj, 'prop2.arr[0].nested'); // Universe
```


### .set(path, value, object)

* **@param** _{Object}_ object 
* **@param** _{String}_ path 
* **@param** _{Mixed}_ value 

Define the value in an object at a given string path.

```js
var obj = {
    prop1: {
        arr: ['a', 'b', 'c']
      , str: 'Hello'
    }
  , prop2: {
        arr: [ { nested: 'Universe' } ]
      , str: 'Hello again!'
    }
};
```

The following would be acceptable.

```js
var properties = require('tea-properties');
properties.set(obj, 'prop1.str', 'Hello Universe!');
properties.set(obj, 'prop1.arr[2]', 'B');
properties.set(obj, 'prop2.arr[0].nested.value', { hello: 'universe' });
```


## License

(The MIT License)

Copyright (c) 2012 Jake Luer <jake@qualiancy.com> (http://qualiancy.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
