
import ContactButton from "@/app/components/ContactButton"
import PropertyList from "@/app/components/properties/PropertyList"
import Image from "next/image"
import { getUserId } from "@/app/lib/actions"
import React, {useState, useEffect} from "react"
import ConversationDetail from "@/app/components/inbox/ConversationDetail"
import { UserType } from "../page"
import apiService from "@/app/services/apiService"
import { getAccessToken } from "@/app/lib/actions"

export type MessageType = {
    id: string;
    name: string;
    body: string;
    conversationId: string;
    sent_to: UserType;
    created_by: UserType
}

const ConversationPage = async ({params} : {params: {id: string}}) => {
        const userId = await getUserId();
        const token = await getAccessToken();
        if(!userId || !token){
            return (
                <main className="mx-w-[1500px] max-auto px-6 py-12">
    
                    <p>You need to be authneticated...</p>
    
                </main>
            )
        }
    
    const conversation = await apiService.get(`/api/chat/${params.id}/`)

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <ConversationDetail 
                token={token}
                userId={userId}
                messages={conversation.messages}
                conversation={conversation.conversation}
            />
        </main>
    )
}

export default ConversationPage;