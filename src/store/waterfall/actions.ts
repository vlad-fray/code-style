import { ActionTree } from 'vuex';
import { IWaterfallState } from './types';
import { actionsNames, mutationsNames } from './names';
import { IRootState } from '../../tools/general.types';

const actions: ActionTree<IWaterfallState, IRootState> = {
    [actionsNames.loadWaterfall]({ commit }): void {
        commit(mutationsNames.SET_WATERFALL);
    },
};

export { actions };