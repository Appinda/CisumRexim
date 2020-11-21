import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  let file = await fs.promises.readFile('D:/Code Projects/Git/Appinda/CisumRexim/doc/CisumRexim Projects/PIP/tracks/1. Chevaliers de Sangreal.mp3');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'audio/mpeg');
  res.end(file);
}
