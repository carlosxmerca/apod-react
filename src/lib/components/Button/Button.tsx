interface ButtonProps {
  action?: Function;
  text: string;
  theme?: "primary" | "secondary";
  w?: string;
}

const styles: { primary: string; secondary: string } = {
  primary: "bg-[#1E1E1E]",
  secondary: "bg-white text-[#1E1E1E]",
};

export default function Button({
  action,
  text,
  theme = "primary",
  w = "auto",
}: ButtonProps) {
  const style: string = styles[theme];

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        action?.();
      }}
      className={`${w} py-2 px-6 flex justify-center items-center ${style} rounded-lg`}
    >
      {text}
    </button>
  );
}
