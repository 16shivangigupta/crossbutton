var cross = document.querySelector('span');
var card = document.querySelector('#card');
var button = document.querySelector('button');

cross.addEventListener('click',function(){
    card.style.display = "none";
})

button.addEventListener('click',function(){
    card.style.display = "initial";
})