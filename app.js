let name = document.getElementById('name');
let email = document.getElementById('email');
let address = document.getElementById('address');
let phoneNumber = document.getElementById('phoneNumber');
let personImage = document.getElementById('personImage');

let cardName = document.getElementById('cardName');
let cardEmail = document.getElementById('cardEmail');
let cardAddress = document.getElementById('cardAddress');
let cardPhoneNumber = document.getElementById('cardPhoneNumber');
let cardPersonImage = document.getElementById('cardPersonImage');


name.addEventListener('change', function () {
    cardName.innerText = name.value;
})
email.addEventListener('change', function () {
    cardEmail.innerText = email.value;
})
address.addEventListener('change', function () {
    cardAddress.innerText = address.value;
})
phoneNumber.addEventListener('change', function () {
    cardPhoneNumber.innerText = phoneNumber.value;
})

personImage.addEventListener('change', function () {
    cardPersonImage.src = URL.createObjectURL(personImage.files[0]);
})









