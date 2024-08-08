interface ButtonProps {
  action?: Function;
  text: string;
  w?: string;
}

export default function Button({ action, text, w = "auto" }: ButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        action?.();
      }}
      className={`${w} py-2 px-6 flex justify-center items-center bg-[#1E1E1E] rounded-lg`}
    >
      {text}
    </button>
  );
}
