import { ApiContext, Room } from 'types/data'
import { fetcher } from 'utils'

export type CreateRoomParams = {
  // room name
  name: string
}

/**
 * 部屋作成API(by room name)
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns 部屋情報
 * */

const createRoom = async (
  context: ApiContext,
  { name }: CreateRoomParams,
): Promise<Room> => {
    const body = {
        name: name
    }
    
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/rooms`,
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

export default createRoom
