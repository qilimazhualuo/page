import { useState } from 'react'
import Item from './item'
import Add from './add'
import './index.less'

function Content() {
    const [data, setData] = useState([])
    const add = () => {
        const item = {
            content: '',
            id: Date.now(),
            width: 1,
            height: 1
        }
        setData([...data, item])
    }
    return <div className='content'>
        {data.map(({ id, content, width, height }) => {
            return <Item key={id} width={width} height={height} content={content}/>
        })}
        <Add add={add}/>
    </div>
}

export default Content