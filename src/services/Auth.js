import pool from '../connectDB.js';
import {createToken} from '../middleware/auth.js';

export const Register = async (data) => {
    const [rows] = await pool.query(`INSERT INTO user( ten, pass, namsinh, quequan, gioitinh) VALUES (?,?,?,?,?,?)`, [data.ten, data.pass, data.namsinh, data.quequan, data.gioitinh]);
    return rows;
}
export const Login = async (data) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM user WHERE ten = ?`, [data.ten]);
        // console.log('rows: ', rows);
        if (rows[0].pass == data.pass) {
            const token = createToken(rows[0]);
            return token;
        }
        else {
            return null;
        }   
    }
    catch (error) {
        console.log('SERVICE | CHAT SERVICE | ERROR | ', error);
        return {
            EM: 'Database query error',
            EC: -1,
            DT: []
        };
    }
}

export const Checkaccount = async (data) => {

}