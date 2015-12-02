var unix_timestamp = prompt("Enter unit time stamp: ")

function convert_unixtime_To_utctime(unix_timestamp) {
    var a = new Date(unix_timestamp * 1000);
    
    var utc_day = new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(),
        a.getUTCSeconds());
    var utc_time = utc_day.getTime();
    return utc_time
}convert_unixtime_To_utctime(unix_timestamp);
console.log("Unix time: ",unix_timestamp);
console.log("UTC timestamp of entered unixtime is: ", convert_unixtime_To_utctime(unix_timestamp));
