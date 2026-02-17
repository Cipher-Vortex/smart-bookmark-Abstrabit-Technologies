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
      <header className="flex justify-between items-center border-b border-cyber-border pb-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-accent flex items-center justify-center border border-black shadow-brutalist">
            <User className="text-black" />
          </div>
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight">The Artifacts</h2>
            <p className="text-xs font-mono text-gray-500 italic">Logged in as<span className='text-accent'> {user.email?.split('@')[0]}</span></p>
          </div>
        </div>     
        <form action="/auth/signout" method="post" className='flex flex-row gap-5'>
         <Link href="/about" className="hidden md:flex items-center gap-2 px-4 py-2 bg-accent text-black font-black uppercase text-xs hover:bg-white transition-colors">
Meet The Developer          </Link>     
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
           <h3 className="text-sm font-mono text-gray-400 uppercase tracking-[0.2em]">Your Digital Cemetery for Links</h3>
        </div>
        <BookmarkList userId={user.id} />
      </section>
    </div>
  )
}
