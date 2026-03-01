import Link from 'next/link'
import { Scissors } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdfaf5] text-[#4a3f35] px-4 text-center">
            <div className="mb-8 p-6 rounded-full bg-[#f4ebd8] inline-block animate-[spin-slow_6s_linear_infinite]">
                <Scissors className="w-16 h-16 text-[#2c5f53]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 tracking-wider uppercase">
                Hem perdut el fil...
            </h2>
            <p className="text-xl text-[#5c544d] mb-8 max-w-lg">
                Sembla que la pàgina que busques no existeix, ha estat moguda o hem tallat el patró per on no tocava.
            </p>
            <Button asChild className="bg-[#2c5f53] hover:bg-[#1f453c] text-white text-lg font-serif tracking-wide px-8 py-6">
                <Link href="/">
                    Tornar a l'inici
                </Link>
            </Button>
        </div>
    )
}
