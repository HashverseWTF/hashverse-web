import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div  className="c1">
      <style jsx>{`
        .c1{
          background: url(./bigImage2.png) no-repeat;
          background-size: 100% 100%;
          width: 100%;
          height: 1024px;
        }
      `}</style>
    </div>
  )
}
