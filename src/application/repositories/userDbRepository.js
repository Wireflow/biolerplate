export default function userRepository(repository) {
  const updateById = (id, entity) => repository.updateById(id, entity);
  const signIn = (params) => repository.signIn(params);
  const findById = (id) => repository.findById(id);
  const add = (user) => repository.add(user);
  const addAvatar = (base64, id) => repository.addAvatar(base64, id);
  const findByProperty = (params) => repository.findByProperty(params);

  return {
    add,
    updateById,
    findById,
    addAvatar,
    signIn,
    findByProperty,
  };
}
