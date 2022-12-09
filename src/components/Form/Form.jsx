import React from 'react'

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// min 8 letter password, with at least a symbol, upper and 
// lower case letters and a number
const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const validate = (inputs) => {
    const errors = {};
    if(!inputs.username)
         errors.username = 'Username is require';
    else if(inputs.username.length > 35)
        errors.username = "Username cannot be longer than 35 characters";
    else if(!regexEmail.test(inputs.username))
         errors.username = 'Username has to be an email';

    if(!regexPassword.test(inputs.password))
        errors.password = "Password requires at least 8 characters, a symbol, upper and lower case letters and a number";

    return errors;
};

export default function Form (props) {
    const [inputs, setInputs] = React.useState({
         username: '',
         password: '',
    });

    const [errors, setErrors] = React.useState({
         username: '',
         password: '',
    });


    const handleInputChange = (event) => {
      const { name, value } = event.target;

      setInputs({...inputs, [name]: value});

      setErrors(
        validate({...inputs, [name]: value})
      )
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(inputs);
    if(!Object.keys(errors).length){
      setInputs({
         username: '',
         password: '',
      })

      setErrors({
         username: '',
         password: '',
      })
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          className={errors.name && 'warning'}
          type="text"
          name="username"
          placeholder="Escribe tu username..."
          value={inputs.username}
          onChange={handleInputChange}
        ></input>
        <p className='danger'>{errors.username}</p>

        <label htmlFor="password">Password:</label>
        <input
          className={errors.email && 'warning'}
          type="password"
          name="password"
          placeholder="Escribe tu password..."
          value={inputs.password}
          onChange={handleInputChange}
        ></input>
        <p className='danger'>{errors.password}</p>

        <button type="submit">Enviar</button>
        
      </form>
    </div>
  );
}
