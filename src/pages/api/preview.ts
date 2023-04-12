// This does not work in Next.js 13.2.4 and the new app router does not have a way to implement Preview Mode yet

import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  res.writeHead(307, { Location: "/" });
  res.end();
}
