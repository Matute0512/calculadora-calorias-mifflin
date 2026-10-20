/**
 * Obtiene los datos limpios del formulario (Actualizado para inputs tipo radio)
 */
export const getFormData = () => {
    const genderElement = document.querySelector('input[name="sexo"]:checked');
    const activityElement = document.querySelector('input[name="actividad"]:checked');

    return {
        weight: parseFloat(document.getElementById('peso').value),
        height: parseFloat(document.getElementById('altura').value),
        age: parseInt(document.getElementById('edad').value),
        gender: genderElement ? genderElement.value : 'hombre',
        activity: activityElement ? parseFloat(activityElement.value) : 1.2
    };
};

/**
 * Renderiza los resultados en el DOM (Actualizado para el nuevo diseño)
 */
export const renderResults = (bmr, tdee, goals, allMacros) => {
    // TMB
    document.getElementById('bmr-result').textContent = bmr;

    // Calorías
    document.getElementById('deficit-calories').textContent = goals.deficit;
    document.getElementById('maintenance-calories').textContent = goals.maintenance;
    document.getElementById('surplus-calories').textContent = goals.surplus;

    // Macros Déficit
    if (allMacros && allMacros.deficit) {
        document.getElementById('deficit-pro').textContent = `${allMacros.deficit.protein}g`;
        document.getElementById('deficit-carb').textContent = `${allMacros.deficit.carbs}g`;
        document.getElementById('deficit-fat').textContent = `${allMacros.deficit.fat}g`;
    }

    // Macros Mantenimiento
    if (allMacros && allMacros.maintenance) {
        document.getElementById('maintenance-pro').textContent = `${allMacros.maintenance.protein}g`;
        document.getElementById('maintenance-carb').textContent = `${allMacros.maintenance.carbs}g`;
        document.getElementById('maintenance-fat').textContent = `${allMacros.maintenance.fat}g`;
    }

    // Macros Superávit
    if (allMacros && allMacros.surplus) {
        document.getElementById('surplus-pro').textContent = `${allMacros.surplus.protein}g`;
        document.getElementById('surplus-carb').textContent = `${allMacros.surplus.carbs}g`;
        document.getElementById('surplus-fat').textContent = `${allMacros.surplus.fat}g`;
    }

    // Ocultar estado vacío, mostrar resultados
    document.getElementById('empty-state').classList.add('hidden');
    document.getElementById('results-section').classList.remove('hidden');
};

/**
 * Rellena el formulario con datos guardados
 */
export const populateForm = (data) => {
    if (!data) return;

    const textFieldsMap = { weight: 'peso', height: 'altura', age: 'edad' };
    for (const [key, id] of Object.entries(textFieldsMap)) {
        const element = document.getElementById(id);
        if (element && data[key]) {
            element.value = data[key];
        }
    }

    // Seleccionar radio button de sexo
    if (data.gender) {
        const genderRadio = document.querySelector(`input[name="sexo"][value="${data.gender}"]`);
        if (genderRadio) genderRadio.checked = true;
    }

    // Seleccionar radio button de actividad
    if (data.activity) {
        const activityRadio = document.querySelector(`input[name="actividad"][value="${data.activity}"]`);
        if (activityRadio) activityRadio.checked = true;
    }
};

/**
 * Inicializa la lógica visual de las pestañas (Tabs)
 */
export const initTabs = () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Quitar estilos activos de todos los botones
            tabBtns.forEach(b => {
                b.classList.remove('text-indigo-600', 'border-indigo-600', 'bg-white');
                b.classList.add('text-slate-500', 'border-transparent');
            });
            // 2. Añadir estilo activo al botón clickeado
            btn.classList.add('text-indigo-600', 'border-indigo-600', 'bg-white');
            btn.classList.remove('text-slate-500', 'border-transparent');

            // 3. Ocultar todos los paneles
            tabPanels.forEach(p => p.classList.add('hidden'));

            // 4. Mostrar el panel correspondiente
            const target = btn.getAttribute('data-tab');
            document.getElementById(`panel-${target}`).classList.remove('hidden');
        });
    });
};