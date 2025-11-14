export interface EventDate {
  start: string; 
  end: string;   
}

export interface EventMultimedia {
  type: "image" | "video";
  src: string;
}

export interface EventSection {
  title?: string;
  text: string;
  multimedia: EventMultimedia[];
}


export interface ChurchEvent {
  id: number;
  name: string;
  image: string;
  description: string;
  date?: EventDate;
  location?: string;
  sections: EventSection[];
}
