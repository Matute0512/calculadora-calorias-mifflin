import { calcBMR, calcTDEE, calcGoals } from './scripts/calculator.js';
import { getFormData, renderResults, populateForm, initTabs } from './scripts/ui.js'; // <-- Importamos initTabs
import { saveFormData, loadFormData } from './scripts/storage.js';
import { calcMacros } from './scripts/macros.js';

document.addEventListener('DOMContentLoaded', () => {
    // Iniciar pestañas visuales
    initTabs();

    const savedData = loadFormData();
    if (savedData) {
        populateForm(savedData);
    }

    const form = document.getElementById('calorie-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = getFormData();
        saveFormData(formData);

        const bmr = calcBMR(formData.weight, formData.height, formData.age, formData.gender);
        const tdee = calcTDEE(bmr, parseFloat(formData.activity));
        const goals = calcGoals(tdee, bmr);

        const allMacros = {
            deficit: calcMacros(formData.weight, goals.deficit),
            maintenance: calcMacros(formData.weight, goals.maintenance),
            surplus: calcMacros(formData.weight, goals.surplus)
        };

        renderResults(bmr, tdee, goals, allMacros);
    });
});