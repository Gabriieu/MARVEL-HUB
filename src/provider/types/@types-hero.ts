export interface iHero {
    id: number
    name: string
    description: string
    modified: string
    thumbnail: iThumbnail
    resourceURI: string
    comics: iComics
    series: iSeries
    stories: iStories
    events: iEvents
    urls: iUrl[]
  }
  
  export interface iThumbnail {
    path: string
    extension: string
  }
  
  export interface iComics {
    available: number
    collectionURI: string
    items: iItem[]
    returned: number
  }
  
  export interface iItem {
    resourceURI: string
    name: string
  }
  
  export interface iSeries {
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
  
  export interface iEvents {
    available: number
    collectionURI: string
    items: iItem4[]
    returned: number
  }
  
  export interface iItem4 {
    resourceURI: string
    name: string
  }
  
  export interface iUrl {
    type: string
    url: string
  }
  