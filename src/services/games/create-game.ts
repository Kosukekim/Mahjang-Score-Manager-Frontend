import { ApiContext, Game } from 'types/data'
import { fetcher } from 'utils'

export type CreateGameParams = {
    // room id
    room_id: string
    // table id
    table_id: string
    // 東家 id
    eastern_id: string
    // 南家 id
    southern_id: string
    // 西家 id
    western_id: string
    // 北家 id
    nothern_id: string
}

/**
 * 試合作成API(by room name)
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns 試合情報
 * */

const createGame = async (
  context: ApiContext,
  { room_id, table_id, eastern_id, southern_id, western_id, nothern_id }: CreateGameParams,
): Promise<Game> => {
    const body = {
        room_id: room_id,
        table_id: table_id,
        eastern_id: eastern_id,
        southern_id: southern_id,
        western_id: western_id,
        nothern_id: nothern_id,
    }
    
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/games`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        },
    )
}

export default createGame
