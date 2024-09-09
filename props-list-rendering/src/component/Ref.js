import React, { useRef } from 'react'

const Ref = () => {

    const input = useRef(null)
    const div = useRef(null)
    const addData = () => {
        console.log(input.current.value);
        input.current.focus()
        alert(div.current.innerHTML)

    }
    return (
        <>
            <input type='text' ref={input} />
            <button onClick={() => {
                addData()
            }}>Add</button>
            <div ref={div}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quasi incidunt suscipit illo quae nulla. Ea totam blanditiis debitis sed adipisci exercitationem consectetur laboriosam laborum. Similique in enim soluta molestias!</div>

        </>
    )
}

export default Ref