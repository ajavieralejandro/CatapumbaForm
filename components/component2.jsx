import Checkbox from "antd/es/checkbox/Checkbox";
import Input from "antd/es/input/Input";
const Component2 = ({back,next,user,setUser}) =>{
    return(
        <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
              <div className="md:col-span-3">
                <Checkbox style={{margin:'12px'}}>Medicacion</Checkbox>
               
              </div>
              <div className="md:col-span-3">
                <Input onChange={e=>setUser({...user,medicacion:e.target.value})} placeholder="Qué medicamentos?" type="text" name="full_name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
               
              </div>
              <div className="md:col-span-3">
                <Checkbox style={{margin:'12px'}}>Fumador</Checkbox>
               
              </div>
              <div className="md:col-span-3">
                <Input  onChange={e=>setUser({...user,fumador:e.target.value})} placeholder="Cuanto Tiempo?" type="text" name="full_name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
               
              </div>
              <div className="md:col-span-3">
                <Checkbox style={{margin:'12px'}}>Alergico</Checkbox>
               
              </div>
              <div className="md:col-span-3">
                <Input  onChange={e=>setUser({...user,alergico:e.target.value})} placeholder="Especificar" type="text" name="full_name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
               
              </div>
              <div className="md:col-span-3">
                <Checkbox style={{margin:'12px'}}>Lesion</Checkbox>
               
              </div>
              <div className="md:col-span-3">
                <Input  onChange={e=>setUser({...user,lesion:e.target.value})} placeholder="Qué Lesiones?" type="text" name="full_name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
               
              </div>
              <div className="md:col-span-3">
                <Checkbox style={{margin:'12px'}}>Enfermedad Cardiaca</Checkbox>
               
              </div>
              <div className="md:col-span-3">
                <Input  onChange={e=>setUser({...user,enfermedad_c:e.target.value})} placeholder="Ingrese la enfermedad" type="text" name="full_name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
               
              </div>
              <div className="md:col-span-3">
                <Checkbox style={{margin:'12px'}}>Enfermedad Cronica</Checkbox>
               
              </div>
              <div className="md:col-span-3">
                <Input  onChange={e=>setUser({...user,enfermedad:e.target.value})} placeholder="Tipos de enfermedad" type="text" name="full_name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
               
              </div>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-4">
                <div>
                <button onClick={()=>back()}   className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">atras</button>
                </div>
                <div className=" text-right">
                  <button onClick={()=>next()}  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Siguiente</button>
                </div>


                
              </div>
              
        </div>
    )
}

export default Component2;