import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Acid Ghosts | 5,888 ghosts, on acid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/acid-ghosts.svg" alt="the acid ghosts">
        <p className="description">
          <code><a href="https://discord.gg/JcVvfctSF4">Discord</a></code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
