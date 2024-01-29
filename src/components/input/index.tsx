import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: UseFormRegister<FieldValues>;
  registerOptions?: string;
  error?: string;
  customStyle?: string;
}

function Input({
  label,
  register,
  registerOptions,
  error,
  customStyle,
  ...rest
}: InputProps) {
  return (
    <div className={`flex flex-col`}>
      {label && (
        <label className="mb-2 text-sm font-bold text-gray-700">{label}</label>
      )}
      <input
        className={`border p-2 ${
          error ? "border-red-500" : "border-gray-300"
        } focus:outline-none ${customStyle}`}
        {...(register ? register(registerOptions!) : {})}
        {...rest}
      />
      {error && <span className="mt-1 text-xs text-red-500">{error}</span>}
    </div>
  );
}

export default Input;
