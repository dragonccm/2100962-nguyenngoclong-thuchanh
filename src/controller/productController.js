import  Sanpham  from '../model/sanpham.js'; // Assuming you have this model


const getSanpham = async (req, res) => {
    try {
        const data = await Sanpham.findAll()

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

const getSanphamById = async (req, res) => {
    try {
        const data = await Sanpham.findByPk(req.params.id)

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

export { 
    getSanpham,
    getSanphamById
};