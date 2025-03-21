function getEvolutionFactor(day, evolutionBenef, intervalEvolutionBenef) {
    for (let i = 0; i < evolutionBenef.length; i++) {
        if (day < intervalEvolutionBenef[i] && day >= intervalEvolutionBenef[i + 1]) {
            return evolutionBenef[i];
        }
    }
    throw new Error("The intervals dont cover.");
}

