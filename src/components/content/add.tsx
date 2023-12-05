import React from 'react'
import { PlusCircleOutlined } from '@ant-design/icons'

interface Props {
    add: () => void
}

function Add(props: Props) {
    const { add } = props
    return <div className='item' onClick={add}>
        <PlusCircleOutlined />
    </div>
}

export default Add