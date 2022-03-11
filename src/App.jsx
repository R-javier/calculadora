import React, { useState } from "react";
import { Button, Stack, Text, Box, Heading, Grid } from "@chakra-ui/react";
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  //const operadores
  const ops = ["/", "*", "-", "+", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <Button
          shadow="2px 2px 2px 1px"
          onClick={() => updateCalc(i.toString())}
          key={i}
        >
          {i}
        </Button>
      );
    }

    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Stack direction="column" spacing={0}>
          <Heading color="white">Calculadora</Heading>
          <Text pb={1} color="white">
            {" "}
            by Jav3to
          </Text>
        </Stack>

        <Box
          maxw="100%"
          p={5}
          bg="blue.800"
          border="1px solid white"
          borderRadius="5px"
        >
          <Box
            maxw="100%"
            p={1}
            bg="gray.800"
            borderRadius="8px 8px 0px 0px"
            border="1px solid white"
          >
            <Stack p="6px 0px 6px 0px">
              <Text color="white">
                {result ? <Text color="white">({result})</Text> : ""}
                {calc || "0"}
              </Text>
            </Stack>
          </Box>
          <Box
            border="1px solid white"
            maxw="100%"
            p={5}
            bg="blue.600"
            borderRadius="0px 0px 8px 8px"
          >
            <Stack direction="column">
              <Stack direction="row">
                <Button
                  shadow="2px 2px 2px 1px"
                  onClick={() => updateCalc("/")}
                >
                  /
                </Button>
                <Button
                  shadow="2px 2px 2px 1px"
                  onClick={() => updateCalc("*")}
                >
                  *
                </Button>
                <Button
                  shadow="2px 2px 2px 1px"
                  onClick={() => updateCalc("+")}
                >
                  +
                </Button>
                <Button
                  shadow="2px 2px 2px 1px"
                  onClick={() => updateCalc("-")}
                >
                  -
                </Button>
              </Stack>
              <Stack direction="column">
                <Button shadow="2px 2px 2px 1px" onClick={() => deleteLast()}>
                  DEL
                </Button>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Stack direction="row">
                  <Stack>
                    <Button
                      shadow="2px 2px 2px 1px"
                      onClick={() => updateCalc("0")}
                    >
                      0
                    </Button>
                    <Button
                      shadow="2px 2px 2px 1px"
                      onClick={() => updateCalc(".")}
                    >
                      .
                    </Button>
                    <Button
                      shadow="2px 2px 2px 1px"
                      onClick={() => calculate()}
                    >
                      =
                    </Button>
                  </Stack>
                </Stack>
                <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                  {createDigits()}
                </Grid>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </header>
    </div>
  );
}

export default App;
