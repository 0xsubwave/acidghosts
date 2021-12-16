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
        <Header title="The Acid Ghosts" />
        <p className="description">
          <code>coming soon.</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
