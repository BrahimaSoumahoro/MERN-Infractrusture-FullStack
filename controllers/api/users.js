//* Request handler Logic
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcrypt')

//* /*-- Helper Functions --*/
function createJWT(user) {
    return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'});
}

async function create(req, res) {
    // console.log('[From POST handler]', req.body)
    try {
        //* creating a new user
        const user = await User.create(req.body);
        console.log(user);

        //* creating a new jwt
        const token = createJWT(user);

        res.json(token);
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

// @@@@@@@@@@@@@@@== April 25, 2023 ==@@@@@@@@@@@@@@@@@
async function login(req, res) {
    try {
    const user = await User.findOne({email: req.body.email});
    // console.log('[USER FOUND]', user);

    if (!user) throw new Error();
   
        const match = await bcrypt.compare(req.body.password, user.password);

        if(!match) throw new Error();
        // send
        res.json( createJWT(user) );

    } catch (error) {
        res.status(400).json('Bad Credentials');
    }
}

async function checkToken(req, res) {
    console.log(req.user);
    console.log(req.exp);
    res.json(req.exp);
}


module.exports = {
    create,
    login,
    checkToken,
};
