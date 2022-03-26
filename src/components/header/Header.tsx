import React from "react"
import "./Header.less"
import { Menu, Dropdown, Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
const Header = () => {
    const menu = (
        <Menu >
            <Menu.Item key={'edit'}>修改资料</Menu.Item>
            <Menu.Divider />
            <Menu.Item key={'logout'}>退出登录</Menu.Item>
        </Menu>
    );
    return (
        <header className="header">
            <div className="header-logo">Homg Admin</div>
            <Dropdown overlay={menu} arrow>
                <a className="header-user" href="!#" onClick={e => e.preventDefault()}>
                    <Avatar size={35} icon={<UserOutlined />} />
                    <span className="header-user-name">匿名用户</span>
                    <DownOutlined />
                </a>
            </Dropdown>
        </header>
    )
}

export default Header;