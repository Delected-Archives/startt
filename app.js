/*
  * app.js
  *
  * right now all this does is filter and query searches
*/

const search = document.getElementById('search-button')

search.addEventListener('keyup', (event) => {
    event.preventDefault()
	const val = search.value.replace('+', '%2B')
    if (event.keyCode === 13 && val.trim() != '') {
		window.open('https://duckduckgo.com/?q=' + val,
		'_self')
    }
})