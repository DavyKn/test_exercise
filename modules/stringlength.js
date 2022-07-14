const stringLength = (str) => {
  if(str.length >= 1 && str.length <= 10) {
    return str.length;
  }else if(str.length < 1){
    return 'empty string';
  } else {
    return 'string longer than 10 char';
  }
};

module.exports = stringLength;