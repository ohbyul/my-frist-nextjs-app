"use client"

import { Button } from 'flowbite-react';
import { createContext, useContext, useMemo, useState } from 'react';

const CounterValueContext = createContext(0);
const CounterActionsContext = createContext(null);

function CounterProvider({ children }: any) {
    const [counter, setCounter] = useState(1);
    const actions = useMemo(
        () => ({
            increase() {
                setCounter((prev) => prev + 1);
            },
            decrease() {
                setCounter((prev) => prev - 1);
            }
        }),
        []
    );

    return (
        <CounterActionsContext.Provider value={actions}>
            <CounterValueContext.Provider value={counter}>
                {children}
            </CounterValueContext.Provider>
        </CounterActionsContext.Provider>
    );
}

function useCounterValue() {
    const value = useContext(CounterValueContext);
    if (value === undefined) {
        throw new Error('useCounterValue should be used within CounterProvider');
    }
    return value;
}

function useCounterActions() {
    const value = useContext(CounterActionsContext);
    if (value === undefined) {
        throw new Error('useCounterActions should be used within CounterProvider');
    }
    return value;
}


export default function page() {
    return (
        <CounterProvider>
            <div>
                <Value />
                <Buttons />
            </div>
        </CounterProvider>
    )
}


function Value() {
    console.log('Value');
    const counter = useCounterValue();
    return <h1>{counter}</h1>;
}
function Buttons() {
    console.log('Buttons');
    const actions = useCounterActions();

    return (
        <div>
            <Button color='red' onClick={actions.increase}>+</Button>
            <Button color="blue" onClick={actions.decrease}>-</Button>
        </div>
    );
}