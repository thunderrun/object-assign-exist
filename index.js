const assignExist = (target, source) => {
  Object.keys(target).forEach((key) => {
    target[key] = (key in source ? source : target)[key];
  });
  return target;
};

const isPojo = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return false;
  }
  return Object.getPrototypeOf(obj) === Object.prototype;
};

const assignExistDeep = (target, source) => {
  Object.keys(target).forEach((key) => {
    if (isPojo(target[key])) {
      assignExistDeep(target[key], source[key]);
    } else {
      target[key] = (key in source ? source : target)[key];
    }
  });
  return target;
};

export default assignExist;
export { assignExistDeep };
