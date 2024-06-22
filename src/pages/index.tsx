import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import getTableByRoomID from 'services/rooms/get-tables-by-roomID'
import { ApiContext, Table, Game } from 'types/data'

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

const HomePage: NextPage<HomePageProps> = ({ sampleData,GameData }: HomePageProps) => {

  return (
    <>
      fg
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


  // console.log(GameData)
  return {
    props: {
      sampleData,
    },
    revalidate: 60,
  }
}

export default HomePage
