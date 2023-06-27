import React,{useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import '../Styles/page2.css';

const data1 = [
  {name: '', uv: 100, pv: 200, amt: 2400},
  {name: 'Week 1', uv: 550, pv: 400, amt: 2210},
  {name: 'Week 2', uv: 150, pv: 200, amt: 2290},
  {name: 'Week 3', uv: 420, pv: 300, amt: 2000},
  {name: 'Week 4', uv: 220, pv: 220, amt: 2181},
  {name: 'Week 5', uv: 420, pv: 240, amt: 2500},
];

const data2 = [
  {name: '', uv: 100, pv: 200, amt: 2400},
  {name: 'Week 1', uv: 300, pv: 400, amt: 2210},
  {name: 'Week 2', uv: 100, pv: 200, amt: 2290},
  {name: 'Week 3', uv: 370, pv: 300, amt: 2000},
  {name: 'Week 4', uv: 490, pv: 220, amt: 2181},
  {name: 'Week 5', uv: 80, pv: 240, amt: 2500},
];

const data3 = [
  {name: '', uv: 100, pv: 200, amt: 2400},
  {name: 'Week 1', uv: 222, pv: 400, amt: 2210},
  {name: 'Week 2', uv: 265, pv: 200, amt: 2290},
  {name: 'Week 3', uv: 109, pv: 300, amt: 2000},
  {name: 'Week 4', uv: 345, pv: 220, amt: 2181},
  {name: 'Week 5', uv: 555, pv: 240, amt: 2500},
];

const data4 = [
  {name: '', uv: 100, pv: 200, amt: 2400},
  {name: 'Week 1', uv: 321, pv: 400, amt: 2210},
  {name: 'Week 2', uv: 120, pv: 200, amt: 2290},
  {name: 'Week 3', uv: 332, pv: 300, amt: 2000},
  {name: 'Week 4', uv: 109, pv: 220, amt: 2181},
  {name: 'Week 5', uv: 444, pv: 240, amt: 2500},
];

function Activities() {

  const [data,setData] = useState(data1);
  
  const handleSelect = (event) => {
    // console.log(event.target.value);
    if(event.target.value === 'mj'){
      setData(data1);
    }

    if(event.target.value === 'js'){
      setData(data2);
    }

    if(event.target.value === 'od'){
      setData(data3);
    }

    if(event.target.value === 'ja'){
      setData(data4);
    }
  }

  return (
    <div className='activity'>
      <div className='navbox'>
        <div className='opt'>
          <label htmlFor='act'>Activities</label>
          <select name='act' id='act' onChange={handleSelect}>
            <option value='mj'>May-June 2021</option>
            <option value='js'>July-Sep 2021</option>
            <option value='od'>Oct-Dec 2021</option>
            <option value='ja'>Jan-Apr 2021</option>
          </select>
        </div>
        <div className='elements'>
          <div className='element-type1'>
            <div></div><p>Guest</p>
          </div>
          <div className='element-type2'>
            <div></div><p>Users</p>
          </div>
        </div>
      </div>
      <LineChart width={1100} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="rgb(236, 84, 34)" />
        <Line type="monotone" dataKey="pv" stroke="rgb(16, 242, 16)" />
      </LineChart>
    </div>
  )
}

export default Activities;
