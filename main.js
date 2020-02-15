// Local Storage
// When ever a key is changed then a new entry is made into the local storage key value table
localStorage.setItem('lunch','cereals');
console.log(localStorage.getItem('breakfast'))

//Session Storage
// When ever a key is changed then a new entry is made into the session storage key value table
sessionStorage.setItem('dinner','Eggs');
console.log(sessionStorage.getItem('dinner'))


// Remove particular item
localStorage.removeItem('lunch')

// Removes all the items
// localStorage.clear()


//Cookies
document.cookie="hello=trdue";
document.cookie= "doSomethingOnlyOnce=true"

