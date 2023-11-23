import { useState } from "react";
import './App.css';
import FormInput from "./components/formInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage:
        "Nazwa użytkownika powinna mieć od 3 do 16 znaków i nie powinny zawierać żadnych spejlanych znaków",
    label: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage:
        "Powinien to być prawidłowy adres e-mail!",
    label: "Email",
    required: true,
  },
  {
    id: 3,
    name: "birthday",
    type: "date",
    placeholder: "Birthday",
    label: "Birthday",
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
        "Hasło powinno mieć 8-20 znaków i zawierać co najmniej 1 literę, 1 cyfrę i 1 znak specjalny",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 5,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage:"Hasła nie pasują",    
    label: "Confirm Password",
    pattern: values.password,
    required: true,
  },
        
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registered Form</h1>
        {inputs.map((input) => (
          <FormInput 
           key={input.id}
           {...input}
           value={values[input.name]}
           onChange={onChange} 
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};
 
export default App;