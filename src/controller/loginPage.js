const loginController = async(req, res) => {
    return res.render("login.ejs", {
        headerFile: "header",
        footerFile: "footer",
    })
}
export default loginController;