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
        
        const user = await User.findOne({ where: { username: req.body.username } });

        if (!user) {
            return res.status(404).json({ message: "Unable to find user." });
        };

        const comparedPassword = await bcrypt.compare(req.body.password, user.password); 

        if (comparedPassword) {
            req.user = user;
            next();
        } else {
            res.status(401).json({ message: "Passwords do not match"});
        };

       
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};


module.exports = {
    hashPass: hashPass,
    comparePass: comparePass,
}