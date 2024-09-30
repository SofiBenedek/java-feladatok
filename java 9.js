
let pontszam = prompt("Kérlek, add meg a pontszámodat (0-100 között):");

pontszam = parseFloat(pontszam);
if (isNaN(pontszam) || pontszam < 0 || pontszam > 100) {
    console.log("Kérlek, érvényes pontszámot adj meg (0-100 között)!");
} else {
    
    let osztalyzat;
    if (pontszam >= 90) {
        osztalyzat = 'A';
    } else if (pontszam >= 80) {
        osztalyzat = 'B';
    } else if (pontszam >= 70) {
        osztalyzat = 'C';
    } else if (pontszam >= 60) {
        osztalyzat = 'D';
    } else {
        osztalyzat = 'F';
    }

    
    console.log(`A pontszámod: ${pontszam}, a levélosztályzat: ${osztalyzat}`);
}
