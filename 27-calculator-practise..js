function hesapla(){
    let sayi1 = document.querySelector("#txtSayi1").value;
    let sayi2 = document.querySelector("#txtSayi2").value;

    sayi1=Number(sayi1);
    sayi2=Number(sayi2);

    topla(sayi1, sayi2);
    cikar(sayi1, sayi2);
    carp(sayi1,sayi2);
    bol(sayi1, sayi2);
}

function topla(sayi1, sayi2){
    let toplam=0;
    toplam=sayi1+sayi2;
    let sonuc = document.querySelector("#sonuc").innerHTML=toplam;
}

function cikar(sayi1, sayi2){
    let cikar=0;
    cikar=sayi1-sayi2;
    let sonuc = document.querySelector("#sonuc").innerHTML=cikar;
}

function carp(sayi1,sayi2){
    let carp=1;
    carp=sayi1*sayi2;
    let sonuc = document.querySelector("#sonuc").innerHTML= `Sonuc : ${carp}`;
}

function bol(sayi1, sayi2){
    let bol=1;
    bol=sayi1/sayi2;
    let sonuc = document.querySelector("#sonuc").innerHTML = bol;
}