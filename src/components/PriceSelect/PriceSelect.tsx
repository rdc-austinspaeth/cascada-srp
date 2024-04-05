const prices = {
  minPrices: {
    '350K': 350000,
    '700K': 700000,
    '1M': 1000000,
    '1.4M': 1400000,
    '1.8M': 1800000,
    '2.2M': 2200000,
    '2.4M': 2400000,
  },
  maxPrices: {
    '600K': 600000,
    '1.2M': 1200000,
    '1.8M': 1800000,
    '2.4M': 2400000,
    '3M': 3000000,
    '3.6M': 3600000,
    '4.2M': 4200000,
  },
};

export const PriceSelect = ({ title, prices, onChange }) => (
  <select title={title} autoFocus onChange={onChange}>
    <option value="" selected disabled>
      {title}
    </option>
    {Object.entries(prices).map(([key, value]) => (
      <option key={key} value={value}>
        {key}
      </option>
    ))}
  </select>
);
