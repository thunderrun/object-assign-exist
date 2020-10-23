const assignExist = (target, source) => {
  Object.keys(target).forEach(key => {
    target[key] = (key in source ? source : target)[key]
  });
  return target;
};

export default assignExist;
