import { createSlice } from '@reduxjs/toolkit';
import { jobs } from '@/data';

const initialState = {
    searchQuery: '',
    selectedLocation: '',
    selectedJobType: '',
    hasSearched: false,
    filteredJobs: jobs,
    isLoading: false,
};

const jobSearchSlice = createSlice({
    name: 'jobSearch',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setSelectedLocation: (state, action) => {
            state.selectedLocation = action.payload;
        },
        setSelectedJobType: (state, action) => {
            state.selectedJobType = action.payload;
        },
        setHasSearched: (state, action) => {
            state.hasSearched = action.payload;
        },
        applyFilters: (state) => {
            state.filteredJobs = jobs.filter((job) => {
                const query = state.searchQuery.toLowerCase();
                const location = state.selectedLocation.toLowerCase();
                const jobType = state.selectedJobType.toLowerCase();

                const matchesQuery = !query || job.title.toLowerCase().includes(query);
                const matchesLocation = !location || job.location.toLowerCase().includes(location);
                const matchesType = !jobType || job.type.toLowerCase() === jobType;

                return matchesQuery && matchesLocation && matchesType;
            });
        },
        resetFilters: (state) => {
            state.searchQuery = '';
            state.selectedLocation = '';
            state.selectedJobType = '';
            state.hasSearched = false;
            state.filteredJobs = jobs;
        },
    },
});

export const {
    setIsLoading,
    setSearchQuery,
    setSelectedLocation,
    setSelectedJobType,
    setHasSearched,
    applyFilters,
    resetFilters,
} = jobSearchSlice.actions;

export default jobSearchSlice.reducer;
