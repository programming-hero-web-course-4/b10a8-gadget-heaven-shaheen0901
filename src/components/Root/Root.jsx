
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Statistics from '../Statistics/Statistics';
import DashBoard from '../DashBoard/DashBoard';
import PurchaseHistory from '../PurchaseHistory/PurchaseHistory';

const Root = () => {

    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            <Outlet>
                <HomePage></HomePage>
                <Statistics></Statistics>
                <DashBoard></DashBoard>
                <PurchaseHistory></PurchaseHistory>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;