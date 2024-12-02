type AlertaProps = {
  mensaje: string;
  tipo: string;
};

export default function Alerta({ mensaje, tipo }: AlertaProps) {
  return <p className={tipo}>{mensaje}</p>;
}
