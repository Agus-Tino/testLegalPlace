import { getEvolutionFactor } from "./serviceFunction.js";

export class Drug {
  constructor(name, expiresIn, benefit, evoExpiresIn, evoBenef, intervalEvoBenef, zeroAfterExpiration) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.evoExpiresIn = evoExpiresIn;
    this.evoBenef = evoBenef;
    this.intervalEvoBenef = intervalEvoBenef;
    this.zeroAfterExpiration = zeroAfterExpiration;
    
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];
      const { evoExpiresIn, evoBenef, intervalEvoBenef } = drug;
      const evoBenefValue = getEvolutionFactor(drug.expiresIn, evoBenef, intervalEvoBenef);
      drug.benefit += evoBenefValue;
      drug.expiresIn += evoExpiresIn;
      if (drug.benefit < 0) {
        drug.benefit = 0;
      } else if (drug.benefit > 50) {
        drug.benefit = 50;
      }
      if (drug.expiresIn < 0 && drug.zeroAfterExpiration) {
        drug.benefit = 0;
      }
    }
    return this.drugs; // ✅ This should be inside the function
  }


    /*
      if (
        this.drugs[i].name != "Herbal Tea" &&
        this.drugs[i].name != "Fervex"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != "Magic Pill") {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        }
      }
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    */}