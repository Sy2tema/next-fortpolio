import Layout from '../components/layout';
import Head from 'next/head';

export default function AboutMe() {
    return (
        <Layout>
            <Head>
                <title>이건혁 포트폴리오</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <h1>나에 대한 소개 페이지입니다.</h1>
            </section>
        </Layout>
    );
}