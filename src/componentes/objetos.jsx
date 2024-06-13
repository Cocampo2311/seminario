import React, { useDebugValue } from "react";
import { useState } from "react";

export default function objetos() {

    const [datos,setdatos]=useState([]);
    const [nombre,setnombre]=useState("");
    const [apellido,setapellido]=useState("");
    const [ciudad,setciudad]=useState("");
    const [edad,setedad]=useState(0);

    return (
        <div className="col-md-12">
            <label htmlFor="" className="cold-md-2 m-1">Nombre
                <input type="text" value={nombre} onChange={(e)=>{setnombre(e.target.value)}} className="form-control" />
            </label>
            <label htmlFor="" className="cold-md-2 m-1">Apellido
                <input type="text" value={apellido} onChange={(e)=>{setapellido(e.target.value)}} className="form-control" />
            </label>
            <label htmlFor="" className="cold-md-2 m-1">Ciudad
                <input type="text" value={ciudad} onChange={(e)=>{setciudad(e.target.value)}} className="form-control" />
            </label>
            <label htmlFor="" className="cold-md-2 m-1">Edad
                <input type="text" value={edad} onChange={(e)=>{setedad(e.target.value)}} className="form-control" />
            </label>
            <label className="cold-md-2 m-1">
                <input type="button" className="btn btn-primary" value="agregar" />
            </label>
            {nombre}
        </div>
    )
}