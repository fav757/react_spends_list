import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { GlobalState } from '../../GlobalState';

function LineGraph() {
  const { state } = useContext(GlobalState);

  const spends = [];
  for (let key in state[state.activeType]) {
    state[state.activeType][key].forEach((value) => {
      spends.push({ name: value.comment, amount: value.amount });
    });
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
    <LineChart data={spends}>
      <CartesianGrid stroke='#ccc' strokeDasharray="5 5" />
      <Line type='monotone' dataKey='amount' stroke='#BE1A5F' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip contentStyle={{color: 'black'}} />
    </LineChart>
    </ResponsiveContainer>
  );
}

export default LineGraph;
