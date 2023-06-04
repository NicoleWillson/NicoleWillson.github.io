//Return a new 1 dimensional array like, [1,2,3,4]
function arrayFlattener(arr) {
    let local_arr = [];
    let arr_copy = arr.concat([])
    let arr_len = arr.length;
    for (let i=0; i<arr_len; i++){
      if (Array.isArray(arr_copy[0])){
        let really_loc_arr = arrayFlattener(arr_copy.shift())
        local_arr = local_arr.concat(really_loc_arr);
      } else {
        local_arr = local_arr.concat(arr_copy.shift())
      }
    }
    return local_arr;
  }
  //your code here
  //uncomment next line one by one, then check the console for results
  console.log(arrayFlattener([1,[2,3],4,5]))