import React, { useState } from "react";
import { Button, Table, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { columns } from "../components/users/utils";
import AddUserModal from "../components/users/AddUserModal";

const { Title } = Typography;

export default function Users() {
  const [showAddUser, setShowAddUser] = useState(false);

  return (
    <div>
      <div style={{ padding: "20px" }} />
      <Title style={{ textAlign: "center" }}>Users</Title>
      <div style={{ padding: "20px" }} />
      <div style={{ textAlign: "right" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => setShowAddUser(true)}
          style={{ borderRadius: "5px" }}
        >
          Add User
        </Button>
      </div>
      <div style={{ padding: "20px" }} />
      <Table 
        rowKey="_id" 
        columns={columns} 
        size="middle" 
        />
      <AddUserModal 
        open={showAddUser} 
        onClose={() => setShowAddUser(false)} 
      />
    </div>
  );
}
