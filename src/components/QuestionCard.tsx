import React from "react";

interface QuestionCardProps {
    question: string;
    tags: string[];
    likes: number;
    contributors: number;
    responses:number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    tags,
    likes,
    contributors,responses
}) => {
    return (
        <div className="rounded-lg shadow-lg p-6" style={{
            background:"#090D23"
        }}>
            <h2 className="text-white text-lg font-medium mb-2">{question}</h2>
            <h2 className="text-white text-sm font-normal mb-2">{"Description of the Question"}</h2>

            <div className="flex flex-wrap mb-4">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div style={{
                width:"40%"
            }} className="flex items-center justify-between mx-2">
                <div className="flex items-center">
                    <img src="likes.png" className="h-5 w-5"></img>
                    <span className="text-gray-500 text-sm">{likes}</span>
                </div>
                <div className="flex items-center">

                    <img src="contributors.png" className="h-5 w-5"></img>
                   
                    <span className="text-gray-500 text-sm">{contributors}</span>
                </div>
                <div className="flex items-center">

                    <img src="responses.png" className="h-5 w-5"></img>
                   
                    <span className="text-gray-500 text-sm">{responses}</span>
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;
