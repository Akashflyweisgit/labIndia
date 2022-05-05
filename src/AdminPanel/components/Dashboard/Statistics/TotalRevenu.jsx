import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 190,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 1290,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3090,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 990,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sept',
    uv: 490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    uv: 3049,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 100,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
   
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}