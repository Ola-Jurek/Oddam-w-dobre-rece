
import {Start} from "./components/1_Start.jsx";
import './scss/start.scss';
import {Statistics} from "./components/2_Statistics.jsx";
import {Instruction} from "./components/3_Instruction.jsx";
import {About} from "./components/4_About.jsx";
import {WeHelp} from "./components/5_We_help.jsx";
import {Contact} from "./components/6_Contact.jsx";

export const App = () => {

  return (
    <>
      <Start />
      <Statistics />
      <Instruction />
      <About />
      {/*<WeHelp />*/}
      {/*<Contact />*/}
    </>
  )
}

