/**
 * Returns name day for a inputted date.
 * @param date JavaScript date.
 * @return Name day or empty string.
 */
function getName(date) {
	var month=date.getMonth();
	var day=date.getDate()-1;

	if((month<names.length) && (day<names[month].length)) {
		return names[month][day];
	}
	else {
		return null;
	}
}

/**
 * Returns name day for today.
 * @return Name day.
 */
function todayName() {
	var today=new Date();
	var name=getName(today);

	if(name!=null) {
		return name;
	}
	else {
		return null;
	}
}

/**
 * Returns name day for a inputted date.
 * @param day Number of a day.
 * @param month Number of a month.
 * @return Name day.
 */
function nameDay(day, month) {
	if((day==null||day==0) && (month==null||month==0)) {
		var date=new Date();
		day=date.getDate();
		month=date.getMonth()+1;
	}

	if((month<=names.length) && (day<=names[month-1].length)) {
		return names[month-1][day-1];
	}
	else {
		return null;
	}
}


var leden=new Array("Nový rok -> Den obnovy samostatného českého státu", "Karina", "Radmila", "Diana", "Dalimil", "Tři králové", "Vilma", "Čestmír",
	"Vladan", "Břetislav", "Bohdana", "Pravoslav", "Edita", "Radovan", "Alice", "Ctirad",
	"Drahoslav", "Vladislav", "Doubravka", "Ilona", "Běla", "Slavomír", "Zdeněk", "Milena",
	"Miloš", "Zora", "Ingrid", "Otýlie", "Zdislava", "Robin", "Marika");
var unor=new Array("Hynek", "Nela", "Blažej", "Jarmila", "Dobromila", "Vanda", "Veronika", "Milada",
	"Apolena", "Mojmír", "Božena", "Slavěna", "Věnceslav", "Valentýn", "Jiřina", "Ljuba",
	"Miloslava", "Gizela", "Patrik", "Oldřich", "Lenka", "Petr", "Svatopluk", "Matěj",
	"Liliana", "Dorota", "Alexandr", "Lumír", "Horymír");
var brezen=new Array("Bedřich", "Anežka", "Kamil", "Stela", "Kazimír", "Miroslav", "Tomáš", "Gabriela",
	"Františka", "Viktorie", "Anděla", "Řehoř", "Růžena", "Matylda, Růt", "Ida", "Elena, Herbert",
	"Vlastimil", "Eduard", "Josef", "Světlana", "Radek", "Leona", "Ivona", "Gabriel",
	"Marián", "Emanuel", "Dita", "Soňa", "Taťána", "Arnošt", "Kvido");
var duben=new Array("Hugo", "Erika", "Richard", "Ivana", "Miroslava", "Vendula", "Heřman, Hermína", "Ema",
	"Dušan", "Darja", "Izabela", "Julius", "Aleš", "Vincenc", "Anastázie", "Irena",
	"Rudolf", "Velérie", "Rostislav", "Marcela", "Alexandra", "Evženie", "Vojtěch", "Jiří",
	"Marek", "Oto", "Jaroslav", "Vlastislav", "Robert", "Blahoslav");
var kveten=new Array("Svátek práce", "Zikmund", "Alexej", "Květoslav", "Klaudie", "Radoslav", "Stanislav", "Den vítězství",
	"Ctibor", "Blažena", "Svatava", "Pankrác", "Servác", "Bonifác", "Žofie", "Přemysl",
	"Aneta", "Nataša", "Ivo", "Zbyšek", "Monika", "Emil", "Vladimír", "Jana",
	"Viola", "Filip", "Valdemar", "Vilém", "Maxmilián a Maxim", "Ferdinand", "Kamila");
