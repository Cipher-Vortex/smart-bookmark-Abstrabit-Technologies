'use client'

import { createClient } from '@/utils/supabase/client'
import { MoveRight } from 'lucide-react'
import { getURL } from '@/utils/url'

export default function LoginButton() {
  const supabase = createClient()

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${getURL()}auth/callback`,
      },
    })
  }

  return (
    <button 
      onClick={handleLogin}
      className="cyber-button text-lg flex items-center gap-2 group"
    >
      JOIN THE CLUB <MoveRight className="group-hover:translate-x-1 transition-transform" />
    </button>
  )
}
