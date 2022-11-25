import { Dropdown, Menu, Space } from "antd";
import { Link } from "react-router-dom";
import { MoreOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Link to="#">{text}</Link>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone No.',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
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
    key: '1',
    name: 'John Brown',
    email: 'abc@gmail.com',
    phone:  '0701085511',
    department: 'Web Team',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'abc@gmail.com',
    phone: '0701085511',
    department: 'Graphics Desgine',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'abc@gmail.com',
    phone: '0701085511',
    department: 'Cyber Security',
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    email: 'abc@gmail.com',
    phone: '0701085511',
    department: 'Virtual Reality',
    address: 'London No. 2 Lake Park',
  },
];