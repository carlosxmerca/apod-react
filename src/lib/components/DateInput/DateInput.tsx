import { SetStateAction } from "react";

interface DateInputProps {
  value: string;
  onChange: React.Dispatch<SetStateAction<string>>;
}

export default function DateInput({ value, onChange }: DateInputProps) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="date"
      className="text-sm py-2 px-4 bg-[#1E1E1E] rounded-lg flex-1"
      value={value}
      onChange={handleOnChange}
    />
  );
}
