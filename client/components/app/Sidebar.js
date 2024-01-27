import Link from "next/link"
export default function Sidebar() {
    return (
        <>
        <nav
      className='relative hidden h-screen border-r border-black/10 dark:border-white/10 pt-16 lg:block w-72'
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Overview
            </h2>
            <nav className="grid items-start gap-2">
            <Link
              href={'/'}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
                <span
                className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                Dashboard
              </span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </nav>

        </>
    )
}