// Removes props from object provided in parameter

const omit = (obj, ...props) => {
  const result = { ...obj };
  props.forEach((prop) => delete result[prop]);
  return result;
};

export default omit;
