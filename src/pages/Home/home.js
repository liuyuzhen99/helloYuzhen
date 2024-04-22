import './home.css';
import Navbar from '../../components/NavBar';
import Siderbar from '../../components/SideBar';

function Home() {
    return (
        <div className="home">
            <Navbar />
            <Siderbar />
        </div>
    );
}

export default Home;