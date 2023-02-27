# Projekt-Dokumentation

Hugo Duarte Novas

| Datum   | Version | Zusammenfassung                                              |
| -----   | ------- | ------------------------------------------------------------ |
|23.1.2023| 0.0.1   | Erstellung und Bearbeitung der Projektdokumentation.         |
|12.2.2023| 0.0.2   |Recherche getätigt über mögliche Technologien.                |
|18.2.2023| 0.0.3   |Next.js als Technologie gewählt und recherchiert              |
|20.2.2023| 0.0.4   |Erstes Next.js Projekt kreiert. Am gleichen Tag am Abend gelöscht.|
|21.2.2023| 0.0.5   |Neues Next.js Projekt erstellt. Mit Hilfe eines Tutorials erstellt.|
|22.2.2023| 0.0.6   |Recherchiert über Next.js und auch über Möglichkeiten wie Spiel erstellen.|
|22.2.2023| 0.1.0   |Über Express.js Erfahren. Umentscheid und Recherche über diese Technologie.|
|23.2.2023| 0.1.1   |Login und Datenbank mit Express.js MySQL und Node erstellt.   |
|24.2.2023| 0.1.2   |Admin-Login-Funktion implementiert.                           |
|24.2.2023| 0.1.3   |Admin-Wörter-Funktion angefangen zu implementieren.           |
|24.2.2023| 0.1.4   |Mit Admin-Wörter-Funktion fertig geworden und mit Spiel angefangen.|
|26.2.2023| 0.1.5   |Spiel mit Hilfe eines Tutorials erstellt.                     |
|27.2.2023| 1.0.0   |Projekt abgegeben.                                            |

# 0 Ihr Projekt

Ich möchte ein Glücksrad programmieren. Dieses sollte möglichst ähnlich wie das TV-Spiel sein.

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): Glückspiel darstellen
* Tier 2 (Webserver): Eingaben prüfen
* Tier 3 (Application Server): Prozesse des Glückspiels
* Tier 4 (Dataserver): Daten vom User und Admin speichern

# 2 Technologie
Um dieses Projekt zu realisieren habe ich mich dazu entschieden, mit HTML und CSS für mein Front-End und Express.js für mein Back-End zu verwenden. Ich würde dann Front- und Back-End mit Node.js verbinden. Ich wollte mit diesen Technologien arbeiten, weil sie mir am einfachsten vorkammen, als ich mich informiert und einarbeitet hatte. Mit HTML und CSS habe ich bereits Erfahrung. Express.js und Node.js sind aber neu für mich.

* Tier 1 (Presentation): HTML, CSS, Express.js,
* Tier 2 (Webserver): Node.js, Express.js
* Tier 3 (Application Server): Node.js, Express.js
* Tier 4 (Dataserver): MySQL Workbench

# 3 Datenbank

✍️ Wie steuern Sie Ihre Datenbank an? Wie ist das Interface aufgebaut?
Express.js ist ein Open-Source-Webframework. Weil es eine neue Technologie für mich ist, werde ich versuchen mich möglichst an den Dokumentationen zu halten.
Meine DB-Lösung wurde mit MySQL erstellt, sie wird mit Node.js angesteuert. 

So sieht es aus:

![Unbenannt3](https://user-images.githubusercontent.com/106603796/221524715-3d85cc89-be7e-42dd-8b00-b1d43ecdf212.PNG)



# 4.1 User Stories

✍️ Formulieren Sie klare Anforderungen in der Form von User Stories (*„als … möchte ich … damit …“*) und zu jeder Anforderung mindestens einen dazugehörigen Testfall (in Kapitel 4.2). 

✍️ Formulieren Sie weitere, eigene Anforderungen und Testfälle, wie Sie Ihre Applikation erweitern möchten. Geben Sie diesen statt einer Nummer einen Buchstaben (`A`, `B`, etc.)

✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc. oder Zahl), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). 


| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |      Kann       | Funktional   | Als ein Spieler möchte ich eine Anzahl an Versuche haben, damit ich auch verlieren kann. |
| 2    |      Muss       | Funktional   | Als ein Spieler möchte ich Preise verdienen können, damit das Spielerlebnis positiv ist.     |
| 3    |      Muss       | Funktional   | Als ein Spieler möchte ich Geld einzahlen können, damit ich weitere Drehungen haben kann.    |
| 4    |      Muss       | Funktional   | Als ein Admin möchte ich mich sicher einloggen können, damit ich neue Wörter hinzufügen kann.|
| 5    |      Muss       | Funktional   | Als ein Admin möchte ich Wörter hinzufügen können, damit der Spieler mehrere Wörter haben kann.|
| 6    |      Muss       | Funktional   | Als ein Admin möchte ich die Wahl haben mich einloggen sowie spielen können, damit ich weiss wie die User-Experience ist.|
| 7    |      Muss       | Qualität     | Als ein Benutzer möchte ich, dass die Website visuell attraktiv ist, damit ich angeregt werde zum spielen. |
| 8    |      Kann       | Rand         | Als ein Spieler möchte ich den höchsten Score meiner Freunde sehen können, damit ich es vergleichen kann.  |


