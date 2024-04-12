import React from 'react'

export default function Toggle({cambiarEstado, estado}) {
  return (
    <div class="form-check form-switch">
        <input onClick={cambiarEstado} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={estado} />
        <label class="form-check-label" for="flexSwitchCheckChecked">Activos/Inactivos</label>
    </div>
  )
}
