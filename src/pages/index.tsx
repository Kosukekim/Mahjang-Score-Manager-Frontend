import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import getTableByRoomID from 'services/rooms/get-tables-by-roomID'
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
      {sampleData.map((table:Table, i:number) => (
        displayTable(table)
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:3000',
  }

  const [sampleData] = await Promise.all([
    getTableByRoomID(context, { id: '3bcd67cb-0f1f-4883-93fb-aa84d457ce9d' }),
  ])
  return {
    props: {
      sampleData,
    },
    revalidate: 60,
  }
}

export default HomePage
