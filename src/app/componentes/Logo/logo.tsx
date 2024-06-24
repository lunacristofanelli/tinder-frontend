/* eslint-disable @next/next/no-img-element */
import './logo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';


export const Logo = () => {

    return ( 
        <div className="containerLogo">
          <FontAwesomeIcon className='icon'icon={faFireAlt} />
        </div>
    );
}