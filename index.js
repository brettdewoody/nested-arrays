// Method #1
// Convert the array to a string
// then back to an array
function unNestArrayByString(arr){
  var result;

  if (Array.isArray(arr) && arr.length > 0) {
    result = arr.toString().split(',').concat().map(Number);
  } else {
    result = [];
  }

  return result;
}

// Method #2
// Recursively loop through the array
// pushing non-array items to a result array
function unNestArray(arr, unnested) {

  // Create an array for the unnested array
  var unnested = unnested || [];

  // Loop through the array
  //  If the item is array, recurse
  //  Otherwise push it to the unnested array
  for(var i in arr) {
    if (Array.isArray(arr[i])) {
      unNestArray(arr[i], unnested);
    } else {
      unnested.push(arr[i]);
    }
  }

  // Return the unnested array
  return unnested;

}
