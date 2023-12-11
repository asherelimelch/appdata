import React, { useEffect, useState } from 'react'

export default function Showdete(props) {

    let [deis, setdeis] = useState(10)

    useEffect(() => {
        let teim = Date.parse(props.dedlin) - Date.now();
        let nowdeis = Math.floor(teim / (1000 * 60 * 60 * 24))
        setdeis(nowdeis)
    }, [props.dedlin])

    return (
        <div className='col-lg-6 text-center mx-auto '>
            <h2>date cuontduwn : {props.dedlin}</h2>
            <h3>days lept: {deis}</h3>
        </div>
    )
}
