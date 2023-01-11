// Website of jayantkageri, NextJS Site for jayantkageri.in
// Copyright (C) 2021 - 2023 Jayant Hegde Kageri <https://github.com/jayantkageri>

// This file is part of Website of jayantkageri.

// Website of jayantkageri is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Website of jayantkageri is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with Website of jayantkageri.  If not, see <https://www.gnu.org/licenses/>.

import { NextApiRequest, NextApiResponse } from "next";

function index(_: NextApiRequest, res: NextApiResponse) {
  // Sending the response
  return res.json({
    success: true,
    message: "Application Programming Interface is online.",
  });
}

export default index;
