import express from "express"
import routes from "./routes.js"
import mongodb from "./config/mongodb.config.js"
import "./config/dotenv.config.js"


const PORT = Number.parseInt(process.env.SERVER_PORT || "")

!async function () {

    mongodb.open()
    const app = express()

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(routes)


    app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
} ()