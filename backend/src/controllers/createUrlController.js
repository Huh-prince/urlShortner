import ShortURL from "../models/shortURLModel.js";
import { nanoid } from "nanoid";
import { idGenerator } from "../utils/idGenerator.js";



export const createShortUrl = function (req, res){
  const { url } = req.body;
  const shortURL = idGenerator(7);
  const newURL = new ShortURL({
    originalURL: url,
    shortURL,
  });
  newURL.save();
  res.json({ shortURL : `http://localhost:5000}/${shortURL}`});
}