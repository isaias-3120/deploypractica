import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';



class Footer extends Component{
    render(){
        return(
            <div className="App-footer">
                    {this.props.pie}
            </div>
        );
    }
}
export default Footer;

Footer.propsTypes={
    pie:PropTypes.object
}