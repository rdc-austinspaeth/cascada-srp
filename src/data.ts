export const getTestData = async () => {
  const res = await fetch('https://httpbin.org/ip', { method: 'GET' });
  const data = await res.json();

  return data;
};
