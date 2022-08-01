import Image from 'next/image';

export default function ProjectItem({data}) {
    // 요소를 더 추가하고자 한다면 아래에 변수를 추가
    const title = data.properties.Name.title[0].plain_text;
    const github = data.properties.Github.url;
    const description = data.properties.Description.rich_text[0].plain_text;
    const thumbnail = data.cover.file?.url || data.cover.external.url;
    const tags = data.properties.Tags.multi_select;

    return (
        <div className="flex flex-col m-3 bg-slate-700 rounded-xl w-full">
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
                <div className="flex items-start mt-2">
                    {tags.map((tag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tag.id}>{tag.name}</h1>
                    ))}
                </div>
            </div>
        </div>
    );
}