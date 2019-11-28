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
    document.getElementById("button1").addEventListener("click", Begin);

    function Begin(){
        document.body.style.backgroundImage = "url(Assets/RuimteVh/Intro1.jpg)";
        titel.innerHTML = "Intro Verhaal";
        uitleg.innerHTML = "Je zit in een shuttle die onderweg is naar een zwartgat en jou taak is om de shuttle terug te sturen naar Aarde maar de motor doen het niet.<br><br> Dus je moet in de shuttle zelf zoeken naar benodigheden om de motor te laten starten. <br><br> SUCCES!<br>";
        button1.innerHTML = "Druk om te beginnen"
        document.getElementById("button1").addEventListener("click",level1);
    }
    

    //functions level1
    function level1(){
        document.body.style.backgroundImage = "url(Assets/RuimteVh/Shuttle.jpg)";
        title.innerHTML = "level1";
        uitleg.innerHTML = "Welkom bij level 1.<br><br> Er staan 3 knoppen voor je 1 van de knoppen zorgt ervoor dat de deur achter je open gaat en de andere 2 zorgen ervoor dat de shuttle het zwartgat word in gestuurd.<br><br>Welke knop ga je kiezen?";
        button1.innerHTML = "Knop 1";
       
        button2.style.display = "inline";
        button2.innerHTML = "Knop 2";
        
        button3.style.display = "inline";
        button3.innerHTML = "Knop 3";
    }
    
    
    //gameover functions

    

    
    
    