function ani2(){
 document.getElementById('notify').className = 'notification2'
 setTimeout(hide, 400)
}
function hide(){
 document.getElementById('notify').style.display = 'none'
}

function awaitpl2(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Loading Binloader...</h1>'; }, 50);
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>"+LoadedMSG+"</h1>"; }, 800);
      setTimeout(ani2, 4000);
}

function awaitpl(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89><br>★ Loading Payload...</h1>'; }, 50);
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>"+LoadedMSG+"</h1>"; }, 800);
      setTimeout(ani2, 4000);
}

function load_exploit(){
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89;padding-top:7px;>★ Loading Exfathax<br>Please Wait ...</h1>'; }, 50);
    setTimeout(webkitExploit,1000);
}

function load_exploit_done(){
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89><br>*Jailbreak Loaded !!!</h1>'; }, 50);
    setTimeout(loadHomeBrew, 100);
}

// Added AutoHEN
function loadHomeBrew() {
    var firstscheck = localStorage.getItem("CheckBOX1")
    var secondscheck = localStorage.getItem("CheckBOX2")
    if (firstscheck == "true"){
        setTimeout(load_platinum, 100)
    }else if(secondscheck == "true") {
        setTimeout(load_goldhen2b2, 100)
    }else {
        document.getElementById('notify').style.display = ''
        document.getElementById('notify').className = 'notification'
        setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89;padding-top:7px;>★ Jailbreak Done!<br> Select GoldHEN Manually! ★</h1>'; }, 50);
        setTimeout(ani2, 4000);
    }
}

function autopl(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>"+LoadedMSG+"</h1>"; }, 100);
      setTimeout(ani2, 2000);
}

function load_bin(){
LoadedMSG="Send A Payload To Port 9020 Now !!!";
runBinLoader();
}

function load_goldhen224(){
LoadedMSG="<br>★GoldHEN v2.2.4 Loaded !!!";
PLfile = "goldhen224.bin";
toogle_payload();
}

function load_goldhen23(){
LoadedMSG="<br>★GoldHEN v2.3 Loaded !!!";
PLfile = "goldhen23.bin";
toogle_payload();
}

function load_goldhen222(){
LoadedMSG="<br>★GoldHEN v2.2.2 Loaded !!!";
PLfile = "goldhen222.bin";
toogle_payload();
}

function load_goldhen212(){
LoadedMSG="<br>★GoldHEN v2.1.2 Loaded !!!";
PLfile = "goldhen212.bin";
toogle_payload();
}

function load_goldhen2b2(){
LoadedMSG="<br>★GoldHEN v2.0B2 Loaded !!!";
PLfile = "goldhen2b2.bin";
toogle_payload();
}

function load_goldhen20b(){
LoadedMSG="<br>★GoldHEN v2.0B Loaded !!!";
PLfile = "goldhen20b.bin";
toogle_payload();
}
function transitionPage(){
    // Hide to left / show from left
    $("#enter").toggle("slide", {direction: "left"}, 500);

    // Show from right / hide to right
    $("#about-2").toggle("slide", {direction: "right"}, 500);
}

$(document).ready(function() {
    $('#enter').click(transitionPage);
    $('#about-2').click(transitionPage);
});

function load_goldhen24b182(){
LoadedMSG="<br>★GoldHEN v2.4b18.2 Loaded";
PLfile = "goldhen24b182.bin";
toogle_payload();
}
