import { DataTypes } from 'sequelize';
import { sequelize } from '../connectDB.js';

const Sanpham = sequelize.define('Sanpham', {
   masp : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    ten: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gia: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hinhanh: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mota: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idnhom: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

}, {
    tableName: 'Sanpham',
    timestamps: false,
});

export default Sanpham;