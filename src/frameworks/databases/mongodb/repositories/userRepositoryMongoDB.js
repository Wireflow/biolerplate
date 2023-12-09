import User from "../models/user.js";
import omit from "../../../../infrastructure/utils/omitObject.js";

const userRepositoryMongoDB = () => {
  const add = async (entity) => {
    const created = await User.create({
      email: entity.getEmail(),
      password: entity.getPassword(),
    });

    return omit(created._doc, "password");
  };

  const updateById = (id, entity) => {
    const updatedUser = {
      firstname: entity.getFirstname(),
      lastname: entity.getLastName(),
      email: entity.getEmail(),
    };

    return User.findOneAndUpdate(
      { _id: id },
      { $set: updatedUser },
      { new: true, proe }
    ).select("-password");
  };

  const findById = (id) => {
    return User.findById(id).select("-password");
  };

  const addAvatar = (id, entity) => {
    return User.findOneAndUpdate(
      { _id: id },
      { $set: { avatar: entity.getAvatar() } },
      { new: true }
    ).select("-password");
  };

  const findByProperty = (params) => {
    return User.find(params);
  };

  return {
    add,
    updateById,
    findById,
    addAvatar,
    findByProperty,
  };
};

export default userRepositoryMongoDB;
