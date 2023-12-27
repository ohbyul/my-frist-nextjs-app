"use client"

import React, { useState, useRef } from "react";
import { FaLock } from "react-icons/fa";
// import { supabase } from "../lib/supabase";
import classNames from "classnames";
import { MessageProps, useFormFields, useMessage } from "@/utiles/useForm";
import { supabase } from "@/supabase/auth";
// import { useFormFields, MessageProps, useMessage } from "../lib/utils";

type SignUpFieldProps = {
    email: string;
    password: string;
};

type SupabaseSignupPayload = SignUpFieldProps; // type alias

const FORM_VALUES: SignUpFieldProps = {
    email: "",
    password: "",
};

const MESSAGE_VALUES: MessageProps = {
    type: "default",
    payload: "",
};

const Signup: React.FC = (props) => {
    const [loading, setLoading] = useState(false);
    const [values, handleChange, resetFormFields] = useFormFields<SignUpFieldProps>(FORM_VALUES);
    const [message, handleMessage] = useMessage<MessageProps>(MESSAGE_VALUES);

    // sign-up a user with provided details
    const signUp = async (payload: SupabaseSignupPayload) => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signUp(payload);
            if (error) {
                console.log(error);
                handleMessage({ payload: error.message, type: "error" });
            } else {
                handleMessage({
                    payload: "Signup successful. Please check your inbox for a confirmation email!",
                    type: "success",
                });
            }
        } catch (error) {
            console.log(error);
            handleMessage({ payload: JSON.stringify(error), type: "error", });
        } finally {
            setLoading(false);
        }
    };

    // Form submit handler to call the above function
    const handleSumbit = (event: React.FormEvent) => {
        event.preventDefault();
        signUp(values);
        resetFormFields();
    };

    return (
        <div className="container px-5 py-10 mx-auto w-2/3">
            <div className="w-full text-center mb-4 flex  flex-col place-items-center">
                <FaLock className="w-6 h-6" />
                <h1 className="text-2xl md:text-4xl text-gray-700 font-semibold">
                    Join us
                </h1>
            </div>
            {message.payload && (
                <div
                    className={classNames(
                        "shadow-md rounded px-3 py-2 text-shadow transition-all mt-2 text-center",
                        message.type === "error"
                            ? "bg-red-500 text-white"
                            : message.type === "success"
                                ? "bg-green-300 text-gray-800"
                                : "bg-gray-100 text-gray-800"
                    )}
                >
                    {message?.payload}
                </div>
            )}
            <form
                onSubmit={handleSumbit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Your password"
                        required
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Join
                    </button>

                    <div className="flex-1 text-right">
                        <small className="block text-gray-600">Already a member?</small>
                        <a className="block font-semibold" href="/login">Login</a>
                    </div>

                </div>
            </form>
            {loading && (
                <div className="shadow-md rounded px-3 py-2 text-shadow transition-all mt-2 text-center">
                    Loading...
                </div>
            )}
        </div>
    );
};

export default Signup;


// import { Button, Checkbox, Label, TextInput } from "flowbite-react";

// export default function page() {
//     return (
//         <div>
//             <a href="/">
//                 <Button color="dark">↩Home</Button>
//             </a>

//             <div>회원가입 페이지</div>
//             <div>반갑습니다.</div>

//             <div>
//                 <form className="flex max-w-md flex-col gap-4">
//                     <table>
//                         <tbody>
//                             <tr>
//                                 <th>아이디</th>
//                                 <td>
//                                     <input type="text" name="id" id="id" required autoComplete='one-time-code' />
//                                 </td>
//                             </tr>

//                             <tr>
//                                 <th>비밀번호</th>
//                                 <td>
//                                     <input type="password" name="password" id="password" required autoComplete='one-time-code' />
//                                 </td>
//                             </tr>

//                             <tr>
//                                 <th>이름</th>
//                                 <td>
//                                     <input type="text" name="name" id="name" required />
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>

//                     <Button color="red" type='submit'>가입</Button>
//                 </form>
//             </div>

//         </div>
//     )
// }
