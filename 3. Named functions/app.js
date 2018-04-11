// Net als in elke programmeer taal kun je zelf functies maken om taken die je anders continu zou herhalen af te korten

// deze functies kun je een naam geven om ze later eenvoudig aan te roepen

// De conventie voor de naamgeving is dat je camel casing gebruikt dit houd in dat je begint met een kleine letter en vervolgens elk volgende woord een hoofdletter gebruikt

function returnNumber() {
	return 4;

	// return geeft terug wat je er achter zet 
}

document.write('dit is wel een cool nummer ', returnNumber())




// Over het algemeen wil je vrij vaak iets doen met waardes en niet een vast nummer terug geven daarvoor kun je parameters gebruiken.


function rekenOmtrekVanEenCircelUit(straal) {
	// hierboven geef ik een parameter op met de naam straal dit parameters kun je zelf een naam geven die het best omschrijft welke invoer je daar verwacht voor je functie


	var omtrek = 2 * straal * Math.PI; // hier rekenen we de straal om naar omtrek (volgens mij klopt dit ook nog toch Patrick?)
	

	return omtrek; // en vervolgens geven we de omtrek ook weer terug
}

// document.write('de omtrek van een circle met een straal van 5cm = ', rekenOmtrekVanEenCircelUit(5), 'cm')