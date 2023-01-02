import {model} from "../../models/levels.model.js";

const findAllLevels = async () => {
    const allVideos = await model.find({})
    return allVideos.map((level) => level.id)
};

const createLevel = async (data) => {
    const createdLevel = await model.create(data)
    return createdLevel
};


const deleteLevel = async (data) => {
    const deletedLevel = await model.findByIdAndDelete(data._id)
    return deletedLevel
};

export default {
    findAllLevels,
    createLevel,
    deleteLevel
}
