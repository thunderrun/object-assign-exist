# obejct-assign-exist

Object.assign() only existing properties

## Uasge

```
npm i object-assign-exist
```

```javascript
import assignExist, { assignExistDeep } from "object-assign-exist";

const target = {
  a: 1,
  b: 2,
};

const source = {
  b: 3,
  c: 4,
};

const obj = assignExist(target, source);

/*
target => {
  a: 1,
  b: 3,
}

source => {
  b: 3,
  c: 4
}

obj => {
  a: 1,
  b: 3,
}
*/

/* assignExistDeep */

const target2 = {
  a: {
    b: 1,
  },
  f: {
    g: {
      h: {
        i: 5,
      },
      j: [], // non-POJO(Plain Old JavaScript Object) will just be replaced
      k: null,
      l: new Date(),
      o: new RegExp(),
      p: undefined,
      q: function () {},
    },
  },
};

const source2 = {
  a: {
    b: 4,
    c: 2,
  },
  d: {
    e: 3,
  },
  f: {
    g: {
      h: {
        i: 4,
      },
      j: 5,
      k: 6,
      l: {
        m: 6,
      },
      n: 5,
      o: 7,
      p: 8,
      q: 10,
    },
    r: 11,
  },
};

const obj2 = assignExistDeep(target2, source2);

/*
obj2 => {
  a: {
    b: 4,
  },
  f: {
    g: {
      h: {
        i: 4,
      },
      j: 5,
      k: 6,
      l: {
        m: 6,
      },
      o: 7,
      p: 8,
      q: 10,
    },
  },
};

*/
```
