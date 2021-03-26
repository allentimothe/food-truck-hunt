const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne,
   };

const reviewSchema = new Schema({
  content: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  }
}, {
  timestamps: true,
});

const menuSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  drinks: String,
  store: String,
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

module.exports = mongoose.model("Menu", menuSchema);

//    //Database
   const menus = [
    {text: 'Falafel', new: true},
    {text: 'Chicken', new: false},
    {text: 'Beef', new: false},
    {text: 'Lamb', new: false},
   ];
   

//    //Module Functions
   function getAll(id) {
    return menus;
   }
   function getOne(id) {
    return menus[id];
  }
  function create(menu) {
    menus.push(menu);
   }

   function deleteOne(id) {
    menus.splice(id, 1);
   }

   function updateOne(id, update) {
    menus.splice(id, 1, update);
   }

