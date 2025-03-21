import { Drug, Pharmacy } from "./pharmacy.js";

import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30, -1, [-1,-2], [Infinity, 0, -Infinity],  false),
  new Drug("Herbal Tea", 10, 5, -1, [1,2], [Infinity, 0, -Infinity],  false),
  new Drug("Fervex", 12, 35, -1, [1,2,3], [Infinity, 10, 5, -Infinity],  true),
  new Drug("Magic Pill", 15, 40, 0, [0], [Infinity, -Infinity],  false),
  new Drug("Dafalgan", 20, 20, -1, [-2, -4], [Infinity, 0, -Infinity],  false),
];
const pharmacy = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
}

/* eslint-disable no-console */
fs.writeFile(
  "output.json",
  JSON.stringify({ result: log }, null, 2).concat("\n"),
  (err) => {
    if (err) {
      console.log("error");
    } else {
      console.log("success");
    }
  },
);

/* eslint-enable no-console */
