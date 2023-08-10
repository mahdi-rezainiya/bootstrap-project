const SearchIcon = document.getElementById('basic-addon1');
const SearchInput = document.getElementById('input-addon1');

SearchIcon.addEventListener('click' , e  =>{
    SearchIcon.style.display = 'none';
    SearchInput.style.display = 'block'
    SearchIcon.style.border = '1px solid white';
    SearchInput.style.border = '1px solid white'
    e.preventDefault()
})