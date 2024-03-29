import Image from 'next/image';

export default function ProjectItem({data}) {
    // 요소를 더 추가하고자 한다면 아래에 변수를 추가
    const title = data.properties.Name.title[0].plain_text;
    const github = data.properties.Github.url;
    const description = data.properties.Description.rich_text[0].plain_text;
    const thumbnail = data.cover.file?.url || data.cover.external.url;
    const tags = data.properties.Tags.multi_select;
    const start = data.properties.WorkPeriod.date.start;
    const end = data.properties.WorkPeriod.date.end;

    const calculatedPeriod = (start, end) => {
        const startDateList = start.split('-');
        const endDateList = end.split('-');

        let startDate = new Date(startDateList[0], startDateList[1], startDateList[2]);
        let endDate = new Date(endDateList[0], endDateList[1], endDateList[2]);

        console.log(`startDate: ${startDate}\nendDate: ${endDate}`);

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);
        console.log(`기간: ${result}`);

        return result;
    };

    return (
        <div className="project-card">
            <Image 
                className="rounded-t-xl"
                src={thumbnail}
                alt="cover image"
                width="100%"
                height="60%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />
            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={github}>깃허브 바로가기</a>
                <h3 className="mt-4 text-xl">
                    프로젝트 기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
                </h3>
                <div className="flex items-start mt-2">
                    {tags.map((tag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tag.id}>{tag.name}</h1>
                    ))}
                </div>
            </div>
        </div>
    );
}