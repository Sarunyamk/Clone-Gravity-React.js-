import About from "./components/About"
import AboutCrypto from "./components/AboutCrypto"
import Branding from "./components/Branding"
import ContentCompany from "./components/ContentCompany"
import GravityTeam from "./components/GravityTeam"
import Navbar from "./components/Navbar"
import Partner from "./components/Partner"

const App = () => {
  return (
    <div class="bg-[#141619] text-white">
      <Navbar />
      <Branding />
      <About />
      <AboutCrypto />
      <Partner />
      <ContentCompany />
      <GravityTeam />
    </div>
  )
}
export default App