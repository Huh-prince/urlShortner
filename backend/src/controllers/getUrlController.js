import ShortURL from "../models/shortURLModel.js";



export const getUrl = async function (req, res) {
  const {id} = req.params;
  const url = await ShortURL.findOne({ shortURL: id });
  if (url) {
    res.redirect(url.originalURL);
  } else {
    res.status(404).send("URL not found, check for typing errors");
  }
}