
let sommeBtn = document.querySelector("#somme");
let maxminBtn = document.querySelector("#maxmin");
let quotresteBtn = document.querySelector("#quotreste");
let produitBtn = document.querySelector("#produit");
let adivbBtn = document.querySelector("#adivb");
let diviseursBtn = document.querySelector("#diviseurs");
let nbpremierBtn = document.querySelector("#nbpremier");
let sommeChiffreBtn = document.querySelector("#sommeChiffre");

/**
 * function somme de n premiere entier
 */
sommeBtn.addEventListener("click", ()=>{
    let n = parseInt(prompt("Donner un enteir N"));
    let s = 0
    for(let i = 1; i <= n; i++){
        s += i; 
    }
    alert(`la somme des ${n} premiers nombres est : ${s}`)
}, false);

/**
 * function maxmin
 */
maxminBtn.addEventListener("click", ()=>{
    let min,max, n, x; 
    n = parseInt(prompt("Donner un entier N>0"));
    x = parseInt(prompt("Entrer le premier élément"));
    max = x;
    min = x;
    for(let i = 2; i <= n; i++){
        x = parseInt(prompt("Entrer l'élement"+ i +" ."));
        if (x < min) {
            min = x
        } else if(x > max) {
            max = x
        }
    }
    alert(`Le Minimun des valeurs est: ${min} le Maximum est : ${max}`);
}, false);

/**
 * function quot reste
 */
quotresteBtn.addEventListener("click", ()=>{
    let a,b,q,r;
    a = parseInt(prompt("Entrer a"));
    b = parseInt(prompt("Entrer b"));
    q= 0;
    r = a;
    while(r > b){
        q  += 1;
        r -= b;
    }
    alert(`Le Quotient de A/B est : ${q} Le reste de A/Best : ${r}`)
}, false);

/**
 * function produitBtn
 */
produitBtn.addEventListener("click", ()=>{
    let a,b,p;
    a = parseInt(prompt("Entrer a"));
    b = parseInt(prompt("Entrer b"));
    if(a===0 || b===0){
        p = 0;
    }else if (a > b){
        p = a;
        for(let i = 2; i <= b; i++){
            p += a;
        }
    }else {
        p = b;
        for(let i = 2; i <= a; i++){
            p += b;
        }
    }
    alert(`le produit ${a} * ${b} est : ${p}`)
}, false);

/**
 * function a div b
 */
adivbBtn.addEventListener("click", ()=>{
    let a,b,r;
    do{
        a = parseInt(prompt("Entrer a positif"));
        b = parseInt(prompt("Entrer b positif"));
    }while(a < 0 || b < 0)
    r = a;
    while( r > 0 ){
        r -= b;
    }
    if(r === 0){
        alert(`${a} est divisible par ${b} `);
    }else {
        alert(`${a} n'est pas divisible par ${b} `);
    }
}, false);

/**
 * function diviseurs
 */
diviseursBtn.addEventListener("click", ()=>{
    let x,m;
    let tab = [];
    x = parseInt(prompt("Entrer x"));
    m = parseInt(x / 2);
    for (let i = 0; i < m; i++){
        if(x % i === 0){
            tab.push(i)
        }
    }
    alert(`les diviseur de ${x} sont : ${ tab },${x} `);
}, false);

/**
 * function nombre premier
 */
nbpremierBtn.addEventListener("click", ()=>{
    let x,m, pr = false;
    x = parseInt(prompt("Entrer x"));
    if(x===1){
        pr= false;
    }else{
        m = parseInt(x/2); 
    }
    let i = 2
    while(i <= m && !pr){
        if(x % i === 0){
            pr=true
        }
        i++;
    }
    if(pr){
        alert(`le nombre ${x} n'est pas un nombre premier `);
    }else{
        alert(`le nombre ${x} est un nombre premier `);
    }
}, false);

/**
 * function Somme chiffre
 */
sommeChiffreBtn.addEventListener("click", ()=>{
    let n,s,r;
    n = parseInt(prompt("Entrer un entier naturel N"));
    s = 0;
    r = n
    while(r>0){
        s = parseInt(s + (r % 10));
        r = parseInt(r / 10);
    }
   alert(`la somme des chiffres qui compose ${n} est ${s} `);
}, false);


