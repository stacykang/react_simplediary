import { useState } from "react";

const DiaryEditor = () => {
    const [state, setState] = useState({
        author: "",
        content: "",
        author: "악",
    });

    // const [author, setAuthor] = useState("");
    // const [content, setContent] = useState("");

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input
                    type="text"
                    value={state.author}
                    onChange={(e) => {
                        setState({
                            ...state,
                            author: e.target.value,
                        });
                    }}
                />
            </div>
            <div>
                <textarea
                    value={state.content}
                    onChange={(e) => {
                        setState({
                            ...state,
                            content: e.target.value,
                        });
                    }}
                />
            </div>
        </div>
    );
};

export default DiaryEditor;
