export default {
  port: process.env.PORT || 3000,
  ip: process.env.HOST,
  mongo: {
    uri:
      process.env.DATABASE_URL || "mongodb://localhost:27017/post-clean-code",
  },
  redis: {
    uri: process.env.REDIS_URL || "redis://localhost:6379",
  },
  jwtSecret: process.env.JWT_SECRET || "jkl!±@£!@ghj1wef237",
};
