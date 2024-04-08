export const PriceSelect = ({ title, onChange, dataType, prices }) => (
  <select
    title={title}
    autoFocus
    onChange={onChange}
    data-type={dataType}
  >
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
