function swapArrayValue(arr, index1, index2){
    const temp = arr[index1];
    arr[index1]= arr[index2];
    arr[index2] = temp;
    return arr;
     
}

function selectionSort(arr){
console.log("================Selection Sort============");
console.log("Input :- ", arr);

//suppose we have an array [21,34,1,4,34,87,3] 
// we will have three pointer i, j, n(length of Array)
// your i,n will define your processed array, array before i will be get sorted in each loop of i
// [21,34,1,4,34,87,3] ,   i->21, j->34, n=>3, minimum number will be through linear comparison will be 1 at position 2, Swap your i -> 21 to min->1
// [1,34,21,4,34,87,3] ,   i->34, j->21, n=>3, minimum number will be through linear comparison will be 3 at position 6, Swap your i -> 34 to min->3
// [1,3,21,4,34,87,34] ,   i->21, j->4, n=>3, minimum number will be through linear comparison will be 4 at position 3, Swap your i -> 21 to min->4
// [1,3,4,21,34,87,34]  repeat the same for each loop

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