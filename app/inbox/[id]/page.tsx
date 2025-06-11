import ContactButton from "@/app/components/ContactButton"
import ConversationDetail from "@/app/components/inbox/ConversationDetail"
import PropertyList from "@/app/components/properties/PropertyList"
import Image from "next/image"

const ConversationPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <ConversationDetail />
        </main>
    )
}

export default ConversationPage;