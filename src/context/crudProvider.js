import React, { createContext } from 'react';
const yup = require('yup');

export const CrudContext = createContext();

export const CrudProvider = ({ children }) => {
	/* YUP Validatin Schema*/
	const schema = yup.object().shape({
		name: yup
			.string()
			.required('El nombre es obligatorio')
			.min(2, 'El nombre debe tener al menos 2 caracteres')
			.max(50, 'El nombre debe tener como máximo 50 caracteres')
			.matches(/^[A-Za-z\s]+$/, 'El nombre solo puede contener letras y espacios'),
		surname: yup
			.string()
			.required('El apellido es obligatorio')
			.min(2, 'El apellido debe tener al menos 2 caracteres')
			.max(50, 'El apellido debe tener como máximo 50 caracteres')
			.matches(/^[A-Za-z\s]+$/, 'El apellido solo puede contener letras y espacios')
	});

	const dataContext = { schema };
	return <CrudContext.Provider value={dataContext}>{children}</CrudContext.Provider>;
};
