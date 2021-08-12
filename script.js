function keys(nums) {
    let display = document.getElementById("display");

    if (display.innerHTML == 0) {
        display.innerHTML = nums;
        
    } else {
        display.innerHTML += nums;
    }
}


function answers() {
    x = eval(display.innerHTML);
    display.innerHTML = x;
}

function clears() {
    display.innerHTML = 0;

}


document.getElementById("one").addEventListener("click", function(){keys(1)})
document.getElementById("two").addEventListener("click", function(){keys(2)})
document.getElementById("three").addEventListener("click", function(){keys(3)})
document.getElementById("four").addEventListener("click", function(){keys(4)})
document.getElementById("five").addEventListener("click", function(){keys(5)})
document.getElementById("six").addEventListener("click", function(){keys(6)})
document.getElementById("seven").addEventListener("click", function(){keys(7)})
document.getElementById("eight").addEventListener("click", function(){keys(8)})
document.getElementById("nine").addEventListener("click", function(){keys(9)})
document.getElementById("zero").addEventListener("click", function(){keys(0)})
document.getElementById("add").addEventListener("click", function(){keys("+")})
document.getElementById("subtract").addEventListener("click", function(){keys("-")})
document.getElementById("divide").addEventListener("click", function(){keys("/")})
document.getElementById("multiply").addEventListener("click", function(){keys("*")})
document.getElementById("decimal").addEventListener("click", function(){keys(".")})

document.getElementById("clear").addEventListener("click", function(){clears()})
document.getElementById("equals").addEventListener("click", function(){answers()})
