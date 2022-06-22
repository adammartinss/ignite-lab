import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Lesson from './Lesson';

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            title
            slug
            availableAt
        }
    }
`;
interface GetLessonsQueryResponse {
    lessons: {
        id: string;
        title: string;
        slug: string;
        availableAt: string;
        lessonType: 'live' | 'class';
    }[];
}
const Sidebar = () => {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
    console.log(data);
    return (
        <aside className="w-[348px] p-6 bg-gray-700 border-l border-gray-600">
            <span className="font-bold text-2xl border-b border-gray-500 block pb-6 mb-6 mx-auto">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    );
                })}
            </div>
        </aside>
    );
};

export default Sidebar;
