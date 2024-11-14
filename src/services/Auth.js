// import pool from '../connectDB.js';
import {createToken} from '../middleware/auth.js';
import User from "../model/user";
export const Register = async (data) => {
    try {
        const user = await User.create({
            ten: data.ten,
            pass: data.pass,
            namsinh: data.namsinh,
            quequan: data.quequan,
            gioitinh: data.gioitinh
        });
        return user;
    } catch (error) {
        console.log('SERVICE | AUTH SERVICE | ERROR | ', error);
        return {
            EM: 'Database query error',
            EC: -1,
            DT: []
        };
    }
}

export const Login = async (data) => {
    try {
        const user = await User.findOne({ where: { ten: data.name } });
        if (user && user.dataValues.pass === data.password) {
            const token = createToken(user.dataValues);
            const value = user.dataValues;
            console.log('SERVICE | AUTH SERVICE | SUCCESS | ', token);
            return {
                token,
                value
            };
        } else {
            return null;
        }
    } catch (error) {
        console.log('SERVICE | AUTH SERVICE | ERROR | ', error);
        return {
            EM: 'Database query error',
            EC: -1,
            DT: []
        };
    }
}

export const Checkaccount = async (data) => {

}