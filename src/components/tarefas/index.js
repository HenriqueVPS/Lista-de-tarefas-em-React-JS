import React from 'react'
import PropTypes from 'prop-types'

import './tarefas.css'

import { FaEdit, FaWindowClose } from 'react-icons/fa'

export default function Tarefas({tarefas, handleEdit, handleDelete}) {
    return (
        <div>
            <ul className='tarefas'>
                    {tarefas.map((tarefa, index) => (
                        <li key={tarefa}>
                        {tarefa}
                        <span>
                            <FaEdit className='edit' onClick={(e) => handleEdit(e, index)}/>
                            <FaWindowClose className='delete' onClick={(e) => handleDelete(e, index)}/>
                        </span>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

Tarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}