import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import BookmarkList from '@/components/BookmarkList'
import AddBookmarkForm from '@/components/AddBookmarkForm'
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'

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
<header className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-800 pb-8 gap-6">
  <div className="flex items-center gap-4">
    <div className="h-14 w-14 bg-accent flex items-center justify-center border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,255,136,0.3)] shrink-0">
      <User size={28} className="text-black" />
    </div>
    <div className="space-y-0.5">
      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">
        The Artifacts
      </h2>
      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
        Logged in as: <span className="text-accent font-bold">@{user.email?.split('@')[0]}</span>
      </p>
    </div>
  </div>

  <div className="flex items-center gap-3 w-full sm:w-auto">
    <Link 
      href="/about" 
      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-accent text-black font-black uppercase text-xs hover:bg-white transition-all transform hover:-translate-y-0.5 active:translate-y-0"
    >
      Meet The Architect
    </Link>

    <form action="/auth/signout" method="post" className="flex items-center">
      <button 
        type="submit"
        className="p-2.5 border border-zinc-800 hover:border-red-500/50 hover:bg-red-500/5 transition-all group"
        title="Abort Mission (Sign Out)"
      >
        <LogOut size={18} className="group-hover:text-red-500 transition-colors" />
      </button>
    </form>
  </div>
</header>
      <section className="space-y-4">
        <h3 className="text-sm font-mono text-accent uppercase tracking-[0.2em]">New Artifact</h3>
        <AddBookmarkForm userId={user.id} />
      </section>

      <section className="space-y-8">
        <div className="flex justify-between items-end border-b border-cyber-border pb-2">
           <h3 className="text-sm font-mono text-gray-400 uppercase tracking-[0.2em]">Your Digital Cemetery for Links</h3>
        </div>
        <BookmarkList userId={user.id} />
      </section>
    </div>
  )
}
