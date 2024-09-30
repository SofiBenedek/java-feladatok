
let meret = parseInt("Kérem adja meg a négyzet méretét:");


let negyzet = '';


for (let i = 0; i < meret; i++) {
    for (let j = 0; j < meret; j++) {
      
        if (i === 0 || i === meret - 1 || j === 0 || j === meret - 1 || i === j) {
            negyzet += '%'; 
         } else {
            negyzet += ' ';  
        }
    }
    negyzet += null; 
}


console.log(negyzet);
