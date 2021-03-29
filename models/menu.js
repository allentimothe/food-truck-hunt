const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//   content: String,
//   rating: {
//     type: Number,
//     min: 1,
//     max: 5,
//     default: 5
//   },
// }, {
//   timestamps: true,
// });

const menuSchema = new Schema({
  shift: { 
    type: String, 
    enum: ['Morning', 'Evening', 'Night'],
},
employeeName: {
    type: String,
},
store: {
    type: String,
},
hours: {
    type: Date,
    default: function () {
        return new Date().getFullYear();
    },
}
}, { timestamps: true});
  
//   title: {
//     type: String,
//     required: true,
//   },
//   drinks: String,

//   nowOpen: {
//     type: Boolean,
//     default: false
//   },
//   reviews: [reviewSchema],
//   store: [{type: Schema.Types.ObjectId, ref: 'Location'}]
// }, {
//   timestamps: true,
// }, {
//   locations: {

//   }
// });

module.exports = mongoose.model("Menu", menuSchema);