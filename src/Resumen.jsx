import { useContext } from "react"
import Context from "./context/Context"
import "./Resumen.css"


const Resumen = () => {
    const campos=["Imagen:","Zona:","€/dia:","Nombre:","Habitaciones:","Personas:","Dias:"]
    const {misDatos}=useContext(Context)
  return (
    <>
    <div className="resumen">
        <h1>Resumen: </h1>
            {
                campos.map((campo,indice)=>
                misDatos[indice] && 
                <div className="informacion" key={indice}>
                    {indice===0
                        ?    
                            <img src={misDatos[indice]} alt="Lugar de destino"/>
                        :
                            <div className="linea">
                            <div className="columna1">
                                {campo}
                            </div>
                            <div className="columna2">
                                {misDatos[indice]}
                            </div>
                        </div>
                    }
                </div>
                )
            }
        {misDatos[3] &&
        <div className="total">
           Total: {Number(misDatos[2]||1) * Number(misDatos[4]||1) * Number(misDatos[5]||1) * Number(misDatos[6]||1)} €    
        </div>}    
    </div>
    </>
  )
}

export default Resumen
