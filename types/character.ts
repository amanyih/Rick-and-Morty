export interface Character {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
  origin: {
    id: string | null
    name: string
  }
  location: {
    id: string | null
    name: string
  }
  episode?: {
    id: string
    name: string
    episode: string
  }[]
}
