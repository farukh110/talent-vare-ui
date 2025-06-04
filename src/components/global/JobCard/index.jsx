import { MapPin, Clock, Bookmark } from "lucide-react";
import msTeams from '@/assets/icons/ms_teams.svg';
import "./index.scss";

const JobCard = ({ job, showPromoted = true }) => {
    return (
        <div className="card h-100 job-card p-0">
            <div className="card-body d-flex flex-column p-3 py-2">
                {showPromoted && job.isPromoted && (
                    <span className="text-promoted mb-1">Promoted</span>
                )}
                <div className="d-flex align-items-start mb-3">
                    <div className="me-3">
                        <div className="job-card_logo bg-light d-flex align-items-center justify-content-center">
                            <img src={msTeams} alt='MS Teams' />
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5 className="card-title mb-1 text-truncate">{job.title}</h5>
                                <p className="card-subtitle mb-0 text-truncate">
                                    {job.company}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="mb-3">
                    <div className="location d-flex align-items-center mb-2">
                        <MapPin size={14} className="me-2 icon" />
                        <small>{job.locationName}</small>
                    </div>

                    <div className="applicants d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <Clock size={14} className="me-2" />
                            <small>{job.postedTime} <span className="px-1">|</span> <span className="no_applicants"> {job.applicants_no} applicants </span> </small>
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center">

                        {/* Left: Apply Button */}
                        <div>
                            <a
                                href={job.applyUrl || "#"}
                                className="btn btn-primary btn-sm btn-apply"
                            >
                                <span className="text-center">Apply Now</span>
                            </a>
                        </div>

                        {/* Right: Bookmark & Hot Badge */}
                        <div className="d-flex align-items-center gap-2">
                            <span aria-label="Bookmark">
                                <Bookmark className="bookmark-icon" size={16} />
                            </span>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default JobCard;
