import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

import { IWaterfallState } from './types';
import { IRootState } from '../../tools/general.types';

const state: IWaterfallState = {
    isWaterfall: false,
};

const waterfall: Module<IWaterfallState, IRootState> = {
    namespaced: true,
    state: () => state,
    mutations,
    actions,
    getters,
};

export default waterfall;