let inc = document.getElementById('increase')
let dec = document.getElementById('decrease')
let num = document.getElementById('number')

let counter = 0

inc.addEventListener('click', () =>{
    counter += 1;
    num.innerHTML = counter;
});

dec.addEventListener('click', () =>{
    if (counter != 0){
        counter--
    }
    num.innerHTML = counter;
});