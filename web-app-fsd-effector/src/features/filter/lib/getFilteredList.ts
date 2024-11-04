export const getFilteredList = (
  list: string[],
  newElement: string,
): string[] => {
  let newList = [...list];
  if (newElement !== '') {
    if (newList.find((name) => name === newElement)) {
      newList = newList.filter((name) => name !== newElement);
    } else {
      newList.push(newElement);
    }
  }
  return newList;
};
