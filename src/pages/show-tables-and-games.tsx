import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import getTableByRoomID from 'services/rooms/get-tables-by-roomID'
import getGamesByTableID from 'services/tables/get-games-by-tableID'
import { ApiContext, Table, Game } from 'types/data'

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>

const HomePage: NextPage<HomePageProps> = ({ sampleData,GameData }: HomePageProps) => {
  const displayTable = (table: Table) => {
    return (
      <>
        <hr style={{ border: '1px solid black' }}/>
        <h1>Table ID:{table.id}</h1>
        <h2>Table Name:{table.name}</h2>
        <h2>Room ID:{table.room_id}</h2>
      </>
    )
  }

  const displayGames = (game: Game) => {
    return (
      <>
        <hr style={{ border: '1px dashed red' }}/>
        <h2>Game ID:{game.id}</h2>
        <h3>東家:{game.eastern_id}</h3>
        <h3>南家:{game.southern_id}</h3>
        <h3>西家:{game.western_id}</h3>
        <h3>北家:{game.northern_id}</h3>
      </>
    )
  }
  return (
    <>
      {sampleData.map((table:Table, i:number) => (
        <div>
          {displayTable(table)}
        {GameData[i].map((game:Game, j:number) => (
          
          <div>{displayGames(game)}</div>
        ))}
        </div>
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

  let GameData = []
  for(const table of sampleData){
    const [Ga] = await Promise.all([
      getGamesByTableID(context, {id: table.id})
    ])
    GameData.push(Ga)
  }
  // console.log(GameData)
  return {
    props: {
      sampleData,
      GameData,
    },
    revalidate: 60,
  }
}

export default HomePage
