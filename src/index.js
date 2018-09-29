module.exports = function longestConsecutiveLength(array) {
  if(array.length == 0){
    return 0;
  } else if(array.length == 1){
    return 1;
  }

  array.sort((a, b) => a - b);

  let result = 0;
  let count = 1;
  
  for(let i = 1; i < array.length; i++){
    if(array[i] == array[i - 1] + 1){
      count++;
    } else if (array[i] > array[i - 1] + 1){ 
      if (result < count) {
        result = count;
      }

      count = 1;
    }
  }

  return result;
}