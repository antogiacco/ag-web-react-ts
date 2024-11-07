import InfoFormacion from "./InfoFormacion";

export default function Formacion() {
  return (
    <section
      id="formacion"
      className="w-11/12 mx-auto p-2.5 m-4 text-center border-t-2 border-t-lila border-b-2 border-b-lila border-double"
    >
      <h2 className="text-4xl font-bold my-2.5">Formación</h2>
      <div className="my-2.5 py-2.5 flex flex-col items-center content-center gap-5 md:grid md:grid-cols-2 contenedor-formacion">
        <div className="h-auto imagenes-formacion">
          <img
            className="mx-auto h-auto m-2.5 rounded-2xl img__formacion"
            src="/public/facultad_de_derecho_by_satanarchist-1-1.jpg"
            alt="Foto Facultad de Derecho UBA"
          />
        </div>
        <div className="flex flex-col flex-wrap items-center content-center sm:items-start info-formacion">
          <InfoFormacion
            imagen="/public/Emblema_de_la_facultad_de_derecho_de_la_UBA.png"
            altImg="Escudo Facultad de Derecho UBA"
            titulo="Abogada UBA"
            descripcion="Profesional recibida con honores de la Facultad de Derecho de la Universidad de Buenos Aires"
          />
          <InfoFormacion
            imagen="/public/lOGO-augm_sintxt.png"
            altImg="Logo AUGM"
            titulo="Beca AUGM"
            descripcion="Selección por méritos para participar en programa de intercambio becado durante un semestre en una universidad extranjera miembro de la Asociación de Universidades Grupo Montevideo (AUGM)"
          />
          <InfoFormacion
            imagen="/public/cpacf-chico.jpg"
            altImg="Logo CPACF"
            titulo="Matriculada CPACF"
            descripcion="Jurisdicción Ciudad Autónoma de Buenos Aires"
          />
        </div>
      </div>
    </section>
  );
}
