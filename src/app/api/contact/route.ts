import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
  const { content } = await req.json();

  // db 연결시 사용
  console.log(content);

  return NextResponse.json({}, { status: 200 });
};

export { POST };
