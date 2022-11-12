const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74c7b64302msh6e2f03f16df29dbp16af23jsna1e36d6e6ad2',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));