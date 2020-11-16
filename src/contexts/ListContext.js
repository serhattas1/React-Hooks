import React,{createContext,useState} from 'react';

export const ListContext=createContext();

const ListContextProvider=({children})=>{
    const [items,setItem]=useState([
          {text:'Cras justo odio',id:1},
          {text:'Dapibus ac facilisis in',id:2},
          {text:'Morbi leo risus',id:3}
    ])

    const AddItem=(item)=>{
         setItem([
             ...items,
             {text:item,id:Math.random()}
         ]);
    };

    const RemoveItem=(id)=>{
        setItem(items.filter(i=>{
           return i.id !==Number(id);
        })
      )
    }

    return(
        <ListContext.Provider value={{items,AddItem,RemoveItem}}>
           {children}
        </ListContext.Provider>
    )


}


export default ListContextProvider;