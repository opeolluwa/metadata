document.querySelector("#navigation")?.addEventListener("click", (e) => {
    e.stopPropagation();
    navigation.classList.toggle("show");
    // alert("fool")
});

//show navigation
document.querySelector("#nav-btn")?.addEventListener("click", function () {
    document.querySelector("#navigation")?.classList.toggle("show");
});


document.querySelector("#nav-btn")?.addEventListener("click", function () {
    document.querySelector("#account aside")?.classList.toggle("show");
});

document.querySelector("#account aside")?.addEventListener("click", function () {
    document.querySelector("#account aside")?.classList.toggle("show");
});
//show account dropdown
document.querySelector("#account-dropdown").addEventListener("click", function () {
    document.querySelector("#account-dropdown div.dropdown-menu").classList.toggle("show");
});

//show legal options
document.querySelector("#legal-dropdown").addEventListener("click", function () {
    document.querySelector("#legal-dropdown div.dropdown-menu").classList.toggle("show");
});


const togglePasswordButton = document.querySelector('#togglePassword');
const password = document.querySelector('input[name="password"]');
togglePasswordButton.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});