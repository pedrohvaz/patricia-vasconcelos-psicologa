import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'outline-light';
type Size = 'md' | 'lg';

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-wide ' +
  'transition-all duration-300 ease-soft focus-visible:outline-offset-4 ' +
  'disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-petrol text-white shadow-[0_10px_30px_-12px_rgb(9_115_138/0.6)] hover:bg-petrol-dark hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-14px_rgb(9_115_138/0.7)]',
  secondary:
    'border border-navy/20 bg-white/60 text-navy backdrop-blur hover:border-petrol hover:text-petrol hover:-translate-y-0.5',
  ghost: 'text-navy underline-offset-8 hover:text-petrol hover:underline',
  light: 'bg-sand text-navy hover:bg-white hover:-translate-y-0.5',
  'outline-light': 'border border-white/60 text-white hover:border-white hover:bg-white/10 hover:-translate-y-0.5',
};

const sizes: Record<Size, string> = {
  md: 'min-h-11 px-6 py-2.5 text-sm',
  lg: 'min-h-13 px-8 py-3.5 text-[0.95rem]',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md', className = '') {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

type ButtonLinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { external?: boolean };

export function ButtonLink({
  variant,
  size,
  icon,
  children,
  className,
  external,
  ...rest
}: ButtonLinkProps) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a className={buttonClasses(variant, size, className)} {...externalProps} {...rest}>
      {icon}
      <span>{children}</span>
    </a>
  );
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant, size, icon, children, className, type = 'button', ...rest }: ButtonProps) {
  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...rest}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
