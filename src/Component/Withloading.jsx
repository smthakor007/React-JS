import React from 'react'

export default function UserList({user}){
    return(
        <div>
            {
                user.map((u)=>{
                    return <li>{u.name}</li>
                })
            }
        </div>
    )
}

