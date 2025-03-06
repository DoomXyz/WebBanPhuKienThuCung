
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let comeAbout = (req, res) => {
    return res.render('file1/about.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    comeAbout: comeAbout,
}