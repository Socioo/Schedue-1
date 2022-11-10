import { Dropdown, Menu, Space } from "antd";
import { Link } from "react-router-dom";
import { MoreOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: '_id',
  },
  {
    title: 'Employee Name',
    dataIndex: 'nemployee-name',
    key: 'name',
    render: (text) => <Link to="#">{text}</Link>,
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Designation',
    dataIndex: 'designation',
    key: 'designation',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Action',
    render: () => (
      <Space size="middle">
        <Dropdown overlay={(
          <Menu
            items={[
              {
                key: '1',
                label: <span><EditOutlined />&nbsp;&nbsp;&nbsp;Edit</span>,
              },
              {
                key: '2',
                label: <span><DeleteOutlined />&nbsp;&nbsp;&nbsp;Delete</span>,
              },
            ]}
          />)}>
            <MoreOutlined />
        </Dropdown>
      </Space>
    ),
  },
];
