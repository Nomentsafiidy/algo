
let sommeBtn = document.querySelector("#somme");
let maxminBtn = document.querySelector("#maxmin");
let quotresteBtn = document.querySelector("#quotreste");
let produitBtn = document.querySelector("#produit");

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


