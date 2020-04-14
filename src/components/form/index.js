import React from 'react'
import PropTypes from 'prop-types'
import './form.css'

import { FaPlus } from 'react-icons/fa'

export default function Form({handleChange, handleSubmit, novaTarefa}) {
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                    <input type="text" 
                        onChange={handleChange}
                        value={novaTarefa}
                         />
                    <button type='submit'  >
                        <FaPlus />
                    </button>
                </form>
        </div>
    )
}


Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}