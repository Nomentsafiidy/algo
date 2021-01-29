// Var I,N,S :entier ;
// Début
// Ecrire(‘Donner un entier N’) ; Lire(N) ;
// S -0 ;
// Pour I —1 a N-1 Faire
// S —S+I;
// Fait ;
// Ecrire(‘La somme des’, N,’ premiers nombres est: ’,S) ;
// Fin.


let sommeBtn = document.querySelector("#somme");
let maxminBtn = document.querySelector("#maxmin");

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


// Algorithme MaxMin;
// Var I,N,Max,Min,X :entier ;
// Début
// Ecrire(‘Donner un entier N>0’) ;
// Répéter Lire(N) ; Jusqu’à N>0 ;
/* Lire le premier élément, puis initialiser le Min et le Max a cette valeur Lire(X) ; Max—X ; Min—X ;
Pour I —2 a N Faire
/* lire la suite des éléments et mettre a jour le Min et le Max
Lire(X) ;
Si Max<X Alors Max—X
Sinon Si Min>X Alors Min—X Fsi
Fsi ;
Fait ;
Ecrire(‘Le Minimun des valeurs est: ’,Min,’ le Maximum est : ‘,Max) ;
Fin


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


