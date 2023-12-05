import React from 'react'
import './item.less'

interface props {
    width: number
    height: number
}

function Item(props: props) {
    const { width, height } = props
    return <div className='item'>{width}-{height}-</div>
}

export default Item