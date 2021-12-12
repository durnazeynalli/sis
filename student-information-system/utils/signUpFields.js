import React , {useState} from 'react'

export const [ fields, setFields ] = useState({
   email: { value: '', placeholder: 'email' },
   userName: { value: '', placeholder: 'username' },
   name: { value: '', placeholder: 'full name' },
   password: { value: '', placeholder: 'password' },
   rePassword: { value: '', placeholder: 'repeat password' }
});
export const fieldChnageHandler = (name, value) => {
   clearAuthError();
   setFields((fields) => ({
      ...fields,
      [name]: {
         ...fields[name],
         value
      }
   }));
};
