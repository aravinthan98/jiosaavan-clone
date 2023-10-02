function fetchSongs() {
  try{
  fetch('https://academics.newtonschool.co/api/v1/music/song/?filter={"mood":"happy"}', {
    headers: {
      'projectId': 'f104bi07c490',
    },
  })
    .then((response) => response.json())
    .then((data) => {
        
      console.log("ARTIS FILTER",data);
  })

    } catch (error) {
      console.log("Error fetching data", error)
    }
}


  useEffect (() => {
    
      fetching();
 

  }, [])