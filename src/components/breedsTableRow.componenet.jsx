import React,{Component} from "react";
//import {Link} from 'react-router-dom';
//import { Button } from "react-bootstrap";
//import axios from 'axios';

export default class BreedsTableRow extends Component{
  
    render(){
        return(
            //access data to show in table
            <tr>
                <td>{this.props.object.name}</td>
                <td>{this.props.object.description}</td>
                <td>{this.props.object.adaptability}</td>
                <td>{this.props.object.affectionLevel}</td>
                <td>{this.props.object.childFriendly}</td>
                <td>{this.props.object.strangerFriendly}</td>
                <td>{this.props.object.energyLevel}</td>
                <td>{this.props.object.weight}</td>
            </tr>
        );
    };
};