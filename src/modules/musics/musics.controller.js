import musicsService from "./musics.service.js"

const GET_ALL = async (req, res) => {
    try {

        const data = await musicsService.findAllMusics()

        const videos = data.map((music) => {
            return {title: music.title, author: music.author, url: music.url}
        })

        res.status(200).json({
            message: "All musics",
            videos
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

const CREATE_ONE = async (req, res) => {
    try {
        const {title, author, url} = req.body

        if (!(title || author || url)) {
            throw new Error("Please enter all keys!")
        }

        const data = await musicsService.createMusic({
            title: req.body.title,
            author: req.body.author,
            url: req.body.url
        })

        res.status(200).json({
            message: "Music created!",
            data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

const DELETE_MUSIC = async (req, res) => {
    try {
        const {_id} = req.params

        if (!_id) {
            throw new Error("Please enter all keys!")
        }

        const data = await musicsService.deleteMusic({
            _id: req.params._id
        })

        if(!data) {
            throw new Error("Music not deleted!")
        }

        res.status(200).json({
            message: "Music created!",
            data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export default {
    GET_ALL,
    CREATE_ONE,
    DELETE_MUSIC,
}