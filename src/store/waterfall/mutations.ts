import { MutationTree } from 'vuex';
import { IWaterfallState } from './types';
import { mutationsNames } from './names';

const mutations: MutationTree<IWaterfallState> = {
    [mutationsNames.SET_WATERFALL](state, payload: boolean): void {
        state.isWaterfall = payload;
    },
};

export { mutations };