export type Correo = {
    nombre: string;
    email: string;
    telefono: string;
    consulta: string;
    contactoPref: string;
    fecha: string;
    hora: string;
    asesoria: string;

}

export type AlertaCampo = {
    mensaje: string;
    tipo: string;
};

export type AlertaState = {
    nombre: AlertaCampo;
    email: AlertaCampo;
    telefono: AlertaCampo;
    consulta: AlertaCampo;
    contactoPref: AlertaCampo;
    fecha: AlertaCampo;
    hora: AlertaCampo;
    ok: AlertaCampo
};