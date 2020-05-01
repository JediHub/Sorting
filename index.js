function swapArrayValue(arr, index1, index2){
    const temp = arr[index1];
    arr[index1]= arr[index2];
    arr[index2] = temp;
    return arr;
     
}

function selectionSort(arr){
console.log("================Selection Sort============");
console.log("Input :- ", arr);
const arrLength =  arr.length;

for(let i=0; i < arrLength-1; i++){
  let min_index = i;
  let j = i+1;
   while(j<arrLength){
       if(arr[j]<arr[min_index]){
      min_index = j;
      }
        j++;
   }
  arr = swapArrayValue(arr,i,min_index);
}
  return arr;
}
console.log('output :- ',selectionSort([21,34,1,4,34,87,3]));