export const getTotalCount = (totalCount: number, limit: number): number => {
  return Math.ceil(totalCount / limit);
};
