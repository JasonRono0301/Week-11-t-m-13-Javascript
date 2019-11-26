//Jason Ronoastro
//20-11-2019


//Alle id namen:
//title //description //button1 //button2 //button3 //inventoryItem
    
    //Intro
        document.getElementById("title").innerHTML = "Welkom by mijn game";
        document.getElementById("description").innerHTML = "Druk op start om te beginnen.";
        document.getElementById("button1").innerHTML = "Start";
        document.getElementById("button2").style.display = "none";
        document.getElementById("button3").style.display = "none";
        document.getElementById("inventoryItem").style.display = "none";
        document.getElementById("button1").onclick = function(){startspel()};
        document.body.style.backgroundImage = "url(Assets/Ruimte3.jpg)";
        
    
    //functions per level
    function startspel(){
        document.getElementById("title").innerHTML = "Intro";
        document.getElementById("description").innerHTML = "Je bent beland in de ruimte. Maar je shuttle is dichtbij een zwartgat. En jou taak is om alle benodigdheden te zoeken en gebruiken om terug te keren naar aarde."
        document.body.style.backgroundImage = "url(Assets/Intro1.jpg)";
        document.getElementById("button1").innerHTML = "volgende";

        document.getElementById("button1").onclick = function(){lvl1()};
        

    }

    function lvl1(){
        document.getElementById("title").innerHTML = "Level 1";
        document.getElementById("description").innerHTML = "Je zit in de cockpit van de shuttle en dat de stroom niet werkt in de shuttle zelf en je ziet drie knoppen staan <br> Welke knop ga je drukken?"
        document.getElementById("button2").style.display = "inline-block";
        document.getElementById("button3").style.display = "inline-block";
        document.getElementById("button1").innerHTML = "knop 1";
        document.getElementById("button2").innerHTML = "knop 2";
        document.getElementById("button3").innerHTML = "knop 3";
    }
        


 




