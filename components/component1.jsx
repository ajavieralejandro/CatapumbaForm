import { DatePicker, Select } from 'antd';


const Component1 = ({handleClick,setUser,user}) =>{
    return(
        <>
              <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
              <div className="md:col-span-3">
                <label for="full_name">Nombre </label>
                <input onChange={(e)=>setUser({...user,name:e.target.value})} type="text" name="full_name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
               
              </div>

              <div className="md:col-span-3">
       
                <label for="full_name">Apellido </label>
                <input onChange={(e)=>setUser({...user,lastName:e.target.value})} type="text" name="full_name" id="last_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
              </div>

              <div className="md:col-span-3">
                <label for="email">Email </label>
                <input onChange={(e)=>setUser({...user,email:e.target.value})} type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@domain.com" />
              </div>

        
              <div className="md:col-span-3">
                <label for="dni">DNI </label>
                <input onChange={(e)=>setUser({...user,dni:e.target.value})} type="text" name="dni" id="dni" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
              </div>

              <div className="md:col-span-3">
                <label for="tel">Telefono </label>
                <input  onChange={(e)=>setUser({...user,tel:e.target.value})}type="text" name="tel" id="phone" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
              </div>

              <div className="md:col-span-3">
                <label for="ocupacion">Ocupacion </label>
                <input onChange={(e)=>setUser({...user,ocupacion:e.target.value})} type="text" name="profession" id="profession" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={user.ocupacion}  placeholder="" />
              </div>

              <div className="md:col-span-3">
                <label for="address">Dirección</label>
                <input onChange={(e)=>setUser({...user,address:e.target.value})} type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
              </div>
              <div className="md:col-span-3">
                <label for="city">Ciudad</label>
                <input onChange={(e)=>setUser({...user,city:e.target.value})} type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
              </div>

                
             

              <div className="md:col-span-2">
                <DatePicker onChange={e=>setUser({...user,birth:e.$d})}  style={{width:'100%'}} placeholder='feche de nacimiento' />
              </div>

              <div className="md:col-span-2">
                 <Select onSelect={e=>setUser({...user,genre:e})} style={{width:'100%'}} options={[
                  {key:1,value:'Femenino'},{key:2,value:'Masculino'},{key:3,value:'Otro'}
                 ]} placeholder="Genero" />
              </div>
              <div className="md:col-span-2">
                 <Select onSelect={e=>setUser({...user,g_sang:e})} style={{width:'100%'}} placeholder="Grupo Sanguineo" options={[
                  {key:1,value:'A+'},{key:2,value:'B-'},{key:3,value:'B+'}
                 ]} />
              </div>
              </div>
          



        
              <div className="md:col-span-6 text-right pt-6">
                <div className="inline-flex items-end">
                  <button onClick={()=>{
                    console.log(user);
                    handleClick();
                  }} className="text-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Siguiente</button>
                </div>
              </div>

            </div>
        </>
    )
}

export default Component1;