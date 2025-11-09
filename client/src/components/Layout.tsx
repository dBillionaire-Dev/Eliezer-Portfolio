
import  { Outlet } from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';

// interface LayoutProps {
//   children: React.ReactNode;
// }
// const Layout: React.FC<LayoutProps> = ({ children }) => {
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-gray-100" style={{ backgroundColor: '#324391' }}>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
