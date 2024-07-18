import "dotenv/config";
import express from "express";
import connectDB from "./lib/db.js";
import router from "./router/index.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(
    cors({
        origin: process.env.CLIENT_DOMAIN,
        credentials: true,
    })
);

connectDB();
const port = process.env.PORT;

app.use("/", router);

app.listen(port, () => {
    console.log("Server started on port " + port);
});
