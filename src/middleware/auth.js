const bcrypt = require("bcrypt");
const User = require("../users/model");
const jwt = require("jsonwebtoken");

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

const verifyToken = async (req, res, next) => {
    // const authHeader = req.headers['authorization'];
    
    // if (!authHeader || !authHeader.startsWith('Bearer ')) {
    //     return res.status(403).json({ message: "Token field empty or invalid" });
    // };

    // const token = authHeader.split(' ')[1];
    const token = req.header("Authorization").replace("Bearer ","")
    console.log(token)

    if (!token) {
        return res.status(403).json({ message: "Token field empty"})
    }

    let decodedToken 
    
     try {
        
        decodedToken = await jwt.verify(token, process.env.SECRET);

        console.log(decodedToken);

     } catch (error) {
        return res.status(404).json({ message: "invalid token"})
     }

    
    const user = await User.findOne({ where: { id: decodedToken.id } });
    req.authCheck = user;
    next();
}


module.exports = {
    hashPass: hashPass,
    comparePass: comparePass,
    verifyToken: verifyToken,
}