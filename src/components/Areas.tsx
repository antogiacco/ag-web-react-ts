import Area from "./Area";
import { iconoSucesiones, iconoContratos, iconoLitigios } from "./IconosAreas";

export default function Areas() {
  return (
    <section
      id="areas"
      className="bg-violaceo my-4 p-3.5 w-11/12 mx-auto rounded-xl text-center"
    >
      <h2 className="text-4xl font-bold my-2.5">Areas de trabajo</h2>
      <div className="bg-blanco rounded-xl py-2.5 m-4 flex flex-wrap justify-around gap-3 contenedor-areas">
        <Area
          titulo="Sucesiones"
          icono={iconoSucesiones}
          descripcion="Transmisión de bienes a sus herederos"
        />
        <Area
          titulo="Contratos"
          icono={iconoContratos}
          descripcion="Previsiones para regular relaciones contractualmente"
        />
        <Area
          titulo="Litigios"
          icono={iconoLitigios}
          descripcion="Representación en procesos administrativos y judiciales"
        />
      </div>
    </section>
  );
}
