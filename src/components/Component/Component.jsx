import { useEffect, useState } from 'react'

const Component = (props) => {
    const [date, setDate] = useState(props.parentDate)
    const [componentValue, setComponentValue] = useState(null)

    

    useEffect(() => {
        setDate(props.parentDate)
        setComponentValue(props.beginningState)
    })
    

    return (
        <div>
            <div>
                parent state value
            </div>
            <div>
                {props.parentState}
            </div>
            <div>component value</div>
            <div>
                {componentValue}
            </div>
            <div>component time</div>
            <div>{date}</div>
        </div>
    )
}

export default Component