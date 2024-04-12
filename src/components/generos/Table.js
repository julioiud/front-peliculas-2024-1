import React from 'react'
import TrGenero from './TrGenero'


export default function Table({generos = []}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripc.</th>
          <th scope="col">Creado</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        {
          generos.map((genero, index) => {
            return  (
              <TrGenero genero={genero} key={index+1} index={index}/>
          )
          })
        }

      </tbody>
    </table>
  )
}
