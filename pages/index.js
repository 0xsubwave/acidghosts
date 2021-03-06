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
        <Header title="" />
        <p>
          <img class="o-9" src="/acid-ghosts.svg" alt="the acid ghosts" />
        </p>
        <p className="description">
          <a href="https://discord.gg/JcVvfctSF4">
            <code>
              Discord
            </code>
          </a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
