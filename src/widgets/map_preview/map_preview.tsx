"use client";

import clsx from "clsx";
import { GoogleMap } from "./google_map";
import { useCallback, useEffect, useState } from "react";
import { Button, Card } from "antd";
import { DogPark } from "@/types/google_places.types";
import { ArrowRightOutlined } from "@ant-design/icons";

async function getData() {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_SUPABASE_API_SUBDOMAIN}.supabase.co/rest/v1/places`, {
    headers: {
      'apikey': process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string,
    }
  })
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export const MapPreview = () => {
  const [mapData, setMapData] = useState<DogPark[]>([])
  const [selectedPlace, setSelectedPlace] = useState<DogPark | null>(null);

  const handleClick = useCallback((googlePlaceId: string) => {
    const place = mapData.find((place) => place.google_place_id === googlePlaceId);
    console.log('Clicked on', place);
    if (place) {
      setSelectedPlace(place);
    }
  }, [mapData])

  useEffect(() => {
    getData().then(data => setMapData(data))
  }, [])

  return (
    <div className={clsx("flex flex-col items-center justify-between w-full max-h-full p-4 mx-auto max-w-7xl px-6 pb-32 pt-20 sm:pt-32 lg:px-8 lg:pt-10")}>
      <MapCard place={selectedPlace} />
      <div className="w-full flex justify-between gap-10">
        <div className="flex flex-col justify-center items-start w-2/3">
          <h2 className="z-10 text-3xl font-bold tracking-tight text-slate-900 ml-1">Explore the World with Your Pet</h2>
          <p className="mt-4 ml-1">Use our map to discover best places and services for dogs, and enhance your pet&apos;s life with us.</p>
          {/* <div className="flex justify-center items-center text-slate-900 mt-4">
            <svg aria-hidden="true" style={{ color: '#ff4500'}} focusable="false" width={20} height={20} data-prefix="fas" data-icon="location-dot" className="svg-inline--fa fa-location-dot " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
            <p className="ml-4" style={{ color: '#ff4500'}}>Dog Parks Near You.</p>
          </div> */}
          <Button style={{ backgroundColor: '#ff4500' }} className='mt-10 ml-1' type="primary" shape="round" iconPosition='end' icon={<ArrowRightOutlined />} size='large'>
            Find Your Next Adventure
          </Button>
        </div>
        <div className="w-full h-full p-10">
          <GoogleMap onMarkerClick={handleClick} data={mapData} />
        </div>
      </div>
    </div>
  );
}

const MapCard = ({ place }: { place: DogPark | null}) => {
  if (!place) {
    return null;
  }

  return (
    <div className="absolute z-50 w-80">
      <Card title={place.name} bordered={true} styles={{ body: { backgroundColor: 'gray'}, header: { backgroundColor: 'gray'} }}>
        <p>{place.address}</p>
        <p>{place.geo_lat}, {place.geo_long}</p>
        <p>{place.google_place_id}</p>
        <p>{place.place_type}</p>
        <p>{place.formatted_address}</p>
        <p>{place.types}</p>
        <p>{place.formatted_phone_number}</p>
        <p>{place.website_url}</p>
      </Card>
    </div>
  )
}
