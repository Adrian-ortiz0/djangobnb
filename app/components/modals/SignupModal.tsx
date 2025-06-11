'use client';
import Modal from "./Modal"

import React, { useState } from 'react'
import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/app/hooks/useSignupModal";

const SignupModal = () => {
    const signupModal = useSignupModal()
    const content = (
        <>
            <form action="space-y-4">
                <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] mb-3 p-4 border border-gray-300 rounded-xl" />
                <input placeholder="Your password" type="password" className="w-full h-[54px] mb-3 p-4 border border-gray-300 rounded-xl" />
                <input placeholder="Repeat your password" type="password" className="w-full h-[54px] mb-3 p-4 border border-gray-300 rounded-xl" />
                <div className="p-5 bg-[var(--color-airbnb)] mb-3 text-white rounded-xl opacity-80"> Error message </div>
                <CustomButton label="Submit" onClick={() => console.log("click")} />
            </form>
        </>
    )

  return (
    <Modal
        isOpen={signupModal.isOpen}
        close={signupModal.close}
        label="Sign Up"
        content={content}
    />
  )
}

export default SignupModal
