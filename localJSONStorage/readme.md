# Local JSON Storage
Extended LocalStorage for support JSON data into LocalStorage.

## Without this,
You should stringify/parse JavaScript object everytime:

```javascript
var people = { name: '.modernator', age: 25 };
localStorage.set('people', JSON.stringify(people));

console.log(JSON.parse(localStorage.get('people')));
```

## With this,
Only you need is use extended two new methods: getJSON and setJSON

```javascript
import localStorage from './localjsonstorage';

var people = { name: '.modernator', age: 25 };
localStorage.setJSON('people', people);

console.log(localStorage.getJSON('people'));
```

## Usage
This module requires Web bundler like Browserify or Webpack. After you import this module, you can use it directly.

###void localJSONStorage.setJSON(string key, object obj)
Insert obj to localStorage.

###Object localJSONStorage.getJSON(string key)
Get object from localStorage.


## Cautions
- You can use native local storage method with this module too, because the module is just adding additional methods when it is imported.
Also after you include it, even if it does not have reference variable, you can use with original localStorage with these new methods, But I don't recommend it.
- Of course, this module is client side only.
- It uses ES6 syntax, so you must transpile this module with transpiler like Babel.