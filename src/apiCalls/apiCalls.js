import nbaKey from './../apiKey'

const fetchNbaData = async () => {
    try{
        const url = `http://api.sportradar.us/nba/trial/v4/en/seasons/2017/REG/rankings.json?api_key=${nbaKey}`
        const response = await fetch(url)
        const nbaData = await response.json()
    
        return nbaData;

    }catch(err){
        const error = 'Failed to fetch data';
        throw error;
    }
}

export default fetchNbaData