var cerven=new Array("Laura", "Jarmil", "Tamara", "Dalibor", "Dobroslav", "Norbert", "Iveta", "Medard",
	"Stanislava", "Gita", "Bruno", "Antonie", "Antonín", "Roland", "Vít", "Zbyněk",
	"Adolf", "Milan", "Leoš", "Květa", "Alois", "Pavla", "Zdeňka", "Jan",
	"Ivan", "Adriana", "Ladislav", "Lubomír", "Petr a Pavel", "Šárka");
var cervenec=new Array("Jaroslava", "Patricie", "Radomír", "Prokop", "Cyril a Metoděj -> Den slovanských věrozvěstů", "Den upálení mistra Jana Husa",
	"Bohuslava", "Nora", "Drahoslava", "Libuše, Amálie", "Olga", "Bořek", "Markéta", "Karolína", "Jindřich",
	"Luboš", "Martina", "Drahomíra", "Čeněk", "Ilja", "Vítězslav", "Magdaléna", "Libor",
	"Kristýna", "Jakub", "Anna", "Věroslav", "Viktor", "Marta", "Bořivoj", "Ignác");
var srpen=new Array("Oskar", "Gustav", "Miluše", "Dominik", "Kristián", "Oldřiška", "Lada", "Soběslav",
	"Roman", "Vavřinec", "Zuzana", "Klára", "Alena", "Alan", "Hana", "Jáchym",
	"Petra", "Helena", "Ludvík", "Bernard", "Johana", "Bohuslav", "Sandra", "Bartoloměj",
	"Radim", "Luděk", "Otakar", "Augustýn", "Evelína", "Vladěna", "Pavlína");
var zari=new Array("Linda, Samuel", "Adéla", "Bronislav", "Jindřiška", "Boris", "Boleslav", "Regína", "Mariana",
	"Daniela", "Irma", "Denisa", "Marie", "Lubor", "Radka", "Jolana", "Ludmila",
	"Naděžda", "Kryštov", "Zita", "Oleg", "Matouš", "Darina", "Berta", "Jaromír",
	"Zlata", "Andrea", "Jonáš", "Václav -> Den české státnosti", "Michal", "Jeroným");
var rijen=new Array("Igor", "Olívie, Galina, Oliver", "Bohumil", "František", "Eliška", "Hanuš", "Justýna", "Věra",
	"Štafan, Sára", "Marina", "Andrej", "Marcel", "Renáta", "Agáta", "Tereza", "Havel",
	"Hedvika", "Lukáš", "Michaela", "Vendelín", "Brigita", "Sabina", "Teodor", "Nina",
	"Beáta", "Erik", "Šarlota, Zoja, Zoe", "Den vzniku samostatného československého státu", "Silvie", "Tadeáš", "Štěpánka");
var listopad=new Array("Felix", "Dušičky", "Hubert", "Karel", "Miriam", "Liběna", "Saskie", "Bohumír",
	"Bohdan", "Evžen", "Martin", "Benedikt", "Tibor", "Sáva", "Leopold", "Otmar",
	"Mahulena -> Den boje za svobodu a demokracii", "Romana", "Alžběta", "Nikola", "Albert", "Cecílie", "Klement", "Emílie",
	"Kateřina", "Artur", "Xenie", "René", "Zina", "Ondřej");
var prosinec=new Array("Iva", "Blanka", "Svatoslav", "Barbora", "Jitka", "Mikuláš", "Ambrož, Benjamín", "Květoslava",
	"Vratislav", "Julie", "Dana", "Simona", "Lucie", "Lýdie", "Radana, Radan", "Albína",
	"Daniel", "Miloslav", "Ester", "Dagmar", "Natálie", "Šimon", "Vlasta", "Adam a Eva -> Štědrý den",
	"Boží hod - 1.svátek vánoční", "Štěpán - 2.svátek vánoční", "Žaneta", "Bohumila", "Judita", "David", "Silvestr");

// A two-dimensional array of holidays, which provides holidays for the entire year.
var names=new Array(leden, unor, brezen, duben, kveten, cerven, cervenec, srpen, zari, rijen, listopad, prosinec);

