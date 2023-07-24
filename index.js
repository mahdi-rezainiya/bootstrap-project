const bootstrap = require("bootstrap");

const tooltips = document.querySelectorAll('.tt');
tooltips.forEach(t =>{
    new bootstrap.Tooltip(t)
})

// bootstrap own JS code 

// document.addEventListener('mouseenter', function() {
//     const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
//     const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
// });
