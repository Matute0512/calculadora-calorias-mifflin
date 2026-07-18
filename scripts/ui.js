/**
 * Obtiene los datos limpios del formulario
 */
export const getFormData = () => {
    const genderElement = document.querySelector('input[name="sexo"]:checked');
    return {
        weight: parseFloat(document.getElementById('peso').value),
        height: parseFloat(document.getElementById('altura').value),
        age: parseInt(document.getElementById('edad').value),
        gender: genderElement ? genderElement.value : 'hombre',
        activity: parseFloat(document.getElementById('actividad').value)
    };
};

/**
 * Función auxiliar para inyectar la lista de macros en el HTML
 */
const renderMacros = (elementId, macros) => {
    const container = document.getElementById(elementId);
    if (container && macros) {
        container.innerHTML = `
            <ul style="list-style: none; padding: 0; margin-top: 10px; font-size: 0.9em;">
                <li>🥩 Proteínas: <strong>${macros.protein}g</strong></li>
                <li>🥑 Grasas: <strong>${macros.fat}g</strong></li>
                <li>🍚 Carbohidratos: <strong>${macros.carbs}g</strong></li>
            </ul>
        `;
    }
};

/**
 * Renderiza los resultados en el DOM
 */
export const renderResults = (bmr, tdee, goals, allMacros) => {
    document.getElementById('deficit-calories').textContent = `${goals.deficit} kcal/día`;
    document.getElementById('maintenance-calories').textContent = `${goals.maintenance} kcal/día`;
    document.getElementById('surplus-calories').textContent = `${goals.surplus} kcal/día`;

    // Renderizamos los macronutrientes asegurándonos de que allMacros exista
    if (allMacros) {
        renderMacros('deficit-macros', allMacros.deficit);
        renderMacros('maintenance-macros', allMacros.maintenance);
        renderMacros('surplus-macros', allMacros.surplus);
    }

    document.getElementById('results-section').classList.remove('hidden');
};

/**
 * Rellena el formulario con datos guardados previamente
 */
export const populateForm = (data) => {
    if (!data) return;

    // Mapeamos las claves del objeto con los IDs de tu HTML
    const fieldsMap = {
        weight: 'peso',
        height: 'altura',
        age: 'edad',
        activity: 'actividad'
    };

    for (const [key, id] of Object.entries(fieldsMap)) {
        const element = document.getElementById(id);
        if (element && data[key]) {
            element.value = data[key];
        }
    }

    if (data.gender) {
        const radio = document.getElementById(data.gender);
        if (radio) {
            radio.checked = true;
        }
    }
};