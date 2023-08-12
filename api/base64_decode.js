module.exports = (req, res) => {
  const { code } = req.query;
  if (!code) {
    return res.status(400).send('Missing Base64 code');
  }

  try {
    const decodedData = Buffer.from(code, 'base64');
    res.setHeader('Content-Type', 'image/jpeg'); // 修改为正确的图片类型
    res.status(200).send(decodedData);
  } catch (error) {
    res.status(500).send('Error decoding Base64 code');
  }
};
