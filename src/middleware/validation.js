const isData = async (req, res, next) => {
    console.log("isData middleware hit and username: ", req.body.username);
    try {

        if (!req.body.username) {
            res.status(422).json({ message: "data is incomplete"});
            return;
        }
        next();
        
    } catch (error) {
        res.status(500).json({ message: error.message, error: error})
    }
};

// checks if string is lowercase and makes lower
const isLowerCase = async (req, res, next) => {
    try {
        if (req.body.username && req.body.username !== req.body.username.toLowerCase()) {
            req.body.username = req.body.username.toLowerCase();
        } 
        next();
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });
    }
};

//
const isValidEmail = async (req, res, next) => {
    try {
        //code here
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });
    }
}

module.exports = {
    isData: isData,
    isLowerCase: isLowerCase,
    isValidEmail: isValidEmail,
}