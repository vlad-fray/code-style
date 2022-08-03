interface IModulePartObject {
    [key: string]: string;
}

/**
 * @param moduleName - название модуля store vuex
 * @param module - объект с полями в формате имя_метода: 'имя_метода'
 * @returns тот же объект с полями в формате имя_метода: 'имя_модуля'/'имя_метода'
 */
const addModuleNames = (moduleName: string, module: IModulePartObject): IModulePartObject => {
    const moduleResult = {};

    for (const [key, value] of Object.entries(module)) {
        moduleResult[key] = `${moduleName}/${value}`;
    }

    return moduleResult;
};

export { addModuleNames };