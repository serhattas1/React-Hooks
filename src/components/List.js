import React, { useContext,useState} from 'react';
import {ListContext} from '../contexts/ListContext';

const List=()=>{
   
    const [item,setItem]=useState('');
    const{items,AddItem,RemoveItem}=useContext(ListContext);
    
    const handleChange=e=>{
        setItem(e.target.value);
    }


    const handleFormSubmit=e=>{
        e.preventDefault();
        AddItem(item);
        setItem('');
    }

    const HandleRemove=e=>{
        RemoveItem(e.target.id);
    }

    return(
       <div>
           <ul className="list-group">
               {
                   items.length>0?(
                       items.map(item=>{
                           return(
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                              {item.text}
                            <span className="badge badge-danger badge-pill" id={item.id} onClick={HandleRemove}>Delete</span>
                            </li>
                           )
                       })
                   ): <div>No items</div>
               }
           </ul>
           <form onSubmit={handleFormSubmit}>
           <div className="input-group col-lg-4">
                <input type="text" className="form-control" onChange={handleChange} value={item}/>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">Add Item</button>
                </div>
            <p>Count:{items.length}</p>
            </div>
           </form>
       </div>
    )
}

export default List;
