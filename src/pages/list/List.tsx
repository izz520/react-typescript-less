import { Button, Space, Table } from "antd";
import React from "react"

interface IData {
    key: number,
    name: string,
    age: number,
    address: string,
}
const List = () => {
    const columns = [
        {
            title: '用户名',
            dataIndex: 'name',
            width:'65%'
        },
        {
            title: '年龄',
            dataIndex: 'age',
        },
        {
            title: '收货地址',
            dataIndex: 'address',
        },
        {
            title: '操作',
            dataIndex: 'acton',
            render: (text: string, record: any) => (
                <Space size="middle">
                    <Button type="primary">编辑</Button>
                    <Button type="primary" danger>删除</Button>
                </Space>
            ),
        },
    ];
    const data: IData[] = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            name: `谢大大 ${i}`,
            age: i * 15,
            address: `宝安区第${i}街`
        });
    }
    return (
        <Table columns={columns} dataSource={data} />
    )
}


export default List;