import React, { useState } from 'react'
import Showdete from './showdete'
import Inputdete from './inputdete'

export default function Appdete(props) {
    let teim1 = Date.now()
    let teim2 =  Math.floor(teim1 / (1000 * 60 * 60 * 24))
    let dateil = teim2
    // dateil / (1000 * 60 * 60 * 24)
    let [dedlin, setdedline] = useState(dateil);


    const chngdete = (newdete) => {
        setdedline(newdete)
    }

    return (
        <div className=' shadow '>
            <Showdete dedlin={dedlin} />
            <Inputdete chngdete={chngdete} />
            <hr />
        </div>
    )
}
