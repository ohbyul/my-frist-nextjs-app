// case 1
import React from 'react';

const Home = () => {
    let content;
    if (isLoggedIn) {
        content = <AdminPanel />;
    } else {
        content = <LoginForm />;
    }

    return (
        <div>
            {content}
        </div>
    );
};

export default Home;


const Home2 = () => {
    const isLoggedIn = true
    return (
        <>
            <div>
                {isLoggedIn ? (
                    <AdminPanel />
                ) : (
                    <LoginForm />
                )}
            </div>


            {/* 분기가 필요하지 않은 경우 */}
            <div>
                {isLoggedIn && <AdminPanel />}
            </div>
        </>
    );
};
