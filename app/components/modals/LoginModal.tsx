'use client';
import Modal from "./Modal"
import useLoginModal from "@/app/hooks/useLoginModal";

import React, { useState } from 'react'
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal()
    const content = (
        <>
            <form action="space-y-4">
                <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] mb-3 p-4 border border-gray-300 rounded-xl" />
                <input placeholder="Your password" type="password" className="w-full h-[54px] mb-3 p-4 border border-gray-300 rounded-xl" />
                <div className="p-5 bg-[var(--color-airbnb)] mb-3 text-white rounded-xl opacity-80"> Error message </div>
                <CustomButton label="Submit" onClick={() => console.log("click")} />
            </form>
        </>
    )

  return (
    <Modal
        isOpen={loginModal.isOpen}
        close={loginModal.close}
        label="Log in"
        content={content}
    />
  )
}

export default LoginModal
