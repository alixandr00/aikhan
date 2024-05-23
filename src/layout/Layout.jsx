import React from "react";
import { Main1 } from "../components/landing/main1/Main1";
import { Profile } from "../components/profile/Profile";
import { Main2 } from "../components/landing/main2/Main2";
import { Main3 } from "../components/landing/main3/Main3";
import { Counter } from "../components/counter/Counter";
import { Tarif } from "../components/landing/tarif/Tarif";

export const Layout = () => {
  return (
    <>
      <Main1 />
      <Profile />
      <Main2 />
      <Main3 />
      <Counter />
      <Tarif />
    </>
  );
};
