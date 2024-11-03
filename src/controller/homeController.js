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
export default homeController;