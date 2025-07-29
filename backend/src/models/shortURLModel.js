import mongoose from "mongoose";

const shortURL = new mongoose.Schema({
  originalURL: { 
    type: String, 
    required: true 
  },
  shortURL: { 
    type: String, 
    required: true, 
    unique: true, 
    index: true 
  },
  clicks: { 
    type: Number, 
    default: 0 
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  }
});


const ShortURL = mongoose.model('ShortURL', shortURL);
export default ShortURL;  //export the model