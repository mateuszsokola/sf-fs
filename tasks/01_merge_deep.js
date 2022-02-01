function merge_deep(...objects) {
  const output = Object.assign(...objects);

  return output;
}

module.exports = merge_deep;
