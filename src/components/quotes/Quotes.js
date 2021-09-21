import React, { useEffect, useState } from "react";
import quotes from "./QuoteDB";
import Carousel from "react-material-ui-carousel";
import { Container, Box, Typography, Grid } from "@material-ui/core";

const Quotes = () => {
  const [quote, setQuote] = useState([quotes[0], quotes[1], quotes[2]]);

  const shuffleQuotes = (arr) => {
    return arr.sort(function () {
      return 0.5 - Math.random();
    });
  };
  useEffect(() => {
    const randomQuotes = shuffleQuotes(quotes);
    setQuote([randomQuotes[0], randomQuotes[1], randomQuotes[2]]);
  }, []);
  return (
    <>
      <Box style={{ backgroundColor: "#f9f9ff" }} py={8}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            style={{
              textTransform: "uppercase",
              fontWeight: 500,
              paddingBottom: 25,
            }}
          >
            Quotes
          </Typography>
          <Carousel navButtonsAlwaysInvisible>
            {quote.map((q) => {
              return (
                <Grid container justifyContent="center">
                  <Grid item md={6} sm={9} xs={12}>
                    <Box
                      style={{
                        backgroundColor: "#fff",
                      }}
                      borderRadius={8}
                      boxShadow=" 1px 2px 4px 2px #888888"
                      minHeight={130}
                      textAlign="center"
                      border="1px solid #888"
                      px={6}
                    >
                      <Typography style={{ padding: "15px 0" }}>
                        {q.quote}
                      </Typography>
                      <Typography>-{q.author}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              );
            })}
          </Carousel>
        </Container>
      </Box>
    </>
  );
};
export default Quotes;
