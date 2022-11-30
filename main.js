var modal = document.getElementById('modalPopup');
var modalBtn = document.getElementById('hour');
var closeBtn = document.getElementById('close');


var modal1 = document.getElementById('modalPopup1');
var modalBtn1 = document.getElementById('web');
var closeBtn1 = document.getElementById('close1');

closeBtn.addEventListener('click', closePopup);
window.addEventListener('click', clickOutside);

function hourBtn() {
    modal.style.display = 'block';
    console.log("correct");
}
function closePopup() {
    modal.style.display = 'none';
    console.log("correct");
}

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
        console.log("correct");
    }
}

closeBtn1.addEventListener('click', closePopup1);
window.addEventListener('click', clickOutside1);

function webBtn() {
    modal1.style.display = 'block';
    console.log("correct");
}
function closePopup1() {
    modal1.style.display = 'none';
    console.log("correct");
}

function clickOutside1(e) {
    if (e.target == modal1) {
        modal1.style.display = 'none';
        console.log("correct");
    }
}

function Instagram() {
    window.location.href = 'https://www.instagram.com/';

}
function FaceBook() {
    window.location.href = 'https://www.facebook.com/';
}