import React, { useState } from "react";
import { Button, Table, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { columns } from "../components/staffs/utils";
import AddStaffModal from "../components/staffs/AddStaffModal";

const { Title } = Typography;

export default function Staffs() {
  const [showAddStaff, setShowAddStaff] = useState(false);

  return (
    <div>
      <div style={{ padding: "20px" }} />
      <Title style={{ textAlign: "center" }}>Staffs</Title>
      <div style={{ padding: "20px" }} />
      <div style={{ textAlign: "right" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => setShowAddStaff(true)}
          style={{ borderRadius: "5px" }}
        >
          Add User
        </Button>
      </div>
      <div style={{ padding: "20px" }} />
      <Table rowKey="_id" columns={columns} size="middle" />
      <AddStaffModal
        open={showAddStaff}
        onClose={() => setShowAddStaff(false)}
      />
    </div>
  );
}
