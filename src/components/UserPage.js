import React, { useState } from "react";
import {  } from 'react-router-dom';

// 사용자 정보 받아오기 및 경고창으로 확인
const UserPage = ({ history }) => {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(name + gender);
    }
    
    return (
        <div>
            <div>직업가치관검사</div>

                {/* 사용자 이름, 성별 입력 form  */}
                {/* 11.21 수정 내용 이름 input 자동완성기능 off */}
                <form onSubmit={handleSubmit}>
                <div>
                    <p>이름</p>
                    <input 
                        type="text" 
                        id="name"
                        autoComplete='off'
                        value={name} 
                        onChange={
                            (event) => {
                                setName(event.target.value);
                            }
                        }
                    />
                    <p>성별</p>
                    <input 
                        type="radio" 
                        id="male" 
                        name="gender" 
                        value="male"
                        onChange={
                            (event) => {
                                setGender(event.target.id);
                            }
                        }
                    />
                    <label for="male">남자</label>
                    <input 
                        type="radio" 
                        id="female" 
                        name="gender" 
                        value="female"
                        onChange={
                            (event) => {
                                setGender(event.target.id);
                            }
                        }
                    />
                    <label for="female">여자</label>
                </div>

                {/* 이름, 성별 둘 중 하나라도 입력하지 않으면 버튼 비활성화 */}
                <div>
                    { 
                        (name.length === 0) || (gender.length === 0) ?
                        <button type="submit" disabled>검사시작</button> :
                        <button type="submit" onClick={ (event) => { history.push("TestExPage") }}>검사시작</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default UserPage;
