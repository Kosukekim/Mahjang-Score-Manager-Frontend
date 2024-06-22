import { ApiContext, Table } from 'types/data'
import { fetcher } from 'utils'

export type UpdateTableParams = {
    // table id
    id: string
    // table name
    name: string
}

/**
 * 試合更新API
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns 試合情報
 * */

const updateTable = async (
  context: ApiContext,
  { id, name }: UpdateTableParams,
): Promise<Table> => {
    const body = {
        name: name
    }
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/tables/${id}`,
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

export default updateTable
