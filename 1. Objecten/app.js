// Javascript Objecten zijn containers die data bevatten

// Objecten hebben een key en een value

// Je kunt in princiepe alles in een object stoppen strings, integers, booleans zelfs functies


var person = {
	firstName: 'Henk',
	lastName: 'Doelen',
	hasKids: true,
	age: 32,
	eyeColor: "blauw",
	fullName: function() {return this.firstName + " " + this.lastName;}
};


// Een waarde halen uit een object doe je eenvoudig door het benoemen van het object en vervolgens de key

document.write(person.firstName);

// wil je de functie er uit halen moet je de key ook als een functie noteren 

// document.write(person.fullName())