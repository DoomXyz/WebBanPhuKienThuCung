import express from "express";
import homeController from "../controllers/homeController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.comeAbout);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/crud', homeController.getCRUD);

    router.get('/trang2', (req, res) => {
        return res.send('Cum to 2')
    });
    return app.use("/", router)
}

module.exports = initWebRoutes;