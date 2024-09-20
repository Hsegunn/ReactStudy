import useInput from "../hooks/useInput";

// 3가지 Hook 관련 팁
// 1. 함수 컴포넌트 , 커스텀 훅 내부에서만 호출가능
// 2. 조건부로 호출될 수 없다
// 3. 커스텀 훅을 만들 수 있다

const HookExam = () => {
    const [input, onChange] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    );
};

export default HookExam;