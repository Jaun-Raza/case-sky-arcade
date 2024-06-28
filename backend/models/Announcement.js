import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema({
    announcementID: String,
    banner: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: String
})

export const Announcement = mongoose.model('announcements', AnnouncementSchema)