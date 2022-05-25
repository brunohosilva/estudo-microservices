const cfg = () => {
  console.log("----->", process.env.DATABASE_URL);
  return {
    jwt_secret: "sss",
    jwt_expires: "2d",
    salt: 10,
    db_path: process.env.DATABASE_URL,
  };
};

module.exports = cfg();
