import { gql } from "@apollo/client"
import type { Location } from "@/types/location"
import { client } from "@/lib/apollo-client"

const GET_LOCATIONS = gql`
  query GetLocations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
    }
  }
`

const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`

interface LocationsResponse {
  info: {
    count: number
    pages: number
  }
  results: Location[]
}

interface GetLocationsParams {
  page?: number
  filter?: {
    name?: string
    type?: string
    dimension?: string
  }
}

export async function getLocations({ page = 1, filter = {} }: GetLocationsParams): Promise<LocationsResponse> {
  try {
    const { data } = await client.query({
      query: GET_LOCATIONS,
      variables: { page, filter },
    })

    return data.locations
  } catch (error) {
    console.error("Error fetching locations:", error)
    return { info: { count: 0, pages: 0 }, results: [] }
  }
}

export async function getLocation(id: string): Promise<Location | null> {
  try {
    const { data } = await client.query({
      query: GET_LOCATION,
      variables: { id },
    })

    return data.location
  } catch (error) {
    console.error(`Error fetching location with ID ${id}:`, error)
    return null
  }
}
