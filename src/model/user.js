

// import pool from '../connectDB.js';

// const getUser = async () => {
//     try {
//         const [rowss] = await pool.query(`SELECT * FROM user `);
//         return {
//             EM: 'Success',
//             EC: 0,
//             DT: rowss
//         };
//     } catch (error) {
//         console.log('SERVICE | CHAT SERVICE | ERROR | ', error);
//         return {
//             EM: 'Database query error',
//             EC: -1,
//             DT: []
//         };
//     }
// };
// const deleteUser = async (id) => {
//     try {
//         const [rowss] = await pool.query(`DELETE FROM user WHERE id = ${id}`);
//         return {
//             EM: 'Success',
//             EC: 0,
//             DT: rowss
//         };
//     } catch (error) {
//         console.log('SERVICE | CHAT SERVICE | ERROR | ', error);
//         return {
//             EM: 'Database query error',
//             EC: -1,
//             DT: []
//         };
//     }
// };
// const insertUser = async (ten, quyen, namsinh, quequan, gioitinh) => {
//     try {
//         const [rowss] = await pool.query(`INSERT INTO user ( ten, pass, quyen, namsinh, quequan, gioitinh) VALUES (?, '1', ?, ?, ?, ?)`, [ten, quyen, namsinh, quequan, gioitinh]);
//         return {
//             EM: 'Success',
//             EC: 0,
//             DT: rowss
//         };
//     } catch (error) {
//         console.log('SERVICE | CHAT SERVICE | ERROR | ', error);
//         return {
//             EM: 'Database query error',
//             EC: -1,
//             DT: []
//         };
//     }
// };
// const updateUser = async (id, ten, pass, quyen, namsinh, quequan, gioitinh) => {
//     try {
//         const [rowss] = await pool.query(
//             `UPDATE user SET ten = ?, pass = ?, quyen = ?, namsinh = ?, quequan = ?, gioitinh = ? WHERE id = ?`,
//             [ten, pass, quyen, namsinh, quequan, gioitinh, id]
//         );
//         return {
//             EM: 'Success',
//             EC: 0,
//             DT: rowss
//         };
//     } catch (error) {
//         console.log('SERVICE | CHAT SERVICE | ERROR | ', error);
//         return {
//             EM: 'Database query error',
//             EC: -1,
//             DT: []
//         };
//     }
// };



// export { getUser, deleteUser, insertUser, updateUser };

import { DataTypes } from 'sequelize';
import { sequelize } from '../connectDB.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ten: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quyen: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    namsinh: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quequan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gioitinh: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users',
    timestamps: false,
});

export default User;