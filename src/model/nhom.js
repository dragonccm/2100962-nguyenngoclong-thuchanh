import { DataTypes } from 'sequelize';
import { sequelize } from '../connectDB.js';

const Nhom = sequelize.define('Nhom', {
    idnhom: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    tennhom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'Nhom',
    timestamps: false,
});

export default Nhom;