const id = {
  path: "id",
  type: String,
  length: { min: 1, max: 50 },
};

const username = {
  path: "username",
  type: String,
  length: { min: 3, max: 20 },
  custom: "username",
};

const password = {
  path: "password",
  type: String,
  length: { min: 8, max: 100 },
};

const email = {
  path: "email",
  type: String,
  length: { min: 3, max: 100 },
};

const title = {
  path: "title",
  type: String,
  length: { min: 3, max: 300 },
};

const label = {
  path: "label",
  type: String,
  length: { min: 3, max: 100 },
};

const shortDesc = {
  path: "desc",
  type: String,
  length: { min: 3, max: 300 },
};

const longDesc = {
  path: "desc",
  type: String,
  length: { min: 3, max: 2000 },
};

const url = {
  path: "url",
  type: String,
  length: { min: 9, max: 300 },
};

const price = {
  path: "price",
  type: Number,
};

const avatar = {
  path: "avatar",
  type: String,
  length: { min: 8, max: 100 },
};

const text = {
  type: String,
  length: { min: 3, max: 15 },
};

const longText = {
  type: String,
  length: { min: 3, max: 250 },
};

const paragraph = {
  type: String,
  length: { min: 3, max: 10000 },
};

const phone = {
  type: String,
  length: 13,
};

const emailAddress = {
  type: String,
  regex:
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const number = {
  type: Number,
  length: { min: 1, max: 6 },
};

const arrayOfStrings = {
  type: Array,
  items: {
    type: String,
    length: { min: 3, max: 100 },
  },
};

const obj = {
  type: Object,
};

const bool = {
  type: Boolean,
};

export {
  id,
  username,
  password,
  email,
  title,
  label,
  shortDesc,
  longDesc,
  url,
  price,
  avatar,
  text,
  longText,
  paragraph,
  phone,
  emailAddress,
  number,
  arrayOfStrings,
  obj,
  bool,
};
