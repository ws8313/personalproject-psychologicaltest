import React, { useState } from "react";

const UserPage = ({ history }) => {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(name + gender);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>직업가치관검사</div>
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
                <div>
                    <button type="submit">검사 시작</button>
                </div>
            </form>
        </div>
    )
}

export default UserPage;
