"use client"

import { createContext, FunctionComponent, useState } from "react";

import { useMessage, MessageProps } from "../message";
import { SupabaseAuthPayload } from "./auth.types";
import { supabase } from "@/supabase/auth";
import { User } from "@supabase/supabase-js";

export type AuthContextProps = {
    user: User;
    signUp: (payload: SupabaseAuthPayload) => void;
    signIn: (payload: SupabaseAuthPayload) => void;
    signOut: () => void;
    loading: boolean;
    loggedIn: boolean;
    userLoading: boolean;
};


export const AuthContext = createContext<Partial<AuthContextProps>>({});

export const AuthProvider: FunctionComponent = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState<User>(null);
    const [userLoading, setUserLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    const { handleMessage } = useMessage();

    // sign-up a user with provided details
    const signUp = async (payload: SupabaseAuthPayload) => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signUp(payload);
            if (error) {
                console.log(error);
                handleMessage({ message: error.message, type: "error" });
            } else {
                handleMessage({ message: "Signup successful. Please check your inbox for a confirmation email!", type: "success", });
            }
        } catch (error) {
            console.log(error);
            handleMessage({ message: JSON.stringify(error) || error, type: "error", });
        } finally {
            setLoading(false);
        }
    };

    // sign-in a user with provided details
    const signIn = async (payload: SupabaseAuthPayload) => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signInWithPassword(payload);
            if (error) {
                console.log(error);
                handleMessage({ message: error.message, type: "error" });
            } else {
                handleMessage({
                    message: "Log in successful. I'll redirect you once I'm done",
                    type: "success",
                });
            }
        } catch (error) {
            console.log(error);
            handleMessage({
                message: error.error_description || error,
                type: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                signUp,
                signIn,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};