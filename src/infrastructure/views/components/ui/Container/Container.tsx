import React, { FC } from 'react'

interface Props {
  className?: string
  children?: any
  el?: HTMLElement
}

const Container: FC<Props> = ({ children, className, el = 'div' }) => {
  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any

  return <Component className={className}>{children}</Component>
}

export default Container
