import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $filter: FilterCharacter) {
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
        gender
        image
      }
    }
  }
`;

export const GET_CHARACTER = gql`
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
      episode {
        id
        name
        episode
      }
      location {
        id
        name
      }
    }
  }
`;

export const GET_CHARACTER_BY_IDS = gql`
  query GetCharacterByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      status
      species
      gender
      image
    }
  }
`;
// character(id:1){
//     id
//     name
//     episode{
//       id
//       name
//       characters
//     }
//   }
