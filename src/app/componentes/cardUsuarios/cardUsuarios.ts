
import Usuarios from "@/app/model/usuariosRegistrados/usuarios";
import "./cardsUsuarios.css";
import { datosUsuarios } from "@/app/services/datosUsuarios";

export const CardUsuarios = (props: any) => {
    const { datos }: { datos: Usuarios[] } = props;

    return ( CardUsuarios
       
        /*
            {datos.map(() => (
                <div className="containerUsuarios" key={item.id}>
                    <div className="containerImg">
                        <img 
                            src={item.imagen || '/public/imagenes/imagenesUsuarios/27e419ef-8665-4a82-8cdd-4e33e63318f7.JPG'} 
                            className="imgCard" 
                            alt={item.nombreCompleto} 
                        />
                    </div>
                    <div className="infoPersonal">
                        <p {item.nombreCompleto}</p>
                        <p {item.edad} AÑOS</p>
                        <p {item.ubicacion}</p>
                        <p {item.profesion}</p>
                    </div>
                    <div className="divInfoSobreMi">
                        <p>{`Sobre Mi: ${item.sobreMi}`}</p>
                    </div>
                    <div className="divIntereses">
                        <p>{item.interesesUno}</p>
                        <p>{item.interesesDos}</p>,
                        <p>{item.interesesTres}</p>,
                        <p>{item.interesesCuatro}</p>,
                        <p>{item.interesesCinco}</p>,
                    </div>
                    <div className="divMisRedes">
                        <p>{`Mis Redes: ${item.misRedes}`}</p>,
                </div>
            ))}
        </>
    );
};
*/
)};
