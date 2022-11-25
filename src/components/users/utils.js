import { Dropdown, Menu, Space } from "antd";
import { Link } from "react-router-dom";
import { MoreOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const columns = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
    render: (text) => <Link to="#">{text}</Link>,
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
    render: (text) => <Link to="#">{text}</Link>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Phone No.',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
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


export const data = [
  {
    first_name: 'John',
    last_name: 'Miguel',
    email: 'abc@gmail.com',
    gender:  'male',
    phone: '0701085511',
    role: 'Admin',
  },
  {
    key: '2',
    first_name: 'Jim',
    last_name: 'Leclerc',
    email: 'abc@gmail.com',
    gender: 'male',
    phone: '0701085511',
    role: 'User',
  },
  {
    key: '3',
    first_name: 'Veronica',
    last_name: 'Watkins',
    email: 'abc@gmail.com',
    gender: 'female',
    phone: '0701085511',
    role: 'User',
  },
  {
    key: '4',
    first_name: 'Elias',
    last_name: 'Ozansoy',
    email: 'abc@gmail.com',
    gender: 'male',
    phone: '0701085511',
    role: 'User',
  },
];