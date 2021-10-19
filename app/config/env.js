const env = {
  database: "dfv55kcoclpe19",
  username: "zvpbmlnswnrzdv",
  password: "a90a413cf4b15c34a67a0ea6d8e45d4e06868c697293f761dc90f0a29c271b1c",
  host: "ec2-52-200-68-5.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = env;
