import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { PhotoCard } from "./components/PhotoCard";
import { GlobalStyle } from "./GlobalStyles";
import { Logo } from "./Logo";

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
);
