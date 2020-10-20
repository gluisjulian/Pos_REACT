import React, { useState} from 'react'

export default function AgendaForm(props) {

    function getId() {
        return (10 - Math.round(Math.random() * 2))
    } 

    const [data, setData] = useState({name: '', email: '', empresa: '', cargo:''})
    

     const changeField = (field) => {
         const change = (evt) => setData({ ...data, [field]: evt.target.value })
         return change
     }


     const handleSubmit = (evt) => {
        evt.preventDefault()
            props.save({ ...data, id: getId() })
    }


    return(
        <form onSubmit={handleSubmit} className="p-2 flex flex-col">
            <div className="flex flex-row items-stretch mb-2 justify-between">
                <label className="text-lg" >Nome</label>
                <input type="text" maxLength={100} className="p-2 rounded text-black text-lg"
                onChange={changeField('name')}
                required
                />
            </div>

            <div className="flex flex-row items-stretch mb-2 justify-between">
                <label className="text-lg" >Email</label>
                <input type="email" maxLength={50} className="p-2 rounded text-black text-lg"
                onChange={changeField('email')}
                required
                />
            </div>

            <div className="flex flex-row items-stretch mb-2 justify-between">
                <label className="text-lg" >Empresa</label>
                <input type="text" maxLength={50} className="p-2 rounded text-black text-lg"
                onChange={changeField('empresa')}
                required
                />
            </div>

            <div className="flex flex-row items-stretch mb-2 justify-between">
                <label className="text-lg" >Cargo</label>
                <input type="text" maxLength={50} className="p-2 rounded text-black text-lg" 
                onChange={changeField('cargo')}
                required
                />
            </div>

            <div>
                <button type="submit"> Adicionar </button>
            </div>
        </form>
    )
}