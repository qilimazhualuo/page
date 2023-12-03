import { Select, Input, Button } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { useState } from "react"
import './index.less'

export default function Search () {
    const [engine, setEngine] = useState('bing')
    const [value, setValue] = useState('')
    return (
        <div className="search">
            <Select value={engine} onChange={setEngine} style={{ width: 120 }} bordered={false}>
                <option value="bing">Bing</option>
                <option value="google">Google</option>
                <option value="baidu">百度</option>
                <option value="bilibili">b站</option>
            </Select>
            <Input.Search
                placeholder="Search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                bordered={false}
                enterButton={<Button shape="circle"><SearchOutlined /></Button>}
            />
            <Button shape="circle"><SearchOutlined /></Button>
        </div>
    )
}