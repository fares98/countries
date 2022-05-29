import { EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { emptyDataSchemaSelector, openEditModal } from "store/formModal";
import "./style.css";

const EditIcon = ({ rowData }) => {
  const dispatch = useDispatch();
  const emptyDataSchema = useSelector(emptyDataSchemaSelector);
  const onEdit = () =>
    dispatch(openEditModal({ ...emptyDataSchema, ...rowData }));

  return <EditOutlined className="edit-icon" size="lg" onClick={onEdit} />;
};

export const getColumns = ({ currentPage }) => [
  {
    title: "Flag",
    dataIndex: "flag",
    key: "flag",
    render: (text, { name }) => (
      <div>
        <img src={text} alt={name} width={50} />
      </div>
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Capital",
    dataIndex: "capital",
    key: "capital",
  },
  {
    title: "Population",
    dataIndex: "population",
    key: "population",
  },
  {
    title: "Position",
    dataIndex: "latlng",
    key: "latlng",
  },
  {
    title: "Edit",
    key: "edit",
    render: (rowData, _, index) => (
      <EditIcon rowData={{ ...rowData, index, currentPage }} />
    ),
  },
];
