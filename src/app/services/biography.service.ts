import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BiographyService {

  biographiesPlayers: string[] = [
    "The 58th pick in the 2017 NBA draft (New York Knicks) played most of his career for Mega Bemax. After starting 2018/19 in San Pablo Burgos, Jaramaz moved to Partizan in February 2019. Jaramaz is a guard, born in 1995. Ognjen has won the Serbian National Cup two times (in 2016 with Mega and in 2019 with Partizan). With the Serbian U20 National Team, Jaramaz won the gold and bronze medals at Eurobasket.",
    "During the 2018/19 season, this Texas A&M University graduate played for Dinamo Sassari, with which he won the FIBA Eurocup, and played the Serie A finals. The season before, he played in the NBA G League for Oklahoma City Blue, where he started his professional career. He was named the best defense player at the Southland Conference in 2016. Born in 199. Power forward.",
    "The Northwestern State University graduate was born in 1989 and plays as a center. In his senior career, Mosley played only for Italian teams. He came to Partizan from Trieste, and also played for Fortitudo Bologna, Ferentino, Recanati, Latina, and Legnano Knights. During his college career, in the 2010/11 season, he was the best blocker in the NCAA.",
    "A member of the Latvian National Team, Peiners played for the Turkish Darusafaka during the 2018/19 season. During his career he played for PAOK, Latvijas Universitate, Lietkabelis, Ventspils, and the Ukranian Mykolaiv. He played for the National Team in the European Championships in 2015 and 2017. He was born in 1990 and plays as small forward."
  ]

  biographiesCoaches : string[] = [
    "Andrea Trinchieri (born August 6, 1968) is an Italian professional basketball coach, who is currently the head coach for Partizan of the Adriatic League, Serbian League and the EuroCup.",
    "Vlado Šćepanović (born 13 November 1975) is a Montenegrin professional basketball coach and former player. He currently serves as an assistant coach for Partizan of the Basketball League of Serbia, the Adriatic League and the EuroCup. At 1.97 m (6 ft 5 1⁄2 in), he played the shooting guard position."
  ]

  constructor() { }
}
