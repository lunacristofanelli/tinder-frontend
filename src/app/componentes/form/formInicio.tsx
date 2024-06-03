import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { login, signUp, getInformacionUsuario } from '@/app/services/Auth';
import { UserContext } from '@/app/context/user.context';
import './formInicio.css';

export const Form = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const { setUserData } = useContext(UserContext);
  const [submitError, setSubmitError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();

  const handleLogin = async (data:any) => {
    try {
      const body = {
        username: data.nombre,
        password: data.password,
      };
      const loginExitoso = await login(body);
      if (loginExitoso) {
        const userData = await getInformacionUsuario();
        setUserData(userData);
        if (userData?.role === "ADM") {
          router.push('/administrador');
        } else {
          router.push('/usuario');
        }
      } else {
        setSubmitError('Credenciales incorrectas. Inténtalo de nuevo.');
      }
    } catch (error) {
      setSubmitError('Error en el inicio de sesión. Inténtalo de nuevo.');
    }
    reset();
  };

  const handleRegister = async (data:any) => {
    try {
      const body = {
        email: data.email,
        password: data.password,
      };
      const registroExitoso = await signUp(body);
      if (registroExitoso) {
        toggleForm();
      } else {
        setSubmitError('Error en el registro. Inténtalo de nuevo.');
      }
    } catch (error) {
      setSubmitError('Error en el registro. Inténtalo de nuevo.');
    }
    reset();
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setSubmitError('');
    reset();
  };

  const cargarUsuarioLogueado = async () => {
    try {
      const userData = await getInformacionUsuario();
      setUserData(userData);
      if (userData?.role === "ADM") {
        router.push('/administrador');
      } else {
        router.push('/usuario');
      }
    } catch {
      setShowLogin(true);
      localStorage.removeItem("accessToken");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      cargarUsuarioLogueado();
    } else {
      setShowLogin(true);
    }
  }, []);


  return (
    <div className='containerForm'>
      {!showLogin && <div className="loader" />}
      {showLogin && (
        <>
      <h2>{isSignUp ? 'Registrate' : 'Inicia Sesión'}</h2>
          <form onSubmit={isSignUp ? handleSubmit(handleRegister) : handleSubmit(handleLogin)}>
            {isSignUp && (
              <div>
                <input type="email" placeholder="Email" {...register('email', {
                  required: true,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
                })} />
                {errors.email?.type === 'required' && <p>Ingrese su email</p>}
                {errors.email?.type === 'pattern' && <p>Su email es incorrecto</p>}
              </div>
            )}
            <div>
              <input type="text" placeholder="Username" {...register('nombre', { required: true })} />
              {errors.nombre?.type === 'required' && <p>Ingrese su nombre de usuario</p>}
              {errors.nombre?.type === 'maxLength' && <p>El campo debe tener menos de 12 caracteres</p>}
            </div>
            <div>
              <input type="password" placeholder="Password" {...register('password', {
                required: true,

              })} />
              {errors.password?.type === 'required' && <p>Ingrese su contraseña</p>}
              {errors.password?.type === 'minLength' && (
                <p>La contraseña debe tener al menos 8 caracteres</p>
              )}
              {errors.password?.type === 'pattern' && (
                <p>La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número</p>
              )}
            </div>
            <div className='containerBtn'>
          <input className='submit' type="submit" value={isSignUp ? 'Registrate' : 'Inicia Sesión'} />
          {!isSignUp && <button type="button" onClick={toggleForm}>¿No tienes cuenta? Regístrate aquí.</button>}
          {isSignUp && <button type="button" onClick={toggleForm}>¿Ya tienes una cuenta? Inicia sesión aquí.</button>}
          {submitError && <p className="submitError">{submitError}</p>}
        </div>
      </form>
        </>
      )}
    </div>
  );
};
