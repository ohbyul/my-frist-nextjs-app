"use client"

import React, { useEffect, useReducer, useState, useCallback } from 'react';

export const Client = () => {
    const [name, setName] = useState('사무엘잭슨');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('effect');
        setName('아이언맨')
        return () => {

            // 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면
            // useEffect 에서 뒷정리(cleanup) 함수를 반환해야한다.

            // 언마운트 될 때만 뒷정리 함수를 호출하고 싶으시다면 ?
            console.log('cleanup');
            setName('토르')
        };
    });
    return (
        <div>
            name : {name}
        </div>
    );
};


function useInput(initialInput: any) {
    const [input, setInput] = useState(initialInput);

    const onChange = useCallback((e: any) => {
        const { name, value } = e.target;
        setInput((input: any) => ({ ...input, [name]: value }));
    }, []);

    const reset = useCallback(() => setInput(initialInput), [initialInput]);
    return [input, onChange, reset];
}

export const Input = () => {

    const [{ id, password }, onInputChange, resetInput] = useInput({
        id: "",
        password: "",
    })

    const onSave = () => {
        console.log(id, password);

    }
    return (
        <div>
            아이디 :
            <input
                name="id"
                value={id}
                onChange={onInputChange}
                placeholder="아이디를 입력하세요. (6자리 이상)"
            />

            비밀번호 :
            <input
                name="password"
                value={password}
                onChange={onInputChange}
                placeholder="비밀번호를 입력하세요."
            />

            <div>
                <button onClick={onSave}>저장</button>
            </div>
        </div>
    )
}