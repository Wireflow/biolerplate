const user = ({ firstname, lastname, email, password, avatar }) => {
  return {
    getEmail: () => email,
    getPassword: () => password,
    getFirstName: () => firstname,
    getLastName: () => lastname,
    getAvatar: () => avatar,
  };
};

export default user;
