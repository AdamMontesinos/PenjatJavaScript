let frase;
let fraseocultada = "";
let frasemostrar = "";
let contadorerror = 0;
let lletresUtilitzades = [];
let comproba;

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
    console.log(lletra)
    frasemostrar = "";
    for (i=0;i<fraseocultada.length;i++){
        //La lletra existeix
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
    if (contadorerror==6){
        alert("Te has ahorcado!");
        location.reload();
    }
    if (frasemostrar==frase){
        alert("Has ganado!");
        location.reload();
    }
}

function stats(){
    alert("Para luego");
}

function crearAbecedari(){
    let caracters = "abcdefghijklmnopqrstuvwxyz";
    let sortida ="";
    for (let n=0; n<caracters.length; n++){
        sortida += '<button type="button" class="tecla" onclick="clickLletra(\'' + caracters.charAt(n) + '\')">' + caracters.charAt(n) + '</button>';
    } 

    document.getElementById("abecedari").innerHTML = sortida;

}