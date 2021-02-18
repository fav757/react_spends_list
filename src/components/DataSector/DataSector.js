import React, { useContext } from 'react';
import DataTable from '../DataTable/DataTable';
import LineGraph from '../Graphs/LineGraph';
import PieGraph from '../Graphs/PieGraph';
import { GlobalState } from '../../GlobalState';

function DataSector() {
  const { state } = useContext(GlobalState);

  switch (state.dataSector) {
    case 'line graph':
      return <LineGraph />;
    case 'pie graph':
      return <PieGraph />;
    case 'data table':
    default:
      return <DataTable />;
  }
}

export default DataSector;
