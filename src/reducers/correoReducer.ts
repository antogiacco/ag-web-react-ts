import type { Correo } from "../types";

export type CorreoActions = {}

export type CorreoState = {
    correo: Correo
}

export const initialState : CorreoState = {
    correo: {
        nombre: '',
        email: '',
        telefono: '',
        consulta: '',
        contactoPref: '',
        fecha: '',
        hora: '',
        asesoria: '',
    }
}

export const correoReducer = (
    state: CorreoState = initialState, 
    action: CorreoActions
) => {

}