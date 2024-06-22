import { ApiContext, Table } from 'types/data'
import { fetcher } from 'utils'

export type CreateTableParams = {
  // Table name
  name: string
  // room id
  room_id: string
}

/**
 * 卓作成API
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns 卓情報
 * */

const createTable = async (
  context: ApiContext,
  { name, room_id }: CreateTableParams,
): Promise<Table> => {
    const body = {
        name: name,
        room_id: room_id,
    }
    
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/tables`,
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

export default createTable
