var length = 10;
function fn() {
console.log(this.length);
}
var obj = {
length: 5,
method: function(fn) {
fn.call();  // 10
arguments[0].call(); // 2
}
};

obj.method.call(obj,fn, 1); // argument = [fn,1]