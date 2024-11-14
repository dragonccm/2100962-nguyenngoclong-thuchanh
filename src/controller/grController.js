import Nhom  from '../model/nhom.js'; // Assuming you have this model


const getNhom = async (req, res) => {
    try {
        const data = await Nhom.findAll()

        res.json({
            EM: 'Success',
            EC: 0,
            DT: data
        });
    } catch (error) {
        console.log('SERVICE | CHAT SERVICE | ERROR | ', error);
        res.json({
            EM: 'Database query error',
            EC: -1,
            DT: []
        });
    }
}

export default getNhom;