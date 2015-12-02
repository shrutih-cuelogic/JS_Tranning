Number.prototype.Intmethod = function() {
    return parseInt(this);
};
function convint() {
    var a = 10.000;
   console.log(a.Intmethod());
}convint(a);
