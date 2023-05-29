import { useState } from "react";

const DiaryEditor = () => {
    const [author, setAuthor] = useState("강현주");

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => {
                        //이벤트 객체 e
                        console.log(e);
                        console.log(e.target);
                        console.log(e.target.value);
                        setAuthor(e.target.value);
                    }}
                />
            </div>
        </div>
    );
};

export default DiaryEditor;
