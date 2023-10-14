export interface iSerie {
    id: number
    title: string
    description: any
    resourceURI: string
    urls: iUrl[]
    startYear: number
    endYear: number
    rating: string
    type: string
    modified: string
    thumbnail: iThumbnail
    creators: iCreators
    characters: iCharacters
    stories: iStories
    comics: iComics
    events: iEvents
    next: any
    previous: any
  }
  
  export interface iUrl {
    type: string
    url: string
  }
  
  export interface iThumbnail {
    path: string
    extension: string
  }
  
  export interface iCreators {
    available: number
    collectionURI: string
    items: iItem[]
    returned: number
  }
  
  export interface iItem {
    resourceURI: string
    name: string
    role: string
  }
  
  export interface iCharacters {
    available: number
    collectionURI: string
    items: iItem2[]
    returned: number
  }
  
  export interface iItem2 {
    resourceURI: string
    name: string
  }
  
  export interface iStories {
    available: number
    collectionURI: string
    items: iItem3[]
    returned: number
  }
  
  export interface iItem3 {
    resourceURI: string
    name: string
    type: string
  }
  
  export interface iComics {
    available: number
    collectionURI: string
    items: iItem4[]
    returned: number
  }
  
  export interface iItem4 {
    resourceURI: string
    name: string
  }
  
  export interface iEvents {
    available: number
    collectionURI: string
    items: any[]
    returned: number
  }
  