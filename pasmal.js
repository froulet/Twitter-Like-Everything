var inputs = document.querySelectorAll(".HeartAnimationContainer");
var i = 0, howManyTimes = inputs.length;
function f() {
    i=i+2;
    inputs[i].click();
    if( i < howManyTimes ){
        setTimeout( f, 3000);
    }
}
f();