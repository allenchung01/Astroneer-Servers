var admin = require("firebase-admin");
const { getSystemErrorMap } = require("util");

var serviceAccount = require("./astroneer-servers-firebase-adminsdk-51akg-f33fc70771.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const getAuthToken = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    req.authToken = req.headers.authorization.split(" ")[1];
  } else {
    req.authToken = null;
  }
  next();
};

const checkIfAuthenticated = (req, res, next) => {
  console.log("checkIfAuthenticated");
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      const userInfo = await admin.auth().verifyIdToken(authToken);
      req.authId = userInfo.uid;
      console.log("AUTHENTICATED");
      return next();
    } catch (e) {
      console.log("NOT AUTHENTICATED");
      return res
        .status(401)
        .send({ error: "You are not authorized to make this request." });
    }
  });
};

const createUser = async (req, res) => {
  const { email, username, password } = req.body;
  const user = await admin.auth().createUser({
    email,
    username,
    password,
  });
  return res.send(user);
};

module.exports = { checkIfAuthenticated, createUser };
