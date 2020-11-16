import React from "react";
import {Link} from "react-router-dom";
import Modal from "./Modal";

const Contact=()=>{
   return(
       <div>
           <Modal data-toggle="modal" data-target="#exampleModalCenter"/>
           <h3>Contact</h3>
           <div className="list-group">
                <button type="button" className="list-group-item list-group-item-action"><Link to="/card/joe">Joe</Link></button>
                <button type="button" className="list-group-item list-group-item-action"><Link to="/card/alex">Alex</Link></button>
                <button type="button" className="list-group-item list-group-item-action"><Link to="/card/belly">Belly</Link></button>
            </div>
       </div>
   )
}

export default Contact;