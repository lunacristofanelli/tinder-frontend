import { AxiosResponse } from 'axios';
import clienteAxios from './Axios';
import {IUser} from "@/app/model/user/IUser";
import Usuarios from "@/app/model/usuariosRegistrados/usuarios";

export const createUser = async (usuario:any) => {
  try {
    const respuesta: AxiosResponse<any, any> = await clienteAxios.post('api/user',usuario);
    return respuesta.data;
  } catch (error:any) {
    return error.response.data.statusCode;
  }
}

export function getLikeables (user: IUser):Promise<Usuarios[]>{
  return fetch(`http://localhost:8081/usuarios/likeables/${user.email}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`,
    },
  })
      .then((res) => res.json())
}