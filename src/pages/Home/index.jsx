import ProfileSidebar from '@/components/global/ProfileSidebar'; // Sidebar component
import JobMainArea from '@/components/global/JobMainArea';       // Main job content area
import './index.scss';                                            // Styles for Home
import { useSelector } from 'react-redux';                       // Redux hook to access state

const Home = () => {
    // Get sidebar open/close state from Redux store
    const isSidebarOpen = useSelector(state => state.sidebar.isSidebarOpen);

    return (
        <>
            {/* Main container with Bootstrap fluid container */}
            <div className="home-wrapper container-fluid">
                <div className="row">
                    {/* Sidebar component, visibility controlled by isOpen prop */}
                    <ProfileSidebar isOpen={isSidebarOpen} />

                    {/* Main content area for job-related UI */}
                    <JobMainArea />
                </div>
            </div>
        </>
    )
}

export default Home;
