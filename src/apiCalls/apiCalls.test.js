import 
    fetchNbaTeams
   from "./apiCalls";

  import mockData from ".././mockData/MockData";
  import nbaKey from "./../apiKey";
import { SIGTRAP } from "constants";
  
  describe("apiCall", () => {
    describe("Fetch recent films", () => {
      beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() =>
          Promise.resolve({
            status: 200,
            json: () => Promise.resolve(mockData)
          })
        );
      });
  
      it("Should be called with the right params", async () => {
        const url = `http://api.sportradar.us/nba/trial/v4/en/seasons/2017/REG/rankings.json?api_key=${nbaKey}`;
  
        await fetchNbaData();
  
        expect(window.fetch).toHaveBeenCalledWith(url);
      });
  
      it("Should return an object if status code is ok", async () => {
        await expect(fetchNbaTeams()).resolves.toEqual(mockData);
      });
  
      it("Should throw an error if status code is not ok", async () => {
        window.fetch = jest.fn().mockImplementation(() =>
          Promise.resolve({
            status: 500
          })
        );
  
        await expect(fetchNbaTeams()).rejects.toEqual("Failed to fetch data");
      });
    });
});