import "./Home.css"
import { useForm } from "react-hook-form"
import {datos} from "./data"
import { datos2 } from "./datos"
import { useContext } from "react"
import Context from "./context/Context"
import { useNavigate } from "react-router-dom"



const Home = () => {
    const {register,handleSubmit, formState:{errors}}=useForm();
    const navegacion=useNavigate();
    const {etapas,setEtapas,misDatos}=useContext(Context)
    const obtener=(data)=>{
        console.table(data)
        const miZona=data.valor;
        const Datos=datos.find(d=>d.lugar===miZona);
        misDatos.push(Datos.imagen);
        misDatos.push(Datos.lugar);
        misDatos.push(Datos.precio);
        setEtapas(etapas+3)
        navegacion('/form')
        console.table(misDatos)
    }
  return (
    <>
        <form onSubmit={handleSubmit(obtener)}>
            <nav>
                <span>{datos2[etapas].texto}</span>
                <input type="submit" value="Enviar"/>
                {errors.valor?.type==="required" && <span className="aviso">Selecciona una de las opciones</span>}
            </nav>
            <div className="formulario">
                {datos.map(data => 
                    <div className="zonas" key={data.lugar}> 
                        <div className="zona">
                            <img src={data.imagen} alt={data.lugar}/>
                            <input name="listado" type="radio" className="lugar" value={data.lugar}
                            {...register('valor',{required:true})}/>
                            <span className="poblacion"> {data.lugar}</span>
                            <span className="precio"> {data.precio}€</span>
                        </div>
                    </div>
                )}
            </div>
        </form>
    </>
  )
}

export default Home
