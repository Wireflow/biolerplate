import User from "../models/user";
import authServiceImpl from "../../../services/authService.js";
import authServiceInterface from "../../../../application/services/authService";
import omit from "../../../../infrastructure/utils/omitObject.js";

const authService = authServiceInterface(authServiceImpl());

const userRepositoryMongoDB = () => {
  const add = (entity) => {
    const created = User.create({
      email: entity.getEmail(),
      password: entity.getPassword(),
    });

    return omit(created.toObject(), "password");
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
      { new: true }
    );
  };

  const findById = (id) => {
    User.findById(id).select("-password");
  };

  const addAvatar = (id, entity) => {
    return User.findOneAndUpdate(
      { _id: id },
      { $set: { avatar: entity.getAvatar() } },
      { new: true }
    );
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
