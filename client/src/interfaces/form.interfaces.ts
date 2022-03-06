export interface FormProps {
  values?: any;
  onSubmit?: any;
  children?: any;
}

export interface TextInputProps {
  id?: string;
  name?: string;
  type?: string;
  icon?: any;
  righticon?: any;
  rows?: number;
  iconposition?: string;
  onChange?: any;
  value?: string | number;
  min?: string | number;
  max?: string | number;
  placeholder?: string;
  bgcolor?: string;
  bdcolor?: string;
  required?: boolean;
  disabled?: boolean;
  accept?: string;
  minlength?: string;
}

export interface CheckboxProps {
  onChange?: any;
  checked?: boolean;
  text?: string;
  children?: any;
  name?: string;
}

export interface SelectProps {
  onChange?: any;
  checked?: boolean;
  text?: string;
  children?: any;
  name?: string;
  options?: Option[];
  bgcolor?: string;
  multiple?: boolean;
  required?: boolean;
  id?: any;
  value?: any;
}

export interface Option {
  value?: string | number;
  text?: string;
  name?: string;
  code?: string | number;
}

export interface LinkProps {
  to: string;
  children?: any;
  variant?: string;
  color?: string;
  onClick?: any;
}

export interface SocialAuthProps {
  type?: string;
}

export interface LabelProps {
  type?: string;
  children?: any;
}

export interface ToggleInputProps {
  onChange?: any;
  checked?: boolean;
  name?: string;
  required?: boolean;
}
