import type { Character } from "./character"

export interface Location {
  id: string
  name: string
  type: string
  dimension: string
  residents?: Character[]
}
