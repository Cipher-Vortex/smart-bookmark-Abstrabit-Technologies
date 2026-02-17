'use client'

import { createClient } from '@/utils/supabase/client'
import { MoveRight } from 'lucide-react'

export default function LoginButton() {
  const supabase = createClient()

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  return (
    <button 
      onClick={handleLogin}
      className="cyber-button text-lg flex items-center gap-2 group"
    >
      JOIN THE HOARD <MoveRight className="group-hover:translate-x-1 transition-transform" />
    </button>
  )
}
