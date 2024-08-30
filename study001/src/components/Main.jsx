
// 중괄호 내부에는 자바스크립트 표현식만 가능
// 숫자, 문자열, 배열 값만 랜더링 된다

const Main = () => {
    const num = 10;
    
    return (
        <main>
            <h1>Main</h1>
            <h2>{num %2 === 0 ? "짝" : "홀"}</h2>
        </main>
    );
};

export default Main;