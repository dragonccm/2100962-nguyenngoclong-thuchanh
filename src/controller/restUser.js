import { User } from '../model/user.js'; // Assuming you have this model

// import { updateUser, deleteUser, insertUser } from '../model/user.js'; // Assuming you have this service
// import { getUser } from '../model/user.js'; // Assuming you have this service
// const restUserController = async (req, res) => {
//     const reqData = req.body;
//     let data;

//     switch (reqData.type) {
//         case 'update':
//             data = await updateUser(
//                 reqData.id,
//                 reqData.ten,
//                 reqData.pass,
//                 reqData.quyen,
//                 reqData.namsinh,
//                 reqData.quequan,
//                 reqData.gioitinh
//             );
//             break;
//         case 'delete':
//             data = await deleteUser(reqData.id);
//             break;
//         case 'insert':
//             data = await insertUser(
//                 reqData.ten,
//                 reqData.quyen,
//                 reqData.namsinh,
//                 reqData.quequan,
//                 reqData.gioitinh,);
//             break;
//         default:
//             res.json({ message: 'Invalid request type' });
//             return;
//     }

//     res.json({ message: 'success', data });
// }

// export {
//     restUserController
// };


const restUserController = async (req, res) => {
    const reqData = req.body;
    let data;

    try {
        switch (reqData.type) {
            case 'update':
                data = await User.update(
                    {
                        ten: reqData.ten,
                        pass: reqData.pass,
                        quyen: reqData.quyen,
                        namsinh: reqData.namsinh,
                        quequan: reqData.quequan,
                        gioitinh: reqData.gioitinh
                    },
                    {
                        where: { id: reqData.id }
                    }
                );
                break;
            case 'delete':
                data = await User.destroy({
                    where: { id: reqData.id }
                });
                break;
            case 'insert':
                data = await User.create({
                    ten: reqData.ten,
                    pass: reqData.pass,
                    quyen: reqData.quyen,
                    namsinh: reqData.namsinh,
                    quequan: reqData.quequan,
                    gioitinh: reqData.gioitinh
                });
                break;
            default:
                res.json({ message: 'Invalid request type' });
                return;
        }

        res.json({ message: 'success', data });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

export {
    restUserController
};