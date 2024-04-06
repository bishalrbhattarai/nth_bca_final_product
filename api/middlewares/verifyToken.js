const verifyToken = (req, res, next) => {
  const token = req.body.token;
  if (token) {
    console.log(token);
    res.json({
      success: true,
      message: "token is available",
      authentication: true,
    });
  } else {
    res.json({
      success: false,
      message: "token is not available",
      authentication: false,
    });
  }
};
export default verifyToken;
