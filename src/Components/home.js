import React, { useState } from "react";
import './home.module.css';
import styles from './home.module.css';
import { SearchOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip, Avatar } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { Components } from "antd/es/date-picker/generatePicker";
import { Col, Row } from 'antd';


export default function Home(){
    
    const [status, setStatus] = useState('');

    return (
    <div className={styles.feedcontainer}>
        <Button className={styles.msgbtn} shape='circle' size='large' icon={<MessageOutlined />}  />
        <Row>
        <Col className={styles.foryoucol} span={6}><button>For You</button></Col>
        <Col className={styles.followcol} span={6}><button>Following</button></Col>
        </Row>
        <Row>
         <Col className={styles.feedpost} span={13}>
            <Space wrap size={16}>
      <Avatar size={64} icon={<UserOutlined />} />
    </Space>
                <input value={status} onChange={(event) => setStatus(event.target.value)} type="Status" placeholder="Update your feed." />
                    <button className={styles.feedsubmit}>Post</button>
                        </Col>
        </Row>
    </div>
    );
}