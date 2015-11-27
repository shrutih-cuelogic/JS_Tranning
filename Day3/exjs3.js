str1 = prompt("Enter 1st string : ");
str2 = prompt("Enter 2nd string which is substring of 1st : ");
function countString(str1, str2){
    var count=0;
    var index=str1.indexOf(str2);
    while(index!=-1){
        count++;
        index=str1.indexOf(str2,index+1);
    }
    last_str_index = str1.lastIndexOf(str2);
    
  return {count,last_str_index};
}
countString(str1,str2);