import { createSlice } from "@reduxjs/toolkit";
import professionService from "../services/profession.service";
import isOutdated from "../utils/isOutDated";

const professionsSlice = createSlice({
    name: "professions",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        professionsRequested: (state) => {
            state.isLoading = true;
        },
        professionsReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        professionsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: professionsReducer, actions } = professionsSlice;
const { professionsRequested, professionsReceived, professionsRequestFailed } =
    actions;

export const loadProfessionsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().professions;
    if (isOutdated(lastFetch)) {
        console.log(lastFetch);
        dispatch(professionsRequested());
        try {
            const { content } = await professionService.get();
            dispatch(professionsReceived(content));
        } catch (error) {
            dispatch(professionsRequestFailed(error.message));
        }
    }
};

// export const getQualities = () => (state) => state.qualities.entities;
// export const getQualitiesLoadingStatus = () => (state) =>
//     state.qualities.isLoading;
// export const getQualitiesByIds = (qualitiesIds) => (state) => {
//     if (state.qualities.entities) {
//         const qualitiesArray = [];
//         for (const qualId of qualitiesIds) {
//             for (const quality of state.qualities.entities) {
//                 if (quality._id === qualId) {
//                     qualitiesArray.push(quality);
//                     break;
//                 }
//             }
//         }
//         return qualitiesArray;
//     }
//     return [];
// };

export default professionsReducer;
