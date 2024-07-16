const bcrypt = require("bcrypt");
const User = require("../users/model");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

// const saltRounds = +process.env.SALT_ROUNDS

const hashPass = async (req, res, next) => {
    try {

        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        req.body.password = hashedPassword;

        next();
    } catch (error) {
        res.status(500).json({ message: error.message, error })
    }
};

const comparePass = async (req, res, next) => {
  try {
        
        



        // const comparedPassword = await bcrypt.compare(req.body.password, user.get("password")) 
            
        const user = await User.findOne({ where: { username: req.body.username } });

        req.user = user;

        next();
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};


 // bcrypt.compare takes 2 parameters, the plaintext password and the hashed password from the db
    // get user from db with the username
    // check if user exists
    // compare password
    // check if return value is true or false
    // if false response "passwords do not match"
    // attach user to the request
    // next





module.exports = {
    hashPass: hashPass,
    comparePass: comparePass,
}