require('dotenv').config();
import jwt from 'jsonwebtoken';

export const createToken = (payload) => {
    let key = process.env.JWT_SECRET_KEY;
    let token = null;
    try {
        token = jwt.sign(payload, key, { expiresIn: process.env.JWT_EXPIRES_IN });
    } catch (error) {
        console.log('error create token: ', error);
    }
    return token;
};

export const verifyToken = (token) => {
    let key = process.env.JWT_SECRET_KEY;
    let decode = null;

    try {
        decode = jwt.verify(token, key);
    } catch (error) {
        console.log('error verifying token: ', error);
    }
    return decode;
};

const SecurePaths = ['/checkaccount'];

const extractToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
};

export const checkUserJWT = (req, res, next) => {
    console.log('session: ');
    if (!SecurePaths.includes(req.path)) return next();
    let session = req.session;
    console.log('session: ',session);
    let tokenFromHeader = extractToken(req);
    if (session && session.userId) {
        const token = session && session.userId ? session.userId : tokenFromHeader;

        const decoded = verifyToken(token);

        if (!decoded) {
            return res.status(401).json({
                EM: 'JWT | ERROR | Xác thực thất bại',
                EC: '401',
            });
        }

        req.user = decoded;
        req.token = token;
        next();
    } else {
        return res.status(401).json({
            EM: 'JWT | ERROR | Xác thực thất bại',
            EC: '-1',
        });
    }
};


