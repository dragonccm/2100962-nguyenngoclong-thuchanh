import { updateUser, deleteUser, insertUser } from '../model/user.js'; // Assuming you have this service
import { getUser } from '../model/user.js'; // Assuming you have this service
const restUserController = async (req, res) => {
    const reqData = req.body;
    let data;

    switch (reqData.type) {
        case 'update':
            data = await updateUser(
                reqData.id,
                reqData.ten,
                reqData.pass,
                reqData.quyen,
                reqData.namsinh,
                reqData.quequan,
                reqData.gioitinh
            );
            break;
        case 'delete':
            data = await deleteUser(reqData.id);
            break;
        case 'insert':
            data = await insertUser(
                reqData.ten,
                reqData.quyen,
                reqData.namsinh,
                reqData.quequan,
                reqData.gioitinh,);
            break;
        default:
            res.json({ message: 'Invalid request type' });
            return;
    }

    res.json({ message: 'success', data });
}

export {
    restUserController
};