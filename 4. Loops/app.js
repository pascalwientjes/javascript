// Hieronder zie je een Array gevuld met objecten die informatie bevatten over tweedehands auto's denk aan martkplaats data ofzo

var cars = [
	{brand: 'Volvo', model: 'V40', year: 1988, color: 'blauw'},
	{brand: 'Mercedes', model: 'e series', year: 2013, color: 'wit'},
	{brand: 'BMW', model: 'M3', year: 2005, color: 'blauw'},
	{brand: 'Volkswagen', model: 'Golf', year: 2014, color: 'zwart'},
	{brand: 'Audi', model: 'A7', year: 2001, color: 'oranje'},
	{brand: 'Peugeot', model: '206', year: 2003, color: 'paars'},
	{brand: 'Citroën', model: 'Picasso', year: 2001, color: 'roze'},
	{brand: 'Volkswagen', model: 'Polo', year: 2006, color: 'wit'},
	{brand: 'Audi', model: 'A3', year: 1995, color: 'zwart'},
	{brand: 'Audi', model: '80', year: 1982, color: 'wit', oldtimer: true},
	{brand: 'Audi', model: 'A4', year: 1996, color: 'fluoriserend geel'},
];


// Laten we een functie maken die een lijst weer geeft van Alle auto modellen

function createCarsList(carData) {

	var html = '<ul>'; // een lijst begint natuurlijk met een ul element

	for(var i = 0; i < carData.length; i++) {
		// binnen deze for loop maken we een nieuwe variabele i 
		// ver volgens kijken we of i op dit moment in de loop kleiner is dan de hoeveelheid objecten in de array
		// en als laatste tikken we i 1 omhoog en voeren we de code binnen de for loop uit

		html+= '<li>' + carData[i].model + '</li>'; // we voegen hier dus wat aan de html variabele toe doormiddel van += 
													// i wordt steeds 1 omhoog getikt daarom komen we dus steeds 1 object verder in de array waar we dan vervolgens het model uit halen
	}

	html += '</ul>';

	return html;
}


document.write(createCarsTable(cars)) // en vervolgens nog even de functie aanroepen en de cars data er aan meegeven


// Laten we het nu iets uitgebreider maken


function createCarsTable(carData) {
	var html = '<table><thead><tr><td>Merk</td><td>Model</td><td>Bouwjaar</td><td>Kleur</td><td>Oldtimer</td></tr></thead><tbody>';

	for(var i = 0; i < carData.length; i++) {
		html+= "<tr>";
		html+= "<td>" + carData[i].brand + "</td>";
		html+= "<td>" + carData[i].model + "</td>";
		html+= "<td>" + carData[i].year + "</td>";
		html+= "<td>" + carData[i].color + "</td>";

		if(carData[i].oldtimer) {
			html+= "<td>Dit is een oldtimer en was daarom belasting vrij</td>";
		} else {
			html+= '<td></td>'
		}

		html+= "</tr>";
	}


	html+= '</tbody></table>';

	return html;
}