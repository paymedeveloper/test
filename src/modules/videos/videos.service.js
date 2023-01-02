import {model} from "../../models/videos.model.js";

const findAllVideos = async () => {
    const allVideos = await model.find({})
    return allVideos
};

const findAllActiveVideos = async () => {
    const activeVideos = await model.find({status: "active"})
    return activeVideos
};

const findAllBlockedVideos = async () => {
    const blockedVideos = await model.find({status: "blocked"})
    return blockedVideos
};

const createBlockedVideo = async (data) => {
    const createdBlockedVideo = await model.create(data)
    return createdBlockedVideo
};

const changeStatusVideo = async (data) => {
    const changedStatusVideo = await model.findByIdAndUpdate(data._id, data)
    return changedStatusVideo
};

const deleteVideo = async (data) => {
    const deletedVideo = await model.findByIdAndDelete(data._id)
    return deletedVideo
};

export default {
    findAllVideos,
    createBlockedVideo,
    findAllActiveVideos,
    findAllBlockedVideos,
    changeStatusVideo,
    deleteVideo
}
