import data from './data.json'

export const GET = async () => {
  return Response.json(data?.products)
}
