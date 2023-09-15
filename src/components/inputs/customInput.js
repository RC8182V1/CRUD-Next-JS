import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { InputRead } from "./inputRead";
import { InputUpdate } from "./inputUpdate";

export const CustomInput = (props) => {
  const id = props?.id;
  const name = props?.name;
  const mode = props?.mode;
  const newName = props?.newName;
  const updateMode = props?.updateMode;
  const updateUser = props?.updateUser;
  return (
    <Flex>
      {mode === false && id === id ? (
        <InputRead name={name} updateMode={updateMode} updateUser={updateUser}/>
      ) : (
        <InputUpdate newName={newName} name={name} updateMode={updateMode} />
      )}
    </Flex>
  );
};
