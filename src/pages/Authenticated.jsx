import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

import {  MdDashboard, MdPeople } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { Layout, Menu, Button } from "antd";

import Dashboard from "./Dashboard";
import Schedule from "./Schedule";
import Staffs from "./Staffs";
import Users from "./Users";
import logo from "../assets/AP.png";

const { Header, Sider, Content } = Layout;

const Authenticated = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout
      style={{
        height: "120vh",
        margin: "0px",
      }}
    >
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" style={{ padding: 10 }}>
          <img src={logo} alt="logo" height={50} />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          items={[
            {
              key: "dashboard",
              icon: <MdDashboard />,
              label: "Dashboard",
              onClick: () => navigate("/"),
            },
            {
              key: "schedule",
              icon: <GrSchedules />,
              label: "Schedule Log",
              onClick: () => navigate("/schedule"),
            },
            {
              key: "staffs",
              icon: <MdPeople />,
              label: "Staffs",
              onClick: () => navigate("/staffs"),
            },
            {
              key: "users",
              icon: <UserOutlined />,
              label: "Users",
              onClick: () => navigate("/users"),
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "60px",
            }}
          >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div style={{ padding: "0px 10px" }}>
              <Button
                style={{
                  borderRadius: "5px",
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            backgroundColor: "white",
          }}
        >
          <Routes>
            <Route path="/" elements={<Dashboard />} />
            <Route path="/schedule" elements={<Schedule />} />
            <Route path="/staffs" elements={<Staffs />} />
            <Route path="/users" elements={<Users />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Authenticated;