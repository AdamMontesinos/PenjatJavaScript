let frase;
let fraseocultada = "";
let frasemostrar = "";
let contadorerror = 0;
let lletresUtilitzades = [];
let comproba;

//Creem stats
if (window.localStorage.getItem('Guanyades')==null){
    window.localStorage.setItem('Guanyades','0');
}

if (window.localStorage.getItem('Perdudes')==null){
    window.localStorage.setItem('Perdudes','0');
}

if (window.localStorage.getItem('Jugades')==null){
    window.localStorage.setItem('Jugades','0');
}


function partida(){
    //Demana paraula i la torna amagada i crea botons 
    frase = prompt("Escriu una paraula o frase per a endivinar!");
    crearAbecedari();
    fraseocultada = "";
    for (let i = 0; i < frase.length;i++){
        fraseocultada = fraseocultada + "_";
    }
    document.getElementById("frase").innerHTML = '<b>' + fraseocultada + '</b>';
    document.getElementById("imatgePenjat").src="/penjatimgs/penjat_0.png";
}

function clickLletra(lletra){
    //Click a la lletra i fem totes les comprovacions
    console.log(lletra)
    frasemostrar = "";
    for (i=0;i<fraseocultada.length;i++){
        if (fraseocultada.charAt(i) == "_"){
                if(frase.charAt(i)==lletra){
                    console.log("Si");
                    frasemostrar += lletra;
                }else{
                    console.log("No");
                    frasemostrar += "_";
                }
            }else{
                frasemostrar += fraseocultada[i];
            }
    }   
    if (frasemostrar==comproba){
        alert("Fallaste");
        lletresUtilitzades.push(lletra);
        contadorerror=contadorerror+1;
        //Cambiem les img
        if (contadorerror==1){
            document.getElementById("imatgePenjat").src="/penjatimgs/penjat_1.png";
        }else if (contadorerror==2){
            document.getElementById("imatgePenjat").src="/penjatimgs/penjat_2.png";
        }else if (contadorerror==3){
            document.getElementById("imatgePenjat").src="/penjatimgs/penjat_3.png";
        }else if (contadorerror==4){
            document.getElementById("imatgePenjat").src="/penjatimgs/penjat_4.png";
        }else if (contadorerror==5){
            document.getElementById("imatgePenjat").src="/penjatimgs/penjat_5.png";
        }else if (contadorerror==6){
            document.getElementById("imatgePenjat").src="/penjatimgs/penjat_6.png";
        }
        document.getElementById("lletresUtilitzades").innerHTML = '<b>' + "Lletres utilitzades: " + lletresUtilitzades + '</b>';
        document.getElementById("contadorerror").innerHTML = '<b>' + "Errores: " + contadorerror + '</b>';
    }
    comproba= frasemostrar;
    fraseocultada = frasemostrar;
    document.getElementById("frase").innerHTML = '<b>' + fraseocultada + '</b>';
    //Comprobem si guanyes o perds
    if (contadorerror==6){
        alert("Te has ahorcado!");
        sumarPartidas();
        sumarLoss();
        location.reload();
    }
    if (frasemostrar==frase){
        alert("Has ganado!");
        sumarPartidas();
        sumarWins();
        location.reload();
    }
}

function stats(){
    //Alert amb totes les stats calculades
    let partidesGuanyades = getValor("Guanyades");
    let partidesPerdudes = getValor("Perdudes");
    let partidesJugades = getValor("Jugades");
    let percentGuanyades;
    let percentPerdudes;
    console.log("Jugades " + partidesJugades);
    console.log("Guanyades " + partidesGuanyades);
    console.log("Perdudes " + partidesPerdudes);
    if(partidesGuanyades + partidesPerdudes == 0) {
        console.log("0");
    } else {
        percentGuanyades = partidesGuanyades/partidesJugades;
        percentPerdudes = partidesPerdudes/partidesJugades;
        console.log("Guanyades% " + percentGuanyades);
        console.log("Perdudes% " + percentPerdudes);
    }
    alert("Jugades: "+partidesJugades+"\n"+"Guanyades: "+partidesGuanyades+"\n"+"Perdudes: "+partidesPerdudes+"\n"+"Guanyades Percentatge: "+percentGuanyades+"\n"+"Perdudes Percentatge: "+percentPerdudes);
}

function crearAbecedari(){
    //Creació de botons per lletra 
    let caracters = "abcdefghijklmnopqrstuvwxyz";
    let sortida ="";
    for (let n=0; n<caracters.length; n++){
        sortida += '<button type="button" class="tecla" onclick="clickLletra(\'' + caracters.charAt(n) + '\')">' + caracters.charAt(n) + '</button>';
    } 

    document.getElementById("abecedari").innerHTML = sortida;

}

function getValor(clave){
    return parseInt(window.localStorage.getItem(clave));
}

function sumarPartidas(){
    window.localStorage.setItem("Jugades", parseInt(window.localStorage.getItem("Jugades"))+1);
}

function sumarWins(){
    window.localStorage.setItem("Guanyades", parseInt(window.localStorage.getItem("Guanyades"))+1);
}

function sumarLoss(){
    window.localStorage.setItem("Perdudes", parseInt(window.localStorage.getItem("Perdudes"))+1);
}

function borrar(){
    window.localStorage.clear();
}