import { AlertaCampo } from "../types";
import Alerta from "./Alerta";

type ContactoInputsInfoPersonalProps = {
  label: string;
  id: string;
  placeholder: string;
  tipo: string;
  datosCorreo: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  alerta: AlertaCampo;
  value: string;
};

export default function ContactoInputsInfoPersonal({
  label,
  id,
  placeholder,
  tipo,
  datosCorreo,
  alerta,
  value,
}: ContactoInputsInfoPersonalProps) {
  return (
    <div
      className="flex flex-wrap justify-evenly items-end gap-5 md:w-[30%] contenedor-input"
      id="divNombre"
    >
      <label className="tracking-wide text-[16px] w-14" htmlFor={id}>
        {label}
      </label>
      <input
        className="placeholder:text-gris placeholder:text-center bg-lila autofill:bg-lila autofill:text-gris outline-none focus:outline-violegris focus:outline-dotted shadow-[0_0.5rem_0.5rem_rgba(0,0,0,0.5)]"
        type={tipo}
        placeholder={placeholder}
        id={id}
        name={id}
        onChange={datosCorreo}
        value={value}
      />
      {alerta.mensaje && <Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} />}
    </div>
  );
}
