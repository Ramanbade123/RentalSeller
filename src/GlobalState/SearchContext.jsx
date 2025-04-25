// /src/GlobalState/SearchContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    // Debounce logic (300ms delay)
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedQuery(query), 300);
        return () => clearTimeout(handler);
    }, [query]);

    // Fetch products from API
    useEffect(() => {
        const fetchResults = async () => {
            if (!debouncedQuery.trim()) return setResults([]);

            setLoading(true);
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/search?q=${debouncedQuery}`);
                setResults(res.data);
            } catch (err) {
                console.error('Search error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [debouncedQuery]);

    return (
        <SearchContext.Provider value={{ query, setQuery, results, loading }}>
            {children}
        </SearchContext.Provider>
    );
};
