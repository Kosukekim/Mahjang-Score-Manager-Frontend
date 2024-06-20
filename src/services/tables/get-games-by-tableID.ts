import { ApiContext, Game } from 'types/data'
import { fetcher } from 'utils'

export type GetGamesByTableIDParams = {
  // table id
  id: string
}

/**
 * 試合取得API(by table id)
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns List[試合情報]
 * */

const getGamesByTableID = async (
  context: ApiContext,
  { id }: GetGamesByTableIDParams,
): Promise<Game[]> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/tables/${id}/games`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getGamesByTableID
