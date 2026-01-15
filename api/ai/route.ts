import { NextResponse } from "next/server";

const actions = [
  {
    title: "Dọn rác khu vực gần nhà",
    guide:
      "Chuẩn bị găng tay, bao rác. Chỉ nhặt rác khô, tránh vật sắc nhọn.",
    safety: "Không nhặt kim tiêm, mảnh kính. Đi cùng bạn bè hoặc người lớn.",
    encourage: "Việc làm nhỏ nhưng tạo thay đổi lớn 🌱",
  },
  {
    title: "Trồng và chăm sóc cây xanh",
    guide:
      "Trồng cây trong chậu hoặc vườn nhà. Tưới nước mỗi ngày.",
    safety: "Không dùng phân bón hóa học mạnh.",
    encourage: "Cây xanh là lá phổi của Trái Đất 🌍",
  },
  {
    title: "Tiết kiệm điện trong gia đình",
    guide:
      "Tắt điện khi ra khỏi phòng, tận dụng ánh sáng tự nhiên.",
    safety: "Không tự ý sửa thiết bị điện.",
    encourage: "Bạn đang giúp Trái Đất thở nhẹ hơn 💚",
  },
];

export async function GET() {
  const random = actions[Math.floor(Math.random() * actions.length)];
  return NextResponse.json(random);
}
