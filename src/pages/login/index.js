import React, { useState } from 'react'
import api from '../../services/api'

import './index.css'

import logo from '../../assets/logo.svg'

export default ({ history }) => {
  const [username, setUsername] = useState()

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await api.post('/devs', {
        username,
      })

      const { _id } = response.data

      history.push(`/dev/${_id}`)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          type="text"
          placeholder="Digite seu usuário no @github"
          value={username || ''}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
