var admin = require("firebase-admin");
const { getSystemErrorMap } = require("util");

var serviceAccount = require("./astroneer-servers-firebase-adminsdk-51akg-f33fc70771.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const checkIfAuthenticated = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization;
    admin
      .auth()
      .verifyIdToken(idToken)
      .then((decodedToken) => {
        req.body.uid = decodedToken.uid;
        next();
      })
      .catch((reason) => {
        return res.status(401).send("Unauthorized");
      });
  } catch {
    console.log("Could not find idToken");
    return res.status(401).send("Unauthorized");
  }
};

const checkIfAuthorized = (req, res, next) => {
  const id = req.params["uid"];
  console.log(id);
  console.log(req.body.uid);
  if (id === req.body.uid) {
    return next();
  } else {
    return res.status(401).send("Unauthorized");
  }
};

/*const createUser = async (req, res) => {
  const { email, username, password } = req.body;
  const user = await admin.auth().createUser({
    email,
    username,
    password,
  });
  return res.send(user);
};*/

module.exports = { checkIfAuthenticated, checkIfAuthorized };
