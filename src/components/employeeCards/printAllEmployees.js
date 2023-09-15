import { HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ViewEmployeeCards from "./viewEmployeeCards";

export const PrintAllEmployees = () => {
  const [employee, setEmployee] = useState();

  const getUsers = async () => {
    const api = "http://localhost:3000/api/getAllusers";
    await fetch(api)
      .then((res) => res.json())
      .then((res) => setEmployee(res));
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <HStack flexWrap={"wrap"}>
      {employee &&
        employee.map((object) => (
          <div key={object.id}>
            <ViewEmployeeCards
              id={object.id}
              name={object.name}
              surname={object.surname}
              birthdate={object.birthdate}
              age={object.age}
            />
          </div>
        ))}
        
    </HStack>
    
  );
};
