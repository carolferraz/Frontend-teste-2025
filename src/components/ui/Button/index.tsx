import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button, IconWrapper } from './styles'

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'dark'
  children: ReactNode
  icon?: ReactNode
  coloredicon?: boolean
}

export default function ButtonComponent({
  variant = 'primary',
  children,
  icon,
  coloredicon,
  ...rest
}: TButtonProps) {
  return (
    <Button variant={variant} {...rest}>
      {icon && (
        <IconWrapper $variant={variant} $coloredicon={coloredicon}>
          {icon}
        </IconWrapper>
      )}
      {children}
    </Button>
  )
}
