function atlagSzamitas(szam) {
   
    const szamString = szam.toString();
    
    let osszeg = 0; 
    let szamol = 0;

    for (let i = 0; i < szamString.length; i++) {
    
        const a = parseInt(szamString[i], 10);
        
        osszeg += a;
        szamol++;
    }
    
    const atlag = osszeg / szamol;
    
    console.log(`A számjegyek átlaga: ${atlag}`);
}

atlagSzamitas(268);
