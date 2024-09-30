let szam = 10; 

while (szam <= 30) { 
    let osztok = ""; 

   
    let i = 1; 
    while (i <= szam) {
        if (szam % i === 0) { 
            osztok += i + ", "; 
        }
        i++; 
    }


    console.log(szam + ": " + osztok + ","); 
    szam++; 
}
