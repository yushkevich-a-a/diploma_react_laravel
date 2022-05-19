export const getRequest = async (request) => {
  const response = await fetch(`${process.env.MIX_APP_URL}/api/hall`);
  if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
  }
  const data = await response.json();

  return data;
}