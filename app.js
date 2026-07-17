import {calcBMR, calcTDEE, calcGoals} from './scripts/calculator.js';
import {getFormData, renderResults} from './scripts/ui.js';

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