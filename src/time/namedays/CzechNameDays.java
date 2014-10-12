package time.namedays;

import java.util.Date;

/**
 * Czech name days.
 * @see <a href="http://en.wikipedia.org/wiki/Name_days_in_the_Czech_Republic">http://en.wikipedia.org/wiki/Name_days_in_the_Czech_Republic</a>
 * @author DJohnny
 */
public class CzechNameDays {
    /**
     * Returns name day for today.
     * @return Name day.
     */
    public static String nameDay() {
       return nameDay(0, 0); 
    }
    
    /**
     * Returns name day for a inputted date.
     * @param day Number of a day.
     * @param month Number of a month.
     * @return Name day.
     */
    public static String nameDay(int day, int month) {
        // Getting the current date
        Date datum=new Date();
        if(day==0 && month==0) {
          day=datum.getDate();
          month=datum.getMonth()+1;
        }
        // Getting the name day
        try {
            return names[month-1][day-1];
        }
        catch(ArrayIndexOutOfBoundsException aioobe) { return "This date doesn't have a name day."; }
    }
    
    static String[] Leden=new String[]{"Nový rok -> Den obnovy samostatného českého státu","Karina","Radmila","Diana","Dalimil","Tři králové","Vilma","Čestmír",
    "Vladan","Břetislav","Bohdana","Pravoslav","Edita","Radovan","Alice","Ctirad",
    "Drahoslav","Vladislav","Doubravka","Ilona","Běla","Slavomír","Zdeněk","Milena",
    "Miloš","Zora","Ingrid","Otýlie","Zdislava","Robin","Marika"};
  static String[] Unor=new String[]{"Hynek","Nela","Blažej","Jarmila","Dobromila","Vanda","Veronika","Milada",
    "Apolena","Mojmír","Božena","Slavěna","Věnceslav","Valentýn","Jiřina","Ljuba",
    "Miloslava","Gizela","Patrik","Oldřich","Lenka","Petr","Svatopluk","Matěj",
    "Liliana","Dorota","Alexandr","Lumír","Horymír"};
  static String[] Brezen=new String[]{"Bedřich","Anežka","Kamil","Stela","Kazimír","Miroslav","Tomáš","Gabriela",
    "Františka","Viktorie","Anděla","Řehoř","Růžena","Matylda, Růt","Ida","Elena, Herbert",
    "Vlastimil","Eduard","Josef","Světlana","Radek","Leona","Ivona","Gabriel",
    "Marián","Emanuel","Dita","Soňa","Taťána","Arnošt","Kvido"};
  static String[] Duben=new String[]{"Hugo","Erika","Richard","Ivana","Miroslava","Vendula","Heřman, Hermína","Ema",
    "Dušan","Darja","Izabela","Julius","Aleš","Vincenc","Anastázie","Irena",
    "Rudolf","Velérie","Rostislav","Marcela","Alexandra","Evženie","Vojtěch","Jiří",
    "Marek","Oto","Jaroslav","Vlastislav","Robert","Blahoslav"};
  static String[] Kveten=new String[]{"Svátek práce","Zikmund","Alexej","Květoslav","Klaudie","Radoslav","Stanislav","Den vítězství",
    "Ctibor","Blažena","Svatava","Pankrác","Servác","Bonifác","Žofie","Přemysl",
    "Aneta","Nataša","Ivo","Zbyšek","Monika","Emil","Vladimír","Jana",
    "Viola","Filip","Valdemar","Vilém","Maxmilián a Maxim","Ferdinand","Kamila"};
  static String[] Cerven=new String[]{"Laura","Jarmil","Tamara","Dalibor","Dobroslav","Norbert","Iveta","Medard",
    "Stanislava","Gita","Bruno","Antonie","Antonín","Roland","Vít","Zbyněk",
    "Adolf","Milan","Leoš","Květa","Alois","Pavla","Zdeňka","Jan",
    "Ivan","Adriana","Ladislav","Lubomír","Petr a Pavel","Šárka"};
  static String[] Cervenec=new String[]{"Jaroslava","Patricie","Radomír","Prokop","Cyril a Metoděj -> Den slovanských věrozvěstů","Den upálení mistra Jana Husa","Bohuslava","Nora",
    "Drahoslava","Libuše, Amálie","Olga","Bořek","Markéta","Karolína","Jindřich",
    "Luboš","Martina","Drahomíra","Čeněk","Ilja","Vítězslav","Magdaléna","Libor",
    "Kristýna","Jakub","Anna","Věroslav","Viktor","Marta","Bořivoj","Ignác"};
  static String[] Srpen=new String[]{"Oskar","Gustav","Miluše","Dominik","Kristián","Oldřiška","Lada","Soběslav",
    "Roman","Vavřinec","Zuzana","Klára","Alena","Alan","Hana","Jáchym",
    "Petra","Helena","Ludvík","Bernard","Johana","Bohuslav","Sandra","Bartoloměj",
    "Radim","Luděk","Otakar","Augustýn","Evelína","Vladěna","Pavlína"};
  static String[] Zari=new String[]{"Linda, Samuel","Adéla","Bronislav","Jindřiška","Boris","Boleslav","Regína","Mariana",
    "Daniela","Irma","Denisa","Marie","Lubor","Radka","Jolana","Ludmila",
    "Naděžda","Kryštov","Zita","Oleg","Matouš","Darina","Berta","Jaromír",
    "Zlata","Andrea","Jonáš","Václav -> Den české státnosti","Michal","Jeroným"};
  static String[] Rijen=new String[]{"Igor","Olívie, Galina, Oliver","Bohumil","František","Eliška","Hanuš","Justýna","Věra",
    "Štafan, Sára","Marina","Andrej","Marcel","Renáta","Agáta","Tereza","Havel",
    "Hedvika","Lukáš","Michaela","Vendelín","Brigita","Sabina","Teodor","Nina",
    "Beáta","Erik","Šarlota, Zoja, Zoe","Den vzniku samostatného československého státu","Silvie","Tadeáš","Štěpánka"};
  static String[] Listopad=new String[]{"Felix","Dušičky","Hubert","Karel","Miriam","Liběna","Saskie","Bohumír",
    "Bohdan","Evžen","Martin","Benedikt","Tibor","Sáva","Leopold","Otmar",
    "Mahulena -> Den boje za svobodu a demokracii","Romana","Alžběta","Nikola","Albert","Cecílie","Klement","Emílie",
    "Kateřina","Artur","Xenie","René","Zina","Ondřej"};
  static String[] Prosinec=new String[]{"Iva","Blanka","Svatoslav","Barbora","Jitka","Mikuláš","Ambrož, Benjamín","Květoslava",
    "Vratislav","Julie","Dana","Simona","Lucie","Lýdie","Radana, Radan","Albína",
    "Daniel","Miloslav","Ester","Dagmar","Natálie","Šimon","Vlasta","Adam a Eva -> Štědrý den",
    "Boží hod - 1.svátek vánoční","Štěpán - 2.svátek vánoční","Žaneta","Bohumila","Judita","David","Silvestr"};
  
  // A two-dimensional array of holidays, which provides holidays for the entire year
  static String[][] names=new String[][]{Leden, Unor, Brezen, Duben, Kveten, Cerven, Cervenec, Srpen, Zari, Rijen, Listopad, Prosinec};
}
