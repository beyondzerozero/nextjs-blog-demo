import { NextResponse } from "next/server";
import blogDummyData from "../../../blog-data.json";

const GET = () => {
  return NextResponse.json(blogDummyData);
};

export { GET };
