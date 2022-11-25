import { Dropdown, Menu, Space } from "antd";
import { Link } from "react-router-dom";
import { MoreOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Staff Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Link to="#">{text}</Link>,
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Number Of Participants',
    dataIndex: 'participants',
    key: 'participants',
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

export const data = [
  {
    key: '1',
    date: '10-08-2022',
    name: 'John Brown',
    department: 'Web Team',
    location: 'New York No. 1 Lake Park',
    participants:  '84',
    description: 'Everything that has a beginning, has an end.',
  },
  {
    key: '2',
    date: '14-08-2022',
    name: 'Jim Green',
    department: 'Graphics Designe',
    location: 'London No. 1 Lake Park',
    participants: '76',
    description: 'Everything that has a beginning, has an end.',
  },
  {
    key: '3',
    date: '16-08-2022',
    name: 'Joe Black',
    department: 'Cyber Security',
    location: 'Sidney No. 1 Lake Park',
    participants: '50',
    description: 'Everything that has a beginning, has an end.',
  },
  {
    key: '4',
    date: '18-08-2022',
    name: 'Jim Red',
    department: 'Virtual Reality',
    location: 'London No. 2 Lake Park',
    participants: '48',
    description: 'Everything that has a beginning, has an end.',
  },
];