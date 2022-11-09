import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input  } from 'antd';
import React from 'react';
import logo from '../assets/AP.png';

const Login = () => { 

  return (
    <div 
      className='login-container' 
      style={{ 
        backgroundColor: "#b8b8b8",
        opacity: "0.9",
        zIndex:  "-1",
       }}>
      <Form
        style={{          
          boxSizing: "border-box",          
          borderRadius: "5px",
          backgroundColor: "#f2f2f2",
          padding: "20px",
          boxShadow: "0 0 15px 4px rgba(0,0,0,0.3)"
        }}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <div className="logo" style={{ padding: 40 , textAlign: 'center' }}>
          <img src={logo} alt="logo" height={75} />
        </div>
        <div style={{ padding: 10 }}/>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input type="email" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item style={{ textAlign: 'center' }}>
          <Button 
            type="primary" 
            htmlType="submit" 
            className="login-form-button"
            style={{
              borderRadius:"8px"
            }}
            >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;