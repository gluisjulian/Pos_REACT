import React, { useState } from 'react'
import AgendaForm from './AgendaForm'
import AgendaCard from './AgendaCard'
import { getContacts } from './database'


export default function AgendaList(){
    let [list, setList] = useState(getContacts());

    let cards = list.map(contact => (
        <AgendaCard key={contact.id} data={contact} />
    ))

    const addItem = (item) => setList([...list, item])
    console.log(addItem)

    return(
        <div className="w-6/12">
            <AgendaForm save={addItem} />
            {cards}
        </div>
    )
}