'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import BookmarkCard from './BookmarkCard'
import { motion, AnimatePresence } from 'framer-motion'
import { Ghost } from 'lucide-react'

type Bookmark = {
  id: string
  url: string
  title: string
  created_at: string
}

export default function BookmarkList({ userId }: { userId: string }) {
  const [supabase] = useState(() => createClient())
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [loading, setLoading] = useState(true)

  // OPTIMISTIC HANDLER: Instantly remove item from UI for that "GenZ" speed
  const removeBookmarkFromState = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id))
  }

useEffect(() => {
  const fetchBookmarks = async () => {
    const { data, error } = await supabase
      .from('bookmarks')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (!error) setBookmarks(data)
    setLoading(false)
  }

  fetchBookmarks()
    // Real-time subscription: Keeping tabs in sync
    const channel = supabase
      .channel(`bookmarks-changes-${userId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'bookmarks',
          filter: `user_id=eq.${userId}`,
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            const newBookmark = payload.new as Bookmark
            setBookmarks((prev) => {
              // Avoid duplicates if added via local state already
              if (prev.find(b => b.id === newBookmark.id)) return prev
              return [newBookmark, ...prev]
            })
          } else if (payload.eventType === 'DELETE') {
            removeBookmarkFromState(payload.old.id)
          } else if (payload.eventType === 'UPDATE') {
            const updated = payload.new as Bookmark
            setBookmarks((prev) => prev.map((b) => b.id === updated.id ? updated : b))
          }
        }
      )
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [userId, supabase , removeBookmarkFromState, bookmarks])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="h-10 w-10 border-4 border-accent border-t-transparent animate-spin rounded-full" />
        <p className="font-mono text-sm text-zinc-500 animate-pulse uppercase tracking-widest">
           Optimizing by human intelligence, debugging by AI...
        </p>
      </div>
    )
  }

  if (bookmarks.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-24 space-y-6 border-2 border-dashed border-zinc-800 rounded-2xl bg-zinc-950/50"
      >
        <Ghost className="text-zinc-700" size={64} />
        <div className="text-center space-y-2 px-6">
          <p className="text-xl font-black uppercase tracking-tighter text-white">Your digital cemetery is empty.</p>
          <p className="font-mono text-xs text-zinc-500 italic max-w-sm mx-auto">
            No links have been buried here yet. Go find some internet artifacts to hoard.
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {bookmarks.map((bookmark) => (
          <motion.div
            key={bookmark.id}
            layout // Smoothly slides cards when one is deleted
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotateX: -45, y: 50 }} // Falling into the grave effect
            transition={{ type: 'spring', damping: 18, stiffness: 120 }}
          >
            <BookmarkCard 
              bookmark={bookmark} 
              onDeleteSuccess={removeBookmarkFromState} 
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}