// 'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './formInicio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';

export const Form = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [submitError, setSubmitError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

 
  const onSubmit = (data: any) => {
    console.log(data);
    if (data.nombre === 'usuario' && data.password === 'contraseña') {
      setSubmitError('Credenciales incorrectas. Inténtalo de nuevo.');
    } else {
      setSubmitError('');
      reset();
    }
  };

  const handleSignUp = (data: any) => {
    // Lógica para manejar el registro de usuarios
    console.log(data);
    reset();
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setSubmitError('');
    reset();
  };

  return (

    <div className='containerForm'>
      <FontAwesomeIcon icon={faFireAlt} />
      <h2>{isSignUp ? 'Sign Up' : 'Log In '}</h2>
      <form onSubmit={isSignUp ? handleSubmit(handleSignUp) : handleSubmit(onSubmit)}>
        {isSignUp && (
          <div>
            <input type="email" placeholder="Email" {...register('email', { required: true,
              pattern: /^(([^<>()[].,;:\s@"]+(.[^<>()[].,;:\s@"]+))|(".+"))@(([^<>()[].,;:\s@"]+.)+[^<>()[].,;:\s@"]{2,})$/i
             })} />
            {errors.email?.type === 'required' && <p>Ingrese su email</p>}
            {errors.email?.type === 'pattern' && <p>Su email es incorrecto</p>}
          </div>
        )}
        <div>
          <input type="text" placeholder="Username" {...register('nombre', { required: true, maxLength: 12 })} />
          {errors.nombre?.type === 'required' && <p>Ingrese su nombre de usuario</p>}
          {errors.nombre?.type === 'maxLength' && <p>El campo debe tener menos de 12 caracteres</p>}
        </div>
        <div>
          <input type="password" placeholder="Password" {...register('password', {
             required: true,
             minLength: 8,
             pattern: /^(?=.[a-z])(?=.[A-Z])(?=.\d)[a-zA-Z\d]{8,}$/ 
             })} />
          {errors.password?.type === 'required' &&  <p>Ingrese su contraseña</p>}
          {errors.password?.type === 'minLength' && (
            <p>La contraseña debe tener al menos 8 caracteres</p>
          )}
          {errors.password?.type === 'pattern' && (
            <p>La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número</p>
          )}
        </div>

        <div className='containerBtn'>
          <input className='submit' type="submit" value={isSignUp ? 'Sign Up' : 'Log In'} />
          {!isSignUp && <button type="button" onClick={toggleForm}>¿No tienes cuenta? Regístrate aquí.</button>}
          {isSignUp && <button type="button" onClick={toggleForm}>¿Ya tienes una cuenta? Inicia sesión aquí.</button>}
          {submitError && <p className="submitError">{submitError}</p>}
        </div>
      </form>
    </div>
  );
};