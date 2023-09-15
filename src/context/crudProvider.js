import React, { createContext, useState } from 'react'


export const CrudContext= createContext()


export const CrudProvider = ({children}) => {




    const dataContext={}
  return (
    <CrudContext.Provider value={dataContext}>
        {children}
    </CrudContext.Provider>
  )
}