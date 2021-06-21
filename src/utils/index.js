/**
 * Function for filter unique values
 * Example: const uniqueValues = myArray.filter(unique);
 */
export const unique = (value, index, self) => {
  return self.findIndex((m) => m.areaId === value.areaId) === index;
};
