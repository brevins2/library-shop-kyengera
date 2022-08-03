const searchBar = document.forms['searchBarId'].querySelector('searched');

searchBar.addEventListener('keyup', function(e) {
    const searchedInput = e.target.value.toLowerCase();
    const divPhones = list.getElementsByTagName('div');

    Array.from(divPhones).forEach(function(divPhone) {
        const title = divPhone.firstElementChild.textContent;

        if (title.toLowerCase().indexOf(term) != -1) {
            divPhone.style.display = 'block';
        } else {
            divPhone.style.display = 'none'
        }
    })
})


$filter('filter')(array, expression, comparator, anyPropertyKey);