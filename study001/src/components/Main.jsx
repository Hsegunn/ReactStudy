
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