import { useState, useEffect } from 'react'

function useHome() {
  const [isLoading, setIsLoading] = useState(false)
  const [greeting, setGreeting] = useState('Good morning')

  useEffect(() => {
    const date = new Date()
    const hour = date.getHours()

    if (hour >= 12 && hour < 17) {
      setGreeting('Good afternoon')
    } else if (hour >= 17 && hour < 24) {
      setGreeting('Good evening')
    }
  }, [])

  useEffect(() => {
    async function init() {
      setIsLoading(true)

      // TODO: Call an API to get data after component is mounted.
      // const foo = await ApiService.getFoo()

      setIsLoading(false)
    }

    init()
  }, []) // eslint-disable-line

  return {
    isLoading,
    greeting,
  }
}

export default useHome
