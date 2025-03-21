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
      console.log(drug);
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
}