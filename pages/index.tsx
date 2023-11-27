import Image from 'next/image'
import { Inter } from 'next/font/google'
import Counter from '@/components/Counter/Counter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex h-screen w-screen items-center justify-center ${inter.className}`}
    >
      <Counter />
    </main>
  )
}
