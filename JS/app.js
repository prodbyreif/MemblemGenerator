// const btn = document.querySelector(`#button`);
// const output = document.querySelector(`#output`);
// // const min = document.querySelector(`#min`).textContent;
// const max = document.querySelector(`#max`);

// btn.addEventListener(`click`, (min, max)=>{
//     console.log(min)
// });


// console.log (Math.floor(Math.random()*10) + 20);

function generator() {
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let output = document.getElementById('output');
    let form = document.getElementById(`formContainer`);
    let loader = document.getElementById(`loader`);
    function randomNum (max, min){
        form.classList.add(`hide`)
        let rando = Math.floor(Math.random()*((max+1)-min)) + min
        if(!rando){
            alert("You need to enter numbers Memblem!");
            location.reload();
            return false;
        }else{
            loader.classList.add(`hide`);
            return rando;
        }

    }

    // output.textContent = `${randomNum(max, min)}`;  
    
    output.style.opacity = 0;
setTimeout(function(){ 
    // Load new content
    output.textContent = `${randomNum(max, min)}`;
    // Fade in
    output.style.opacity = 1;
},700);
    };

function unHide(){
        let form = document.getElementById(`formContainer`);
        let output = document.getElementById('output');
        form.classList.remove(`hide`);
        let loader = document.getElementById(`loader`);
        loader.classList.remove(`hide`);
        document.getElementById('max').value = ``;
        document.getElementById('min').value = ``;
        output.textContent = ``;
    };

let subButton = document.getElementById('generate');
let resetButton = document.getElementById('reset');

subButton.addEventListener('click', generator, false); 

resetButton.addEventListener('click', unHide, false); 

