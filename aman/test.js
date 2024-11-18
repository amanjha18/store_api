// # You need to fetch data from two different APIs and combine the results. 
// # The first API provides user information, and the second API provides user posts. 
// # Write a function that fetches data from both APIs and returns a combined result.
 
const url1 = ""
const url2 = ""

async function fetchDataFromApis() {
    try { 
        const [response1, response2] = await Promise.all([
            fetch(url1),
            fetch(url2)
        ]);
        if (!response1.ok) || !response2.ok){
            throw new Error('Failed to fetch data from one or both APIs');

        }
        const data1 = await response1.json();
        const data2 = await response2.json();

        console.log("data from api", data1)

        return {data1, data2};

    } catch (error){
        console.error("error fetching data", error);
    }
}