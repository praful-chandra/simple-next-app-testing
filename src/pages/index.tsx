import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [data, setData] = useState(null)

const fetchRandom = async ()  =>  {
const dat =  await fetch('/api/hello')

setData(await dat.json())
}

  return (
    <>
    <div>
      Hello THere
    </div>

    <button onClick={fetchRandom} >Click to fetch random data</button>

    {
      data && <div>{JSON.stringify(data)}</div>
    }
    </>
  )
}
