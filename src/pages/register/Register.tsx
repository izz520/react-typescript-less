import { Button, Form, Input } from "antd";
import "./Register.less"
import React from "react"
import { Link } from "react-router-dom";
import {UserOutlined,LockOutlined} from "@ant-design/icons"
const Register = () => {
    const onFinish = () => {

    }
    const onFinishFailed = () => {

    }
    return (
        <div className="register-box">
            <Form
                className="register-form"
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
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请再次确认密码!' }]}
                >
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请再次确认密码" />
                </Form.Item>

                <Form.Item>
                    <Link to="/login" className="login-register">已有账号？立即登录</Link>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block size="large">
                        立即注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Register;