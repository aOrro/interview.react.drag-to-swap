import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Intro } from '../../styles/pages/home';

export default function Home() {
    return (
        <>
            <Head>
                <title>Popsa.com</title>
                <meta name='description' content='' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div>
                <Intro>
                    <Image src='/logo.svg' alt='Popsa' width='127' height='32' />
                    <h1>Welcome to the React frontend test</h1>
                    <Link href='/test-page'>
                        <a>Start test</a>
                    </Link>
                </Intro>
            </div>
        </>
    );
}
