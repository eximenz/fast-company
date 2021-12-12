export function paginate(items, pageNumber, pageSize) {
  const stsrtIndex = (pageNumber - 1) * pageSize;
  return [...items].splice(stsrtIndex, pageSize);
}
