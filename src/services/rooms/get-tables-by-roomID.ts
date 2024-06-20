import { ApiContext, Table } from 'types/data'
import { fetcher } from 'utils'

export type GetTablesByRoomIDParams = {
  // room id
  id: string
}

/**
 * 卓取得API(by room id)
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns List[卓情報]
 * */

const getTablesByRoomID = async (
  context: ApiContext,
  { id }: GetTablesByRoomIDParams,
): Promise<Table[]> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/rooms/${id}/tables`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getTablesByRoomID
