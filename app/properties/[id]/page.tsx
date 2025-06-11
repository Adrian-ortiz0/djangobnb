import ReservationSidebar from "@/app/components/properties/ReservationSidebar"
import Image from "next/image"

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/beach_1.jpg"
                    className="object-cover w-full h-full"
                    alt="Beach House"
                />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>
                    <span className="mb-6 black text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>

                    <hr className="my-4 text-gray-300" />

                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src="/profile_pic_1.jpg"
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="The user picture"
                        />
                        <p><strong>John Doe</strong> is your host</p>
                    </div>

                    <hr className="text-gray-300"/>
                    
                    <p className="mt-6 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eum ex officiis reprehenderit veniam fuga sapiente nostrum tenetur corporis officia error obcaecati odit quae eaque non similique rem, culpa veritatis.
                    </p>
                </div>
                <div className="md:col-span-2 h-full self-start sticky top-24">
                    <ReservationSidebar />
                </div>
            </div>
        </main>
    )
}

export default PropertyDetailPage