import { axiosConfig } from "../configurations/axiosConfig"


const obtenerGeneros = () => {
    return axiosConfig.get('generos?estado=true', {
      headers: {
        'Content-Type' : 'application/json'
      }
    })
}

export {
    obtenerGeneros
}