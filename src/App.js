import { Categories } from "./Component/Categories";
import Delivery from "./Component/Delivery";
import Featured  from "./Component/Featured";
import Meal from "./Component/Meal";
import TopNav from "./Component/TopNav";
import TopPicker from "./Component/TopPicker";
import Newsletter from './Component/NewsLetter'
import Footer from './Component/Footer';
function App() {
  return (
    <div className=" App" >
     <TopNav/>
     <Featured/>
     <Delivery/>
    <TopPicker/>
    <Meal/>
    <Categories/>
    <Newsletter/>
    <Footer/>
    </div>
  );
}

export default App;
