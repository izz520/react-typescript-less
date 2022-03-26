import React from "react"
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import "./App.less"
import { Layout, Menu, Breadcrumb } from 'antd';
import { AppstoreOutlined, ProfileOutlined, TeamOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
export default function App() {

    let list: number[] = []
    for (let i = 0; i < 80; i++) {
        list.push(i)
    }
    return (
        <Layout className="App-box">
            <Header />
            <Layout className="content-box">
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="列表管理">
                            <Menu.Item key="1">资料列表</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<ProfileOutlined />} title="文章管理">
                            <Menu.Item key="5">编辑文章</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<TeamOutlined />} title="用户管理">
                            <Menu.Item key="9">修改资料</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content className="content-views">
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}