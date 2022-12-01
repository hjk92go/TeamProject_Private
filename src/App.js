
import MergePage from "./Components/MergePage";
import ShopInfo from "./Components/ShopInfo";
import ShopSlick from "./Components/ShopSlick";
import Slider from "./Components/Slider";

// 공용으로 쓸 dataContext Provider import
import { DataProvider } from './data/DataContext'

function App() {
  return (
    <div>
      <DataProvider>
        <MergePage />
      </DataProvider>
    </div>
  );
}

export default App;
