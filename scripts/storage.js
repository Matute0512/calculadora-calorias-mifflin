const STORAGE_KEY = 'calc_mifflin_data_v1';

export const saveFormData = (data) => {
    try {
        localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
    } catch (error) {
        console.error('Error al guardar los datos en LocalStorage: ',error);
    }
};

export const loadFormData = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error al recuperar los datos de LocalStorage: ',error);
        return null;
    }
};