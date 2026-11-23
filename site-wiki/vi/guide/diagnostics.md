---
title: "Chẩn đoán và báo lỗi"
description: "Smart Mark không ghi gì cho tới khi bạn cho phép."
---

# Chẩn đoán và báo lỗi

Smart Mark không ghi gì cho tới khi bạn cho phép. Khi có trục trặc, bật Chẩn đoán, làm lại lỗi một lần, rồi chép một báo cáo ngắn để dán vào phần báo lỗi - báo cáo không rời khỏi máy bạn.

::: info
Có từ Smart Mark 1.1.0. Nếu bản bạn đang cài cũ hơn, tính năng này sẽ đến trong lần cập nhật kế tiếp trên Chrome Web Store.
:::

![Chẩn đoán và báo lỗi](/media/diagnostics.gif)

## Trước khi bắt đầu

- Mở trang Options (`Ctrl + Alt + ,`) và mở mục Diagnostics.

## Từng bước

1. Tích `Ghi sự kiện`. Từ lúc này Smart Mark lưu hoạt động gần đây của chính nó trong trình duyệt này. Tích ngay sau khi gặp lỗi vẫn bắt được lần chạy đó, miễn là bạn chưa tải lại trang.
2. Quay lại trang web và làm lại thao tác bị lỗi một lần.
3. Trở về Options > Diagnostics rồi bấm `Chép báo cáo`. Báo cáo vào clipboard và hiện trong ô bên dưới, nên bạn vẫn bôi đen chép tay được nếu clipboard bị chặn.
4. Dán vào nội dung báo lỗi trên trang issue.
5. Xong thì bỏ tích `Ghi sự kiện`. Bỏ tích cũng là xoá sạch phần đã ghi; nút `Xoá` xoá mà không tắt.

## Trong báo cáo có gì

- Phần đầu: tên và phiên bản extension, chuỗi trình duyệt của bạn.
- Tối đa 200 dòng có mốc thời gian, là hoạt động của chính Smart Mark: đổi chế độ, các bước của một lần nhận diện, cảnh báo, lỗi kèm dòng stack đầu tiên, và cả lỗi không ai bắt trên trang.
- Không có nội dung trang, địa chỉ trang, phím bạn gõ, marker của bạn, hay thông tin về bạn.

## Tốn bao nhiêu

- Khi tắt thì không ghi gì vào bộ nhớ lưu trữ, và bản phát hành mặc định là tắt. Trang chỉ giữ 200 dòng gần nhất trong bộ nhớ tạm, tải lại là mất.
- Khi bật, phần ghi bị chặn trần: 200 dòng, mỗi dòng cắt còn 300 ký tự, tức dưới 70 KB trong bộ nhớ riêng của extension (Chrome cho 10 MB).
- Chỉ giữ 200 dòng mới nhất, dòng cũ tự rụng.
- Tắt, bấm Xoá, hoặc gỡ extension là mất sạch.

## Nó không đi đâu cả

- Không máy chủ, không analytics, không gửi lên mạng. Báo cáo chỉ đi khi chính bạn dán nó vào đâu đó.
- Lưu theo từng máy và không nằm trong đồng bộ Chrome, nên không lan sang trình duyệt khác của bạn.
- Cũng không nằm trong file profile hay preset, nên xuất profile không mang nó theo.

## Phím tắt dùng trong bài

| Phím | Tác dụng |
| --- | --- |
| `Ctrl + Alt + ,` | mở trang Options, nơi có mục Diagnostics |

Các tổ hợp phím trên là mặc định; bạn có thể đổi từng phím trong trang Options.
