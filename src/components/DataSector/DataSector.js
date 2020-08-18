import React, { useContext } from 'react';
import DataTable from './DataTable';
import LineGraph from './LineGraph';
import PieGraph from './PieGraph';
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
