/**
 * Returns the price in thousands separator format
 * @returns {string}
 */
export const formatPrice = (value: number): string => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
