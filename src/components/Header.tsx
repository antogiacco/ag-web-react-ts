import BarraNav from "./BarraNav";

export default function Header() {
  return (
    <header className="bg-lila h-[255px] sm:h-[132px] md:h-[124px] w-full z-10 text-center fixed shadow-2xl border-b-2 border-gris">
      <BarraNav />
    </header>
  );
}
