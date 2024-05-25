import { DogPark } from '@/types/google_places.types';
import {APIProvider, Map, Marker, AdvancedMarker} from '@vis.gl/react-google-maps';

type GoogleMapProps = {
  data: DogPark[]
  onMarkerClick: (googlePlaceId: string) => void
}

export const GoogleMap = ({ data, onMarkerClick }: GoogleMapProps) => {
  const position = {lat: 40.7128, lng: -74.0060};

  return (
    <div className="flex w-full max-h-full relative overflow-hidden rounded-2xl h-80 shadow">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
        <Map defaultCenter={position} defaultZoom={10}>
          {data.map((place, index) => (
            <Marker key={place.google_place_id} position={{ lat: place.geo_lat, lng: place.geo_long }} onClick={onMarkerClick.bind(null, place.google_place_id)} />
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}
