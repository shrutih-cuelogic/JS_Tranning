/*arr =  ['0000','0100','1100','1000','1100','0000'];
newarr = [];
count = 0 ;
splitarr =[];
active = 0;
for (i=0;i<arr.length;i++){
  splitarr.push(arr[i].split(''));
}
console.log(splitarr);
countele = splitarr[0].length;
for(i=0;i<splitarr.length;i++)
{
  if(i==0)
  {
    newarr.push([]);
  }
  if(i<=arr.length)
  {
    newarr[count].push(splitarr[i][0]);
  }
  if(i==splitarr.length-1 && count<countele-1)
  {
    newarr.push([]);
    count++;
    i=0;
  }
  console.log(newarr);
}
console.log(newarr);*/


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