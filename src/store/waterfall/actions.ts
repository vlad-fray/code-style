import { ActionTree } from 'vuex';
import { IWaterfallState } from './types';
import { storeNames } from './names';
import { IRootState } from '../../tools/general.types';

const actions: ActionTree<IWaterfallState, IRootState> = {
    [storeNames.loadWaterfall]({ commit }): void {
        commit(storeNames.SET_WATERFALL);
    },
};

export { actions };