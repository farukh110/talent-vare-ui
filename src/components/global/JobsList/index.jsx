import { Skeleton } from "antd";
import JobCard from "../JobCard";
import './.index.scss';
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "@/redux/api/jobSearch/jobSearchSlice";
import { useEffect } from "react";

const JobsList = () => {

    const dispatch = useDispatch();

    // Get filtered jobs and loading state from Redux store
    const filteredJobs = useSelector((state) => state.jobSearch.filteredJobs);
    const isLoading = useSelector(state => state.jobSearch.isLoading);

    // Defensive fallback to empty array if no jobs
    const jobsToShow = filteredJobs.length > 0 ? filteredJobs : [];

    // Split jobs into categories by slicing array
    const featuredJobs = jobsToShow.slice(0, 5);      // First 5 jobs as featured
    const recommendedJobs = jobsToShow.slice(0, 10);  // First 10 as recommended (overlaps featured)
    const latestJobs = jobsToShow.slice(-10);         // Last 10 as latest jobs

    useEffect(() => {

        dispatch(setIsLoading(true)); // Start loading

        // Stop loading after 1.5 seconds to simulate data fetch
        const timeout = setTimeout(() => {
            dispatch(setIsLoading(false));
        }, 1500);

        return () => clearTimeout(timeout); // Cleanup on unmount
    }, [dispatch]);

    // Render placeholder skeleton loaders while loading
    const renderSkeletons = (count) => {
        return Array.from({ length: count }).map((_, idx) => (
            <div key={idx} className="col">
                <Skeleton active paragraph={{ rows: 4 }} />
            </div>
        ));
    };

    return (
        <div className="jobs-list mb-5">
            {/* Featured Jobs */}
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-md-3 mb-3">
                        <span className="jobs-text-dark me-3">Featured Jobs</span>
                        <span className="jobs-text-blue">See Featured Jobs</span>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4 g-md-2 g-lg-2 g-xl-4">
                {isLoading
                    ? renderSkeletons(5)
                    : featuredJobs.map((job) => (
                        <div key={job.id} className="col">
                            <JobCard job={job} showPromoted={true} />
                        </div>
                    ))
                }
            </div>

            <div className="sep my-3"></div>

            {/* Recommended Jobs */}
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-md-3 mb-3">
                        <span className="jobs-text-dark me-3">Recommended Jobs</span>
                        <span className="jobs-text-blue">See Recommended Jobs</span>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4 g-md-2 g-lg-2 g-xl-4">
                {isLoading
                    ? renderSkeletons(10)
                    : recommendedJobs.map((job) => (
                        <div key={job.id} className="col">
                            <JobCard job={job} showPromoted={false} />
                        </div>
                    ))
                }
            </div>

            <div className="sep my-3"></div>

            {/* Latest Jobs */}
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-md-3 mb-3">
                        <span className="jobs-text-dark me-3">Latest Jobs</span>
                        <span className="jobs-text-blue">See Latest Jobs</span>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4 g-md-2 g-lg-2 g-xl-4">
                {isLoading
                    ? renderSkeletons(10)
                    : latestJobs.map((job) => (
                        <div key={job.id} className="col">
                            <JobCard job={job} showPromoted={false} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default JobsList;