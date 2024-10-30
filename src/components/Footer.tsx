import BarraNav from "./BarraNav";
import PFooter from "./PFooter";

export default function Footer() {
  return (
    <footer className="bg-lila w-full items-center ">
      <BarraNav />
      <div className="flex flex-wrap justify-around pb-2.5">
        <PFooter dato="Teléfono:" info="4584-9433" />
        <PFooter dato="E-mail:" info="aglaconchadetumadre@correo.com" />
        <PFooter dato="Atención:" info="lunes a viernes de 9 a 18hs" />
      </div>
    </footer>
  );
}
