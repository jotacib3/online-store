import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ResultTable from '../table';

test('<ResultTable />', () => {
  const data = [
    { id: 1, name: 'Clothes' },
    { id: 2, name: 'Shoes' },
  ];
  const columns = [
    { title: 'Id', field: 'id', hidden: true },
    { title: 'Name', field: 'name' },
  ];
  const values = ['Shoes', 'Clothes'];
  const func = () => {};
  render(
    <ResultTable
      data={data}
      columns={columns}
      addRow={func}
      editRow={func}
      deleteRow={func}
    />,
  );

  for (const value of values) {
    expect(screen.getByText(value)).toBeInTheDocument();
  }
  //   expect(screen).toMatchSnapshot();
  //   expect(screen.getByText('Dashboard')).toBeInTheDocument();
});

// describe('<Header />', () => {
//   it('should render, match the snapshot and shows messages', () => {
//     renderer.render(<Header />);
//     const renderedOutput = renderer.getRenderOutput();
//     expect(renderedOutput).toMatchSnapshot();
//     expect(renderedOutput).getByText('Dashboard').toBeInTheDocument();
//     expect(renderedOutput).getByAltText('List Categories').toBeInTheDocument();
//     expect(renderedOutput).getByText('Import').toBeInTheDocument();
//   });
// });
