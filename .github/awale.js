class Plateau {
  constructor() {
    this.nord = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
    this.sud = { G: 0, H: 0, I: 0, J: 0, K: 0, L: 0 };
  }

  display() {
    let clesNord = "";
    let valeursNord = "";
    let clesSud = "";
    let valeursSud = "";
    for (let i = 0; i < Object.keys(this.nord).length; i++) {
      clesNord += ` ${Object.keys(this.nord)[i]} `;
      valeursNord += `(${Object.values(this.nord)[i]})`;
      valeursSud += `(${Object.values(this.sud)[i]})`;
      clesSud += ` ${Object.keys(this.sud)[i]} `;
    }
    console.log(clesNord);
    console.log(valeursNord);
    console.log(valeursSud);
    console.log(clesSud);
  }

  isEmpty() {
    for (let i = 0; i < Object.values(this.nord).length; i++) {
      if (Object.values(this.nord)[i] !== 0) {
        console.log("false");
        return false;
      }
      if (Object.values(this.sud)[i] !== 0) {
        console.log("false");
        return false;
      }
    }
    console.log("true");
    return true;
  }
}

const plateau = new Plateau();
plateau.display();
plateau.isEmpty();
