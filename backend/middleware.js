const { JWT_SECRET } = require ("./config");
const jwt = require ("jsonwebtoken");

const authMiddleware=(req,res,next)=>{
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startswith('Bearer')){
        return res.status(403).json({})
    }

    const token = authHeader.split('')[1];

    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        req.uderId = decoded.userId;
        nexy()
    }catch(err){
        return res.status(403).json({

        })
    }
}

module.exports = {
    authMiddleware
    
}