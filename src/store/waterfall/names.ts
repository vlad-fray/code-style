import { addModuleNames } from '../../tools/addModuleNames';

const MODULE_NAME = 'waterfall';

const actionsNames = {
    loadWaterfall: 'loadWaterfall',
};

const mutationsNames = {
    SET_WATERFALL: 'SET_WATERFALL',
};

const gettersNames = {
    getWaterfall: 'getWaterfall',
};

const storeNames = {
    ...actionsNames,
    ...mutationsNames,
    ...gettersNames,
};

const waterfallActions = addModuleNames(MODULE_NAME, actionsNames);
const waterfallGetters = addModuleNames(MODULE_NAME, mutationsNames);
const waterfallMutations = addModuleNames(MODULE_NAME, gettersNames);

export {
    storeNames,
    waterfallActions,
    waterfallGetters,
    waterfallMutations,
};