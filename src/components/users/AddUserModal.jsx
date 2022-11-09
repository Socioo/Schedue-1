import { Button, Form, Input, Select, Modal } from 'antd';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */


const AddUserModal = ({ loading, open, onClose, onSave }) => {
  const [form] = Form.useForm();

  if (!open) return null;
  return (
    <Modal title= "Add User" visible={open} footer={null} onOk={onClose} onCancel={onClose}>
      <Form shouldUpdate form={form} {...layout} name="nest-messages" onFinish={onSave} validateMessages={validateMessages}>
        <Form.Item
          name={['customer', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['customer', 'first_name']}
          label="First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
            name={['customer', 'last_name']}
            label="Last Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
          >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={['customer', 'phone_number']}
          label="Phone"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['customer', 'role']}
          label="Role"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>        
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" loading={loading} style={{ borderRadius:"5px" }}>
            Save User
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUserModal;