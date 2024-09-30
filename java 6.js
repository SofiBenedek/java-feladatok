
let szoveg = "Hello123World!";


for (let i = 0; i < szoveg.length; i++) {
    let karakter = szoveg[i]; 


    if (karakter.match(/[a-zA-Z]/)) {
        
        console.log(karakter);
    } else {
      
        break;
    }
}
