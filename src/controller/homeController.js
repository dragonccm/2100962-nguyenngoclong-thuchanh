// import { getUser } from "../model/user";
// const homeController = async(req, res) => {
//     const data = await getUser();
//     return res.render("home.ejs", {
//         headerFile: "header",
//         footerFile: "footer",
//         Users: data.DT
//     })
// }
// export default homeController;
import  User  from "../model/user.js";
const homeController = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.render("home.ejs", {
            headerFile: "header",
            footerFile: "footer",
            Users: users
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).send("Internal Server Error");
    }
};

export default homeController;