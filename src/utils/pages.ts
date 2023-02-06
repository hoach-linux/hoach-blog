export const getTotalPage = (totalCount: number, limit: number): number => {
  return Math.ceil(totalCount / limit);
};
