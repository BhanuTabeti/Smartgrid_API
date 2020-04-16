module.exports = function sendError(res, status, err) {
  console.log(`Error: ${err}`);
  return res.status(status).send({
    success: false,
    message: err
  });
};
