var trgt = {};
var src = {
    a: 1,
    b: 2
};

function copyobj(src, trgt) {
    trgt = Object.assign(trgt, src);
    return trgt;

}
copyobj(src, trgt);
console.log(trgt);
