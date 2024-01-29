import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  register?: UseFormRegister<FieldValues>;
  registerOptions?: string;
  error?: string;
  customStyle?: string;
}

function Select({
  label,
  options,
  register,
  registerOptions,
  error,
  customStyle,
  ...rest
}: SelectProps) {
  return (
    <div className={`flex flex-col`}>
      {label && (
        <label className="mb-2 text-sm font-bold text-gray-700">{label}</label>
      )}
      <select
        className={`border p-2 bg-white ${
          error ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:border-blue-500 ${customStyle}`}
        {...(register ? register(registerOptions!) : {})}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="mt-1 text-xs text-red-500">{error}</span>}
    </div>
  );
}

export default Select;
