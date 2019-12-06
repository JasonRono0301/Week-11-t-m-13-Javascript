//Jason Ronoastro
//20-11-2019


//Alle id namen:
//title //description //button1 //button2 //button3 //inventoryItem

    //Alle document.getElementById(ID-NAME).
    var titel = document.getElementById("title");
    var uitleg = document.getElementById("description");
    var button1 =  document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var item = document.getElementById("inventoryItem");
    var image = document.getElementById("image");
    
    //var van de game-buttons;
    var buttonsclass = document.getElementById("game-buttons");
   


        
    //Intro level.
    document.body.style.backgroundImage = "url(Assets/RuimteVh/Intro.jpg)";
    titel.innerHTML = "Welkom by mijn spel";
    uitleg.innerText = "Druk op start";
    item.style.display = "none";
    image.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button1.innerHTML = "Start";
    button1.onclick = function() {Intro()};
    document.getElementById("game-container").style.display = "block";

    
    

    //Begin verhaal.
        function Intro(){
            document.body.style.backgroundImage = "url(Assets/RuimteVh/Intro1.jpg)";

            document.getElementById("title").innerHTML = "Intro Verhaal";
            uitleg.innerHTML = "Je zit in een shuttle die onderweg is naar een zwartgat en jou taak is om de shuttle terug te sturen naar Aarde maar de motor doen het niet.<br><br> Dus je moet in de shuttle zelf zoeken naar benodigheden om de motor te laten starten. <br><br> SUCCES!<br>";
            item.style.display = "none";


            document.getElementById("button1").innerHTML = "Druk om te beginnen";
            document.getElementById("button1").onclick = function(){level1()};
            
            document.getElementById("button1").style.display = "block";
            document.getElementById("button2").style.display = "none";
            document.getElementById("button3").style.display = "none";
            document.getElementById("title").style.display = "block";
            document.getElementById("description").style.display = "block";
            document.getElementById("inventoryItem").style.display = "none";


    }
    

    //functions level1
        function level1(){
            document.body.style.backgroundImage = "url(Assets/RuimteVh/Shuttle.jpg)";
        
            document.getElementById("title").innerHTML = "Keuze maken?";
            document.getElementById("description").innerHTML = "Je zit in de cockpit van de shuttle zelf en achter je zit de deur op slot je kunt  de deur openen door 1 van de knoppen <br> voor je te drukken waardoor de deur achter je open gaat. <br><br> 1 knop maakt de deur open en de andere 2 laat het schip ontploffen. <br><br> Welke knop ga je drukken?";
            item.style.display = "none";


            document.getElementById("button1").innerHTML = "Knop 1";
            document.getElementById("button2").innerHTML = "Knop 2";       
            document.getElementById("button3").innerHTML = "Knop 3";
            document.getElementById("button2").onclick = function(){ontploffing()}; 
            document.getElementById("button3").onclick = function(){ontploffing()};

            document.getElementById("button1").style.display = "block";
            document.getElementById("button2").style.display = "block";
            document.getElementById("button3").style.display = "block";
            document.getElementById("title").style.display = "block";
            document.getElementById("description").style.display = "block";
            document.getElementById("inventoryItem").style.display = "none";

        document.getElementById("button1").onclick = function(){level2()};
    }
    
    //Function ontploffing
        function ontploffing(){
            document.body.style.backgroundImage = "url(Assets/RuimteVh/ontploffing.jpg)";

            document.getElementById("title").style.display = "none";
            document.getElementById("description").style.display = "none";

            document.getElementById("button1").style.display = "none";
            document.getElementById("button2").innerHTML = "OPNIEUW";
            document.getElementById("button2").onclick = function(){level1()};
            document.getElementById("button3").style.display = "none";
            document.getElementById("inventoryItem").style.display = "none";
        }






    //function level 2.
        function level2(){
            document.body.style.backgroundImage = "url(Assets/RuimteVh/RuimteGang.jpg)";

            document.getElementById("title").innerHTML = "Welke kamer?";
            document.getElementById("description").innerHTML = "Je bent door de deur heen en je bevindt je nu in een lichte gang met een deur aan het eind maar je ziet dat je een swipe card ervoor nodig hebt.<br> De swipe card zit in 1 van de 3 kamer rechts van je als je de swipe card hebt wordt je automatisch doorgestuurd naar de volgende level.<br><br>Welke deur ga je kiezen? ";
            
            document.getElementById("button1").style.display = "block";
            document.getElementById("button2").style.display = "block";
            document.getElementById("button3").style.display = "block";
            document.getElementById("title").style.display = "block";
            document.getElementById("description").style.display = "block";
            document.getElementById("inventoryItem").style.display = "none";

            document.getElementById("button1").innerHTML = "Kamer 1";
            document.getElementById("button2").innerHTML = "Kamer 2";
            document.getElementById("button3").innerHTML = "Kamer 3";

            document.getElementById("button1").onclick = function(){level3()};
            document.getElementById("button2").onclick = function(){wrong()};
            document.getElementById("button3").onclick = function(){wrong()};

    }
    //Function verkeerd
        function wrong(){
            document.body.style.backgroundImage = "url(Assets/RuimteVh/wrong.jpg)";

            document.getElementById("title").style.display = "none";
            document.getElementById("description").style.display = "none";

            document.getElementById("button1").style.display = "none";
            document.getElementById("button2").innerHTML = "Ga terug";
            document.getElementById("button2").onclick = function(){level2()};
            document.getElementById("button3").style.display = "none";
            document.getElementById("inventoryItem").style.display = "none";
        }

   //Function voor level 3.
        function level3(){
            document.body.style.backgroundImage = "url(Assets/RuimteVh/Obstakel.jpg)";

            document.getElementById("title").innerHTML = "Obstakel";
            document.getElementById("description").innerHTML = "Het is je gelukt om door de gesloten deur heen te gaan. <br><br> Maar uit het niets komt er een kleine asteroïde aan op je shuttle waardoor er schade is geleverd op de plek waar je nu bent. Je ziet dat er vuur komt uit muur naast je dus je zit in een obstakel.<br><br> Wat ga je nu doen?<br><br>De brandblusser naast je pakken of overheen springen?";
            
            document.getElementById("button1").innerHTML = "Brandblusser";
            document.getElementById("button2").innerHTML = "Overheen springen";
            document.getElementById("button3").innerHTML = "Niks doen";
            document.getElementById("inventoryItem").style.display = "none";
               
            document.getElementById("button1").style.display = "block";
            document.getElementById("button2").style.display = "block";
            document.getElementById("button3").style.display = "block";
            document.getElementById("title").style.display = "block";
            document.getElementById("description").style.display = "block";
            document.getElementById("inventoryItem").style.display = "none";

            document.getElementById("button1").onclick = function(){level4()};
            document.getElementById("button2").onclick = function(){dood()};
            document.getElementById("button3").onclick = function(){dood()};
        }



    //Function dood.
        function dood(){
            document.body.style.backgroundImage = "url(Assets/RuimteVh/gameov.jpg)";

            document.getElementById("title").style.display = "none";
            document.getElementById("description").style.display = "none";

            document.getElementById("button1").style.display = "none";
            document.getElementById("button2").innerHTML = "OPNIEUW";
            document.getElementById("button2").onclick = function(){level3()};
            document.getElementById("button3").style.display = "none";
            document.getElementById("inventoryItem").style.display = "none";
            
        }
    
    //Function voor level 4.
     function level4(){
            document.body.style.backgroundImage = "url(Assets/RuimteVh/alien.jpg)";

            document.getElementById("title").innerHTML = "De alien";
            document.getElementById("description").innerHTML = "Je bent door je obstakel heen gekomen. Maar je ziet dat er een <br> asteriode in het shuttle zit je hoort krak en ziet iets eruit bewegen <br> het is een grote alien die eruit is gekomen. <br><br> Wat ga je doen?<br><br>";

            document.getElementById("button1").innerHTML = "Sneaky doen";
            document.getElementById("button2").innerHTML = "Snel erlangs rennen";
            document.getElementById("button3").innerHTML = "Kamer rechts ingaan";
            button3.onclick = function(){wapen()};
            document.getElementById("button1").onclick = function(){gefaald()};
            document.getElementById("button2").onclick = function(){gefaald()};
            
            document.getElementById("button1").style.display = "block";
            document.getElementById("button2").style.display = "block";
            document.getElementById("button3").style.display = "block";
            document.getElementById("title").style.display = "block";
            document.getElementById("description").style.display = "block";
            document.getElementById("inventoryItem").style.display = "none";
            buttonsclass.style.display = "block";
        }
    //Function gefaald.
        function gefaald(){
            document.body.style.backgroundImage = "url(Assets/RuimteVh/jumpscare.gif)";

            document.getElementById("title").style.display = "none";
            document.getElementById("description").style.display = "none";

            document.getElementById("button1").style.display = "none";
            document.getElementById("button2").innerHTML = "OPNIEUW";
            document.getElementById("button2").onclick = function(){level1()};
            document.getElementById("button3").style.display = "none";
            document.getElementById("inventoryItem").style.display = "none";
        
    }




    //Function voor wapen
     function wapen(){
            document.getElementById("inventoryItem").src = "Assets/RuimteVh/Vlammenwerper.png";
            item.style.display = "inline-block";
            item.style.position = "relative";
            titel.innerText = "Wapen";
            uitleg.innerText = "Je hebt een vlammenwerper gevonden om de alien te doden.";

            document.getElementById("button1").innerText = "Klik om de alien te doden";
            document.getElementById("button1").onclick = function(){batterij()};
            document.getElementById("button2").style.display = "none";
            document.getElementById("button3").style.display = "none";
        
    }

    //Function batterij
        function batterij(){
            document.body.style.backgroundImage = "url(Assets/RuimteVh/RuimteGang.jpg)";
            titel.innerText = "Batterij"
            uitleg.innerText = "Yess doordat de alien is doodgegaan heeft hij een batterij laten vallen dat hij had opgegeten en met die batterij kan je de motoren van je shuttle weer laten starten en terug gaan naar Aarde.";

            item.src = "Assets/RuimteVh/Batterij.jpeg";
            item.style.display = "inline-block";
            item.style.height = "300px";
        
            document.getElementById("button1").innerText = "Naar cockpit";
            document.getElementById("button1").onclick = function(){eind()};
            document.getElementById("button2").style.display = "none";
            document.getElementById("button3").style.display = "none";
    }
  
    
    //Function einde 1 en einde 2.
        function eind(){
            document.body.style.backgroundImage = "url(Assets/RuimteVh/cockpit.jpg)";

            titel.innerHTML = "Einde?";
            uitleg.innerHTML = "Je hebt de batterij in de motor gezet maar je zit met de vraag wat gebeurt er als je door het zwartgat gaat? Het vanaf hier jou keuze waar je heen wilt een gaan.<br><br> Aarde of zwartgat";
            document.getElementById("inventoryItem").style.display = "none";

            document.getElementById("button1").innerHTML = "Aarde";
            document.getElementById("button2").style.display = "none";
            document.getElementById("button1").style.display = "inline-block";
            document.getElementById("button3").style.display = "inline-block";
            document.getElementById("button3").innerHTML = "Zwartgat";

            document.getElementById("button1").onclick = function(){einde1()};
            document.getElementById("button3").onclick = function(){einde2()};
    }


    //Function einde 1
        function einde1(){
            document.body.style.backgroundImage = "url(Assets/RuimteVh/aarde.jpg)";

            titel.innerHTML = "Aarde";
            uitleg.innerHTML = "Je hebt gekozen om naar aarde te gaan. <br><br> Als je de game opnieuw wilt spelen druk op de knop.";
            item.style.display = "none";

            document.getElementById("button2").innerHTML = "Opnieuw starten";
            document.getElementById("button2").onclick = function(){Intro()};
            document.getElementById("button2").style.display = "block";

            document.getElementById("button1").style.display = "none";
            document.getElementById("button3").style.display = "none";

           

            
        }
    
    //Function einde 2
        function einde2(){
            document.body.style.backgroundImage = "url(Assets/RuimteVh/toekomst.jpg)";

            titel.innerHTML = "Zwartgat";
            uitleg.innerHTML = "Je hebt gekozen om door het zwartgat heen te gaan. En je ziet dat de aarde er hetzelfde eruit ziet maar nadat je dichterbij kwam zag je hoe alles is veranderd op aarde omdat je in de toekomst bent terecht gekomen. <br><br> Als je de game opnieuw wilt spelen druk op de knop.";
            item.style.display = "none";

            document.getElementById("button2").innerHTML = "Opnieuw starten";
            document.getElementById("button2").onclick = function(){Intro()};
            document.getElementById("button2").style.display = "block";

            document.getElementById("button1").style.display = "none";
            document.getElementById("button3").style.display = "none";
        }