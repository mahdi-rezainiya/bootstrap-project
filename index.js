const bootstrap = require("bootstrap");

const tooltips = document.querySelectorAll('.tt');
tooltips.forEach(t =>{
    new bootstrap.Tooltip(t)
})
