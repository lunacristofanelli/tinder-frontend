import axios from 'axios';


//eliminar match
export const deleteMatch = async (matchID: number) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axios.delete(`/api/matches/delete/${matchID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error eliminando el match:', error);
    throw error;
  }
}


//superlike
export const superLike = async (usuarioID: number) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axios.post('/api/matches/superlike', { usuarioID }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al enviar Super Like:', error);
    throw error;
  }
};


//mostrar posibles usuarios
export const likeablesUsers = async (email: string) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axios.post('/likeables/:email', { email }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Nadie es para vos', error);
    throw error;
  }
};


//
