import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { GlobalState } from '../../GlobalState';

function PieGraph() {
  const { state } = useContext(GlobalState);

  const spendsSum = Object.values(state.spends).reduce((a, b) => {
    return (
      a +
      b.reduce((c, d) => {
        return c + d.amount;
      }, 0)
    );
  }, 0);

  const incomesSum = Object.values(state.incomes).reduce((a, b) => {
    return (
      a +
      b.reduce((c, d) => {
        return c + d.amount;
      }, 0)
    );
  }, 0);

  const data = [
    { name: 'Spends', value: spendsSum },
    { name: 'Incomes', value: incomesSum },
  ];
  const colors = ['#BE1A5F', '#97124a'];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width='100%' height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey='value'
          cx='50%'
          cy='50%'
          labelLine={renderCustomizedLabel}
          label={'test'}
          outerRadius='100%'
          fill='#8884d8'
        >
          {data.map((entry, index) => (
            <Cell key={entry} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieGraph;
