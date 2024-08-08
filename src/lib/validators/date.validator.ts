export const isValidDate = (_date: string): boolean => {
  const date = new Date(_date);
  return !isNaN(date.getTime());
};

export const validateRangeSelection = (
  from: string,
  to: string,
  interval: number = 30
): boolean => {
  const fromDate = new Date(from);
  const toDate = new Date(to);

  if (isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) return false;

  const differenceInMs = toDate.getTime() - fromDate.getTime();
  const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);
  return differenceInDays <= interval && differenceInDays >= 0;
};
