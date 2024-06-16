import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import tableSample from 'services/tables/table-sample'
import { ApiContext, Table } from 'types/data'

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

const HomePage: NextPage<HomePageProps> = ({ sampleData }: HomePageProps) => {
  const displayTable = (table: Table) => {
    return (
      <>
        <h1>{table.id}</h1>
        <h1>{table.name}</h1>
        <h1>{table.room_id}</h1>
      </>
    )
  }
  console.log(sampleData.name)
  return (
    <>
      {displayTable(sampleData)}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:3000',
  }

  const [sampleData] = await Promise.all([
    tableSample(context, { id: 'cf866673-4789-4092-9751-fe6ad17ff6b6' }),
  ])
  return {
    props: {
      sampleData,
    },
    revalidate: 60,
  }
}

export default HomePage
