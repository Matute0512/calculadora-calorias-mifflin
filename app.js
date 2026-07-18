import { calcBMR, calcTDEE, calcGoals } from './scripts/calculator.js';
import { getFormData, renderResults, populateForm } from './scripts/ui.js';
import { saveFormData, loadFormData } from './scripts/storage.js';
import { calcMacros } from './scripts/macros.js';

document.addEventListener('DOMContentLoaded', () => {
    // Recupera los datos y llena el formulario
    const savedData = loadFormData();
    if (savedData) {
        populateForm(savedData);
    }

    const form = document.getElementById('calorie-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Datos e Interfaz
        const formData = getFormData();
        saveFormData(formData);

        // 2. Cálculos de Energía
        const bmr = calcBMR(formData.weight, formData.height, formData.age, formData.gender);
        const tdee = calcTDEE(bmr, parseFloat(formData.activity));
        const goals = calcGoals(tdee, bmr);

        // 3. Cálculos de Macronutrientes (El origen del undefined solucionado)
        const allMacros = {
            deficit: calcMacros(formData.weight, goals.deficit),
            maintenance: calcMacros(formData.weight, goals.maintenance),
            surplus: calcMacros(formData.weight, goals.surplus)
        };

        // 4. Renderizado Final
        renderResults(bmr, tdee, goals, allMacros);
    });
});