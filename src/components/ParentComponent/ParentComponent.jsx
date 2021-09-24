import { useEffect, useState } from 'react'
import Component from '../Component/Component'

const ParentComponent = () => {
    const [parentState, setParentState] = useState(Math.random())
    const [now, setNow] = useState('')
    const [date, setDate] = useState(new Date());
    const beginning = Math.random()
    
    
    

    
        
        function refreshClock() {
          setDate(new Date())
        }
        useEffect(() => {
            const timerId = setInterval(refreshClock, 1000);
            return function cleanup() {
            clearInterval(timerId);
          };
        }, []);
      
    return (
        <div>
            <span>
            {date.toLocaleTimeString()}
          </span>
            <div>components are rendered below</div>
            <Component beginningState={beginning} parentState={parentState} parentDate={date.toLocaleTimeString()}/>

        </div>

    )
}

export default ParentComponent