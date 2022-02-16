import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { defaultJson } from '../Json/default';
// import { kizanJson } from '../Json/kizan';
import { securityPractices } from '../Json/SecurityPractices';
import { singleFlow } from '../Json/singleFlow';
const sanityClient = require('@sanity/client');
// Sanity Settings
const client = sanityClient({
  projectId: '0bflv8ro',
  dataset: 'production',
  apiVersion: '2021-12-08', // use current UTC date - see "specifying API version"!
  token:
    'skhwJrSNZ4vGqOKX544hAr1EjTrZqsbjqmuUMpRPp5DooWuPsMZNAxJmdJncW7yDQeKJkUWplcuJbxQWgbgdd1ik6miVFIV7sUCq88QGrSp6BL6RFU3rSOSkqFXbbRkul4tgPgKPf9D4O2NqCWuTwTmwcRCbWqjL4MzraJoJBnqew1YaWrPJ', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});
const query =
  '*[_type == "partner"] { ...,connection[]->{..., inputs[]->{...}}, hero{...,fields->{..., options[]{...,information->}}},stats {...,tabMenus[]->}, steps[] {...,relatedQuestions[]->{...},fields[]-> {...,options[]{...,callRecommendation[]->,callShouldDo[]->,callWorryAbout[]->, CallOnAnswer->{...,options[]{..., CallOnAnswer->}}}}},riskAssesment{..., labels[]->{...}} }';
const params = 0;
// const data = await client.fetch(query, params)
const initialState = {
  defaultJson: null,
  userState: false,
  globalStepHeight: 0,
  questionOrder: null,
  relatedQuestionsState: [],
  initialInformation: {},
  followUpInformationTitle: '',
  popup: false,
};

export const fetchPartnerTheme = createAsyncThunk(
  '/api/sanity',
  async ({ uuid }) => {
    const sanity = await client.fetch(query, params);
    console.log(uuid);
    return sanity.find((ctx) => ctx.uuid === uuid);
  }
);

export const quizSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPopup: (state, action) => {
      state.popup = action.payload;
    },
    setUserState: (state, action) => {
      if (action.payload === 'connect') {
        state.userState.step = 5;
        return;
      }
      state.userState = action.payload;
    },
    updateUserState: (state, action) => {
      state.userState.results = action.payload;
    },
    getScrollSize: (state, action) => {
      state.scrollSize = action.payload;
    },
    updateStepHeight: (state, action) => {
      state.globalStepHeight = action.payload;
    },
    // Set question order for related questions
    setQuestionOrder: (state, action) => {
      state.questionOrder = action.payload;
    },
    setRelatedQuestionState: (state, action) => {
      const questionState = state.relatedQuestionsState;
      state.relatedQuestionsState = [...questionState, action.payload];
    },
    updateJson: (state, action) => {
      const payload = action.payload;
      switch (payload) {
        case 'securityPractices':
          state.defaultJson = securityPractices;
          break;
        // case 'kizan':
        //   state.defaultJson = kizanJson;
        //   break;
        case 'singleFlow':
          state.defaultJson = singleFlow;
          break;
        case 'default':
          state.defaultJson = defaultJson;
          break;

        default:
          console.log('No JSON provided');
      }
    },
    updateInformation: (state, action) => {
      state.initialInformation = action.payload;
    },
    pingFollowUpQuestion: (state, action) => {
      state.followUpInformationTitle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPartnerTheme.fulfilled, (state, action) => {
      state.defaultJson = action.payload;
    });
    builder.addCase(fetchPartnerTheme.rejected, (state, action) => {});
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserState,
  updateUserState,
  updateStepHeight,
  updateJson,
  setQuestionOrder,
  setRelatedQuestionState,
  updateInformation,
  pingFollowUpQuestion,
  setPopup,
} = quizSlice.actions;

export default quizSlice.reducer;
