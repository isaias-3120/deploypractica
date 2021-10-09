import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';


class Body extends Component{
    render(){
        return(
            <div className="App-body">
                <p>
                    {this.props.practica}
                </p>
                <div className="Lista">
                    <ol start="1">
                        {
                            this.props.temas.map(
                                (e,index)=>
                                <li key={index}>{e}</li>
                            )
                        }
                    </ol>
                </div>
                <button onClick={()=>(alert("Hola"))}>Dale Click</button>
            </div>
        );
    }
}

export default Body;

Body.propsTypes={
    practica:PropTypes.string,
    temas:PropTypes.array
}