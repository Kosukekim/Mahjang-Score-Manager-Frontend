import { ApiContext, User } from 'types/data'
import { fetcher } from 'utils'

export type CreateUserParams = {
  // User name
  name: string
  // room id
  room_id: string
}

/**
 * ユーザ作成API
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザ情報
 * */

const createUser = async (
  context: ApiContext,
  { name, room_id }: CreateUserParams,
): Promise<User> => {
    const body = {
        name: name,
        room_id: room_id,
    }
    
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/users`,
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

export default createUser
