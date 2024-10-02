import './App.css'
import { useReducer, useRef } from 'react'
import { Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'

const mokData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "첫번째 일기내용"
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "두번째 일기내용"
  }
]

function reducer(state, action) {
  switch(action.type){
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item)=> 
        String(item.id) === String(action.data.id)? 
        action.data : item
      );
    case "DELETE":
      return state.fliter((item)=> String(item.id) !== String(action.id));
    default:
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mokData);
  const idRef = useRef(3);

  // 새로운 일기추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch(
      {
      type: "CREATE",
      data:{
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
        },
      }
    )
  }

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch(
      {
        type: "UPDATE",
        data:{
          id,
          createdDate,
          emotionId,
          content,
        },
      }
    )
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  return (
    <>
    <button onClick={()=>{
      onCreate(new Date().getTime(), 1, "hello")
    }}>생성 테스트</button>

    <button onClick={() => {
      onUpdate(1, new Date().getTime(), 3, "수정된 내용")
    }}>수정</button>

    <button onClick={() => {

    }}>삭제</button>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/new' element={<New/>} />
        <Route path='/diary/:id' element={<Diary/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
    </>

  )
}

export default App
