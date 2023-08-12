const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { code } = req.query;
  if (!code) {
    return res.status(400).send('Missing link to Base64 file');
  }

  try {
    const response = await fetch(code);
    const data = await response.text();
    const decodedData = Buffer.from(data, 'base64');
    res.setHeader('Content-Type', response.headers.get('Content-Type'));
    res.status(200).send(decodedData);
  } catch (error) {
    res.status(500).send('Error decoding Base64 file');
  }
};
