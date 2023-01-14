// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  fetch('https://dummyjson.com/products/1').then(async resp => {
    const data = await resp.json()
    res.status(200).json(data)
  })
 
}
