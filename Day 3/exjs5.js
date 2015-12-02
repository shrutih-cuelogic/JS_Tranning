var arr =  ['0000','0100','1100','1000','1100'];
function arrayTo2DArray2 (arr) {
  splitarr = [];
  for (i=0;i<arr.length;i++){
    splitarr.push(arr[i].split(''));
    console.log(splitarr);
    splitarr.slice(0, 5);
    console.log(splitarr);
  }
}
arrayTo2DArray2(arr);