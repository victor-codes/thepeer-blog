import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  messages: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if ((req.method = "GET")) {
    res.status(200).json({ messages: "success" });
  }
}
