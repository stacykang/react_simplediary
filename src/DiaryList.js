const DiaryList = ({ diaryList }) => {
    console.log(diaryList);
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <p>{diaryList.length}개의 일기가 있습니다.</p>
        </div>
    );
};

export default DiaryList;
