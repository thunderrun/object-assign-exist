# obejct-assign-exist

Object.assign() only existing properties

## Example

```javascript
import assignExist from "object-assign-exist";
const obj1 = {
  a: 1,
  b: 2
};

const obj2 = {
  b: 3,
  c: 4
};

obj1 = assignExist(obj1, obj2);

/*
obj1 = {
  a: 1,
  b: 3,
}
*/
```