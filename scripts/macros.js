/**
 * Módulo de cálculos de macronutrientes
 * @param {number} weight - Peso del usuario en kg
 * @param {number} targetCalories - Calorias objetivo (GET, déficit o superávit)
 * @returns {Object} Gramos de proteína, grasa y carbohidratos
*/
export const calcMacros= (weight, targetCalories) => {
    // Proteínas: constante estática de 2.0g por kilo (1g = 4kcal)
    const proteinGrams = Math.round(weight * 2.0);
    const proteinCalories = proteinGrams * 4;

    // Grasas: constante del 25% de las calorías totales (1g = 9 kcal)
    const fatCalories = targetCalories * 0.25;
    const fatGrams = Math.round(fatCalories / 9);

    // Carbohidratos: el presupuesto calórico restante (1g = 4 kcal)
    const carbCalories = targetCalories - (proteinCalories + fatCalories);
    const carbGrams = Math.round(carbCalories / 4);

    return {
        protein: proteinGrams,
        fat: fatGrams,
        carbs: Math.max(0, carbGrams) // Prevenir valores negativos
    };
};