import {calcBMR, calcTDEE, calcGoals} from '../scripts/calculator.js';

describe('Módulo Calculator - Ecuación Mifflin-St Jeor', () => {
    // Caso de prueba: Hombre, 25 años, 75 kg, 180 cm.
    // Fórmula BMR: (10 * 75) + (6.25 * 180) - (5 * 25) + 5 = 1755
    test('Debe calcular correctamente la TMB para un perfil de 25 años masculino', () => {
        const bmr = calcBMR(75, 180, 25, 'hombre');
        expect(bmr).toBe(1755);
    });

    // Nivel de actividad alto (ej. musculación, natación estilo crol, remo) = 1.725
    // GET: 1755 * 1.725 = 3027.375
    test('Debe calcular correctamente el GET para factores de actividad altos', () => {
        const tdee = calcTDEE(1755, 1.725);
        expect(tdee).toBeCloseTo(3027.375, 2);
    });

    test('Debe calcular los objetivos asegurando que el déficit nunca sea menor que la TMB', () => {
        const goals = calcGoals(3027.375, 1755);
        expect(goals.deficit).toBeGreaterThanOrEqual(1755);
        expect(goals.maintenance).toBe(3027);
        expect(goals.surplus).toBeGreaterThan(3027);
    });
});