
let jatekos1 = parseInt(prompt("Az első játékos válassza a számot (0: Kő, 1: Papír, 2: Olló):"));
let jatekos2 = parseInt(prompt("A második játékos válassza a számot (0: Kő, 1: Papír, 2: Olló):"));


if (jatekos1 === jatekos2) {
    console.log("A játék döntetlen.");
} else if ((jatekos1 === 0 && jatekos2 === 2) ||
           (jatekos1 === 1 && jatekos2 === 0) ||
           (jatekos1 === 2 && jatekos2 === 1)) {
    console.log("Az első játékos nyer.");
} else {
    console.log("A második játékos nyer.");
}
