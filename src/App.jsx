import { useState } from 'react'

import { DatePicker, Select } from 'antd';
import Component1 from '../components/component1';
import Component2 from '../components/component2';
import Component3 from '../components/component3';

function App() {
  const [count, setCount] = useState(0);
  const [user,setUser] = useState({
      name : '',
      lastName : '',
      dni : '',
      ocupacion: '',
      email : '',
      tel : '',
      address : '',
      city : '',
      birth : '',
      genre : '',
      g_sang : '',
      medicacion : '',
      fumador : '',
      alergico : '',
      lesion : '',
      enfermedad_c : '',
      enfermedades : '',
      clase : '',
      fecha : ''





  })

  return (
    <>
<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <h2 className="font-semibold text-xl text-gray-600 pb-6">Catapumba</h2>

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Completa los datos</p>
            <p>Accede a una clase de prueba</p>
          </div>
            {count==0?             <Component1 user={user} setUser={setUser} handleClick={()=>setCount(1)}
             />: null}
             {count==1?<Component2 user={user} setUser={setUser} back={()=>setCount(0)} next={()=>setCount(2)} />:null}
             {count==2?<Component3 user={user} setUser={setUser} /> : null}

          </div>
        </div>
      </div>
    </div>

   
  </div>
     </>
  )
}

export default App
