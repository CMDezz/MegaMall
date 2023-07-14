const commonFunc = {
  convertToCurrency: (
    price: number,
    nationCode = 'en-US',
    currencyCode = 'USD',
  ): string => {
    try {
      return price.toLocaleString(nationCode, {
        style: 'currency',
        currency: currencyCode,
      });
    } catch {
      return 'Wrong setting';
    }
  },
};

export default commonFunc;
