import ReservationSidebar from "@/app/components/properties/ReservationSidebar"
import Image from "next/image"
import apiService from "@/app/services/apiService"
import { getUserId } from "@/app/lib/actions"
import Link from "next/link"

const PropertyDetailPage = async ({params} : {params: {id: string}}) => {

    const property = await apiService.get(`/api/properties/${params.id}`)
    const userId = await getUserId();
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src={property.image_url}
                    className="object-cover w-full h-full"
                    alt="Beach House"
                />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">{property.title}</h1>
                    <span className="mb-6 black text-lg text-gray-600">
                       {property.guests} Guests - {property.bedrooms} Bedrooms - {property.bathrooms} Bathrooms
                    </span>

                    <hr className="my-4 text-gray-300" />

                    <Link className="py-6 flex items-center space-x-4" href={`/landlords/${property.landlord.id}`}>
                        {property.landlord.avater_url && (
                            <Image
                                src={property.landlord.avater_url}
                                width={50}
                                height={50}
                                className="rounded-full"
                                alt="The user picture"
                            />
                        )}
                        <p><strong>{property.landlord.name}</strong> is your host</p>
                    </Link>

                    <hr className="text-gray-300"/>
                    
                    <p className="mt-6 text-lg">
                        {property.description}
                    </p>
                </div>
                <div className="md:col-span-2 h-full self-start sticky top-24">
                    <ReservationSidebar property={property} userId={userId} />
                </div>
            </div>
        </main>
    )
}

export default PropertyDetailPage