import Welcome from '../Welcome';
import SearchForm from '../SearchForm';
import QuickTags from '../QuickTags';
import { quickTags } from '@/data';
import JobsList from '../JobsList';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilters, setHasSearched, setSearchQuery } from '@/redux/api/jobSearch/jobSearchSlice';

const JobMainArea = () => {

    const dispatch = useDispatch();

    // When a quick tag is clicked:
    // - Update the search query in Redux to the tag clicked
    // - Set hasSearched flag to true to indicate user has searched
    // - Trigger applyFilters to update the jobs list based on new query
    const handleTagClick = (tag) => {
        dispatch(setSearchQuery(tag));
        dispatch(setHasSearched(true));
        dispatch(applyFilters());
    };

    return (
        <>
            <div className='col-12 col-lg-9'>

                {/* Welcome header with personalized message */}
                <Welcome
                    title="Find your Dream Job,"
                    customClass="mt-3"
                    otherTitle="Albert!"
                    text="Explore the latest job openings and apply for the best opportunities available today!"
                />

                {/* Search form component to filter jobs */}
                <SearchForm />

                {/* Quick tags below search form to allow users to filter jobs quickly */}
                <div className='row'>
                    <QuickTags tags={quickTags} onTagClick={handleTagClick} />
                </div>

                {/* List of job results, automatically updates based on Redux filters */}
                <JobsList />

            </div>
        </>
    )
}

export default JobMainArea;
