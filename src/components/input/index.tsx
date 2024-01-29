import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: UseFormRegister<FieldValues>;
  registerOptions?: string;
  error?: string;
  customStyle?: string;
}

interface InputBaseProps {
  label?: string;
  register?: UseFormRegister<FieldValues>;
  registerOptions?: string;
  error?: string;
  customStyle?: string;
}

const InputBase = ({
  register,
  registerOptions,
  error,
  customStyle,
  ...rest
}: InputBaseProps) => {
  return (
    <input
      className={`border p-2 ${
        error ? "border-red-500" : "border-gray-300"
      } focus:outline-none ${customStyle}`}
      {...(register ? register(registerOptions!) : {})}
      {...rest}
    />
  );
};

export const Input = ({
  label,
  register,
  registerOptions,
  error,
  ...rest
}: InputProps) => {
  return (
    <div className={`flex flex-col`}>
      {label && (
        <label className="mb-2 text-sm font-bold text-gray-700">{label}</label>
      )}

      <InputBase
        {...rest}
        register={register}
        registerOptions={registerOptions}
      />

      {error && <span className="mt-1 text-xs text-red-500">{error}</span>}
    </div>
  );
};
