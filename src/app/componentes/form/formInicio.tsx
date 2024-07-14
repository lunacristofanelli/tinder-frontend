import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import {signUp, getInformacionUsuario, getInformacionUsuarioByEmail, RegisterReqBody} from '@/app/services/Auth';
import { UserContext } from '@/app/context/user.context';
import './formInicio.css';
import {signIn} from "next-auth/react";
import axios from "axios";
import {IUser} from "@/app/model/user/IUser";
import {uploadFile} from "@/app/services/FileUpload";
import {Select, SelectOption} from "@/app/componentes/Select/Select";
import {getLikeables} from "@/app/services/User";
import {getIntereses, Interes} from "@/app/services/Interes";

export const Form = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const { setUserData } = useContext(UserContext);
  const [submitError, setSubmitError] = useState('');
  const [files, setFiles] = useState([]);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [intereses, setIntereses] = useState<SelectOption[]>([]);
  const [selectValue, setSelectValue] = useState<SelectOption[]>([]);
  const router = useRouter();

  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const handleLogin = async (data: any) => {
    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (response?.error) {
        setSubmitError("Usuario o contrasena incorrecta");
      } else {
        router.push('/');
        router.refresh();
      }
    } catch (error) {
      setSubmitError('Error en el inicio de sesión. Inténtalo de nuevo.');
    }
    reset();
  };

  const handleRegister = async (data:any) => {
    try {
      const images = [];
      const intereses: string[] = [];
      if (!files || files.length === 0) {
        setSubmitError("Suba por lo menos una foto");
      }
      if (files.length > 5) {
        setSubmitError(`Solo se permite hasta 5 fotos, se intentaron subir ${files.length}`);
      }
      if (files && files.length > 0 && files.length < 6) {
        for (var file of files) {
          const resp = await uploadFile(file);
          images.push(resp?.data?.data?.url);
        }
        const body : RegisterReqBody = {
          email: data.email,
          nombre: data.nombre,
          apellido: data.apellido,
          password: data.password,
          imagenes: images,
          intereses: intereses
        };

        const registroExitoso = await signUp(body);
        if (registroExitoso) {
          toggleForm();
        } else {
          setSubmitError('Error en el registro. Inténtalo de nuevo.');
          reset();
        }
      }
    } catch (error) {
      setSubmitError('Error en el registro. Inténtalo de nuevo.');
      reset();
    }

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
    getIntereses()
        .then((data) => {
          setIntereses(data.map((interes) => { return {value: interes.interesID, label: interes.nombre}}));
        })
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
          <h2>{isSignUp ? 'Regístrate' : 'Inicia Sesión'}</h2>
          <form onSubmit={isSignUp ? handleSubmit(handleRegister) : handleSubmit(handleLogin)}>
            {!isSignUp && (
              <div>
                <input type="email" placeholder="Email" {...register('email', {
                  required: true,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
                })} />
                {errors.email?.type === 'required' && <p>Ingrese su email</p>}
                {errors.email?.type === 'pattern' && <p>Su email es incorrecto</p>}
              </div>
            )}
            {!isSignUp && (
              <div>
                <input type="password" placeholder="Password" {...register('password', {
                  required: true,
                })} />
                {errors.password?.type === 'required' && <p>Ingrese su contraseña</p>}
              </div>
            )}
            {isSignUp && (
              <>
                <div>
                  <input type="email" placeholder="Email" {...register('email', {
                    required: true,
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
                  })} />
                  {errors.email?.type === 'required' && <p>Ingrese su email</p>}
                  {errors.email?.type === 'pattern' && <p>Su email es incorrecto</p>}
                </div>
                <div>
                  <input type="text" placeholder="Nombre" {...register('nombre', { required: true })} />
                  {errors.nombre?.type === 'required' && <p>Ingrese su nombre</p>}
                </div>
                <div>
                  <input type="text" placeholder="Apellido" {...register('apellido', { required: true })} />
                  {errors.apellido?.type === 'required' && <p>Ingrese su apellido</p>}
                </div>
                <div>
                  <input type="password" placeholder="Password" {...register('password', {
                    required: true,
                    minLength: 8,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                  })} />
                  {errors.password?.type === 'required' && <p>Ingrese su contraseña</p>}
                  {errors.password?.type === 'minLength' && (
                    <p>La contraseña debe tener al menos 8 caracteres</p>
                  )}
                  {errors.password?.type === 'pattern' && (
                    <p>La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número</p>
                  )}
                </div>
                <div>
                  <Select
                      multiple
                      options={intereses}
                      value={selectValue}
                      onChange={o => setSelectValue(o)}
                  />
                </div>
                <div>
                  <label htmlFor="file" className="fileLabel">
                    Upload images
                    {/* hacer funcionar esto si es posible, que cuando hagas click en la x no se abra el uplodear
                    <span onClick={() => console.log('jaskd')} className="clear-btn">
                    &times;
                  </span>*/}
                  </label>
                  <input id="file" type="file" hidden multiple accept=".jpg, .jpeg, .png" {...register('file')}
                         onChange={onInputChange}/>

                  {files && files.length > 0 && <p className="fileNames">{Array.from(files).map((file, index) => {
                    return <span key={file.name}>{file.name}{files.length - 1 !== index && ', '} </span>
                  })}</p>}
                </div>

              </>
              )}
            <div className='containerBtn'>
              <input className='submit' type="submit" value={isSignUp ? 'Regístrate' : 'Inicia Sesión'}/>
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
