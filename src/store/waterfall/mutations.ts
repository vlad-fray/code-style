import { MutationTree } from 'vuex';
import { IWaterfallState } from './types';
import { storeNames } from './names';

const mutations: MutationTree<IWaterfallState> = {
    [storeNames.SET_WATERFALL](state, payload: boolean): void {
        state.isWaterfall = payload;
    },
};

export { mutations };