export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const retorno = metodoOriginal.apply(this, args);
    console.log(`${propertyKey}`);
    console.log(`${JSON.stringify(args)}`);
    console.log(`${JSON.stringify(retorno)}`);
  };
  return descriptor;
}
