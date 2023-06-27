import React, { PureComponent, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data1 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group D", value: 200 }
];

const data2 = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 100 },
  { name: "Group D", value: 600 }
];

const data3 = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 300 },
  { name: "Group D", value: 300 }
];

const data4 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 200 },
  { name: "Group D", value: 100 }
];

function Products() {

  const [data, setData] = useState(data1);

  const COLORS = ['rgb(236, 84, 34)', 'rgb(44, 236, 34)', 'rgb(34, 81, 236)'];

  const RADIAN = Math.PI / 180;
  // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);

  //   // return (
  //   //   <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
  //   //     {/* {`${(percent * 100).toFixed(0)}%`} */}
  //   //   </text>
  //   // );
  // };


  const handleSelect = (event) => {
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
    <div className='products'>
      <div className='navpro'>
        <p>Top Products</p>
        <select onChange={handleSelect}>
          <option value='mj'>May-June 2021</option>
          <option value='js'>July-Sep 2021</option>
          <option value='od'>Oct-Dec 2021</option>
          <option value='ja'>Jan-Apr 2021</option>
        </select>
      </div>
      <div className='prochart'>
        <div className='pie'>
          <PieChart width={140} height={140}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              // label={renderCustomizedLabel}
              outerRadius={60}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className='desc'>
          <div className='deshead'>
            <div className='desc1'><div></div><p>Basic Tees</p></div>
            <h6>{parseInt((data[0].value/(data[0].value+data[1].value+data[2].value))*100)}%</h6>
          </div>
          <div className='deshead'>
            <div className='desc2'><div></div><p>Custom Short Pants</p></div>
            <h6>{parseInt((data[1].value/(data[0].value+data[1].value+data[2].value))*100)}%</h6>
          </div>
          <div className='deshead'>
            <div className='desc3'><div></div><p>Super Hoodies</p></div>
            <h6>{parseInt((data[2].value/(data[0].value+data[1].value+data[2].value))*100)}%</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
