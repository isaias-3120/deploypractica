import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Banner extends Component{
    render(){
        return(
            <div className="App-banner">
                <p> 
                    {this.props.texto1}
                </p>
            </div>
        );
    }
}

export default Banner;

Banner.propsTypes={
    texto1:PropTypes.string,
}

Banner.defaultProps={
    texto1:"Desarrollo de Aplicaciones para Dispositivos Moviles"
}

