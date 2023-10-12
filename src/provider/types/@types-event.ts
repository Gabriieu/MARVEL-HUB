export interface iEvent {
    id: number
    title: string
    description: string
    resourceURI: string
    urls: iUrl[]
    modified: string
    start: string
    end: string
    thumbnail: iThumbnail
    creators: iCreators
    characters: iCharacters
    stories: iStories
    comics: iComics
    series: iSeries
    next: any
    previous: iPrevious
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
    items: any[]
    returned: number
  }
  
  export interface iCharacters {
    available: number
    collectionURI: string
    items: any[]
    returned: number
  }
  
  export interface iStories {
    available: number
    collectionURI: string
    items: any[]
    returned: number
  }
  
  export interface iComics {
    available: number
    collectionURI: string
    items: any[]
    returned: number
  }
  
  export interface iSeries {
    available: number
    collectionURI: string
    items: any[]
    returned: number
  }
  
  export interface iPrevious {
    resourceURI: string
    name: string
  }
  