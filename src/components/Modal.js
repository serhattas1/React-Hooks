import React from "react";
import ReactDOM from "react-dom";

const Modal=(props)=>{
    return ReactDOM.createPortal(
        <div className="modal" tabindex="-1"  role="dialog" id="exampleModalCenter">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" >Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>, document.querySelector('#modal')
    )
}

export default Modal;