/**
 * @param moduleName - название модуля store vuex
 * @param methodName - имя метода store vuex
 * @returns 'имя_модуля'/'имя_метода'
 */
const addModuleName = (moduleName: string, methodName: string): string => `${moduleName}/${methodName}`;

export { addModuleName };