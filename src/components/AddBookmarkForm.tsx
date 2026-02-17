'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Plus, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function AddBookmarkForm({ userId }: { userId: string }) {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return

    setLoading(true)
    setSuccess(false)
    
    // Simple way to get title if not provided (optional)
    const displayTitle = title || url.replace(/^https?:\/\//, '').split('/')[0]

    const { error } = await supabase
      .from('bookmarks')
      .insert([
        { 
          user_id: userId, 
          url, 
          title: displayTitle 
        }
      ])

    setLoading(false)
    if (!error) {
      setUrl('')
      setTitle('')
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } else {
      console.error('Error adding bookmark:', error.message)
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 space-y-2">
          <input
            type="url"
            placeholder="https://awesome-artifact.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="cyber-input w-full font-mono text-sm"
          />
        </div>
        <div className="flex-1 space-y-2">
          <input
            type="text"
            placeholder="Label (Optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="cyber-input w-full font-mono text-sm"
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="cyber-button flex items-center justify-center gap-2 min-w-[140px]"
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              SAVING...
            </>
          ) : (
            <>
              <Plus size={18} />
              HOARD IT
            </>
          )}
        </button>
      </form>
      
      {success && (
        <div className="bg-accent/10 border border-accent text-accent p-2 font-mono text-xs flex justify-between animate-in fade-in slide-in-from-top-2">
          <span>{">"} Saved! Now go forget this link forever.</span>
          <span className="opacity-50">[CLOSE]</span>
        </div>
      )}
    </div>
  )
}
