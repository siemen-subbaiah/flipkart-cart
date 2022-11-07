export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'inr',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};
