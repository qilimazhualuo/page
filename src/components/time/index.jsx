import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import './index.less'

export default function Time() {
    const [now, setNow] = useState(dayjs())
    useEffect(() => {
        const timer = setInterval(() => {
            setNow(dayjs())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div className='time'>
            <h2>{now.format('YYYY-MM-DD')}</h2>
            <div>{now.format('HH:mm:ss')}</div>
        </div>
    )
}