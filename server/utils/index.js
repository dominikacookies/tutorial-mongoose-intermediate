const convertToLowercase = (next) => {
  this.email = this.email.toLowercase();
  next();
};

const validateEmail = (email) => {
  const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailValidationRegex.test(email);
};
module.exports = { convertToLowercase, validateEmail };
