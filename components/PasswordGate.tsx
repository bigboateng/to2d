'use client'

import { useState, useEffect, FormEvent } from 'react'

interface PasswordGateProps {
  children: React.ReactNode
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [password, setPassword] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unlocked = localStorage.getItem('automations_unlocked')
    if (unlocked === '1') {
      setIsUnlocked(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    if (password === process.env.NEXT_PUBLIC_AUTOMATIONS_PASSWORD || password === 'transferof2domains') {
      localStorage.setItem('automations_unlocked', '1')
      setIsUnlocked(true)
      setError(false)
    } else {
      setError(true)
      setPassword('')
    }
  }

  if (isLoading) {
    return null
  }

  if (isUnlocked) {
    return <>{children}</>
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="border border-white/10 p-8 max-w-md w-full">
        <h2 className="text-xl font-thin tracking-tight mb-6 text-center">
          Protected Section
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError(false)
              }}
              placeholder="Enter password"
              className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors"
              autoFocus
            />
            {error && (
              <p className="text-red-400/70 text-xs mt-2">
                Incorrect password
              </p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition-colors"
          >
            Unlock
          </button>
        </form>
        
        <p className="text-white/40 text-xs text-center mt-6">
          This section contains private research and work history.
        </p>
      </div>
    </div>
  )
}



