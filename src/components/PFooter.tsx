type PFooterProps = {
  dato: string;
  info: string;
};

export default function PFooter({ dato, info }: PFooterProps) {
  return (
    <p className="text-gris text-sm">
      {dato} {""}
      <span className="font-bold">{info}</span>
    </p>
  );
}
