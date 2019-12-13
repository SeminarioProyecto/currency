export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${moduleName} ya ha sido cargado Importar módulos principales solo en AppModule.`
    );
  }
}
