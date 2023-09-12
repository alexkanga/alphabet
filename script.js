function nombrePremier(nombre){
    let estNombrePremier = true;
    if(nombre===1 || nombre===0) estNombrePremier=false;
    if(typeof nombre === 'number'){
        for(let i = 2; i < nombre; i++){
            if(nombre % i === 0 ){
                estNombrePremier = false;
            }
        }
    }
    console.log(`${nombre} est un nombre premier : ${estNombrePremier}`);
    return estNombrePremier;
}

function positionDansChainePremier(str){
    str.trim();
    let arr = str.split('');
    let arrayPremier=[];
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        if(nombrePremier(i)===true){
            arrayPremier.push(arr[i]);
            console.log(i)
        }
    }
    console.log(arrayPremier);
    console.log(arr[0]);
}

function alphabetPremier(str){
    str.trim();
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z'];
    //position 
    console.log(alphabet.indexOf('a')+1);
    let arr = str.split('');
    let arrayPremier=[];
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        if(nombrePremier(i)===true){
            arrayPremier.push(arr[i]);
            console.log(i)
        }
    }
    console.log(arrayPremier);
    console.log(arr[0]);
}

alphabetPremier('avion');
// for(let i = 1; i < 27; i++) {
// nombrePremier(i);
// }