 const NbaCleaner = (data) => {
    const conferences = data.conferences.reduce ((conferences, conference) => {
      const teams = conference.divisions.reduce((teams, division) => {
        teams = [...teams, ...division.teams]
        return teams
      }, [])
      conferences[conference.name] = teams;
      return conferences
    }, {})
    return conferences
  }

  export default NbaCleaner