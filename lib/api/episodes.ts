import { gql } from "@apollo/client"
import type { Episode } from "@/types/episode"
import { client } from "@/lib/apollo-client"

const GET_EPISODES = gql`
  query GetEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
        }
      }
    }
  }
`

const GET_EPISODE = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
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

interface EpisodesResponse {
  info: {
    count: number
    pages: number
  }
  results: Episode[]
}

interface GetEpisodesParams {
  page?: number
  filter?: {
    name?: string
    episode?: string
  }
}

export async function getEpisodes({ page = 1, filter = {} }: GetEpisodesParams): Promise<EpisodesResponse> {
  try {
    const { data } = await client.query({
      query: GET_EPISODES,
      variables: { page, filter },
    })

    return data.episodes
  } catch (error) {
    console.error("Error fetching episodes:", error)
    return { info: { count: 0, pages: 0 }, results: [] }
  }
}

export async function getEpisode(id: string): Promise<Episode | null> {
  try {
    const { data } = await client.query({
      query: GET_EPISODE,
      variables: { id },
    })

    return data.episode
  } catch (error) {
    console.error(`Error fetching episode with ID ${id}:`, error)
    return null
  }
}

export async function getFeaturedEpisodes(): Promise<Episode[]> {
  try {
    // Get a few popular episodes
    const ids = ["1", "6", "10", "28"]
    const episodes = await Promise.all(ids.map((id) => getEpisode(id)))

    return episodes.filter(Boolean) as Episode[]
  } catch (error) {
    console.error("Error fetching featured episodes:", error)
    return []
  }
}
