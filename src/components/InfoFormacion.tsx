type InfoFormacionProps = {
  imagen: string;
  altImg: string;
  titulo: string;
  descripcion: string;
};

export default function InfoFormacion({
  imagen,
  altImg,
  titulo,
  descripcion,
}: InfoFormacionProps) {
  return (
    <div className="m-2.5 flex flex-col sm:flex-row gap-3 w-full info">
      <img
        className="w-[70px] h-[70px] m-auto rounded-2xl"
        src={imagen}
        alt={altImg}
      />
      <div className="w-full mr-2.5 px-2.5 flex flex-col items-center info-titulo ">
        <h3 className="margin-info font-semibold text-2xl">{titulo}</h3>
        <p className="text-lg p-info">{descripcion}</p>
      </div>
    </div>
  );
}
