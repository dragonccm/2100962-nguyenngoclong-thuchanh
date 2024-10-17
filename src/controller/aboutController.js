const aboutCotroller = (req, res) => {
    return res.render('about', { headerFile: "header", footerFile: "footer", })
}
export default aboutCotroller;