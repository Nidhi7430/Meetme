import React, { useEffect, useState } from "react";
import quotes from "./QuoteDB";
import Carousel from "react-material-ui-carousel";
import { Container, Box } from "@material-ui/core";

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
      <Box style={{ backgroundColor: "#f9f9ff" }}>
        <Container style={{ padding: 100 }}>
          <Box
            fontSize="h4.fontSize"
            fontWeight={500}
            style={{ textTransform: "uppercase" }}
            textAlign="center"
            pb={5}
          >
            Quotes
          </Box>
          <Carousel navButtonsAlwaysInvisible>
            {quote.map((q) => {
              return (
                <Box
                  style={{ backgroundColor: "#fff", verticalAlign: "middle" }}
                  width={600}
                  margin="0 auto"
                  textAlign="center"
                  border="1px solid #eeeeee"
                  borderRadius={8}
                  px={3}
                  lineHeight={1.8}
                  boxShadow=" 1px 3px 4px 0 rgb(153 ,153,153)"
                  height={130}
                >
                  <p>{q.quote}</p>
                  <p>-{q.author}</p>
                </Box>
              );
            })}
          </Carousel>
        </Container>
      </Box>
    </>
  );
};
export default Quotes;
