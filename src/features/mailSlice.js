import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false
  },
  // Reducers to trigger state updates via associated actions.
  reducers: {

    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },

  },

});

export const { openSendMessage, closeSendMessage, selectMail } = mailSlice.actions;

// Selector to retrieve mail from the current state.
export const selectOpenMail = (state) => state.mail.selectedMail;

// Selector to display the new email message field.
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
