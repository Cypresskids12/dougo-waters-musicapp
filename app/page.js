import styles from './styles.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';

export default function Home() {    //home conponent
  return (
    <div>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  );
}
