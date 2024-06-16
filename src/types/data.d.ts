export type Room = {
  id: string
  name: string
  room_number: string
}

export type User = {
  id: string
  name: string
  room_id: string
}

export type Table = {
  id: string
  name: string
  room_id: string
}

export type Game = {
  id: string
  room_id: string
  table_id: string | null
  eastern_id: string | null
  western_id: string | null
  northern_id: string | null
  southern_id: string | null
  eastern_point: number
  western_point: number
  northern_point: number
  southern_point: number
}

export type ApiContext = {
  apiRootUrl: string
}