# 4.2 Testfälle
✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Der Spieler ruft die Website auf und spielt das Spiel | Der Spieler verliert das Spiel | Der Spieler hat verloren und einen Message erscheint   |
| 2.2  | Der Spieler spielt das Spiel | Der Spieler ratet ein Wort innerhalb einer Anzahl Versuche | Eine Quantität an Geld wird zu seinem Konto addiert |
| 3.3  | Der Spieler spielt das Spiel | Der Spieler hat kein Geld mehr | Er zahlt Geld ein damit er weitere Drehungen hat |
| 4.4  | Der Admin ruft die Website auf und drückt auf Login | Der Admin loggt sich ein | Er kann eine neue Seite sehen |
| 5.5  | Der Admin hat sich eingeloggt | Der Admin gibt ein Wort und ein Hint in den Feldern ein | Das Wort und der Hint sind auf der DB zu sehen |
| 6.6  | Der Admin ruft die Website auf | Der Admin drückt auf Play | Er kann auch das Spiel spielen |
| 7.7  | Der Spieler ruft die Website auf | Der sieht die Website und das Spiel | Er wird angeregt zum spielen |


# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).

Admin-Interface:
![Unbenannt2](https://user-images.githubusercontent.com/106603796/221519612-2a940b98-3ed5-44a1-ba62-79a437dc80f8.PNG)

Spiel-Seite:
![Unbenannt](https://user-images.githubusercontent.com/106603796/214003368-57dbe3aa-677b-4407-8666-93d8d43ca627.PNG)

# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| 1        | 26.02.2023       |Als ein Spieler möchte ich eine Anzahl an Versuche haben, damit ich auch verlieren kann.|
| 2        | 26.02.2023       |Als ein Spieler möchte ich Preise verdienen können, damit das Spielerlebnis positiv ist.     |
| 3        | 26.02.2023       |Als ein Spieler möchte ich Geld einzahlen können, damit ich weitere Drehungen haben kann.|
| 4        | 24.02.2023       |Als ein Admin möchte ich mich sicher einloggen können, damit ich neue Wörter hinzufügen kann.|
| 5        | 24.02.2023       |Als ein Admin möchte ich Wörter hinzufügen können, damit der Spieler mehrere Wörter haben kann.|
| 6        | 24.02.2023       |Als ein Admin möchte ich die Wahl haben mich einloggen sowie spielen können, damit ich weiss wie die User-Experience ist.|
| 7        | 24.02.2023       |Als ein Benutzer möchte ich, dass die Website visuell attraktiv ist, damit ich angeregt werde zum spielen.|

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1        | Ja    |![carbon (2)](https://user-images.githubusercontent.com/106603796/221520462-d9301417-7b4f-48f2-9054-a2783c61805a.png) Der Spieler nicht unlimitiert spielen und seine Versuche werden abgezogen.|
| 2        | Nein  |![carbon (1)](https://user-images.githubusercontent.com/106603796/221519980-f37c79a4-4031-4a4f-b313-55570250609e.png) Der Spieler verdient Preise. Der Code ist nicht ausführbar, aber habe ein Code wo dies machen kann.|
| 3        | Nein  | Der Spieler kann kein Geld einzahlen, sondern nur gewinnen. Der Code ist nicht ausführbar, aber habe ein Code wo dies machen kann.|
| 4        | Ja    |![carbon (3)](https://user-images.githubusercontent.com/106603796/221520806-3076521b-b1ac-4ba5-bd81-f8ed481ac023.png) Der Login wurde erstellt und mit der DB verknüpft.|
| 5        | Ja    |![carbon (4)](https://user-images.githubusercontent.com/106603796/221520963-1da211cc-59b0-4281-abd2-a2833b311b5c.png) Die Inputfields wurden erstellt und mit der DB verknüpft.|
| 6        | Ja    | Der "Play" Button wurde hinzugefügt.|
| 7        | Ja    |![carbon (5)](https://user-images.githubusercontent.com/106603796/221521256-90b2a49d-fb55-4f07-804a-966b6490afc0.png) Das Design der Admin-Seite war bereits anfangs Projekt erstellt. Aber es wurde erst fertig, sobald ich die .css-Datei des Spieles fertig gestellt habe.|
# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

https://youtu.be/77VYPnvYFgw

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  | 27.02.2023      |NOK       | H.D.        |
| 2.2  | 27.02.2023      |NOK       | H.D.        |
| 3.3  | 27.02.2023      |NOK       | H.D.        |
| 4.4  | 27.02.2023      |OK        | H.D.        |
| 5.5  | 27.02.2023      |OK        | H.D.        |
| 6.6  | 27.02.2023      |OK        | H.D.        |
| 7.7  | 27.02.2023      |OK        | H.D.        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

Zum dieses Projekt zu realisieren, müsste ich mich umentscheiden. Ich wollte zuerst mit Next.js arbeiten, aber es war für mich zu komplex aufgebaut, also nach einer Recherche entschied ich mich für Express.js. Da es eine neue Technologie für mich ist, könnte ich das Spiel nicht vollständigen zum laufen bringen. Dies aus den folgenden zwei Gründen:

-1: Wie es auf das Video zu sehen ist, werden sämtliche .js-Dateien nicht geladen, obwohl sie richtig verbunden und gecodet sind.

-2: Ich habe sehr viel Zeit verbracht bei der DB Verknüpfung und der Admin-Seite. Aus zeitlichen Gründen könnte ich nicht weiter an das Spiel arbeiten.

Nichtsdestotrotz habe ich sehr gerne daran gearbeitet, weil ich mir selber beweisen könnte, was ich alles erreichen kann mit meinen Kenntnissen. Ich war selbst überrascht, dass es so gut lief. Für das nächste Mal würde ich früher beginnen mich über Technologie X zu informieren, da ich tue dies oft unterschätzen.

Bezüglich der Anforderungen, bin ich zufrieden auch wenn das Spiel nicht wirklich lauft. Mein Hauptziel war es den Admin erstellen zu können. Ich wollte persönlich schon seit längerem mit Datenbank solche coole Sachen machen können und ich habe es schlussendlich geschafft. Ich habe gelernt wie man Daten aufruft und speichert.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
