import ContactoInputsInfoPersonal from "./ContactoInputsInfoPersonal";

export default function Contacto() {
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
              />
              <ContactoInputsInfoPersonal
                label="E-mail:"
                id="email"
                placeholder="Tu correo"
              />
              <ContactoInputsInfoPersonal
                label="Teléfono:"
                id="telefono"
                placeholder="Tu teléfono"
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
              ></textarea>
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
                  />
                  <label
                    className="tracking-wide mx-1.5 cursor-pointer custom-radio"
                    htmlFor="contactar-email"
                  >
                    E-mail
                  </label>
                </div>
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
                  />
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
                  />
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
        </form>
      </div>
    </section>
  );
}
