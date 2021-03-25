module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne,
   };
   

   //Database
   const menus = [
    {text: 'Falafel', new: true},
    {text: 'Chicken', new: false},
    {text: 'Beef', new: false},
    {text: 'Lamb', new: false},
   ];
   

   //Module Functions
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