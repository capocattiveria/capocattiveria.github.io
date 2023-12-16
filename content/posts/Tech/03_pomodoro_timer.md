---
title: "Timer con Arduino (Ita)"
date: 2021-09-19T11:04:42+02:00
author: "Nico Fiorini"
summary: A Handmade Pomodoro Timer with Arduino
tags: 
  - Hardware
  - Arduino
draft: false
---

Ho sempre avuto difficoltà a gestire il tempo, non sono capace di fare programmi, ogni volta che provo
a farmi un programma non riesco a seguirlo per più di due o tre giorni.  
Di conseguenza ho sempre studiato a sentimento, cioè, se avevo voglia studiavo, altrimenti non studiavo, una
tecnica semplice e poco efficace. Stufo della situazione,
mi sono ritrovato su You Tube in cerca di tecniche
per un'organizzazione efficiente del tempo, e tra le varie cose che non mi piacevano, ne ho trovata una
che mi piaceva e che ormai utilizzo da circa 4 mesi, e mi permette di studiare nei periodi più intensi da
8 a 10 ore al giorno, cioè la tecnica del Pomodoro.

Questa tecnica consiste nel:

* Studiare per  \\(x\\)  minuti
* Riposarsi per \\(y\\) minuti

In genere questa tecnica viene descritta con \\(x = 25\\) e \\(y=5\\), però a me non piace, così utilizzo la
variante con \\(x=60\\) e \\(y=10\\).

Ci sono varie applicazioni per lo smartphone per utilizzare questa tecnica, però avere
un'arma di distrazione vicinomentre studio è controproducente, in più
risulta molto macchinoso sbloccare il telefono e far partire il timer.

Ho cercato una soluzione più efficiente, avrei potuto comprare un
timer fisico, oppure costruirmi un timer fisico, e da futuro ingegnere informatico (si spera) ho
optato per la seconda opzione.

Sono un principiante, quindi ho sfruttato l'occasione per iniziare a giocherellare con Arduino, ed ho
visto più o meno cosa potevo fare con quello che avevo a disposizione.

## Materiale utilizzato

* Arduino nano
* Lcd display 16x2
* 3 pulsanti
* 1 led
* Potenziometro 10k
* 3 resistenze 10 k\\(\Omega\\) (resistenze di pull down, utilizzate per i pulsanti)
* 2 resistenze 220 \\(\Omega\\)
* Sensore di temperatura DHT11
* Buzzer
* 2 basette millefori

## Link utili

Lascio dei link utili in caso volete costruirvi un Pomodoro timer anche voi.

* [Per accendere il primo led](https://www.circuitbasics.com/arduino-basics-controlling-led/)
* [Installare l'IDE di Arduino](https://www.circuitbasics.com/arduino-basics-installing-software/)
* [Suonare il buzzer](https://create.arduino.cc/projecthub/SURYATEJA/use-a-buzzer-module-piezo-speaker-using-arduino-uno-89df45)
* [Controllare il display Lcd](https://www.circuitbasics.com/how-to-set-up-an-lcd-display-on-an-arduino/)
* [Utilizzare il sensore di temperatura](https://www.circuitbasics.com/how-to-set-up-the-dht11-humidity-sensor-on-an-arduino/)

Lascio anche il mio codice sorgente, potete prenderlo come spunto, ma consiglio di non seguirlo,
è un po' incasinato, non ho avuto tempo di migliorarlo, e per far funzionare il tutto dovete rispettare
la pedinatura che ho utilizzato io, quindi vi consiglio di cablarlo e programmarvelo da soli.
Sono un principiante anche io, quindi se ci sono riuscito io può riuscirci chiunque.

* [Il mio codice](https://github.com/flowibbia/Pomodoro_timer)

## Risultato finale

{{< youtube  P7QSWMfIgHM >}}
