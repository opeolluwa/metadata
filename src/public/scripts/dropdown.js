//show account dropdown
document.querySelector("#account-dropdown").addEventListener("click", function () {
    document.querySelector("#account-dropdown div.dropdown-menu").classList.toggle("show");
});

//show legal options
document.querySelector("#legal-dropdown").addEventListener("click", function () {
    document.querySelector("#legal-dropdown div.dropdown-menu").classList.toggle("show");
});

//hide dropdown on click outside
// window.addEventListener("click", function (event) {
//     if (!event.target.matches(".with-dropdown")) {
//         var dropdowns = document.getElementsByClassName("dropdown-menu");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains("show")) {
//                 openDropdown.classList.remove("show");
//             }
//         }
//     }
// })