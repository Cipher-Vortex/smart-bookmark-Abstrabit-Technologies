import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import BookmarkList from '@/components/BookmarkList'
import AddBookmarkForm from '@/components/AddBookmarkForm'
import { LogOut, User } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/')
  }

  return (
    <div className="space-y-12">
      <header className="flex justify-between items-center border-b border-cyber-border pb-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-accent flex items-center justify-center border border-black shadow-brutalist">
            <User className="text-black" />
          </div>
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight">The Artifacts</h2>
            <p className="text-xs font-mono text-gray-500 italic">Logged in as {user.email?.split('@')[0]}</p>
          </div>
        </div>
        
        <form action="/auth/signout" method="post">
           <button className="p-2 border border-cyber-border hover:bg-white/5 transition-colors group">
              <LogOut size={20} className="group-hover:text-accent transition-colors" />
           </button>
        </form>
      </header>

      <section className="space-y-4">
        <h3 className="text-sm font-mono text-accent uppercase tracking-[0.2em]">New Artifact</h3>
        <AddBookmarkForm userId={user.id} />
      </section>

      <section className="space-y-8">
        <div className="flex justify-between items-end border-b border-cyber-border pb-2">
           <h3 className="text-sm font-mono text-gray-400 uppercase tracking-[0.2em]">Your Digital Hoard</h3>
           <span className="text-[10px] font-mono text-gray-600 italic">Real-time sync active</span>
        </div>
        <BookmarkList userId={user.id} />
      </section>
    </div>
  )
}
