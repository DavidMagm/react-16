import React from 'react';
import {Imagen} from './Imagenes';

class Resultado extends React.Component{
    showImg = () => {
        const imges = this.props.img;
        if(imges.length === 0) return null;
        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imges.map(img => (
                        <Imagen key={img.id} img={img}/>
                    ))}
                </div>
            </React.Fragment>
        )
    }
    render() {
        return(
            <React.Fragment>
                {this.showImg()}
            </React.Fragment>
        )
    }
}

export {Resultado}