"use client";

import clienteAxios from "./Axios";

export interface RegisterReqBody {
  email: string,
  nombre:string,
  apellido: string,
  password: string,
  imagenes: string[],
  intereses: string[]
}
export async function login(body: { email: string; password: string }):Promise<boolean> {
  try {
    const response = await clienteAxios.post("/login", body );
    const token = response.data.accessToken;
    localStorage.setItem("accessToken", token);
    return token;
  } catch (e) {
    return false;
  }
}

export async function signUp(body: RegisterReqBody):Promise<boolean> {
  try {
    const response = await clienteAxios.post("/register", body );
    return true;
  } catch (e) {
    return false;
  }
}

export const getInformacionUsuario = async (): Promise<{ email: string; role: string }> => {
  const response = await clienteAxios.get("/usuarios/1");
  return response.data;
}

export const getInformacionUsuarioByEmail = async (email : string): Promise<any> => {
  const response = await clienteAxios.get(`/usuarios/email/${email}`);
  localStorage.getItem('accessToken');
  return response.data;
}

export const getLikeableUsers = async (email : string): Promise<any> => {
  const token = localStorage.getItem('accessToken');
  const response = await clienteAxios.get(`/usuarios/likeables/email/${email}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }});
  return response.data;
}

export const postLike = async (usuarioOrigenID: number, usuarioDestinoID: number): Promise<any> => {
  const response = await clienteAxios.post(`/matches/like`, {
    usuarioOrigenID,
    usuarioDestinoID,
  });
  return response.data;
};

export const postReject = async (usuarioOrigenID: number, usuarioDestinoID: number): Promise<any> => {
  const response = await clienteAxios.post(`/matches/reject`, {
    usuarioOrigenID,
    usuarioDestinoID,
  });
  return response.data;
};

export const getLikes = async (usuarioID : number): Promise<any> => {
  const response = await clienteAxios.get(`/matches/getLikes/${usuarioID}`);
  return response.data;
}