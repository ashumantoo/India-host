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

console.log(selectedPlanButtons);

for (let i = 0; i < selectedPlanButtons.length; i++) {
    selectedPlanButtons[i].addEventListener('click', function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

noButton.addEventListener('click',function(){
    modal.style.display = 'none';
    backdrop.style.display= 'none';
})


// backdrop.style.display = 'block';
