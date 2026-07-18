import {calcBMR, calcTDEE, calcGoals} from './scripts/calculator.js';
import {getFormData, renderResults} from './scripts/ui.js';
import { saveFormData, loadFormData } from './scripts/storage.js';


document.getElementById('calorie-form').addEventListener('submit', function(event){
    event.preventDefault();

    const data = getFormData();
    if(!data){
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    const bmr = calcBMR(data.peso, data.altura, data.edad, data.sexo);
    const tdee = calcTDEE(bmr, data.factorActividad);
    const goals = calcGoals(tdee, bmr);

    renderResults(goals);
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar datos persistidos si existen
    const savedData = loadFormData();
    if (savedData) {
        populateForm(savedData);
    }

    const form = document.getElementById('calorie-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 2. Obtener datos limpios de la UI
        const formData = getFormData();

        // 3. Persistir en LocalStorage
        saveFormData(formData);

        // 4. Lógica de negocio (pura)
        const bmr = calcBMR(formData.weight, formData.height, formData.age, formData.gender);
        const tdee = calcTDEE(bmr, parseFloat(formData.activity));
        const goals = calcGoals(tdee, bmr);

        // 5. Renderizar resultados en el DOM
        renderResults(bmr, tdee, goals);
    });
});