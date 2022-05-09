//author: amanda auld
//date: 03.31.2022
//public domain

const body = document.querySelector('body');
const imgContainer = document.createElement('div');

function displaying(imgUrl, elt) {

//apend image container
body.appendChild(imgContainer);

//img element
imgContainer.innerHTML = `<img src='$(imgUrl)'>`;

//styles
imgContainer.classList.add('displayMe');

//positioning
imgContainer.style.top = (elt.offsetTop + 40) + 'px';

//position the image relatively
imgContainer.style.left = elt.offsetLeft + 'px';

}
