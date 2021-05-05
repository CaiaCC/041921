import React, { useState } from "react";
import axios from 'axios';

import { Body } from "./components/StyledBody";
import { Header } from "./components/StyledHeader";
import { Logo } from "./components/StyledLogo";
import { Button } from "./components/StyledButton";
import { Frame } from "./components/StyledFrame";
import { Image } from "./components/StyledImage";
import { Footer } from "./components/StyledFooter";

import handsomeBasset from "./assets/handsomeBasset.jpeg";

const API = `https://dog.ceo/api/breeds/image/random`;

/*
TODO / Feature Request: We need more pups! I know there are hundreds -- no, THOUSANDS of pups
out there. Not saying that our handsome basset isn't perfect, but lets give some other pups a
chance to shine. Let's make our button fetch from the provided api, and display the result in the frame.

INFO: if there are issues using hooks, this may be helpful: https://github.com/facebook/react/issues/14484
*/

const App = () => {
  const [imageUrl, setImageUrl] = useState(handsomeBasset);

  const fetchImageUrl = () => {
    return axios.get(API)
      .then(res => {setImageUrl(res.data.message)})
      .catch(err => console.error(err))
  }

  return (
      <Body>
          <Header>
              <Logo>Sphere Pups</Logo>
              <Button onClick={fetchImageUrl}>GET MORE PUPS</Button>
          </Header>
          <Frame>
              <Image src={imageUrl} />
          </Frame>
          <Footer>© {new Date().getFullYear()}</Footer>
      </Body>
  );
};

export default App;

// NOTE: The arrow functions inside the render/return slow down the performance since every time the component renders, the instance of the function is recreated in memory, which is not ideal for performance.