import React from "react";
import { useState } from "react";


export default function datos() {
    const[nombre,setnombre]=useState("German")

    return (
        <div>
        
           <input id="dato" type="text" value={nombre} onChange={(x=>{setnombre(x.target.value)})}></input>
            
            {nombre}
            
        </div>
    )
}