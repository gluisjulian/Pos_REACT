import React from 'react';


export default function AgendaCard({ data }){
    let {name, email, empresa, cargo} = {...data}
    console.log(data)

    return(
        <div className="mb-2 flex flex-col p-4 bg-white items-start text-gray-800 rounded-lg w-full">
            <span className="block text-2xl font-semibold" >Nome: {name}</span>
            <span className="block text-base text-black" >Email: {email}</span>
            <span className="block text-base text-black" >Empresa: {empresa}</span>
            <span className="block text-base text-black" >Cargo: {cargo}</span>
        </div>
    )
}