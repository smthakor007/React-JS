import React ,{ useState } from "react"
import BBB from './BBB'
import { myContext } from "./Context"
export default function AAA(){
    const[state,setstate]=useState({
        name:"Thakor",
        email:"sunil@gmail.com"
    })
    return(
        <div>
            <h1>
                {state.name}
            </h1>
            <myContext.Provider value={state}>
                <BBB/>
            </myContext.Provider>
        </div>
    )
}

