import 'dart:html';
import 'dart:async';
import 'package:intl/intl.dart';


void main() {
    Timer timer = new Timer.periodic(const Duration(seconds: 1),showClock);
    
    Map<String, String> queries=Uri.splitQueryString(window.location.search.replaceFirst("?", ""));
    if(queries.containsKey("clock") && (queries["clock"].compareTo("yes")==0)) {
        querySelector(".clock").classes.remove("hide");
        Timer timer = new Timer.periodic(const Duration(seconds: 1),runClock);
    }
    if(queries.containsKey("bcd") && (queries["bcd"].compareTo("yes")==0)) {
        querySelector("#bcd").classes.remove("hide");
    }
}

void runClock(Timer t) {
    DateTime now = new DateTime.now();
    var formatter = new DateFormat('HH:mm:ss');
    String time = formatter.format(now);
    querySelector(".clock").text=time; 
}

void showClock(Timer t) {
    DateTime now = new DateTime.now();        
    var formatter = new DateFormat('HH:mm:ss');
    String time = formatter.format(now);
    
    List<String> digits=time.split(':');
    
    int hour=int.parse(digits[0]);
    List<String> h=[(hour~/10).toString(),(hour - ((hour~/10)*10)).toString()];
    int minute=int.parse(digits[1]);
    List<String> m=[(minute~/10).toString(),(minute - ((minute~/10)*10)).toString()];
    int second=int.parse(digits[2]);
    List<String> s=[(second~/10).toString(),(second - ((second~/10)*10)).toString()];
    
    List<String> digitsBCD=new List();
    digitsBCD.add(digitToBCD(int.parse(h[0]))); digitsBCD.add(digitToBCD(int.parse(h[1]))); 
    digitsBCD.add(digitToBCD(int.parse(m[0]))); digitsBCD.add(digitToBCD(int.parse(m[1])));
    digitsBCD.add(digitToBCD(int.parse(s[0]))); digitsBCD.add(digitToBCD(int.parse(s[1])));
    querySelector("#bcd").text=digitsBCD[0]+" "+digitsBCD[1]+" : "+digitsBCD[2]+" "+digitsBCD[3]+" : "+digitsBCD[4]+" "+digitsBCD[5];
    
    
    for(int i=0;i<digitsBCD.length;i++) {
        List<String> digit=digitsBCD[i].split('');
        for(int j=0;j<digit.length;j++) {
            if(digit[j].compareTo("0")==0) {
                querySelector("#dot"+j.toString()+i.toString()).classes.remove("light");
                querySelector("#dot"+j.toString()+i.toString()).classes.add("dark");
            }
            if(digit[j].compareTo("1")==0) {
                querySelector("#dot"+j.toString()+i.toString()).classes.remove("dark");
                querySelector("#dot"+j.toString()+i.toString()).classes.add("light"); 
            }
        }
    }
}

String digitToBCD(int digit) {
    String num;
    switch(digit) {
        case 0: num="0000"; break;
        case 1: num="0001"; break;
        case 2: num="0010"; break;
        case 3: num="0011"; break;
        case 4: num="0100"; break;
        case 5: num="0101"; break;
        case 6: num="0110"; break;
        case 7: num="0111"; break;
        case 8: num="1000"; break;
        case 9: num="1001"; break;
    }
    return num;
}
