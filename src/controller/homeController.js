<<<<<<< HEAD
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

=======
import { getUser } from "../model/user";
const homeController = async(req, res) => {
    const curr = req.user 
    const data = await getUser();
    return res.render("home.ejs", {
        headerFile: "header",
        footerFile: "footer",
        Users: data.DT,
        info: curr
    })
}
>>>>>>> cacd07f20d1e32c2a4df106847906c58aff08aa0
export default homeController;