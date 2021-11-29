const modal = document.querySelector('.modal');
const buttonCart = document.querySelector('.button_cart');
const buttonClosed = document.querySelector('.button--closed');
const cancelButton = document.getElementById('.cancelButton')
const countsSpan = document.querySelector('.count');
const countMinbutton = document.querySelector('.count-min');
const countMPlusButton  = document.querySelector('.count-min');

buttonCart.addEventListener('click', toggLeModa)
buttonClosed.addEventLinstener('click', toggleModal)
cancelButton.addEventListener('clicl', toggleModal)
modal.addEventListener('click', removeModal)

countMinbutton.addEventListener('.click', contentMinus);
countPlusButton.addEventLinstener('click', contentPlus);



function toggleModal() {
    modal.classlist.toggle('open');
}


function toggleModal(event){
if (event.target.classlist === modal.classList)  {
    modal.classlist.toggle('open');
}

} 

console.log(countSpan.textContent);
//console.log(buttonCart);
//console.log(buttonClosed);