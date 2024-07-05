// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
import Navbar from "./Components/Navbar";
import { Quote } from './Components/Quote';
import AuthorsName from './Components/AuthorsName';
import TopSellingBooks from './Components/TopSellingBooks';
import TopBook from './Components/TopBook';
import Footer from './Components/Footer';
register();

export const App = () => {
  return (
<>
<Navbar/>
<Quote/>
<AuthorsName/>
<TopSellingBooks/> 
<TopBook/>
<Footer/>
</>
)
}
export default App
