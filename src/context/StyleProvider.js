import React,{useState} from "react";
import styleContext from "./styleContext";



let lightMode = {
    color: "red",
    backgroundColor: "blue",
    border: "2px solid black"
}

const StyleProvider = (props)=>{
   
    const [style, setStyle] = useState(lightMode);
     

    return(
        <styleContext.Provider value={{
          style: style,
          lightMode: ()=>setStyle({...style, ...lightMode}),
          darkMode: ()=>setStyle({...style, 
            color: "white",
            backgroundColor: "black",
            border: "2px solid greenYellow"
        })


        }} >
           {props.children}
        </styleContext.Provider>
    )
}

export default StyleProvider



// let obj = {a:a,b:b}