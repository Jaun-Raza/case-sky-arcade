import { Announcement } from '../models/Announcement.js';
import CryptoJS from 'crypto-js';
import 'dotenv/config'

export async function getAnnouncements(req, res) {
    await Announcement.find({}).then((foundData) => {
        res.status(200).json(foundData);
    }).catch(err => {
        res.status(500).json({ message: err.message });
    })
}

export async function getAdminAnnouncements(req, res) {
    await Announcement.find({})
        .select('announcementID title createdAt')
        .then((foundData) => {
            res.status(200).json(foundData);
        }).catch(err => {
            res.status(500).json({ message: err.message });
        })
}

export async function getSingleAnnouncements(req, res) {
    const { announcementID } = req.query

    await Announcement.findOne({ announcementID: announcementID }).then((foundData) => {
        res.status(200).json(foundData);
    }).catch(err => {
        res.status(500).json({ message: err.message });
    })
}

export async function addAnnouncements(req, res) {
    const { banner, title, description, date } = req.body;

    const skey = process.env.SKEY

    function encryptData(data) {
        const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), skey).toString();
        return encryptedData;
    }

    const announcement = new Announcement({
        announcementID: `announce_${Date.now()}`,
        banner,
        title,
        description: encryptData(description),
        createdAt: date
    })

    await announcement.save().then(() => {
        res.status(200).json({ message: 'Announcement is successfully uploaded!', success: true });
    }).catch((err) => {
        res.status(500).json({ message: 'Something went wrong!', success: false });
    })
}

export async function deleteAnnouncement(req, res) {
    const { announcementID } = req.body;

    Announcement.findOneAndDelete({ announcementID: announcementID }).then(() => {
        res.status(200).json({
            message: 'Announcement is successfully deleted!', success: true
        })
    }).catch((err) => {
        res.status(500).json({ message: 'Something went wrong!', success: false });
    })

}