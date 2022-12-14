import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchAddContacts = createAsyncThunk(
  'contacts/addContacts',
  async (value, thunkApi) => {
    try {
      const { data } = await axios.post('/contacts', {
        name: value.name,
        number: value.number,
      });
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchRemoveContact = createAsyncThunk(
  'contacts/removeContacts',
  async (removeId, thunkApi) => {
    try {
      await axios.delete(`/contacts/${removeId}`);
      return removeId;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
