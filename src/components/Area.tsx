type AreaProps = {
  titulo: string;
  descripcion: string;
  icono: JSX.Element;
};

export default function Area({ titulo, descripcion, icono }: AreaProps) {
  return (
    <div className="flex flex-col w-[30%] max-w-[30%] min-w-[200px] my-3 text-center items-center justify-center area-individual">
      <h3 className="my-2.5 text-2xl font-semibold">{titulo}</h3>
      <div className="iconos">{icono}</div>
      <p className="text-gris text-lg p-area">{descripcion}</p>
    </div>
  );
}
