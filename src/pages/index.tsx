import Head from 'next/head';
import styles from '@styles/Home.module.css';
import Dashboard from './dashboard';

export default function Home() {
    return (
        <>
            <Head>
                <title>Customer Dashboard</title>
                <meta name="description" content="Customer Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                        Welcome to Your Dashboard!
                        <Dashboard />
                </h1>
                </main>
                </div>
                    </>
                    )
}