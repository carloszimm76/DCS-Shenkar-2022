const containsNumbers = (str) => {
  var regexp = /\d/g;
  return regexp.test(str);
};

const checkStringIfHasSpacesOrNumbers = (str) => {
  if (str.indexOf(" ") >= 0) {
    return true;
  }
  return containsNumbers(str);
};
module.exports = { checkStringIfHasSpacesOrNumbers };