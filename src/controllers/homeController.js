
import db from '../models/index';
let getHomePage = async (req, res) => {

    try {
        let data = await db.TaiKhoans.findAll();

        return res.render("homepage.ejs", { data: JSON.stringify(data) });
    } catch (e) {
        console.log(e)
    }
}

let comeAbout = (req, res) => {
    return res.render('file1/about.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    comeAbout: comeAbout,
}