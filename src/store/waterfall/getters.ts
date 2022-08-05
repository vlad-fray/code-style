import { GetterTree } from 'vuex';
import { IWaterfallState } from './types';
import { gettersNames } from './names';
import { IRootState } from '../../tools/general.types';

const getters: GetterTree<IWaterfallState, IRootState> = {
    [gettersNames.getWaterfall](state): boolean {
        return state.isWaterfall;
    },
};

export { getters };