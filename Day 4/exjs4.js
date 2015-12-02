Number.prototype.intMethod = function() {
    return parseInt(this);
};
function convert_int() {
    var a = 10.000;
   console.log(a.intMethod());
}convert_int(a);
