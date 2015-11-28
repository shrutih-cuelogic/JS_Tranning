var UNIX_timestamp = prompt("Enter unit time stamp: ")

function timeConverter(UNIX_timestamp){
 var a = new Date(UNIX_timestamp*1000);
 console.log(a);
    var year = a.getUTCFullYear();
    var month = a.getUTCMonth();
    var date = a.getUTCDate();
    var hour = a.getUTCHours();
    var min = a.getUTCMinutes();
    var sec = a.getUTCSeconds();
    var time = year + month + date + hour + min + sec ;
    console.log(time);
    return time
}timeConverter(UNIX_timestamp)
//console.log(timeConverter.getTime());
