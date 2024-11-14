import { Login, Register } from "../services/Auth";

const LoginCtrl = async (req, res) => {
    try {
        const data = await Login(req.body);
        console.log(JSON.stringify(data));
        req.session.userId = data.token; // Lưu token vào session
        // Set extended expiration time
        req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
        req.session.save((err) => {
            if (err) {
                console.error('Error saving session:', err);
                return res.status(500).send({ message: 'Error saving session', error: err });
            }
            return res.status(200).send({ message: 'Login successful', data: data });
        });
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).send({ message: 'Error logging in', error: error });
    }

};

const RegisterCtrl = async (req, res) => {
    const data = await Register(req.body);
    return res.status(data.status).send(data);
};

const Logout = async (req, res) => {
    try {
        res.clearCookie(req.sessionID);
        req.session.destroy((err) => {
            if (err) {
                console.error('LOGOUT | INFO | Lỗi xoá session ' + err);
                return res.status(200).json({
                    EM: 'LOGOUT | ERROR | Lỗi xoá session ' + err,
                    EC: '500',
                });
            }
        });
        return res.status(200).json({
            EM: 'LOGOUT | INFO | Đăng xuất thành công',
            EC: '200',
        });
    } catch (error) {
        console.log('CONTROLLER | LOGOUT | ERROR | ' + error);

        return res.status(200).json({
            EM: 'LOGOUT | ERROR | ' + error,
            EC: '500',
        });
    }
}
export {
    LoginCtrl,
    RegisterCtrl,
    Logout
};