import { Input, Select, Form, AutoComplete } from 'antd';
import CustomButton from '@/components/ui/Button';
import searchLightIcon from '@/assets/icons/search_light_icon.svg';
import downArrow from '@/assets/icons/down_arrow.svg';
const { Option } = Select;

import './index.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilters, setHasSearched, setIsLoading, setSearchQuery, setSelectedJobType, setSelectedLocation } from '@/redux/api/jobSearch/jobSearchSlice';
import { jobSuggestions, jobTypes, locations } from '@/data';

// Thunk action to submit the search form and update the Redux state accordingly
export const submitSearch = (values) => (dispatch) => {
    dispatch(setIsLoading(true)); // Start loading state
    dispatch(setSearchQuery(values.keywords || '')); // Update search keywords
    dispatch(setSelectedLocation(values.location || '')); // Update location filter
    dispatch(setSelectedJobType(values.jobType || '')); // Update job type filter
    dispatch(setHasSearched(true)); // Mark that a search has been performed
    dispatch(applyFilters()); // Apply the filters to update results

    // Simulate async API call delay and turn off loading
    setTimeout(() => {
        dispatch(setIsLoading(false));
    }, 300);
};

const SearchForm = () => {

    const dispatch = useDispatch();
    const [form] = Form.useForm(); // AntD form instance for controlled form state
    const [options, setOptions] = useState([]); // AutoComplete suggestions options
    const isLoading = useSelector(state => state.jobSearch.isLoading); // Loading state from Redux

    // Update autocomplete options as user types (case-insensitive filtering)
    const handleSearch = (value) => {
        setOptions(
            jobSuggestions
                .filter(job => job.toLowerCase().includes(value.toLowerCase()))
                .map(job => ({ value: job }))
        );
    };

    // On form submit, dispatch Redux actions to update search and filters
    const handleSubmit = (values) => {
        dispatch(submitSearch(values));
    };

    return (
        <>
            <div className="search-form-wrapper container my-4 p-4 bg-white">

                <Form
                    form={form}
                    onFinish={handleSubmit}
                >

                    <div className="row align-items-stretch justify-content-between">

                        {/* Keywords AutoComplete input */}
                        <div className="col-sm-12 col-md-4 col-lg-5 col-xl-5">
                            <Form.Item
                                name="keywords"
                            >
                                <AutoComplete
                                    options={options}
                                    onSearch={handleSearch}
                                    placeholder="Job Title, Company, or Keywords"
                                    allowClear
                                    filterOption={false}
                                    className="custom-placeholder"
                                />

                            </Form.Item>
                        </div>

                        {/* Vertical separator visible on md and larger screens */}
                        <div className="d-none d-md-block col-md-auto">
                            <div
                                className="separator"
                                role="separator"
                                aria-orientation="vertical"
                            ></div>
                        </div>

                        {/* Location Select dropdown */}
                        <div className="col-sm-4 col-md-3 col-lg-2 col-xl-2">
                            <Form.Item name="location">
                                <Select
                                    className="custom-placeholder"
                                    placeholder="Select Location"
                                    suffixIcon={
                                        <img
                                            src={downArrow}
                                            alt="arrow"
                                            width={10}
                                            height={10}
                                            style={{ pointerEvents: 'none' }}
                                        />
                                    }
                                    allowClear
                                >
                                    {locations.map((item) => (
                                        <Option key={item.value} value={item.value}>
                                            {item.label}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>

                        {/* Vertical separator */}
                        <div className="d-none d-md-block col-md-auto">
                            <div
                                className="separator"
                                role="separator"
                                aria-orientation="vertical"
                            ></div>
                        </div>

                        {/* Job Type Select dropdown */}
                        <div className="col-sm-4 col-md-3 col-lg-2 col-xl-2">
                            <Form.Item name="jobType">

                                <Select
                                    className="custom-placeholder"
                                    placeholder="Job Type"
                                    suffixIcon={
                                        <img
                                            src={downArrow}
                                            alt="arrow"
                                            width={10}
                                            height={10}
                                            style={{ pointerEvents: 'none' }}
                                        />
                                    }
                                    allowClear
                                >
                                    {jobTypes.map((item) => (
                                        <Option key={item.value} value={item.value}>
                                            {item.label}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>

                        {/* Submit Search Button */}
                        <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2">

                            <CustomButton
                                type="submit"
                                disabled={isLoading}
                                className="btn-search btn btn-primary d-flex align-items-center justify-content-center gap-2 mt-sm-0 mt-md-3 mt-lg-0 mt-3">
                                <img
                                    src={searchLightIcon}
                                    alt="Search"
                                />
                                Search
                            </CustomButton>

                        </div>

                    </div>
                </Form>
            </div>
        </>
    )
}

export default SearchForm;