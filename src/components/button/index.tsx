import { CircleNotch } from "@phosphor-icons/react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "filled"
  | "danger"
  | "agnostic";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  iconOnly?: boolean;
  children: React.ReactNode;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  width?: string;
  loading?: boolean;
  customStyle?: string;
}

export const ButtonBase = (props: ButtonProps) => {
  const {
    iconStart,
    iconEnd,
    children,
    buttonRef,
    loading = false,
    disabled,
    customStyle,
    ...rest
  } = props;

  const label = children;

  return (
    <div className={`flex justifystart items-center`}>
      <button
        className={`flex justify-center items-center min-w-[68px] h-[40px] ${customStyle}`}
        disabled={disabled || loading}
        ref={buttonRef}
        {...rest}
      >
        {iconStart && <div className="flex items-center">{iconStart}</div>}
        {loading ? <CircleNotch size={20} /> : label}
        {iconEnd && <div className="flex items-center">{iconEnd}</div>}
      </button>
    </div>
  );
};
