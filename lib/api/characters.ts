import { gql } from "@apollo/client";
import type { Character } from "@/types/character";
import { client } from "@/lib/apollo-client";

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        origin {
          id
          name
        }
        location {
          id
          name
        }
      }
    }
  }
`;

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        id
        name
      }
      location {
        id
        name
      }
      episode {
        id
        name
        episode
      }
    }
  }
`;

const GET_CHARACTER_BY_IDS = gql`
  query GetCharacterByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      status
      species
      gender
      image
      type
      origin {
        id
        name
      }
      location {
        id
        name
      }
    }
  }
`;

interface CharactersResponse {
  info: {
    count: number;
    pages: number;
  };
  results: Character[];
}

interface GetCharactersParams {
  page?: number;
  filter?: {
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
  };
}

export async function getCharacters({
  page = 1,
  filter = {},
}: GetCharactersParams): Promise<CharactersResponse> {
  try {
    const { data } = await client.query({
      query: GET_CHARACTERS,
      variables: { page, filter },
    });

    return data.characters;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return { info: { count: 0, pages: 0 }, results: [] };
  }
}

export async function getCharacter(id: string): Promise<Character | null> {
  try {
    const { data } = await client.query({
      query: GET_CHARACTER,
      variables: { id },
    });

    return data.character;
  } catch (error) {
    console.error(`Error fetching character with ID ${id}:`, error);
    return null;
  }
}

export async function getFeaturedCharacters(): Promise<Character[]> {
  try {
    const ids = [1, 2, 3, 4, 5];
    const { data } = await client.query({
      query: GET_CHARACTER_BY_IDS,
      variables: { ids },
    });

    return data.charactersByIds || [];
  } catch (error) {
    console.error("Error fetching featured characters:", error);
    return [];
  }
}

export async function getMainFamilyCharacters(): Promise<Character[]> {
  try {
    const ids = [1, 2, 3, 4, 5];
    const { data } = await client.query({
      query: GET_CHARACTER_BY_IDS,
      variables: { ids },
    });

    return data.charactersByIds || [];
  } catch (error) {
    console.error("Error fetching main family characters:", error);
    return [];
  }
}

export async function getRelatedCharacters(id: string): Promise<Character[]> {
  try {
    const idNum = Number.parseInt(id, 10);
    const ids = [
      Math.max(1, idNum - 2),
      Math.max(1, idNum - 1),
      Math.min(826, idNum + 1),
      Math.min(826, idNum + 2),
    ].filter((relatedId) => relatedId !== idNum);

    const { data } = await client.query({
      query: GET_CHARACTER_BY_IDS,
      variables: { ids },
    });

    return data.charactersByIds || [];
  } catch (error) {
    console.error(`Error fetching related characters for ID ${id}:`, error);
    return [];
  }
}
