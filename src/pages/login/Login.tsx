import React from "react"
import { Form, Input, Button } from 'antd';
import "./Login.less"
import { Link } from "react-router-dom";
import {UserOutlined,LockOutlined} from "@ant-design/icons"
const Login = () => {
    const onFinish = () => {

    }
    const onFinishFailed = () => {

    }
    return (
        <div className="login-box">
            <Form
                className="login-form"
                name="basic"
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                size="large"
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名"/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input.Password prefix={<LockOutlined  className="site-form-item-icon" />} placeholder="请输入密码" />
                </Form.Item>

                <Form.Item>
                    <Link to="/register" className="login-register">还没账号？立即注册</Link>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block size="large">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Login;