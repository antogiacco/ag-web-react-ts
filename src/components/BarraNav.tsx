import NavItem from "./NavItem";

export default function BarraNav() {
  const botonesNav = [
    { link: "#areas", nombre: "Areas" },
    { link: "#formacion", nombre: "Formacion" },
    { link: "#contacto", nombre: "Contacto" },
  ];

  return (
    <div className="w-full text-center flex flex-col items-center justify-around md:grid md:grid-cols-[1fr_3fr] md:place-items-center">
      <a href="index.html">
        <img
          className="w-24 my-1"
          src="/public/logoAG.png"
          alt="Logo AG"
          loading="lazy"
        />
      </a>
      <nav className="w-full h-full">
        <ul className="font-bold h-full flex flex-col justify-around md:grid md:grid-cols-3 md:place-items-center">
          {botonesNav.map((boton) => (
            <NavItem
              key={boton.nombre}
              link={boton.link}
              nombre={boton.nombre}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
