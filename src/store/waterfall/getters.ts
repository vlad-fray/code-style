import { GetterTree } from 'vuex';
import { IWaterfallState } from './types';
import { storeNames } from './names';
import { IRootState } from '../../tools/commonTypes';

const getters: GetterTree<IWaterfallState, IRootState> = {
    [storeNames.getWaterfall](state): boolean {
        return state.isWaterfall;
    },
};

export { getters };