// /config/ensureLoggedIn.js
module.exports = function(req, res, next) {
    // Status code of 401 is unauthorized
  if (!req.user) return res.status(401).json('Unauthorized');
  next();
};