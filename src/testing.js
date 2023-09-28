async function fetching() {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'projectId': '8jf3b15onzua'
      };
      const response = await axios.get("https://academics.newtonschool.co/api/v1/music/song?limit=100", { headers: headers });
      const result = response.data;
      const trendingData = result.data;
      dispatch(action.setAllSongsData(trendingData));
      setAllSongs(trendingData);


      fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Trending songs"}&limit=100', {
          headers: {
              'projectId': 'ghmumg9x1zid'
          }
      }).then(data=>data.json()).then(response => {          
          const ts = response.data          
          setTrendingSongs(ts);      
          dispatch(action.setTrendingData(ts));
      })

      fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Soul soother"}&limit=100', {
        headers: {
            'projectId': 'ghmumg9x1zid'
        }
      }).then(data=>data.json()).then(response => {
        const tsa = response.data
        setSoulSongs(tsa);
        dispatch(action.setSoulSongsData(tsa));
      })

      fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Evergreen melodies"}&limit=100', {
        headers: {
            'projectId': 'ghmumg9x1zid'
        }
        }).then(data=>data.json()).then(response => {
          const tsa = response.data
          setEvergreenSongs(tsa);
          dispatch(action.setEvergreenData(tsa));
      })

      fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured":"Top 20 of this week"}&limit=100', {
          headers: {
              'projectId': 'ghmumg9x1zid'
          }
      }).then(data=>data.json()).then(response => {
        const tsa = response.data
        setTop20Songs(tsa);
        dispatch(action.setTop20Data(tsa));
      })


    } catch (error) {
      console.log("Error fetching data", error)
    }
}


  useEffect (() => {
    
      fetching();
 

  }, [])