import pick from 'lodash.pick';

const assignExist = (target, source) => {
  return Object.assign(target, pick(source, Object.keys(target)));
};

export default assignExist;
