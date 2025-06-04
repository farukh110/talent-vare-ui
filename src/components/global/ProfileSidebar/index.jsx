import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '@/redux/api/sidebar/sidebarSlice';
import { X } from 'lucide-react';
import CustomCalendar from '@/components/ui/Calendar';

import profile from '@/assets/images/profile-sidebar/user.svg';
import coverImage from '@/assets/images/profile-sidebar/profile-banner.svg';
import './index.scss';

const ProfileSidebar = ({ isOpen }) => {

    // State to control whether sidebar should be rendered (for animation)
    const [shouldRender, setShouldRender] = useState(false);
    const dispatch = useDispatch();

    // Effect to handle mount/unmount delay for smooth sidebar animation
    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
        } else {
            const timeout = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    // Detect mobile view by window width
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 992;

    // Skip rendering sidebar on mobile when it should be hidden
    if (isMobile && !shouldRender) return null;

    // Assign sidebar CSS classes based on open state and device type
    const sidebarClass =
        isMobile && isOpen
            ? 'sidebar-menu show'
            : isMobile && !isOpen
                ? 'sidebar-menu closed'
                : 'sidebar-menu';

    return (
        <div
            className={`col-12 col-lg-3 sidebar-menu ${sidebarClass}`}
        >
            {/* Close button only visible on mobile */}
            <div className="close-icon-mobile d-lg-none" onClick={() => dispatch(closeSidebar())}>
                <X size={20} className="icon" />
            </div>

            {/* Profile header with cover image and user profile picture */}
            <div className="profile-header bg-white rounded overflow-hidden">
                <div className="position-relative">
                    <img src={coverImage} alt="cover" className="w-100" style={{ height: '100px', objectFit: 'cover' }} />
                    <div className="profile-image-wrapper position-absolute top-100 start-50 translate-middle">
                        <img src={profile} alt="profile" className="rounded-circle" />
                    </div>
                </div>
                <div className="profile-info text-center mt-5 pt-3 px-3 pb-4">
                    <h5 className="mb-1">Albert Flores</h5>
                    <p className="small mb-1 designation">Senior Product Designer | UI/UX</p>
                    <p className="small mb-1 designation">Designer | Graphic Designer | Web...</p>
                    <p className="small mb-1 location">Clinton, Maryland</p>
                </div>
            </div>

            {/* Profile statistics card */}
            <div className="statistics card border-0 mt-3 mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="fw-medium mb-0">Profile Visitors</h2>
                        <p className="fs-6 fw-medium text-primary mb-0">140</p>
                    </div>
                    <div className="sep my-2"></div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="fw-medium mb-0">Resume Viewers</h2>
                        <p className="fw-medium text-primary mb-0">20</p>
                    </div>
                    <div className="sep my-2"></div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="fw-medium mb-0">My Jobs</h2>
                        <p className="fw-medium text-primary mb-0">88</p>
                    </div>
                </div>
            </div>

            {/* Accordion with calendar showing upcoming interviews */}
            <div className="accordion accordion-flush" id="interviews">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="title-calendar">
                        <button
                            className="accordion-button collapsed d-flex justify-content-between align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#open-calendar"
                            aria-expanded="false"
                            aria-controls="open-calendar"
                        >
                            <div className="d-flex flex-column text-start">
                                <span className="calender-title">My calendar</span>
                                <span className="interview-text">Upcoming Interviews</span>
                            </div>
                        </button>
                    </h2>
                    <div
                        id="open-calendar"
                        className="accordion-collapse collapse"
                        aria-labelledby="title-calendar"
                        data-bs-parent="#interviews"
                    >
                        <div className="accordion-body">
                            <CustomCalendar
                                fullscreen={false}
                                onPanelChange={(value, mode) => console.log(value.format('YYYY-MM-DD'), mode)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSidebar;
