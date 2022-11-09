import { Button, Form, Input, Modal } from 'antd';

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


const AddScheduleModal = ({ data, loading, open, onClose, onSave }) => {
  const [form] = Form.useForm();

  if (!open) return null;
  return (
    <Modal title="Add Schedule" visible={open} footer={null} onOk={onClose} onCancel={onClose}>
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
          <Input disabled={data?._id} />
        </Form.Item>
        <Form.Item
          name={['customer', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['customer', 'phone']}
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
          name={['customer', 'address']}
          label="Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Save Schedule
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddScheduleModal;