import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";

export default function Projects({projectNames}) {
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

// notion-version을 6-28로 설정할 경우 properties가 정상적으로 들어오지 않는 문제가 발생
export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Notion-Version': '2022-02-22',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({page_size: 100})
    };
    
    // await를 이용해 응답 데이터가 다 받아질때까지 대기
    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

    // 응답 결과데이터를 JSON형식으로 변환
    const resResult = await response.json();

    // 불러온 데이터 결과물들 중 id만 따로 분류
    const projectNames = resResult.results.map((project) => (
        project.properties.Name.title[0].plain_text
    ));

    console.log(`projectNames: ${projectNames}`);

    // 외부로 전달하고자 하는 값들을 props안에 지정
    return {
      props: {projectNames}, // will be passed to the page component as props
    }
}