'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import BookmarkCard from './BookmarkCard'
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee } from 'lucide-react'

type Bookmark = {
  id: string
  url: string
  title: string
  created_at: string
}

export default function BookmarkList({ userId }: { userId: string }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const fetchBookmarks = async () => {
      const { data, error } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (!error) {
        setBookmarks(data)
      }
      setLoading(false)
    }

    fetchBookmarks()

    // Real-time subscription
    const channel = supabase
      .channel('bookmarks-realtime')
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
            setBookmarks((prev) => [payload.new as Bookmark, ...prev])
          } else if (payload.eventType === 'DELETE') {
            setBookmarks((prev) => prev.filter((b) => b.id !== payload.old.id))
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [userId, supabase])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="h-8 w-8 border-2 border-accent border-t-transparent animate-spin" />
        <p className="font-mono text-sm text-gray-500 animate-pulse">
           Optimizing by human intelligence, debugging by AI...
        </p>
      </div>
    )
  }

  if (bookmarks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-6 brutalist-card border-dashed">
        <Coffee className="text-gray-600" size={48} />
        <div className="text-center space-y-2">
          <p className="text-xl font-bold uppercase tracking-tight">Your digital hoard is currently empty.</p>
          <p className="font-mono text-sm text-gray-500 italic">Go find some internet artifacts. My coffee cup is just as empty.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {bookmarks.map((bookmark) => (
          <motion.div
            key={bookmark.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            layout
          >
            <BookmarkCard bookmark={bookmark} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
