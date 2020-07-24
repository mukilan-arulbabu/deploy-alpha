import React from "react";
import { FullPage, Slide } from '../FullPage';
import FirstComponent from "./FirstPage";
import SecondComponent from "./SecondPage";

export default function HomePage() {
  return (
    <FullPage>
      <Slide
        style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        }}
      >
        <FirstComponent />
      </Slide>
      <Slide
        style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center'
        }}
      >
        <SecondComponent />
      </Slide>
    </FullPage>
  );
}
