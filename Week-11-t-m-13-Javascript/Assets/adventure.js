//Jason Ronoastro
//20-11-2019


//Alle id namen:
//title //description //button1 //button2 //button3 //inventoryItem

    //VARS van de: document.getElementById(ID-NAME).
    var titel = document.getElementById("title");
    var uitleg = document.getElementById("description");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var inventory = document.getElementById("inventoryItem");

    //functions per level.
        
    //Intro level.
    document.body.style.backgroundImage = "url(Assets/RuimteVh/Intro.jpg)";
    title.innerText = "Welkom by mijn spel";
    uitleg.innerText = "Druk op de knop om het spel te starten"
    uitleg.style.paddingBottom = "10px"    
    button2.style.display = "none";
    button3.style.display = "none";
    inventory.style.display = "none";
    button1.innerHTML = "Start"
    
    
    

    //Begin verhaal.
    button1.setAttribute('onclick','Intro()');

    function Intro(){
        document.body.style.backgroundImage = "url(Assets/RuimteVh/Intro1.jpg)";
        titel.innerHTML = "Intro Verhaal";
        uitleg.innerHTML = "Je zit in een shuttle die onderweg is naar een zwartgat en jou taak is om de shuttle terug te sturen naar Aarde maar de motor doen het niet.<br><br> Dus je moet in de shuttle zelf zoeken naar benodigheden om de motor te laten starten. <br><br> SUCCES!<br>";
        button1.innerHTML = "Druk om te beginnen"
        button1.setAttribute("onclick","level1()");
    }
    

    //functions level1
    function level1(){
        document.body.style.backgroundImage = "url(Assets/RuimteVh/Shuttle.jpg)";
    
        title.innerHTML = "Level 1";
        uitleg.innerHTML = "Je zit in de cockpit van de shuttle zelf en achter je zit de deur op slot je kunt de deur openen door 1 van de knoppen voor je te drukken waardoor de deur achter je open gaat. <br><br> 1 knop maakt de deur open en de andere 2 laat het schip ontploffen. <br><br> Welke knop ga je drukken?";

        button1.innerHTML = "Knop 1";
        button2.innerHTML = "Knop 2";
        button3.innerHTML = "Knop 3";

        button1.style.display = "inline-block";
        button2.style.display = "inline-block";
        button3.style.display = "inline-block";

        button1.setAttribute("onclick", "level2()");
       
        
    
        
        

    }
    
    
    //function level 2.
    function level2(){
        document.body.style.backgroundImage = "url(Assets/RuimteVh/RuimteGang.jpg)";

        titel.innerHTML = "Level 2";
        uitleg.innerHTML = "Je bent door de deur heen en je bevindt je nu in een lichte gang met een deur aan het eind maar je ziet dat je een swipe card ervoor nodig hebt.<br> De swipe card zit in 1 van de 3 kamer rechts van je als je de swipe card hebt wordt je automatisch doorgestuurd naar de volgende level.<br><br>Welke deur ga je kiezen? ";
        
        button1.style.display = "inline-block";
        button2.style.display = "inline-block";
        button3.style.display = "inline-block";



        button1.innerHTML = "Kamer 1";
        button2.innerHTML = "Kamer 2";
        button3.innerHTML = "Kamer 3";

        document.getElementById("button1").setAttribute("onclick","wrongroom()");
        button2.setAttribute("onclick","Goedekamer()");
        document.getElementById("button3").setAttribute("onclick","wrongroom()");
        


        
    }


    //Function voor de verkeerdekamer.
    function wrongroom(){
        document.body.style.backgroundImage = "url(Assets/RuimteVh/wrong.jpg)";
        title.innerHTML = "Verkeerd antwoord";
        uitleg.style.display = "none";
        
        button1.style.display = "none";

        button2.innerHTML = "Ga terug";
        document.getElementById("button2").setAttribute("onclick","level2()");

        button3.style.display = "none";
    
    }
    
    //Function voor de goedekamer.
    function Goedekamer(){
        document.body.style.backgroundImage = "url(Assets/RuimteVh/DonkereKamer.jpg)";

        title.innerHTML = "Goede kamer";
        uitleg.innerHTML = "Je bent in de goede kamer gekomen en je hebt de swipe kaart gevonden.<br><br> Ga terug naar de gang zodat je je deur kan openmaken. ";
        
        button1.innerHTML = "Naar volgende level";
        document.getElementById("button1").setAttribute("onclick","level3()");

        button2.style.display = "none";
        button3.style.display = "none";
    }
    

    //Function voor level 3.
    function level3(){
        document.body.style.backgroundImage = "url(Assets/RuimteVh/Obstakel.jpg)";

        title.innerHTML = "Level 3";
        uitleg.innerHTML = "Het is je gelukt om door de gesloten deur heen te gaan. <br><br> Maar uit het niets komt er een kleine asteroïde aan op je shuttle waardoor er schade is geleverd op de plek waar je nu bent. Je ziet dat er vuur komt uit muur naast je dus je zit in een obstakel.<br><br> Wat ga je nu doen?<br><br>De brandblusser naast je pakken of overheen springen?";

        button1.innerHTML = "Brandblusser";
        button2.innerHTML = "Overheen springen";
        button3.style.display = "none";
    }
    
    