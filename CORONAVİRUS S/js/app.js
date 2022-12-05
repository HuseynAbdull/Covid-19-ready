function GetCountries(){
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'e2f5ba0652mshcbb285032ce9908p1f2730jsnd1c4e16c9346',
			'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
		}
	};
	
	fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api',options)
		.then(response => response.json())
		.then(data => {
			let html = '';
			data.countries_stat.forEach(ct =>{
				html+= `
				<ul class="list-group list_ct">
  					<li class="list-group-item">Country : ${ct.country_name}</li>
 					<li class="list-group-item">Active cases : ${ct.active_cases}</li>
 					<li class="list-group-item">Cases : ${ct.cases}</li>
  					<li class="list-group-item">Death : ${ct.deaths}</li>
  					<li class="list-group-item">New cases : ${ct.new_cases}</li>
				</ul>
				`
			})
			document.getElementById('Table').innerHTML =html;
		})
		// .catch(error => console.log(error));
};

GetCountries();

function Search(){
	let value =document.querySelector('.inp input').value;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'e2f5ba0652mshcbb285032ce9908p1f2730jsnd1c4e16c9346',
			'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
		}
	};
	
	fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api',options)
		.then(response => response.json())
		.then(data => {
			let html = '';
			data.countries_stat.forEach(ct =>{
				let search_value =ct.country_name.toLowerCase().includes(value.toLowerCase());
				if(search_value){
					html+= `
				<ul class="list-group list_ct">
  					<li class="list-group-item">Country : ${ct.country_name}</li>
 					<li class="list-group-item">Active cases : ${ct.active_cases}</li>
 					<li class="list-group-item">Cases : ${ct.cases}</li>
  					<li class="list-group-item">Death : ${ct.deaths}</li>
  					<li class="list-group-item">New cases : ${ct.new_cases}</li>
				</ul>
				`
				}
				
			})
			document.getElementById('Table').innerHTML =html;
		})
		// .catch(error => console.log(error));
};

Search();





