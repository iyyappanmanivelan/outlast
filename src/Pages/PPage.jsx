import React from 'react'
import Programms from '../Components/Programms'
import Banner from '../Commom/Banner'
import Leaguematch from '../Components/Leaguematch'
import OurTeam from '../Components/OurTeam'
import { LeagueData } from '../Constant/Leaguematch.constant'
import Joinus from '../Components/Joinus'
import Scoreboard from '../Components/Scoreboard'

function PPage() {
    return (
   <>
   <Banner title={"Programms"}  content={"Home | Programm"} /> 
   <Programms/>
   <Leaguematch LeagueData={LeagueData}/>
   <Scoreboard table={LeagueData?.scoreboard} />
   <OurTeam data={LeagueData?.Team_member}/>
   <Joinus/>
   </>
    )
}

export default PPage
