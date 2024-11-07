type NavItemProps = {
  link: string;
  nombre: string;
};

export default function NavItem({ link, nombre }: NavItemProps) {
  return (
    <li className="hover:bg-violaceo text-gris p-2.5 sm:p-2.5 md:p-4 cursor-pointer sm:rounded-full">
      <a className="hover:text-lila" href={link}>
        {nombre}
      </a>
    </li>
  );
}
