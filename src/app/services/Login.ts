import { AxiosError, AxiosResponse } from 'axios';
import clienteAxios from './Axios';

export const login = async (usuario:any) => {
  try {
    const respuesta: AxiosResponse<any, any> = await clienteAxios.post('auth/login',usuario);
    sessionStorage.setItem('token',respuesta.data.accessToken);
    return respuesta.data;
  } catch (error:any) {
    return error.response.data.statusCode;
  }
}