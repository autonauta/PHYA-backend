const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  console.log(JSON.stringify(req.body));
  if (
    req.body.name === null ||
    req.body.email === null ||
    req.body.password === null ||
    req.body.role === null ||
    req.body.passConfirm === null
  ) {
    return res.status(400).json({
      error: "No puede haber campos vacios",
    });
  } else if (req.body.password != req.body.passConfirm) {
    return res.status(400).json({
      error: "Los passwords no coinciden",
    });
  } else {
    const user = new User(req.body);
    user.save((error, user) => {
      if (error) {
        if (error.code == "11000") {
          return res.status(400).json({
            error: "Ese correo ya se encuentra registrado",
          });
        } else {
          return res.status(400).json({
            error: "Error en el servidor",
          });
        }
      }
      user.salt = undefined;
      user.hashed_password = undefined;
      res.json({
        user,
      });
    });
  }
};

exports.login = (req, res) => {
  // find the user based on email
  const { email, password } = req.body;
  User.findOne({ email }, (error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error: "User with that email does not exist",
      });
    }
    // if user is found make sure the email and password match
    // create authenticate method in user model
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Incorrect password for that user",
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // persist the token as 't' in cookie with expiration date
    res.cookie("t", token, { expire: new Date() + 9999 });
    // return response with user and token to frontend client
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signout success" });
};

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    req.profile = user;
    next();
  });
};
