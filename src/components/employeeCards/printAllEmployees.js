import { HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ViewEmployeeCards from './viewEmployeeCards';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const PrintAllEmployees = () => {
	const getUsers = async () => {
		const api = '/api/getAllusers';
		const response = await fetch(api);
		const data = await response.json();
		return data;
	};
	const queryClient = useQueryClient();
	const { data: employee, isLoading, isError, error } = useQuery('employee', getUsers);

	const { mutate, status } = useMutation(getUsers);

	useEffect(() => {
		mutate();
		if (status === 'success') {
			queryClient.invalidateQueries('employee');
		}
	}, [status, queryClient]);

	return (
		<HStack flexWrap={'wrap'}>
			{isLoading ? (
				<div>Loading...</div>
			) : isError ? (
				<div>Error: {error.message}</div>
			) : (
				employee &&
				employee.map(object => (
					<div key={object.id}>
						<ViewEmployeeCards
							id={object.id}
							name={object.name}
							surname={object.surname}
							birthdate={object.birthdate}
							age={object.age}
						/>
					</div>
				))
			)}
		</HStack>
	);
};
