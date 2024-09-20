// import { useState } from "react";
// // 간단한 회원가입 폼
// // 1. 이름
// // 2. 생년월일
// // 3. 국적
// // 4. 자기소개

// const Register = () => {

//     const [name, setName] = useState("이름");
//     const [birth, setBirth] = useState("");
//     const [country, setCountry] = useState("");
//     const [bio, setBio] = useState("");

//     const onChangeName = (e) => {
//         setName(e.target.value);
//     };
//     const onChangeBirth = (e) => {
//         setBirth(e.target.value);
//     };
//     const onChangeCountry = (e) => {
//         setCountry(e.target.value);
//     };
//     const onChangeBio = (e) => {
//         setBio(e.target.value);
//     };


//     return (
//     <div>
//         <div>
//             <input 
//             value={name}
//             onChange={onChangeName} 
//             placeholder={"이름"} />
//         </div>

//         <div>
//             <input 
//             value={birth}
//             onChange={onChangeBirth} 
//             type="date" />
//         </div>

//         <div>
//             <select value = {country} onChange={onChangeCountry}>
//                 <option value = ""></option>
//                 <option value = "KR">한국</option>
//                 <option value = "US">미국</option>
//                 <option value = "JP">일본</option>

//             </select>
//         </div>
        
//         <div>
//             <textarea value={bio} onChange={onChangeBio}/>
//         </div>
//     </div>
//     );
// };

// export default Register;


import { useRef , useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [input, setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : "",

    })

    const countRef = useRef(0);
    const inputRef = useRef();
    
    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    };
    const onSubmit = () => {
        if(input.name === ""){
            inputRef.current.focus();
        }
    };

    return (
    <div>

        <div>
            <input 
            ref={inputRef}
            name = "name"
            value={input.name}
            onChange={onChange} 
            placeholder={"이름"} />
        </div>

        <div>
            <input 
            name = "birth"
            value={input.birth}
            onChange={onChange} 
            type="date" />
        </div>

        <div>
            <select name = "country" value = {input.country} onChange={onChange}>
                <option value = ""></option>
                <option value = "KR">한국</option>
                <option value = "US">미국</option>
                <option value = "JP">일본</option>

            </select>
        </div>
        
        <div>
            <textarea name = "bio" value={input.bio} onChange={onChange}/>
        </div>
        <button onClick={onSubmit}>제출</button>
    </div>
    );
};

export default Register;
