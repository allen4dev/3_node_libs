function makeArray(field) {
  if (!field) return [];

  if (Array.isArray(field)) {
    return field;
  }

  return [field];
}

function splitString(str) {
  if (!str) return [];

  const splitted = str.split(', ');
  return splitted;
}

module.exports = {
  makeArray,
  splitString,
};
