"use client";

import {APIProvider, Map, Marker, AdvancedMarker} from '@vis.gl/react-google-maps';

export const GoogleMap = () => {
  const position = {lat: 40.7128, lng: -74.0060};

  return (
    <div className="flex w-full max-h-full relative overflow-hidden rounded-2xl h-80 shadow">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
        <Map center={position} zoom={12} mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}>
          <AdvancedMarker position={position} />
        </Map>
    </APIProvider>
    </div>
  );
}
