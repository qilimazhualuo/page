import React from "react"

interface props {
    width: number
    height: number
}

function Item(props: props) {
    const { width, height } = props
    return <div>{width}-{height}-</div>
}

export default Item