'use client'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Navbar() {
    const pathname = usePathname();
    return(
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center">
                <Link href='/' className="text-indigo-700 hover:text-gray-900">
                Logo
                </Link>
            </div>
            <nav className="flex items-center space-x-4">
                <Link href='/dashboard' className="text-indigo-700 hover:text-indigo-900">
                <Button
                variant={'link'}
                className={cn(pathname === '/dashboard' ? 'underline' : '')}>
                    Agenda do Mes
                </Button>
                </Link>
            </nav>
            </div>

        </header>
    )
}