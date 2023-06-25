import { Banner } from "./components/Banner/Banner"
import { BoxBreeds } from "./components/BoxBreeds/BoxBreeds"
import { Info } from "./components/Info/Info"

export const HomePage = () => {
  return (
    <main>
      <Banner />
      <BoxBreeds />
      <Info />
    </main>
  )
}
