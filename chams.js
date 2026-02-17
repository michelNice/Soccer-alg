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











