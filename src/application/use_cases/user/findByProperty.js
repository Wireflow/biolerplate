const findByProperty = async (params, userRepository) => {
  return await userRepository.findByProperty(params);
};

export default findByProperty;
