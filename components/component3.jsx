import { Select,DatePicker} from "antd";
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;
const Component3 = ({user,setUser}) =>{

  const handleClick = async (e) => {
    console.log("A ver que pasa");
    console.log(user);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body :JSON.stringify({
          name : user.name,
          ocupacion : user.ocupacion,
          dni : user.dni,
          tel : user.tel,
          lastName : user.lastName  

        })
    };
     fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/prospectos', requestOptions)
        .then(response => response.text())
        .then(data =>{
     console.log(data);
    }
      );
  }
    const range = (start, end) => {
        const result = [];
        for (let i = start; i < end; i++) {
          result.push(i);
        }
        return result;
      };
    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day');
      };
      const disabledDateTime = () => ({
        disabledHours: () => range(0, 24).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      });
    return(
        <>
         <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
              <Select options={[
                {key:1,value:'natacion'},{key:2,value:'crossfit'},{key:3,value:'musculacion'}
                
              ]
              } placeholder={"Actividad"}
              onSelect={e=>setUser({...user,clase:e})}
              ></Select>
 <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }}
      onOk={e=>setUser({...user,fecha:e.$d})}
    />            </div>
       <div className=" text-right pt-12">
                  <button onClick={()=>handleClick()}  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
                </div>

            </div>
        </>
    )
}

export default Component3;