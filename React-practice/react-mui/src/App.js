import "./App.css";
import { useEffect, useState } from "react";
import News from "./Components/News/News.js";
import { Box, Grid, Spinner } from "@mui/material";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-03-13&sortBy=publishedAt&apiKey=e76fc4c50f8a4aabbb8b9ece7ccff00d"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.articles);
        console.log(data.articles);
      });
  }, []);
  ////spinner

  //if
  //data.length === 0 ? <Spinner animation="border" variant="primary" />
  //:
  //else
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.map((news) => (
            <Grid item xs={2} sm={4} md={4}>
              <News
                name={news.title}
                author={news.author}
                content={news.description}
                img={news.urlToImage}
                more={news.url}
              ></News>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
// {data.map((news) => (
//   <Grid item xs={2} sm={4} md={4}>
//   <News
//     name={news.title}
//     author={news.author}
//     content={news.description}
//     img={news.urlToImage}
//     more={news.url}
//   ></News></Grid>
// ))}

export default App;
