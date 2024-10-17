import { getUser } from "../model/user";
const homeController = async(req, res) => {
    const data = await getUser();
    return res.render("home.ejs", {
        headerFile: "header",
        footerFile: "footer",
        Users: data.DT
    })
}
export default homeController;