class Joueur {
  constructor() {
    this.score = 0;
  }
  getScore() {
    return this.score;
  }
  incrementScore() {
    this.score += 1;
  }
}

class Plateau {
  constructor() {
    this.nord = { A: 4, B: 4, C: 4, D: 4, E: 4, F: 4 };
    this.sud = { G: 4, H: 4, I: 4, J: 4, K: 4, L: 4 };
    this.joueurNord = new Joueur();
    this.joueurSud = new Joueur();
    this.prochainJoueur = this.joueurNord;
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

  saw(trou) {
    if (this.prochainJoueur === this.joueurNord) {
      console.log("Le joueur Nord doit jouer");
      if (Object.keys(this.nord).includes(trou)) {
        console.log("Début du tour");
        let graines = this.nord[trou];
        let i = 0;
        while (graines > i) {
          graines -= 1;
          //   console.log(trou.charCodeAt(0));
          //   console.log(this.nord[String.fromCharCode(67)]);
        }
      } else {
        console.log(
          "Vous devez commencer dans l'un des trous de votre territoire !"
        );
      }
      this.prochainJoueur = this.joueurSud;
    } else {
      console.log("Le joueur Sud doit jouer");
      if (Object.keys(this.sud).includes(trou)) {
        console.log("Début du tour");
      } else {
        console.log(
          "Vous devez commencer dans l'un des trous de votre territoire !"
        );
      }
      this.prochainJoueur = this.joueurNord;
    }
  }

  //   incrementCheck() {
  //     console.log("new score " + this.joueurNord.getScore());
  //     this.joueurNord.incrementScore();
  //     console.log("new score " + this.joueurNord.getScore());
  //     this.joueurNord.incrementScore();
  //     console.log("new score " + this.joueurNord.getScore());
  //   }
}

const plateau = new Plateau();
plateau.display();
plateau.isEmpty();
plateau.saw("C");
plateau.saw("C");

// plateau.incrementCheck();
