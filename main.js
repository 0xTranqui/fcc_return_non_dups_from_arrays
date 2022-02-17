function diffArray(arr1, arr2) {
  let newArr = [];
  
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


/* do two checks. first for loop for first array to see if any item in it ins't included in the other array. if its not, then add it to new array
then do same for the toher array, adding it to the same new array
done*/
