/**
 * Obtiene y valida los datos del formulario.
 * @returns {{ peso: number, altura: number, edad: number, sexo: string, factorActividad: number } | null}
 */
export function getFormData(){
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const edad = parseInt (document.getElementById('edad').value);
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value;
    const factorActividad = parseFloat(document.getElementById('actividad').value);

    if (!peso || !altura || !edad || !sexo || ! factorActividad){
        return null;
    }

    return {peso, altura, edad, sexo, factorActividad};
}

/**
 * Muestra los resultados en las targetas correspondientes
 * @param {{deficit: number, maintenance: number, surplus: number}} goals
 */
export function renderResults(goals) {
    document.getElementById('deficit-calories').textContent = `${goals.deficit} kcal/día`;
    document.getElementById('maintenance-calories').textContent = `${goals.maintenance} kcal/día`;
    document.getElementById('surplus-calories').textContent = `${goals.surplus} kcal/día`;

    document.getElementById('results-section').classList.remove('hidden');
}

export const populateForm = (data) => {
    if (!data) return;

    const fields = ['peso', 'altura', 'edad', 'sexo', 'actividad'];
    fields.forEach(field => {
        const element = document.getElementById(field);
        if (element && data[field]){
            element.value = data[field];
        }
    });
};