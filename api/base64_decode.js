module.exports = async (req, res) => {
  const { code } = req.query;
  if (!code) {
    return 'Missing link to Base64 file';
  }

  try {
    const decodedData = Buffer.from(code, 'base64');
    res.setHeader('Content-Type', 'image/jpeg'); // 根据实际情况设置 Content-Type
    return decodedData;
  } catch (error) {
    return 'Error decoding Base64 file';
  }
};
