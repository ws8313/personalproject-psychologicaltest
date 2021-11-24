import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserStore";

// 사용자 정보 받아오기 및 경고창으로 확인
const UserPage = ({ history }) => {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')

    const context = useContext(UserContext);

    useEffect(() => {
        context.name = name;
        context.gender = gender;
        console.log(context)
    }, [name, gender]);
    
    return (
        <div>
            <div>직업가치관검사</div>

                {/* 사용자 이름, 성별 입력 form  */}
                {/* 11.21 수정 내용 이름 input 자동완성기능 off */}
                <form>
                <div>
                    <p>이름</p>
                    <input 
                        type="text" 
                        id="name"
                        placeholder="이름을 입력하세요"
                        autoComplete='off'
                        value={name} 
                        onChange={
                            (event) => {
                                setName(event.target.value);
                                console.log(name);
                            }
                        }
                    />
                    <p>성별</p>
                    <input 
                        type="radio" 
                        id="male" 
                        name="gender" 
                        value="100323"
                        onChange={
                            (event) => {
                                setGender(event.target.value);

                            }
                        }
                    />
                    <label for="male">남자</label>
                    <input 
                        type="radio" 
                        id="female" 
                        name="gender" 
                        value="100324"
                        onChange={
                            (event) => {
                                setGender(event.target.value);
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
                        <button type="submit" onClick={ () => { history.push("/TestExPage") }}>검사시작</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default UserPage;
