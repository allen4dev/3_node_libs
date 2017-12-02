function makeArray(field) {
  if (!field) return [];

  if (Array.isArray(field)) {
    return field;
  }

  return [field];
}

module.exports = {
  makeArray,
};
