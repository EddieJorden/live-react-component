import { useEffect, useState } from 'react'

const ComponentA = () => {
    const [energyLevel, setEnergyLevel] = useState(null)

    useEffect(() => {
        const waveFuncA = Math.random() + 1
        const waveFuncB = Math.random() - 1
        const waveAverage = (waveFuncA + waveFuncB) / 2

        setEnergyLevel(waveAverage)
        
    }, [])

    return (
        <div>
            {energyLevel}
        </div>
    )
}

export default ComponentA