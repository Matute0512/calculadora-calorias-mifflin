/**
 * Calcula la Tasa Metabólica Basal (TMB) usando Mifflin-St Jeor.
 * @param {number} peso - kg
 * @param {number} altura - cm
 * @param {number} edad - años
 * @param {string} sexo - "hombre" o "mujer"
 * @returns {number} TMB en kcal/día
 */
export function calcBMR(peso,altura,edad,sexo){
    const base = 10 * peso + 6.25 * altura - 5 * edad;
    return sexo == 'hombre' ? base + 5 : base - 161;
}

/**
 * Calcula el Gasto Energético Total (GET) aplicando factor de actividad.
 * @param {number} bmr - TMB
 * @param {number} factorActividad - multiplicador (1.2, 1.375, ...)
 * @returns {number} GET en kcal/dia
 */
export function calcTDEE(bmr, factorActividad){
    return bmr * factorActividad;
}

/**
 * Devuelve las calorías para los objetivos.
 * @param {number} tdee - GET
 * @param {number} mbr - TMB (para límite inferior del déficit)
 * @returns {{deficit: number , maintenance: number, surplus: number}}
 */
export function calcGoals(tdee, mbr){
    const deficit = Math.max(tdee -500, bmr); // No bajar de la TMB
    const maintenance = tdee;
    const surplus = tdee + 500;

    return {
        deficit: Math.round(deficit),
        maintenance: Math.round(maintenance),
        surplus: Math.round(surplus),
    };
}