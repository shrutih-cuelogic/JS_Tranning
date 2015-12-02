Number.prototype.floatMethod = function() {
    return parseFloat(this).toFixed(2);
};
function convert_float() {
    var n = 60.00;
   console.log(n.floatMethod());
}convert_float(n);
