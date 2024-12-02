import { useState } from "react";
import ContactoInputsInfoPersonal from "./ContactoInputsInfoPersonal";
import Alerta from "./Alerta";
import type { Correo, AlertaState } from "../types";

export default function Contacto() {
  const [correo, setCorreo] = useState<Correo>({
    nombre: "",
    email: "",
    telefono: "",
    consulta: "",
    contactoPref: "",
    fecha: "",
    hora: "",
    asesoria: "",
  });

  const [alerta, setAlerta] = useState<AlertaState>({
    nombre: { mensaje: "", tipo: "" },
    email: { mensaje: "", tipo: "" },
    telefono: { mensaje: "", tipo: "" },
    consulta: { mensaje: "", tipo: "" },
    contactoPref: { mensaje: "", tipo: "" },
    fecha: { mensaje: "", tipo: "" },
    hora: { mensaje: "", tipo: "" },
    ok: { mensaje: "", tipo: "" },
  });

  const datosCorreo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCorreo((prevCorreo) => ({
      ...prevCorreo,
      [name]: value,
    }));
  };

  const validarFormulario = () => {
    const nuevaAlerta = {
      nombre: { mensaje: "", tipo: "" },
      email: { mensaje: "", tipo: "" },
      telefono: { mensaje: "", tipo: "" },
      consulta: { mensaje: "", tipo: "" },
      contactoPref: { mensaje: "", tipo: "" },
      fecha: { mensaje: "", tipo: "" },
      hora: { mensaje: "", tipo: "" },
      ok: { mensaje: "", tipo: "" },
    };

    const alertaError =
      "bg-blanco text-rojo shadow-[0_0.5rem_0.5rem_rgba(0,0,0,0.5)] px-2.5 rounded-md font-semibold tracking-wider";
    const alertaOk =
      "bg-blanco text-verde shadow-[0_0.5rem_0.5rem_rgba(0,0,0,0.5)] px-2.5 rounded-md font-semibold tracking-wider";

    if (correo.nombre === "") {
      nuevaAlerta.nombre = {
        mensaje: "El nombre es obligatorio",
        tipo: alertaError,
      };
    }

    if (correo.email === "") {
      nuevaAlerta.email = {
        mensaje: "El email es obligatorio",
        tipo: alertaError,
      };
    } else if (!validarEmail(correo.email))
      nuevaAlerta.email = {
        mensaje: "Email inválido",
        tipo: alertaError,
      };

    if (correo.telefono === "") {
      nuevaAlerta.telefono = {
        mensaje: "El teléfono es obligatorio",
        tipo: alertaError,
      };
    } else if (!validarTel(correo.telefono))
      nuevaAlerta.telefono = {
        mensaje: "Teléfono inválido",
        tipo: alertaError,
      };

    if (correo.consulta === "") {
      nuevaAlerta.consulta = {
        mensaje: "La consulta es obligatoria",
        tipo: alertaError,
      };
    }

    if (correo.contactoPref === "telefono") {
      if (!correo.fecha || !correo.hora) {
        nuevaAlerta.contactoPref = {
          mensaje: "Si elige teléfono, fecha y hora son obligatorios",
          tipo: alertaError,
        };
      }
      if (correo.fecha === "") {
        nuevaAlerta.fecha = {
          mensaje: "La fecha es obligatoria si elige teléfono",
          tipo: alertaError,
        };
      }
      if (!correo.hora) {
        nuevaAlerta.hora = {
          mensaje: "La hora es obligatoria si elige teléfono",
          tipo: alertaError,
        };
      }
    }

    const esValido = Object.values(nuevaAlerta).every(
      (campo) => campo.mensaje === ""
    );

    if (esValido) {
      nuevaAlerta.ok = {
        mensaje: "Formulario enviado exitosamente",
        tipo: alertaOk,
      };
    }

    setAlerta(nuevaAlerta);
    console.log(nuevaAlerta);

    setTimeout(() => {
      setAlerta({
        nombre: { mensaje: "", tipo: "" },
        email: { mensaje: "", tipo: "" },
        telefono: { mensaje: "", tipo: "" },
        consulta: { mensaje: "", tipo: "" },
        contactoPref: { mensaje: "", tipo: "" },
        fecha: { mensaje: "", tipo: "" },
        hora: { mensaje: "", tipo: "" },
        ok: { mensaje: "", tipo: "" },
      });
    }, 5000);

    return esValido;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validarFormulario()) {
      return;
    }
    enviarFormulario(correo);
  };

  const enviarFormulario = async (data: Correo) => {
    try {
      const response = await fetch("http://localhost:5501/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error en el envío del correo");
      }
      console.log("Correo enviado exitosamente");
      alert("Formulario enviado correctamente");
      setCorreo({
        nombre: "",
        email: "",
        telefono: "",
        consulta: "",
        contactoPref: "",
        fecha: "",
        hora: "",
        asesoria: "",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const validarEmail = (email: string): boolean => {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return regex.test(email);
  };

  const validarTel = (tel: string): boolean => {
    const regex = /^\d+$/;
    return regex.test(tel);
  };

  const validarFecha = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fecha = e.target.value;
    if (!fecha) return;
    const fechaObj = new Date(fecha);
    const dia = fechaObj.getUTCDay();
    if (dia === 0 || dia === 6) {
      setAlerta((prevAlerta) => ({
        ...prevAlerta,
        fecha: {
          mensaje: "Por favor seleccione un día hábil (Lunes a Viernes)",
          tipo: "bg-blanco text-rojo shadow-[0_0.5rem_0.5rem_rgba(0,0,0,0.5)] px-2.5 rounded-md font-semibold tracking-wider",
        },
      }));
      alert("Atención de lunes a viernes");
    } else {
      setAlerta((prevAlerta) => ({
        ...prevAlerta,
        fecha: { mensaje: "", tipo: "" },
      }));
    }
  };

  const validarHora = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hora = e.target.value;
    if (!hora) return;

    if (hora < "09:00" || hora > "18:00") {
      setAlerta((prevAlerta) => ({
        ...prevAlerta,
        hora: {
          mensaje: "Por favor seleccione una hora entre las 9:00 y las 18:00hs",
          tipo: "bg-blanco text-rojo shadow-[0_0.5rem_0.5rem_rgba(0,0,0,0.5)] px-2.5 rounded-md font-semibold tracking-wider",
        },
      }));
      alert("Horario de atención 9 a 18hs");
    } else {
      setAlerta((prevAlerta) => ({
        ...prevAlerta,
        hora: { mensaje: "", tipo: "" },
      }));
    }
  };

  return (
    <section id="contacto" className="w-11/12 mx-auto m-4 p-2.5 text-center">
      <h2 className="text-4xl font-bold my-2.5 h-contacto">Contacto</h2>
      <p className="text-blanco text-xl my-2.5 px-2.5 p-contacto">
        Para recibir asesoramiento favor de completar el formulario
      </p>
      <div className="bg-blanco rounded-3xl m-2.5 p-2.5 fondo-form">
        <form
          className="p-2.5 m-2.5 bg-violeta rounded-3xl"
          id="formulario"
          noValidate
          action="/send-email"
          method="post"
          onSubmit={handleSubmit}
        >
          <fieldset className="border border-blanco rounded-[10px] m-1.5 p-5">
            <legend className="font-semibold text-gris text-xl px-3">
              Información Personal:
            </legend>
            <div className="flex flex-wrap justify-evenly gap-5 w-full">
              <ContactoInputsInfoPersonal
                label="Nombre:"
                id="nombre"
                placeholder="Tu nombre"
                tipo="text"
                datosCorreo={datosCorreo}
                alerta={alerta.nombre}
                value={correo.nombre}
              />
              <ContactoInputsInfoPersonal
                label="E-mail:"
                id="email"
                placeholder="Tu correo"
                tipo="text"
                datosCorreo={datosCorreo}
                alerta={alerta.email}
                value={correo.email}
              />
              <ContactoInputsInfoPersonal
                label="Teléfono:"
                id="telefono"
                placeholder="Tu teléfono"
                tipo="tel"
                datosCorreo={datosCorreo}
                alerta={alerta.telefono}
                value={correo.telefono}
              />
            </div>
          </fieldset>
          <fieldset
            className="border border-blanco rounded-[10px] m-1.5 p-5"
            id="fieldsetConsulta"
          >
            <legend className="font-semibold text-gris text-xl px-3">
              Consulta:
            </legend>
            <div
              className="flex flex-col items-center justify-center"
              id="divConsulta"
            >
              <label
                className="pb-4 text-[16px] tracking-wide"
                htmlFor="consulta"
              >
                Busco asesoramiento sobre...
              </label>
              <textarea
                className="placeholder:text-gris placeholder:text-center bg-lila outline-none focus:outline-violegris focus:outline-dotted m-2.5 shadow-[0_0.5rem_0.5rem_rgba(0,0,0,0.5)] w-8/12 text-center min-h-[150px]"
                id="consulta"
                name="consulta"
                placeholder="Introduzca su consulta"
                onChange={datosCorreo}
                value={correo.consulta}
              ></textarea>
              {alerta.consulta.mensaje && (
                <Alerta
                  mensaje={alerta.consulta.mensaje}
                  tipo={alerta.consulta.tipo}
                />
              )}
            </div>
          </fieldset>
          <fieldset className="border border-blanco rounded-[10px] m-1.5 p-5">
            <legend className="font-semibold text-gris text-xl px-3">
              Preferencias:
            </legend>
            <div
              className="pb-5 flex flex-col justify-center xl:flex-row items-center"
              id="tel-email"
            >
              <p className="m-2.5 text-[17px] text-blanco tracking-wide p-pref">
                Cómo desea ser contactado:
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <div>
                  <input
                    className="mx-1 cursor-pointer"
                    name="contactoPref"
                    type="radio"
                    value="telefono"
                    id="contactar-telefono"
                    onChange={datosCorreo}
                  />
                  <label
                    className="tracking-wide mx-1.5 cursor-pointer custom-radio"
                    htmlFor="contactar-telefono"
                  >
                    Teléfono
                  </label>
                </div>
                <div>
                  <input
                    className="mx-1 cursor-pointer"
                    name="contactoPref"
                    type="radio"
                    value="email"
                    id="contactar-email"
                    onChange={() => datosCorreo}
                  />
                  <label
                    className="tracking-wide mx-1.5 cursor-pointer custom-radio"
                    htmlFor="contactar-email"
                  >
                    E-mail
                  </label>
                </div>
                {alerta.contactoPref.mensaje && (
                  <Alerta
                    mensaje={alerta.contactoPref.mensaje}
                    tipo={alerta.contactoPref.tipo}
                  />
                )}
              </div>
            </div>
            <div className="pb-5 flex flex-col justify-center xl:flex-row items-center">
              <p className="m-2.5 text-[17px] text-blanco tracking-wide p-pref">
                Si eligió teléfono, indique disponibilidad horaria:
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className="mb-2.5 fecha-hora">
                  <label className="mr-2.5 tracking-wide" htmlFor="fecha">
                    Fecha:
                  </label>
                  <input
                    className="shadow-[0_0.5rem_0.5rem_rgba(0,0,0,0.5)] bg-lila text-gris text-center p-0.5  focus:outline-violegris focus:outline-dotted sm:mr-2.5"
                    type="date"
                    id="fecha"
                    name="fecha"
                    onChange={(e) => {
                      datosCorreo(e);
                      validarFecha(e);
                    }}
                  />
                  {alerta.fecha.mensaje && (
                    <Alerta
                      mensaje={alerta.fecha.mensaje}
                      tipo={alerta.fecha.tipo}
                    />
                  )}
                </div>
                <div className="mb-2.5 fecha-hora">
                  <label
                    className="mr-2.5 tracking-wide text-[16px]"
                    htmlFor="hora"
                  >
                    Hora:
                  </label>
                  <input
                    className="shadow-[0_0.5rem_0.5rem_rgba(0,0,0,0.5)] bg-lila text-gris text-center p-0.5 px-2.5  focus:outline-violegris focus:outline-dotted"
                    type="time"
                    id="hora"
                    min="09:00"
                    max="18:00"
                    name="hora"
                    onChange={(e) => {
                      datosCorreo(e);
                      validarHora(e);
                    }}
                  />
                  {alerta.hora.mensaje && (
                    <Alerta
                      mensaje={alerta.hora.mensaje}
                      tipo={alerta.hora.tipo}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-center items-center">
              <p className="m-2.5 text-[17px] text-blanco tracking-wide p-pref">
                Cómo desea ser asesorado:
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <div>
                  <input
                    className="mx-1 cursor-pointer checked:bg-violegris"
                    name="asesoria"
                    type="radio"
                    value="presencial"
                    id="ases-presencial"
                    onChange={datosCorreo}
                  />
                  <label
                    className="tracking-wide mx-1.5 cursor-pointer custom-radio"
                    htmlFor="ases-presencial"
                  >
                    Presencial
                  </label>
                </div>
                <div>
                  <input
                    className="mx-1 cursor-pointer checked:bg-violegris"
                    name="asesoria"
                    type="radio"
                    value="virtual"
                    id="ases-virtual"
                    onChange={datosCorreo}
                  />
                  <label
                    className="tracking-wide mx-1.5 cursor-pointer custom-radio"
                    htmlFor="ases-virtual"
                  >
                    Virtual
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <input
            className="bg-violegris text-lila border-2 border-lila m-4 py-2.5 px-5 font-semibold rounded-[20px] hover:cursor-pointer hover:bg-violaceo tracking-widest outline-none focus:outline-violegris focus:outline-dotted"
            type="submit"
            value="Enviar"
          />
          {alerta.ok.mensaje && (
            <Alerta mensaje={alerta.ok.mensaje} tipo={alerta.ok.tipo} />
          )}
          ;
        </form>
      </div>
    </section>
  );
}
