import { useState } from "react";
import { Table as BaseTable } from "antd";
import { getColumns } from "./helpers";

const Table = ({ data: dataSource = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <BaseTable
      columns={getColumns({ currentPage })}
      dataSource={dataSource}
      rowKey={({ latlng }) => latlng[0]}
      pagination={{
        defaultPageSize: 10,
        position: ["bottomCenter"],
        onChange: setCurrentPage,
      }}
    />
  );
};

export default Table;
