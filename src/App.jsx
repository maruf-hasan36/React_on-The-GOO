import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/countries";

const countriesPromice = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>Data is Loading....</h3>}>
        <Countries countriesPromice={countriesPromice}></Countries>
      </Suspense>
    </>
  );
}

export default App;
