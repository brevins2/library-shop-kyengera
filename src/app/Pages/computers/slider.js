const searchBar = document.querySelector('#form1');
// .forms['searchBarId']

searchBar.addEventListener('keyup', function(e) {
    const searchedInput = e.target.value.toLowerCase();
    const divComputers = list.getElementsByTagName('div');

    Array.from(divComputers).forEach(function(divPComputer) {
        const title = divPComputer.firstElementChild.textContent;

        if (title.toLowerCase().indexOf(term) != -1) {
            divPComputer.style.display = 'block';
        } else {
            divPComputer.style.display = 'none'
        }
    })
})