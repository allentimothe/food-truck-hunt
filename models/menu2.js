
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
}, {
  timestamps: true,
});

const menu2Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  drinks: String,
  // cast: [String],
  nowOpen: {
    type: Boolean,
    default: false
  },
  reviews: [reviewSchema],
  store: [{type: Schema.Types.ObjectId, ref: 'Location'}]
}, {
  timestamps: true,
}, {
  locations: {

  }
});

module.exports = mongoose.model("Menu2", menu2Schema);