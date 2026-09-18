---
title: "Đánh dấu theo ảnh"
description: "Khi cả trang là một ảnh lớn, một video, một SVG hay một ảnh chụp màn hình thì không có phần tử nào để rê chuột."
---

# Đánh dấu theo ảnh

Khi cả trang là một ảnh lớn, một video, một SVG hay một ảnh chụp màn hình thì không có phần tử nào để rê chuột. Đánh dấu theo ảnh quét trang, tìm các khối nhìn thấy được và cho bạn chọn bằng cú bấm hoặc bằng số.

::: info
Có từ Smart Mark 1.1.0. Nếu bản bạn đang cài cũ hơn, tính năng này sẽ đến trong lần cập nhật kế tiếp trên Chrome Web Store.
:::

_Video sẽ có sớm._

## Trước khi bắt đầu

- Cài Smart Mark và ghim biểu tượng của nó.
- Mở một trang web bình thường.

## Từng bước

1. Nhấn `Alt + I`. Trang mờ đi và một vạch quét chạy qua màn hình trong lúc Smart Mark phân tích.
2. Mỗi khối tìm được có một khung tím kèm số, và một toast báo tìm được bao nhiêu khối.
3. Bấm vào một khối, hoặc gõ số của nó, để đặt marker lên khối đó. Chọn bao nhiêu khối cũng được.
4. Nhấn `Esc` để thoát chế độ. Các khung số biến mất, marker của bạn vẫn còn.

## Chọn bằng số

- Các khối đang thấy trên màn hình được đánh số theo thứ tự đọc (trên xuống, rồi trái sang phải) và đánh số lại khi bạn cuộn.
- Khi có hơn 9 khối trên màn hình, gõ nhanh hai chữ số: `1` rồi `5` chọn khối 15. Gõ riêng `0` chọn khối 10.

## Tinh chỉnh việc nhận diện

- Mở trang Options và mở rộng mục Image Detection.
- Các thanh trượt Detail, Denoise, Color sensitivity (1-5) và Min block size quyết định thế nào thì tính là một khối. Advanced parameters hiện các giá trị gốc; Reset detection trả tất cả về như cũ.
- Capture method: Screenshot (mặc định, chính xác từng điểm ảnh) hoặc Render (không cuộn trang).
- Detection animation, Scan speed, Badge size và Hotkey digits đổi cách hiển thị lúc quét và cách bạn chọn khối.
- Thử thiết lập trên ảnh của chính bạn: trong khung xem trước, dùng Load image, hoặc thả hay dán một ảnh chụp màn hình.

## Mẹo

- Marker tạo ở đây là marker bình thường: hoàn tác, làm lại, ô lưu và xoá tất cả đều dùng được.
- Việc phân tích chạy ngay trong trình duyệt của bạn. Ảnh của trang không bao giờ được tải lên đâu cả.

## Phím tắt dùng trong bài

| Phím | Tác dụng |
| --- | --- |
| `Alt + I` | quét trang và hiện các khối có số (nhấn lần nữa để thoát) |
| `Esc` | thoát chế độ và xoá các khung số |

Các tổ hợp phím trên là mặc định; bạn có thể đổi từng phím trong trang Options.
