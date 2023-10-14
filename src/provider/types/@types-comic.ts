export interface iComic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: any;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: any[];
  resourceURI: string;
  urls: iUrl[];
  series: iSeries;
  variants: any[];
  collections: any[];
  collectedIssues: any[];
  dates: iDate[];
  prices: iPrice[];
  thumbnail: iThumbnail;
  images: iImage[];
  creators: iCreators;
  characters: iCharacters;
  stories: iStories;
  events: iEvents;
}

export interface iUrl {
  type: string;
  url: string;
}

export interface iSeries {
  resourceURI: string;
  name: string;
}

export interface iDate {
  type: string;
  date: string;
}

export interface iPrice {
  type: string;
  price: number;
}

export interface iThumbnail {
  path: string;
  extension: string;
}

export interface iImage {
  path: string;
  extension: string;
}

export interface iCreators {
  available: number;
  collectionURI: string;
  items: iItem[];
  returned: number;
}

export interface iItem {
  resourceURI: string;
  name: string;
  role: string;
}

export interface iCharacters {
  available: number;
  collectionURI: string;
  items: iItem2[];
  returned: number;
}

export interface iItem2 {
  resourceURI: string;
  name: string;
}

export interface iStories {
  available: number;
  collectionURI: string;
  items: iItem3[];
  returned: number;
}

export interface iItem3 {
  resourceURI: string;
  name: string;
  type: string;
}

export interface iEvents {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}
