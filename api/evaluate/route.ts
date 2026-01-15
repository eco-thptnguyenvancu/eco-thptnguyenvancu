import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { action } = await req.json();

  let feedback = "🌱 Hành động rất ý nghĩa!";

  if (action.includes("rác")) {
    feedback =
      "👍 Việc dọn rác giúp môi trường sạch hơn. Em nhớ đeo găng tay, tránh vật sắc nhọn và nên đi cùng bạn bè hoặc người lớn nhé!";
  }

  if (action.includes("trồng")) {
    feedback =
      "🌳 Trồng cây là hành động tuyệt vời! Em nên tưới nước đều và bảo vệ cây trong những ngày đầu.";
  }

  if (action.includes("tiết kiệm")) {
    feedback =
      "💡 Ý thức tiết kiệm năng lượng rất đáng khen. Nếu duy trì hằng ngày, em sẽ tạo tác động rất lớn!";
  }

  return NextResponse.json({
    message: feedback,
  });
}
