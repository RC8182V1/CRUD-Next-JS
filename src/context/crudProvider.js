import React, { createContext } from 'react';
const yup = require('yup');

export const CrudContext = createContext();

export const CrudProvider = ({ children }) => {
	/* YUP Validatin Schema*/
	const schema = yup.object().shape({
		name: yup
		.string()
		.required("The name is required")
		.min(2, "The name must have at least 2 characters")
		.max(50, "The name must have a maximum of 50 characters")
		.matches(/^[A-Za-z\s]+$/, "The name can only contain letters and spaces"),
		surname: yup
		.string()
		.required("The surname is required")
		.min(2, "The surname must have at least 2 characters")
		.max(50, "The surname must have a maximum of 50 characters")
		.matches(/^[A-Za-z\s]+$/, "The surname can only contain letters and spaces"),
		});

	const dataContext = { schema };
	return <CrudContext.Provider value={dataContext}>{children}</CrudContext.Provider>;
};
