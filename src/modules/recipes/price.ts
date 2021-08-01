export const currency = '$';
// By using toFixed we always show two decimals
export const parseRawPrice = (price: number): string => `${currency}${(price / 100).toFixed(2)}`;
