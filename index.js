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