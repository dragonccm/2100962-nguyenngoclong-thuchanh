import { Login, Register } from "../services/Auth";

const LoginCtrl = async (req, res) => {
    const data = await Login(req.body);

    req.session.userId = data; // Lưu token vào session
    console.log('seon: ',  req.session);
    // Set extended expiration time
    req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
    req.session.save((err) => {
        if (err) {
            console.error('Error saving session:', err);
            return res.status(500).send({ message: 'Error saving session', error: err });
        }
        return res.status(200).send(data);
    });
};

const RegisterCtrl = async (req, res) => {
    const data = await Register(req.body);
    return res.status(data.status).send(data);
};

export {
    LoginCtrl,
    RegisterCtrl
};