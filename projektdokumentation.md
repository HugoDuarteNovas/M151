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
|23.2.2023| 0.1.2   |                                                              |
|       | 1.0.0   |                                                                |

# 0 Ihr Projekt

Ich möchte ein Glücksrad programmieren. Dieses sollte möglichst ähnlich wie das TV-Spiel sein.

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): Glückspiel darstellen
* Tier 2 (Webserver): Eingaben prüfen
* Tier 3 (Application Server): Prozesse des Glückspiels
* Tier 4 (Dataserver): Daten vom User speichern

# 2 Technologie

* Tier 1 (Presentation): HTML, CSS, Express.js,
* Tier 2 (Webserver): Express.js
* Tier 3 (Application Server): Node.js
* Tier 4 (Dataserver): MySQL

# 3 Datenbank

✍️ Wie steuern Sie Ihre Datenbank an? Wie ist das Interface aufgebaut?
Express.js ist ein Open-Source-Webframework. Weil es eine neue Technologie für mich ist, werde ich versuchen mich möglichst an den Dokumentationen zu halten.

# 4.1 User Stories

✍️ Formulieren Sie klare Anforderungen in der Form von User Stories (*„als … möchte ich … damit …“*) und zu jeder Anforderung mindestens einen dazugehörigen Testfall (in Kapitel 4.2). 

✍️ Formulieren Sie weitere, eigene Anforderungen und Testfälle, wie Sie Ihre Applikation erweitern möchten. Geben Sie diesen statt einer Nummer einen Buchstaben (`A`, `B`, etc.)

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |      Muss       | Funktional   | Als ein Spieler möchte ich mich anmelden können, damit ich meinen höchsten Score sehen kann. |
| 2    |      Muss       | Funktional   | Als ein Spieler möchte ich Preise verdienen können, damit das Spielerlebnis positiv ist.     |
| 3    |      Muss       | Funktional   | Als ein Spieler möchte ich Geld einzahlen können, damit ich weitere Drehungen haben kann.    |
| 4    |      Muss       | Qualität     | Als ein Benutzer möchte ich, dass die Website visuell attraktiv ist, damit ich angeregt werde zum spielen. |
| 5    |      Kann       | Rand         | Als ein Spieler möchte ich den höchsten Score meiner Freunde sehen können, damit ich es vergleichen kann.  |

✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc. oder Zahl), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). 

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Der Spieler ruft die Website auf und drückt auf anmelden | Der Benutzer versucht sich einzumelden | Der User kann seinen höchsten Score sehen  |
| 2.2  | Der Spieler spielt das Spiel | Der Spieler ratet ein Wort innerhalb einer Anzahl Versuche | Eine Quatität an Geld wird zu seinem Konto addiert |
| 3.3  | Der Spieler spielt das Spiel | Der Spieler hat kein Geld mehr | Er zahlt Geld ein damit er weitere Drehungen hat |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).
![Unbenannt](https://user-images.githubusercontent.com/106603796/214003368-57dbe3aa-677b-4407-8666-93d8d43ca627.PNG)

# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| ...        |       |              |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja / nein |                                           |
| ...  |           |                                           |

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
