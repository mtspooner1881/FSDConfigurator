// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { UnitCardType } from '../types/unitCardTypes'
import * as data from '../../stubData/socratesStubData.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UnitCardType>,
) {
  res.status(200).json(data);
}
