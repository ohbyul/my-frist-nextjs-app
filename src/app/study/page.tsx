"use client"

import { createContext, useContext } from 'react';

const MyContext = createContext('');
export default function Page() {


    return (
        <div>
            <MyContext.Provider value="Hello World">
                <GrandParent />
            </MyContext.Provider>
        </div>
    )
}


function GrandParent() {
    return <Parent />;
}

function Parent() {
    return <Child />;
}

function Child() {
    return <GrandChild />;
}

function GrandChild() {
    return <Message />;
}

function Message() {
    const value = useContext(MyContext);
    return <div>Received: {value}</div>;
}
