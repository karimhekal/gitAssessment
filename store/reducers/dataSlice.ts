// dataSlice.ts

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import GitHubRepository from '../../interfaces/interfaces';
// Define the initial state
interface RepoState {
  repos: GitHubRepository[]; // Replace with the actual data type
  filteredRepos: any[];
  loading: boolean;
  error: string | null;
}

const initialState: RepoState = {
  repos: [],
  filteredRepos: [],
  loading: false,
  error: null,
};

// Create an asynchronous thunk for fetching popular repositories with a specific number
export const fetchPopularRepos = createAsyncThunk(
  'repos/fetchPopular',
  async (count: number) => {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=stars:>0&sort=stars&order=desc&per_page=${count}`,
      );
      const data = await response.json();
      return data.items;
    } catch (error) {
      throw error;
    }
  },
);

// Create an asynchronous thunk for fetching repositories filtered by language and date
export const fetchFilteredRepos = createAsyncThunk(
  'repos/fetchFiltered',
  async ({
    language,
    date,
    count,
  }: {
    language?: string;
    date?: string;
    count: number;
  }) => {
    try {
      // Construct the API query based on the provided parameters
      let query = `q=stars:>0&sort=stars&order=desc&per_page=${count}`;
      if (language) {
        query += `+language:${language}`;
      }
      if (date) {
        query += `+created:>${date}`;
      }

      const response = await fetch(
        `https://api.github.com/search/repositories?${query}`,
      );
      const data = await response.json();
      return data.items;
    } catch (error) {
      throw error;
    }
  },
);

// Create a data slice with reducers
const repoSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPopularRepos.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularRepos.fulfilled, (state, action) => {
        state.loading = false;
        state.repos = action.payload;
        state.error = null;
      })
      .addCase(fetchPopularRepos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      })
      .addCase(fetchFilteredRepos.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilteredRepos.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredRepos = action.payload;
        state.error = null;
      })
      .addCase(fetchFilteredRepos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default repoSlice.reducer;
