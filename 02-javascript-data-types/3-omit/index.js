/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const newObject = obj;
  for (const objectKey in newObject) {
    if (fields.includes(objectKey)) {
      delete newObject[objectKey];
    }
  }
  return newObject;
};
