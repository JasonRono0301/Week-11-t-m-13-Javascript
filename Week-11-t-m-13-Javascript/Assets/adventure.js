//Jason Ronoastro
//20-11-2019


//Alle id namen:
//title //description //button1 //button2 //button3 //inventoryItem

    //Alle document.getElementById(ID-NAME).
    //document.getElementById("title");
    //document.getElementById("description");
    //document.getElementById("button1");
    //document.getElementById("button2");
    //document.getElementById("button3");
    //document.getElementById("inventoryItem");

    //functions per level.
        
    //Intro level.
    document.body.style.backgroundImage = "url(Assets/RuimteVh/Intro.jpg)";
    document.getElementById("title").innerHTML = "Welkom by mijn spel";
    document.getElementById("description").innerHTML = "Druk op de knop om het spel te starten"
    document.getElementById("button1").style.paddingBottom = "0px"    
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("inventoryItem").style.display = "none";
    document.getElementById("button1").innerHTML = "Start"
    
    
    

    //Begin verhaal.
    document.getElementById("button1").setAttribute("onclick","Intro()");

    
    function Intro(){
        document.body.style.backgroundImage = "url(Assets/RuimteVh/Intro1.jpg)";
        document.getElementById("title").innerHTML = "Intro Verhaal";
        document.getElementById("description").innerHTML = "Je zit in een shuttle die onderweg is naar een zwartgat en jou taak is om de shuttle terug te sturen naar Aarde maar de motor doen het niet.<br><br> Dus je moet in de shuttle zelf zoeken naar benodigheden om de motor te laten starten. <br><br> SUCCES!<br>";
        document.getElementById("button1").innerHTML = "Druk om te beginnen"
        document.getElementById("button1").setAttribute("onclick","level1()");
    }
    

    //functions level1
    function level1(){
        document.body.style.backgroundImage = "url(Assets/RuimteVh/Shuttle.jpg)";
    
        document.getElementById("title").innerHTML = "Level 1";
        document.getElementById("description").innerHTML = "Je zit in de cockpit van de shuttle zelf en achter je zit de deur op slot je kunt de deur openen door 1 van de knoppen voor je te drukken waardoor de deur achter je open gaat. <br><br> 1 knop maakt de deur open en de andere 2 laat het schip ontploffen. <br><br> Welke knop ga je drukken?";

        document.getElementById("button1").innerHTML = "Knop 1";
        document.getElementById("button2").innerHTML = "Knop 2";
        document.getElementById("button3").innerHTML = "Knop 3";

        document.getElementById("button1").style.display = "inline-block";
        document.getElementById("button2").style.display = "inline-block";
        document.getElementById("button3").style.display = "inline-block";

        document.getElementById("button1").setAttribute("onclick", "level2()");
    }
    
    
    //function level 2.
    function level2(){
        document.body.style.backgroundImage = "url(Assets/RuimteVh/RuimteGang.jpg)";

        document.getElementById("title").innerHTML = "Level 2";
        document.getElementById("description").innerHTML = "Je bent door de deur heen en je bevindt je nu in een lichte gang met een deur aan het eind maar je ziet dat je een swipe card ervoor nodig hebt.<br> De swipe card zit in 1 van de 3 kamer rechts van je als je de swipe card hebt wordt je automatisch doorgestuurd naar de volgende level.<br><br>Welke deur ga je kiezen? ";
        
        document.getElementById("button1").style.display = "inline-block";
        document.getElementById("button2").style.display = "inline-block";
        document.getElementById("button3").style.display = "inline-block";


        document.getElementById("button1").innerHTML = "Kamer 1";
        document.getElementById("button2").innerHTML = "Kamer 2";
        document.getElementById("button3").innerHTML = "Kamer 3";


        document.getElementById("button1").setAttribute("onclick","wrongroom()");
        document.getElementById("button2").setAttribute("onclick","level3()");
        document.getElementById("button3").setAttribute("onclick","wrongroom()");
        
        
        
    }


   //Function voor level 3.
    function level3(){
        document.body.style.backgroundImage = "url(Assets/RuimteVh/Obstakel.jpg)";

        document.getElementById("title").innerHTML = "Level 3";
        document.getElementById("description").innerHTML = "Het is je gelukt om door de gesloten deur heen te gaan. <br><br> Maar uit het niets komt er een kleine asteroïde aan op je shuttle waardoor er schade is geleverd op de plek waar je nu bent. Je ziet dat er vuur komt uit muur naast je dus je zit in een obstakel.<br><br> Wat ga je nu doen?<br><br>De brandblusser naast je pakken of overheen springen?";
        document.getElementById("description").style.paddingBottom = "10px";
       var lvl3btn1 =  document.getElementById("button1").innerHTML = "Brandblusser";
       var lvl3btn2 =  document.getElementById("button2").innerHTML = "Overheen springen";
       var lvl3btn3 = document.getElementById("button3").style.display = "none";

       if(level3 == lvl3btn1){
           lvl3btn1 = true;
            alert("Het antwoord is goed om het vuur te blussen je word nu doorgestuurd naar het volgende level.");
             document.getElementById("button1").setAttribute("onclick","level4()");
       } else {
           lvl3btn1 = false;
           alert("Je antwoord is fout kies een andere manier.");
       }
    
    }
    
    //Function voor level 4.
    function level4(){
        document.body.style.backgroundImage = "url(Assets/RuimteVh/Alien.jpg)";

        document.getElementById("title").innerHTML = "Level 4";
        document.getElementById("description").innerHTML = "Je bent door je obstakel heen gekomen. Maar je ziet dat er een asteriode in het shuttle zit je hoort krak en ziet iets eruit bewegen het is een grote alien die eruit is gekomen. <br><br> Wat ga je doen?<br><br>";

       var lvl4b1 = document.getElementById("button1").innerHTML = "Wegrennen";
       var lvl4b2 = document.getElementById("button2").innerHTML = "Het neersteken met je zakmes";
       var lvl4b3 = document.getElementById("button3").innerHTML = "Kamer rechts van je ingaan";
        
       
        
    
    }
