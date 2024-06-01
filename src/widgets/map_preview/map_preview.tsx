"use client";

import clsx from "clsx";
import { GoogleMap } from "./google_map";
import { ReactElement, useCallback, useEffect, useState } from "react";
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

export const MapPreview = ({ children }: { children?: ReactElement }) => {
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
        {children}
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
