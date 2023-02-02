export const PERSONALFORM = 'PERSONALFORM';
export const PROFESSIONALFORM = 'PROFESSIONALFORM';

export const setPersonalForm = (personalData) => ({
    type: PERSONALFORM,
    payload: {...personalData},
});

export const setProfessionalForm = (professionalData) => ({
    type: PROFESSIONALFORM,
    payload: {...professionalData},
});
