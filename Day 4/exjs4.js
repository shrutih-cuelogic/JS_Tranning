Number.prototype.Floatmethod = function() {
    return parseFloat(this).toFixed(2);
};
function convfloat() {
    var n = 60.00;
   console.log(n.Floatmethod());
}convfloat(n);
