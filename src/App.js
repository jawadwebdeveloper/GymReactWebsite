import './App.css';

import { Footer } from './commponents/Footer/Footer';
import { Hero } from './commponents/Hero/Hero';
import { Join } from './commponents/Join/Join';
import { Plans } from './commponents/Plans/Plans';
import { Program } from './commponents/Program/Program';
import { Reason } from './commponents/Reasons/Reason';
import { Testmoniales } from './commponents/Testmonials/Testmoniales';

function App() {
  return (
    <div className="App">
        <Hero/>
          <Program/>
          <Reason/>
          <Plans/>
          <Testmoniales/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
