export default function userRepository(repository) {
  const updateById = (id, entity) => repository.updateById(id, entity);
  const findById = (id) => repository.findById(id);
  const add = (entity) => repository.add(entity);
  const addAvatar = (id, entity) => repository.addAvatar(id, entity);
  const findByProperty = (params) => repository.findByProperty(params);

  return {
    add,
    updateById,
    findById,
    addAvatar,
    findByProperty,
  };
}
