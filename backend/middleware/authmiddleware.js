const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  // 1. Check if Authorization header exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ 
      success: false,
      message: 'Authorization header missing or malformed'
    });
  }

  // 2. Extract token
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ 
      success: false,
      message: 'Token missing'
    });
  }

  try {
    // 3. Verify token
    const decoded = jwt.verify(token,"bikshu");

    // 🔐 Debugging logs (optional)
    console.log("✅ Token verified for user:", decoded);

    // 4. Attach decoded payload to req.user
    req.user = decoded;

    // 5. Pass to next middleware/controller
    next();
  } catch (err) {
    console.error("❌ JWT Error:", err.message);
    return res.status(401).json({ 
      success: false,
      message: 'Invalid or expired token',
      error: err.message
    });
  }
};
