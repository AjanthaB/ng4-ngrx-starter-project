const typeCache: {[label: string]: boolean} = {};


// validate action types
export function type<T>(actionName: T | ''): T {
  if (typeCache[<string> actionName]) {
    throw new Error(`Action type ${actionName} is not unique`);
  }

  typeCache[<string> actionName] = true;
  return <T> actionName;
}