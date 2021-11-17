import React, { useState } from "react";
import { Link } from 'react-router-dom';

// 사용자 정보 받아오기 및 경고창으로 확인
const UserPage = () => {
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
                <form onSubmit={handleSubmit}>
                <div>
                    <p>이름</p>
                    <input 
                        type="text" 
                        id="name" 
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
                        <button type="submit" disabled>검사 시작</button> :
                        <Link to="/TestExPage"><button type="submit">검사 시작</button></Link>
                    }
                </div>
            </form>
        </div>
    )
}

export default UserPage;
