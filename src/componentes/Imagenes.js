import React from 'react';

function Imagen(props) {
    const {largeImageURL, likes, previewURL, tags, views} = props.img;
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">{likes} Me gusta</p>
                    <p className="card-text">{views} Vistas</p>
                    <a href={largeImageURL} className="btn btn-primary btn-block" target="_blank">Ver imagen</a>
                </div>
            </div>
        </div>
    )
}

export {Imagen}