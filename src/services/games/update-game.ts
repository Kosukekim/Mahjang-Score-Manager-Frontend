import { ApiContext, Game } from 'types/data'
import { fetcher } from 'utils'

export type UpdateGameParams = {
    // game id
    id: string
    // 東家 point
    eastern_point: number
    // 南家 point
    southern_point: number
    // 西家 point
    western_point: number
    // 北家 point
    nothern_point: number
}

/**
 * 試合更新API
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns 試合情報
 * */

const updateGame = async (
  context: ApiContext,
  { id, eastern_point, southern_point, western_point, nothern_point }: UpdateGameParams,
): Promise<Game> => {
    const body = {
        eastern_point: eastern_point,
        southern_point: southern_point,
        western_point: western_point,
        nothern_point: nothern_point,
    }
    
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/games/${id}`,
        {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        },
    )
}

export default updateGame
