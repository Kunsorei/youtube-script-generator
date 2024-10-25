export const formatNumber = (number) => {
  if (number < 1000) return number.toString();
  const units = ['K', 'M', 'B'];
  const tier = (Math.log10(number) / 3) | 0; // Get the tier (K, M, B)
  const scaled = number / Math.pow(1000, tier);
  return `${scaled.toFixed(1)}${units[tier - 1]}`;
};
