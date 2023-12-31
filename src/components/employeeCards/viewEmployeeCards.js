import { CrudContext } from '@/context/crudProvider';
import { pasarFecha } from '@/functions/functions';
import { EditIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, IconButton, Input, Stack, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';

export default function ViewEmployeeCards(props) {
	const { schema } = useContext(CrudContext);
	const name = props?.name;
	const surname = props?.surname;
	const id = props?.id;
	const birthdate = props?.birthdate;
	const age = props?.age;

	const [newName, setNewName] = useState(name);
	const [newSurname, setNewSurname] = useState(surname);
	const [newBirthdate, setNewBirthdate] = useState(pasarFecha(birthdate));

	const deleteUser = async () => {
		const res = await fetch('/api/deleteUser', {
			body: JSON.stringify({
				id: id
			}),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'DELETE'
		});
		const result = await res.json();
		console.log(result);
	};

	const updateUser = async () => {
		const res = await fetch('/api/updateUser', {
			body: JSON.stringify({
				id: id,
				name: newName,
				surname: newSurname,
				birthdate: newBirthdate,
				age: age
			}),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'PUT'
		});
		const result = await res.json();
		console.log(result);
	};

	const [mode, setMode] = useState(false);

	const updateMode = () => {
		setMode(!mode);
	};

	const data = {
		name: newName,
		surname: newSurname,
		birthdate: newBirthdate
	};

	const toast = useToast();

	const save = async () => {
		try {
			await schema.validate(data, { abortEarly: false });
			setMode(!mode);
			try {
				updateUser();
			} catch (error) {
				console.log(error);
			}
		} catch (error) {
			for (let i = 0; i < error.errors.length; i++) {
				toast({
					title: 'Please, check the following:',
					description: error.errors[i],
					status: 'error',
					duration: 9000,
					isClosable: true
				});
			}
		}
	};

	return (
		<Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }} p={{ base: 5, lg: 16 }}>
			<VStack spacing={{ base: 4, md: 8, lg: 20 }}>
				<Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={{ base: 'column', md: 'row' }}>
					<Box bg="black" borderRadius="lg" p={8} color="white" shadow="base">
						<IconButton
							icon={<EditIcon />}
							w={6}
							h={6}
							onClick={() => {
								updateMode();
							}}
						/>
						{mode === true && id === id ? (
							<Button
								width={'full'}
								type="submit"
								onClick={save}
								colorScheme="blue"
								bg="blue.400"
								color="white"
								_hover={{
									bg: 'blue.500'
								}}>
								Save
							</Button>
						) : (
							<Flex></Flex>
						)}

						<VStack spacing={5}>
							<h1 color="white">{'Employee ID: ' + id}</h1>

							{mode === false && id === id ? (
								<Input
									type="text"
									name="name"
									value={name}
									onChange={() => {}}
									placeholder="enter employee name"
									_placeholder={{
										color: 'white'
									}}
									borderColor="white"
								/>
							) : (
								<Input
									id="name"
									type="text"
									name="name"
									onChange={e => setNewName(e.target.value)}
									value={newName}
									placeholder={name}
									_placeholder={{
										color: 'white'
									}}
									borderColor="white"
								/>
							)}

							{mode === false && id === id ? (
								<Input
									type="text"
									name="surname"
									value={surname}
									onChange={() => {}}
									placeholder="enter employee name"
									_placeholder={{
										color: 'white'
									}}
									borderColor="white"
								/>
							) : (
								<Input
									type="text"
									name="surname"
									onChange={e => setNewSurname(e.target.value)}
									value={newSurname}
									placeholder={surname}
									_placeholder={{
										color: 'white'
									}}
									borderColor="white"
								/>
							)}

							{mode === false && id === id ? (
								<Input
									type="text"
									name="birthdate"
									value={pasarFecha(birthdate)}
									onChange={() => {}}
									placeholder="enter employee birthdate"
									_placeholder={{
										color: 'white'
									}}
									borderColor="white"
								/>
							) : (
								<Input
									type="date"
									name="birthdate"
									onChange={e => setNewBirthdate(e.target.value)}
									value={newBirthdate}
									placeholder="enter employee birthdate"
									_placeholder={{
										color: 'white'
									}}
									borderColor="white"
								/>
							)}
							{/*        <CustomInput id={id} name={name} mode={mode} newName={newName} updateUser={updateUser}/>*/}
							<Input
								type="text"
								name="age"
								value={age}
								onChange={() => {}}
								placeholder="enter employee age"
								_placeholder={{
									color: 'white'
								}}
								borderColor="white"
							/>

							<Button
								width={'full'}
								type="submit"
								onClick={deleteUser}
								colorScheme="red"
								bg="red.400"
								color="white"
								_hover={{
									bg: 'red.500'
								}}>
								Delete Employee Card
							</Button>
						</VStack>
					</Box>
				</Stack>
			</VStack>
		</Box>
	);
}
