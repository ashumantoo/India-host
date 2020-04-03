//================================================================================================
// querySelector just selecte one element with the provided class or id or element etc
// in querySelector parameters we can also pass more than one classes or ids or elements etc
// e.g var backdrop = document.querySelector('.someclass .someOtherClass .anotherSomeOtherClass')
//
// But if you want to selecte all the occurance of the provided class in the dom we can use and it 
// will return an array with the nodelist
//
// var backdrop = document.querySelectorAll('.backdrop') 
//================================================================================================
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectedPlanButtons = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile__nav');


for (let i = 0; i < selectedPlanButtons.length; i++) {
    selectedPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'  //this will actually overwritten the complete class
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
})

if (noButton) {
    noButton.addEventListener('click', closeModal);
}

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});