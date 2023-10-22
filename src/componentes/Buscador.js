import React from 'react';

class Buscador extends React.Component{

searchRef = React.createRef();
getRef = (e) => {
    e.preventDefault();
    const term = this.searchRef.current.value;
    this.props.dateSearch(term)
}
render() {

    return (
            <form onSubmit={this.getRef}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="text" ref={this.searchRef} className="form-control form-control-lg" placeholder="Busca tu imagen. Ejemplo: futbol"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Search..."/>
                    </div>
                </div>
            </form>
    )
}

   
}

export {Buscador};