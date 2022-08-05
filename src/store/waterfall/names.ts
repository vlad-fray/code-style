import { addModuleName } from '../../tools/addModuleNames';

const MODULE_NAME = 'waterfall';

enum actionsNames {
    loadWaterfall = 'loadWaterfall',
};

enum mutationsNames {
    SET_WATERFALL = 'SET_WATERFALL',
};

enum gettersNames {
    getWaterfall = 'getWaterfall',
};

const waterfallActions = {
    [actionsNames.loadWaterfall]: addModuleName(MODULE_NAME, actionsNames.loadWaterfall),
};

const waterfallGetters = {
    [gettersNames.getWaterfall]: addModuleName(MODULE_NAME, gettersNames.getWaterfall),
};

const waterfallMutations = {
    [mutationsNames.SET_WATERFALL]: addModuleName(MODULE_NAME, mutationsNames.SET_WATERFALL),
};

export {
    actionsNames,
    mutationsNames,
    gettersNames,
    waterfallActions,
    waterfallGetters,
    waterfallMutations,
};