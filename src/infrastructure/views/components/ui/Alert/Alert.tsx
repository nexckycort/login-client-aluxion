import React from 'react'
import cn from 'classnames'

interface Props {
  className?: string
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
}

const Alert: React.FC<Props> = (props) => {
  const { className, type = 'primary', children } = props

  const rootClass = cn('alert', `alert-${type}`, className)

  return (
    <div className={rootClass} role="alert">
      {children}
    </div>
  )
}

export default Alert
