import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const LocalStorage = () => {
    // allows web applications to store data locally within the user's browser – with no expiration date
    useEffect(() => {

    }, [])

    const storeData = (e) => {
        if (e.key == 'Enter') {
            let data = localStorage.getItem('data')

            if (data == null) {
                let d = [e.target.value]
                let str = JSON.stringify(d)
                localStorage.setItem('data', str)
                toast.success('Successfully data added!')
            } else {
                let v = JSON.parse(data)
                v.push(e.target.value)
                let str = JSON.stringify(v)
                localStorage.setItem('data', str)
                toast.success('Successfully data added!')
            }

        }
    }

    return (
        <> <Toaster
            position="top-right"
            reverseOrder={false}
        />
            <input type="text" onKeyUp={storeData} />
        </>
    )
}

export default LocalStorage