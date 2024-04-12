import React, { useEffect, useState } from 'react'
import { obtenerGeneros } from '../../services/DirectoresService'


import Table from './Table'
import Error from './Error'
import Toggle from './Toggle'

export default function Generos() {


  const [generos, setGeneros] = useState([])
  const [estado, setEstado] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    obtenerTodos()
  }, [estado])

  const obtenerTodos = async () => {
    try {
      const { data } = await obtenerGeneros(estado)
      setGeneros(data)
      if(error) {
        setError(false)
      }
    } catch (e) {
      console.error(e)
      setError(true)
    }

  }

  const cambiarEstado = () => {
    setEstado(!estado)
  }


  return (
    <>
      <Toggle cambiarEstado={cambiarEstado} estado={estado}/>
      {error ? <Error /> : <Table generos={generos} />}
    </>

  )
}
