'use client'
import {format} from 'date-fns'
import { useSearchParams } from 'next/navigation'
import apiService from '@/app/services/apiService'
import { useEffect, useState } from 'react'
import React from 'react'
import PropertyListItem from './PropertyListItem'
import useSearchModal from '@/app/hooks/useSearchModel'

export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
  is_favorite: boolean;
}

interface PropertyListProps {
  landlord_id?: string | null;
  favorites?: boolean | null;
}

const PropertyList: React.FC<PropertyListProps> = ({
  landlord_id,
  favorites
}) => {
  const params = useSearchParams();
  const searchModal = useSearchModal();
  const country = searchModal.query.country;
  const numGuests = searchModal.query.guests;
  const numBathrooms = searchModal.query.bathrooms;
  const numBedrooms = searchModal.query.bedrooms;
  const checkinDate = searchModal.query.checkIn;
  const checkoutDate = searchModal.query.checkOut;
  const category = searchModal.query.category;

  const [properties, setProperties] = useState<PropertyType[]>([]);
  
  const markFavorite = (id: string, is_favorite: boolean) => {
    const tmpProperties = properties.map((property: PropertyType) => {
      if (property.id == id){
        property.is_favorite = is_favorite

        if (is_favorite) {
          console.log('added to list of favorited properties')
        } else {
          console.log('removed from list of favorited properties')
        }
      }

      return property;
    })

    setProperties(tmpProperties);
  }

  const getProperties = async () => {
    let url = '/api/properties/';

    if(landlord_id){
      url += `?landlord_id=${landlord_id}`
    } else if(favorites) {
      url += '?is_favorite=true';
    } else {
      let urlQuery = '';

      if (country){
        urlQuery += '&country=' + country
      }
      if (numGuests){
        urlQuery += '&numGuests=' + numGuests
      }
      if (numBedrooms){
        urlQuery += '&numBedrooms=' + numBedrooms
      }
      if (category){
        urlQuery += '&category=' + category
      }
      if (numBathrooms){
        urlQuery += '&numBathrooms=' + numBathrooms
      }
      if (checkinDate){
        urlQuery += '&checkin=' + format(checkinDate, 'yyyy-MM-dd')
      }
      if (checkoutDate){
        urlQuery += '&checkout=' + format(checkoutDate, 'yyyy-MM-dd')
      }
      if(urlQuery.length){
        console.log('query', urlQuery);
        urlQuery = '?' + urlQuery.substring(1);
        url += urlQuery;
      }

    }

    const tmpProperties = await apiService.get(url)

    setProperties(tmpProperties.data.map((property: PropertyType) => {
      if(tmpProperties.favorites.includes(property.id)) {
        property.is_favorite = true;
      } else {
        property.is_favorite = false;
      }

      return property;
    }));
  };


  useEffect(() => {
    getProperties();
  }, [category, searchModal.query, params]);
  
  return (
    <>
      {properties.map((property) => {
        return (
          <PropertyListItem 
          key={property.id} 
          property={property} 
          markFavorite = {(is_favorite: any) => markFavorite(property.id, is_favorite)}
          />
        )
      })}

    </>
  )
}

export default PropertyList
