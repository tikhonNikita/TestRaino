export default async function APIRequest(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request Error');
  } catch (error) {
    console.log(error);
    throw error;
  }
}
