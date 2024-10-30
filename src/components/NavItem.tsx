type NavItemProps = {
  link: string;
  nombre: string;
};

export default function NavItem({ link, nombre }: NavItemProps) {
  return (
    <li className="hover:bg-violaceo text-gris p-4 cursor-pointer md:rounded-full">
      <a className="hover:text-lila" href={link}>
        {nombre}
      </a>
    </li>
  );
}
