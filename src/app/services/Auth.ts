"use client";

import clienteAxios from "./Axios";
export async function login(body: { email: string; password: string }):Promise<boolean> {
  try {
    const response = await clienteAxios.post("/login", body );
    const token = response.data.accessToken;
    localStorage.setItem("accessToken", token);
    return true;
  } catch (e) {
    return false;
  }
}

export async function signUp(body: { email: string; password: string }):Promise<boolean> {
  try {
    const response = await clienteAxios.post("/register", body );
    return true;
  } catch (e) {
    return false;
  }
}

export const getInformacionUsuario = async (): Promise<{ email: string; role: string }> => {
  const response = await clienteAxios.get("/usuarios/1");
  console.log('response log', response)
  return response.data;
}

export const getInformacionUsuarioByEmail = async (email : string): Promise<any> => {
  const response = await clienteAxios.get(`/usuarios/email/${email}`);
  console.log('response log', response)
  return response.data;
}

export const getLikeableUsers = async (email : string): Promise<any> => {
  const response = await clienteAxios.get(`/usuarios/likeables/email/${email}`);
  console.log('response likeables', response);
  return response.data;
}

export const postLike = async (usuarioOrigenID: number, usuarioDestinoID: number): Promise<any> => {
  const response = await clienteAxios.post(`/matches/like`, {
    usuarioOrigenID,
    usuarioDestinoID,
  });
  console.log('like', response);
  return response.data;
};

export const postReject = async (usuarioOrigenID: number, usuarioDestinoID: number): Promise<any> => {
  const response = await clienteAxios.post(`/matches/reject`, {
    usuarioOrigenID,
    usuarioDestinoID,
  });
  console.log('reject', response);
  return response.data;
};

export const getLikes = async (usuarioID : number): Promise<any> => {
  const response = await clienteAxios.get(`/matches/getLikes/${usuarioID}`);
  console.log('mis likes', response);
  return response.data;
}