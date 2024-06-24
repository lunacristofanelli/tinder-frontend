"use client"
import axios from 'axios';

const createCliente = () => {
  const cliente = axios.create({
    baseURL: 'http://localhost:8080/',
  });
  return cliente;
}

const clienteAxios = createCliente();
clienteAxios.interceptors.request.use((request) => {
  if (localStorage.getItem("accessToken")) {
    request.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
  }
  return request;
})

export default clienteAxios;


/*
clienteAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message === 'Network Error' && !error.response) {
      return Promise.reject('axios.errors.network');
    }
    const { status } = error.response;
if (status === 400) {
      if (error.response.data.errors) {
        return Promise.reject(error.response.data.errors[0].msg);
      }
      return Promise.reject(error.response.data.msg);
    }
    if (status === 401) {
      return Promise.reject('axios.errors.unauthorized');
    }
    if (status === 404) {
      return Promise.reject('axios.errors.resourceNotFound');
    }
    if (status === 500) {
      return Promise.reject('axios.errors.server');
    }
    return null;
  }
);
*/