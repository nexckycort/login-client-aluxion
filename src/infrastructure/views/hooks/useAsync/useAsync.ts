import { useCallback, useEffect, useState } from 'react'

export enum STATUS {
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error'
}

const useAsync = <T extends any>(asyncFunction: any, immediate = true) => {
  const [status, setStatus] = useState<STATUS>(STATUS.IDLE)
  const [value, setValue] = useState(null as unknown as T)
  const [error, setError] = useState(null as unknown as Error)

  const execute = useCallback(() => {
    setStatus(STATUS.PENDING)
    setValue(null as unknown as T)
    setError(null as unknown as Error)
    return asyncFunction()
      .then((response: any) => {
        setValue(response)
        setStatus(STATUS.SUCCESS)
      })
      .catch((error: Error) => {
        setError(error)
        setStatus(STATUS.ERROR)
        setTimeout(() => {
          setStatus(STATUS.IDLE)
        }, 3000)
      })
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])
  return { execute, status, value, error }
}

export default useAsync
