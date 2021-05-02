let btn = document.getElementById('submit');
let input = document.getElementById('fizzbuzz-num');
let reset = document.getElementById('reset');
const div = document.getElementById('fizzbuzz-container');
let paraList = div.getElementsByTagName('p');


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let inputValue = parseInt(input.value);
    fizzbuzz(inputValue);
    e.stopPropagation();
});

reset.addEventListener('click',(e)=> {
   div.innerHTML = '';
});


function fizzOrBuzz(num){
    if(num % 3 === 0 && num % 5 === 0){
        write('fizzbuzz');
    } else if(num % 3 === 0){
        write('fizz');
    }else if(num % 5 === 0){
        write('buzz');
    }else{
        write(num);
    }
}

function write(word){
    let para = document.createElement('p');
    para.innerHTML = word;
    if(word === 'fizzbuzz'){
        para.setAttribute('class','fizzbuzz');
    }else if(word === 'fizz'){
        para.setAttribute('class','fizz');
    }else if(word === 'buzz'){
        para.setAttribute('class','buzz');
    }
    div.appendChild(para);
}

function fizzbuzz(num){
    for(let i = 0; i < num; i++ ){
        fizzOrBuzz(i+1);
    }
}



