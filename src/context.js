import { createContext } from "react";

const FormContext = createContext({
    form: {},
    setForm: () => {}
  });

export default FormContext;