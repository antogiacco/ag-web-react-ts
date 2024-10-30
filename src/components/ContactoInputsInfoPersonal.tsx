type ContactoInputsInfoPersonalProps = {
  label: string;
  id: string;
  placeholder: string;
};

export default function ContactoInputsInfoPersonal({
  label,
  id,
  placeholder,
}: ContactoInputsInfoPersonalProps) {
  return (
    <div
      className="flex justify-evenly gap-5 w-3/4 contenedor-input"
      id="divNombre"
    >
      <label htmlFor={id}>{label}</label>
      <input
        className="placeholder:text-gris placeholder:text-center bg-lila outline-none focus:outline-violegris focus:outline-dotted"
        type="text"
        placeholder={placeholder}
        id={id}
        name={id}
      />
    </div>
  );
}
