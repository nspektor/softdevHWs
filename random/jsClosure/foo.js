var base = "this is in f1 in the global namespace";
var x = "x is in the global namespace";
var f2 = function(){
    console.log("this is f2");
};

var f1 = {
    x : "something in the f1 namespace",
    f2 : f2,
    f : function() {
	console.log('this is in f in the f1 namespace');
	console.log('x is ' + x);
	console.log('f1.x is' + f1.x);
	console.log('better way: ' + this.x);
    }
};
var makeIncrementer = function(x){
    var x = 0;
    return function() {
	x = x+1;
	return x;
    }
};

var makeAdder = function(n) {
    var y = 0;
    return function(){
	y = y+n;
	return y;
    }

};
    