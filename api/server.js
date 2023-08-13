import fetch from "cross-fetch";

export default async function handler(request, response) {
  const { url } = request.query;

  try {
    const base64_code = await fetch(url)
      .then(response => {
        if (!response.ok) {
          return (`Error: Fetch ${url} failed. Please check your url for base64 decryption.`);
        }
        return response.text();
      })
      .then(content => {
        return content; // Return content to the next .then
      });

    response.status(200).send(base64_code);
  } catch (error) {
    console.error(`Error: ${error}`);
    response.status(500).send("An error occurred while processing the request.");
  }
}
