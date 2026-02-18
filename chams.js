const Playoffs = [
    {
        liga:'Bunesliga',
        teams:['Bayern Munich','Leverkusen',' Borussia Dortmund','RB Leipzig']
    },
    {
        liga:'La liga',
        teams:['Real Madrid', 'Barcelona',' Atlético Madrid','Servilha']
    },
    {

        liga:'Premier ligue',
        teams:['Arsenal','Aston Villa','Liverpool','Chelsea'],
    },
    {
        liga:'Seria A',
        teams:['Juventos','Milan','Napoli','Como']
    }
]


const  teamsn = Playoffs.flatMap(league => {
 
    return league.teams.map(team => {

        return {
            team:team,
            league:league.liga
        }
    })
}).sort(()=> Math.random() - 0.5)


function match(){

    while(teamsn.length > 0){
      const teamA = teamsn.shift()
      
        const teamIndex = teamsn.findIndex(teamB => {

            return teamA.league !== teamB.league
        })
        if(teamIndex !== -1){

           const teamB = teamsn.splice(teamIndex ,1)[0]


           console.log(`${teamB.team} vs ${teamA.team}`)
           console.log(`${teamA.team} vs ${teamB.team}`)

           console.log('*************')
        }else{
            console.log(`something when wrong`)

        }
        
    }
}

match()









