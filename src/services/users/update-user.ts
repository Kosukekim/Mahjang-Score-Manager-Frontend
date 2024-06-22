import { ApiContext, User } from 'types/data'
import { fetcher } from 'utils'

export type UpdateUserParams = {
    // user id
    id: string
    // user name
    name: string
}

/**
 * ユーザ更新API
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザ情報
 * */

const updateUser = async (
    context: ApiContext,
    { id, name }: UpdateUserParams,
): Promise<User> => {
    const body = {
        name: name
    }
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
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

export default updateUser
