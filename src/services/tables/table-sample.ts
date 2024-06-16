import { ApiContext, Table } from 'types/data'
import { fetcher } from 'utils'

export type GetTableParams = {
  // table id
  id: string
}

/**
 * 卓API(Sample)
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns 卓情報
 * */

const tableSample = async (
  context: ApiContext,
  { id }: GetTableParams,
): Promise<Table> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/tables/${id}/sample`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default tableSample
