import React,{useContext} from "react";
import { myContext } from "./Context";
export default function CCC (){
    const data=useContext(myContext)
    console.log(data);
    return(
        <div>
            <p>Mukeshbhai</p>
            <h1>
                {data.email}
            </h1>
        </div>
    )
}