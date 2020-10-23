# obejct-assign-exist

Object.assign() only existing properties

## Example

```javascript
import assignExist from "object-assign-exist";
const target = {
  a: 1,
  b: 2
};

const source = {
  b: 3,
  c: 4
};

const obj3 = assignExist(target, source);

/*
target = {
  a: 1,
  b: 3,
}

source = {
  b: 3,
  c: 4
}

obj3 = {
  a: 1,
  b: 3,
}

*/
```