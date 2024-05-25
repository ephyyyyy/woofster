export type Geometry = {
  location: {
      lat: number;
      lng: number;
  };
  viewport: {
      northeast: {
          lat: number;
          lng: number;
      };
      southwest: {
          lat: number;
          lng: number;
      };
  };
};

export type OpeningHours = {
  open_now: boolean;
  periods: {
      close: {
          day: number;
          time: string;
      };
      open: {
          day: number;
          time: string;
      };
  }[];
  weekday_text: string[];
};

export type DogPark = {
  name: string;
  address: string;
  geo_lat: number;
  geo_long: number;
  google_place_id: string;
  place_type: string;
  formatted_address: string;
  geometry: Geometry; // Assuming the geometry is parsed
  opening_hours: OpeningHours; // Assuming the opening_hours is parsed
  types: string[]; // Assuming types is parsed as an array of strings
  formatted_phone_number: string;
  website_url: string;
};
