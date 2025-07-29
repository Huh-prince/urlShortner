import express from "express";
import detenv from "dotenv/config";
import connectDB from "./src/config/database.js";
import createurl from './src/routes/createurl.js'
import geturl from './src/routes/getURL.js'
const app = express();
// middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/',(req,res)=>{
    res.status(200).json({
        success: true,
        message: 'Welcome to URL Shortener API'
    })
})
app.use("/create", createurl)    // creating short url
app.use("/", geturl)              //geting or redirecting to url

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
