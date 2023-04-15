const removeFromArray = function(array) {
    let index;
   // delete array[index];
   // return array.splice(index, 1);
   //return array;

   for (i = 1; i < arguments.length; i++) {
    if (!array.includes(arguments[i])) continue;
    index = array.indexOf(arguments[i]);
    array = array.slice(0,index).concat(array.slice(index + 1));
   }
   return array;

    
};



// Do not edit below this line
module.exports = removeFromArray;
