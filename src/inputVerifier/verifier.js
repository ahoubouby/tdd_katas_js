const verifyPass = (input, rules) => {
  return rules.reduce((acc, cv) => acc && cv(input), true);
};
module.exports = {
  verifyPass,
};
