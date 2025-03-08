
import db from '../models/index';
import CRUDService from '../services/CRUDService';
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

let getCRUD = async (req, res) => {
    let mess = await CRUDService.createNewUser(req.body);
    console.log(mess);
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    await CRUDService.createNewUser(req.body)
    console.log(req.body);
    return res.send('post crud from server')
}

module.exports = {
    getHomePage: getHomePage,
    comeAbout: comeAbout,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}