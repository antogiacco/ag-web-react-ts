export default function Slogan() {
  return (
    <section className="pt-[124px] w-11/12 mx-auto grid md:grid-cols-2 items-center border-b-2 border-b-lila border-double">
      <img
        className="mt-2.5 mb-4 ml-2.5"
        src="/public/pilares-justicia.jpeg"
        alt="Foto pilares justicia"
      />
      <div className="text-center m-2.5">
        <h1 className="font-fuenteCursiva p-2 text-lila text-[35px]">
          Poniendo a su disposición los pilares de la justicia
        </h1>
        <p className="text-blanco p-2 tracking-widest">
          Igualdad | Verdad | Justicia | Derecho | Ley
        </p>
      </div>
    </section>
  );
}
