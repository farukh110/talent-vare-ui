import { useEffect, useRef, useState } from 'react';
import logo from '@/assets/logo/talent-vare.svg';
import profile from '@/assets/images/profile/user.svg';
import searchIcon from '@/assets/icons/search_icon.svg';
import CustomButton from '@/components/ui/Button';
import './index.scss';
import { Menu, User, X } from "lucide-react";
import { Dropdown, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@/redux/api/sidebar/sidebarSlice';

const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true); // Navbar collapse state

    const dispatch = useDispatch();  // Redux dispatch

    // Dropdown menu items for profile options
    const dropdownItems = [
        {
            key: '1',
            label: <span>My Profile</span>,
        },
        {
            key: '2',
            label: <span>Settings</span>,
        },
        {
            type: 'divider',
        },
        {
            key: '3',
            label: <span>Logout</span>,
        },
    ];

    return (
        <nav className="custom-navbar navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={logo} alt="TalentVare" />
                </a>

                {/* User icon for sidebar toggle on small screens */}
                <div className="d-flex align-items-center d-lg-none ms-auto">
                    <span
                        className='user-proile-icon'
                        onClick={() => dispatch(toggleSidebar())}
                    >
                        <User size={24} />
                    </span>
                </div>

                {/* Navbar toggler button (hamburger / close icon) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    aria-expanded={!isCollapsed}
                    aria-label="Toggle navigation"
                >
                    <Menu size={30} className={`icon ${isCollapsed ? 'visible' : 'hidden'}`} />
                    <X size={30} className={`icon ${isCollapsed ? 'hidden' : 'visible'}`} />
                </button>

                <div className={`navbar-collapse ${isCollapsed ? 'collapsed' : 'expanded'}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active-nav me-2" href="#">Find Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-2" href="#">Top Companies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-2" href="#">Job Tracker</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-2" href="#">My Calendar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-2" href="#">Documents</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-2" href="#">Messages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-2" href="#">Notifications</a>
                        </li>
                    </ul>

                    {/* Search input, button, and profile dropdown */}
                    <form className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3">
                        <div className="position-relative">
                            <img
                                src={searchIcon}
                                alt="Search"
                                className="position-absolute top-50 start-0 translate-middle-y ms-3"
                            />
                            <input
                                type="text"
                                className="form-control search-input ps-5"
                                placeholder="Search"
                            />
                        </div>
                        <CustomButton className="btn-create btn btn-primary">Resume Builder</CustomButton>
                        {/* Profile Dropdown */}
                        <Dropdown
                            menu={{ items: dropdownItems }}
                            trigger={['click']}
                            placement="bottomRight"
                            popupRender={(menu) => (   // ✅ updated here
                                <div style={{ width: 150 }}>
                                    {menu}
                                </div>
                            )}
                        >
                            <a onClick={e => e.preventDefault()} className="d-flex align-items-center gap-2">
                                <div className="rounded-circle bg-secondary profile-wrapper">
                                    <img src={profile} alt="user" />
                                </div>
                            </a>
                        </Dropdown>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
