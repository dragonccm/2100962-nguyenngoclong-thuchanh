import pool from '../connectDB.js';
import {getUser} from '../model/user.js';
const getUserSV = async () => {
    try {
        const data = await getUser()

        return {
            EM: 'Success',
            EC: 0,
            DT: data.DT
        };
    } catch (error) {
        console.log('SERVICE | CHAT SERVICE | ERROR | ', error);
        return {
            EM: 'Database query error',
            EC: -1,
            DT: []
        };
    }
};
export default getUserSV;