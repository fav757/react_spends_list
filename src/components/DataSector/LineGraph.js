import React, { useContext } from 'react';
import { LineChart, Line } from 'recharts';
import { GlobalState } from '../../GlobalState';

function LineGraph() {
  const { state } = useContext(GlobalState);

  const spends = [];
  for (let key in state.spends) {
    state.spends[key].forEach((value) => {
      spends.push({ name: value.comment, amount: value.amount });
    });
  }

  return (
    <LineChart width={400} height={400} data={spends}>
      <Line type='monotone' dataKey='amount' stroke='#8884d8' />
    </LineChart>
  );
}

export default LineGraph;
