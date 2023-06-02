const arrayA = [1, 2, 3];

const DiaryList = ({ diaryList }) => {
    console.log(arrayA);
    console.log(diaryList);
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <p>{diaryList.length}개의 일기가 있습니다.</p>
            <div>
                {diaryList.map((item) => (
                    <div key={item.id}>
                        <div>작성자 : {item.author}</div>
                        <div>일기 : {item.content}</div>
                        <div>감정 : {item.emotion}</div>
                        <div>작성 시간(ms) : {item.create_date}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;
