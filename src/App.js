import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

//예시용 임시 배열 생성, diaryList에 prop으로 데이터 전달
const dummyList = [
    {
        id: 1,
        author: "강현주",
        content: "오늘은 리액트를 공부했다",
        emotion: 2,
        create_date: new Date().getTime(),
    },
    {
        id: 2,
        author: "강현주",
        content: "마라탕을 먹었다.",
        emotion: 3,
        create_date: new Date().getTime(),
    },
    {
        id: 3,
        author: "강현주",
        content: "구름이랑 산책을 갔다",
        emotion: 1,
        create_date: new Date().getTime(),
    },
];

function App() {
    return (
        <div className="App">
            <DiaryEditor />
            <DiaryList diaryList={dummyList} />
        </div>
    );
}

export default App;
