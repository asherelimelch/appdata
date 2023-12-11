import React, { useRef } from 'react'

export default function Inputdete(props) {
    let dedref = useRef()

    return (
        <div className=' col-lg-4 mt-4 mx-auto  d-flex  '>
            <input ref={dedref} className=' form-control m-2 ' type='date'></input>
            <button onClick={() => { props.chngdete(dedref.current.value) }} className=' btn btn-primary m-2'>chang</button>
        </div>
    )
}
