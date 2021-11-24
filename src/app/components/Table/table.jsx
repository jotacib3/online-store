import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import tableIcons from './table-icons';

const ResultTable = ({
  tableName = '',
  columns,
  data,
  addRow,
  editRow,
  deleteRow,
}) => (
  <MaterialTable
    title={tableName}
    icons={tableIcons}
    columns={columns}
    data={data}
    editable={{
      onRowAdd: newData =>
        new Promise((resolve, reject) => {
          addRow(newData);
          resolve();
        }),
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
          editRow(newData);
          resolve();
        }),
      onRowDelete: oldData =>
        new Promise((resolve, reject) => {
          deleteRow(oldData);
          resolve();
        }),
    }}
  />
);

ResultTable.prototype = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  addRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  deleteRow: PropTypes.func.isRequired,
};

export default ResultTable;
