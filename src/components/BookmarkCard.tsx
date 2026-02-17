'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Trash2, ExternalLink, Hash } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type Bookmark = {
  id: string
  url: string
  title: string
  created_at: string
}

interface Props {
  bookmark: Bookmark
  onDeleteSuccess: (id: string) => void
}

export default function BookmarkCard({ bookmark, onDeleteSuccess }: Props) {
  const [supabase] = useState(() => createClient())
  const [isDeleting, setIsDeleting] = useState(false)
  const [shake, setShake] = useState(false)

  const handleDelete = async () => {
    setShake(true)
    setIsDeleting(true)
    
    // Aesthetic pause for the shake effect
    await new Promise(resolve => setTimeout(resolve, 400))

    // Optimistically update parent UI
    onDeleteSuccess(bookmark.id)

    // Background deletion
    const { error } = await supabase
      .from('bookmarks')
      .delete()
      .eq('id', bookmark.id)

    if (error) {
      console.error('Failed to yeet bookmark:', error.message)
      // Note: In real production, you'd trigger a toast to say "failed" 
      // and refresh the list to bring the card back.
    }
  }
  return (
    <div className="brutalist-card h-full flex flex-col justify-between group relative overflow-hidden">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
           <div className="bg-accent/10 p-2 border border-accent/20">
              <ExternalLink size={16} className="text-accent" />
           </div>
           <motion.button
              whileHover={{ rotate: [-2, 2, -2, 2, 0], transition: { duration: 0.2, repeat: Infinity } }}
              animate={shake ? { x: [-5, 5, -5, 5, 0], scale: [1, 1.1, 1] } : {}}
              onClick={handleDelete}
              disabled={isDeleting}
              className="p-2 hover:bg-red-500/10 hover:text-red-500 transition-colors border border-transparent hover:border-red-500/50"
              title="Delete this artifact"
           >
              <Trash2 size={16} />
           </motion.button>
        </div>
        
        <div className="space-y-1">
          <h4 className="text-lg font-black uppercase tracking-tight line-clamp-2">
            {bookmark.title}
          </h4>
          <p className="text-xs font-mono text-gray-500 truncate italic">
            {bookmark.url}
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center pt-4 border-t border-cyber-border">
        <a 
          href={bookmark.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-mono font-bold uppercase tracking-widest text-accent hover:underline flex items-center gap-2"
        >
          EXPLORE <ExternalLink size={12} />
        </a>
        <span className="text-[10px] font-mono text-gray-600">
          {new Date(bookmark.created_at).toLocaleDateString()}
        </span>
      </div>

      {isDeleting && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center backdrop-blur-sm">
          <p className="text-red-500 font-mono text-xs font-bold animate-pulse">Deleting...</p>
        </div>
      )}
    </div>
  )
}
