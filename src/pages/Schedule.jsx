import React, { useState } from 'react';
import { Button, Table, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { columns } from '../components/schedule/utils';
import AddScheduleModal from '../components/schedule/AddScheduleModal';


const { Title } = Typography;

export default function Schedule() {
    const [showAddSchedule, setShowAddSchedule] = useState(false);

    
    return (
        <div>
            <div style={{ padding: "20px" }} />
            <Title style={{ textAlign: 'center' }}>Schedules</Title>
            <div style={{ padding: "20px" }} />
            <div style={{ textAlign: 'right' }}>
                <Button
                type="primary"
                icon={<PlusOutlined />}
                size="large"
                onClick={() => setShowAddSchedule(true)}
                style={{ borderRadius:"5px"}}
                >
                Add Schedule
                </Button>
            </div>
            <div style={{ padding: "20px" }} />
            <Table
                rowKey="_id"
                columns={columns}
                size="middle"
            />
            <AddScheduleModal
                open={showAddSchedule}
                onClose={() => setShowAddSchedule(false)}
            />
        </div>
    )
}