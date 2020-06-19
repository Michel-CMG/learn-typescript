export function add (x: number, y: number): number
{
  return x + y;
}

export async function addAsync (x: number, y: number): Promise<number>
{
  await new Promise(res => setTimeout(res, 100));
  return x + y;
}