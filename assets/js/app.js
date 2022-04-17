var counter = 0;

function increase(){
    counter++;
    document.getElementById("number").innerHTML = counter;
}

function decrease(){
    if (counter != 0) {
        counter--;
    }
    document.getElementById("number").innerHTML = counter;
}  