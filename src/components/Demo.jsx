import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

const Demo = () => {
    const [demo, setDemo] = useState(null)
    const URL = `http://localhost:4000/demo`

    const getDemo = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setDemo(JSON.stringify(data))
    }

    useEffect(() => {
        getDemo()
    }, [])

    return (
        <main>
            <Routes>
                <Route path="/demo" element={demo}>
                </Route>
            </Routes>
        </main>
    )
}

export default Demo