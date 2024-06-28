import express from "express";

// Servers Middleware
import { getAnnouncements, getAdminAnnouncements, getSingleAnnouncements, addAnnouncements, deleteAnnouncement } from "../controllers/controller.js"

const Router = express.Router();

Router.get('/', (req, res) => { 
    res.send('Hello From Case!');
})

// Website Routes
Router.route('/announcement/get-announcements').get(getAnnouncements);
Router.route('/announcement/get-single-announcement/').get(getSingleAnnouncements);

// Admin Routes
Router.route('/announcement/get-admin-announcement').get(getAdminAnnouncements)
Router.route('/announcement/add-announcement').post(addAnnouncements)
Router.route('/announcement/delete-announcement').post(deleteAnnouncement)

export default Router