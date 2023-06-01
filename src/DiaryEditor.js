import { useState } from "react";

const DiaryEditor = () => {
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });

    const handleChangeState = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log(state);
        if (state.author.length < 1) {
            alert("작성자는 최소 5글자 이상 입력해주세요.");
            return;
        }
        if (state.content.length < 1) {
            alert("일기 본문은 최소 5글자 이상 입력해주세요.");
            return;
        }
        alert("저장 성공!😄");
    };

    // const [author, setAuthor] = useState("");
    // const [content, setContent] = useState("");

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <p>작성자</p>
                <input
                    name="author"
                    type="text"
                    value={state.author}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <p>내용</p>
                <textarea
                    name="content"
                    value={state.content}
                    rows="8"
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <span>오늘의 감정점수</span>
                <select
                    name="emotion"
                    value={state.emotion}
                    onChange={handleChangeState}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    );
};

export default DiaryEditor;
