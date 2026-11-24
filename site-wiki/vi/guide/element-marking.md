---
title: "Chế độ Element"
description: "Rê chuột lên bất kỳ phần tử nào trên trang web - nút, ảnh, thẻ hay đoạn văn - rồi thả một marker hình hộp ôm sát phần tử đó."
---

# Chế độ Element

Rê chuột lên bất kỳ phần tử nào trên trang web - nút, ảnh, thẻ hay đoạn văn - rồi thả một marker hình hộp ôm sát phần tử đó. Rất hợp để chỉ điểm trong ảnh chụp màn hình, báo lỗi và bài hướng dẫn.

_Video sẽ có sớm._

## Trước khi bắt đầu

- Cài Smart Mark và ghim biểu tượng của nó.
- Mở một trang web bình thường (không chạy trên các trang nội bộ chrome://).

## Từng bước

1. Nhấn `Alt + Z` để bật chế độ Element. Một toast nhỏ xác nhận chế độ.
2. Rê chuột lên một phần tử. Viền xanh dương cho thấy đúng phần tử sẽ được đánh dấu; bản xem trước màu xanh lá cho thấy hình dạng marker.
3. Click vào phần tử, hoặc nhấn `Shift + Z`, để đặt marker lên nó.
4. Click lần nữa (hoặc `Shift + Z` lần nữa) để bỏ marker đó. Marker của khung ngoài vẫn giữ nguyên khi bạn click một phần tử nằm bên trong.
5. Rê sang phần tử khác và đánh dấu theo cùng cách.
6. Nhấn `Esc` để thoát chế độ Element khi xong.

## Ẩn thứ đang che (Alt + click)

1. Khi đang ở chế độ Element, giữ `Alt` trên phần tử đang che thứ bạn cần, ví dụ banner cookie. Sau một chút (mặc định 300 ms) bản xem trước chuyển đỏ với dấu X lớn.
2. Vẫn giữ `Alt` và click: phần tử đó bị ẩn, không có marker nào được đặt.
3. Chọn nhầm? Vẫn giữ `Alt` và lăn chuột lên để chuyển sang phần tử cha, lăn xuống để quay lại. Trang không cuộn trong lúc đó.
4. Thả `Alt` rồi click như bình thường để đánh dấu thứ nằm bên dưới.
5. `Ctrl + Z` hiện lại phần tử vừa ẩn; `Ctrl + Shift + Alt + A` hiện lại mọi lớp đã ẩn. Phím, thời gian chờ và cách chuyển phần tử cha nằm ở Options > `Cấu hình marker` (Marker Configuration) > `Hide Layer` (xem Chế độ Hide Layer).

## Chỉnh hình marker (tuỳ chọn)

- `Alt + O` - đổi hình dạng: `Chữ nhật` (Rectangle), `Oval` hoặc `Thoi` (Diamond).
- `Alt + W` - đổi cách ôm: `Inscribe`, `Median` hoặc `Circumscribe`.
- `Alt + =` / `Alt + -` - nới hoặc thu hộp 5 px.
- `Alt + ]` / `Alt + [` - bo góc tròn hơn hoặc vuông hơn 1 px (`Chữ nhật` (Rectangle) và `Thoi` (Diamond)).
- Mở trang Options để đặt màu cho chế độ Element.

## Hoàn tác và dọn dẹp

- `Ctrl + Z` hoàn tác marker vừa đặt, `Ctrl + Y` làm lại.
- `Ctrl + Shift + Z`, rồi bấm vào một marker để xoá riêng nó. Nhấn `Ctrl + Shift + Z` lần nữa, hoặc `Esc`, để thoát chế độ xoá.
- `Ctrl + Shift + Alt + Z` xoá mọi marker Element cùng lúc.
- Marker tạo bằng chế độ Merge cũng tính là marker Element, nên hai phím này xoá cả chúng.

## Lưu lại

- `Ctrl + Shift + Alt + 0-9` lưu các marker hiện tại vào ô 0-9.
- `Alt + 0-9` nạp lại marker từ một ô.

## Mẹo

- Viền xanh dương cho thấy hộp thật của phần tử, nên bạn biết chính xác cái gì được đánh dấu dù marker đã nới lề hay đổi dạng. Viền tự ẩn khi bản xem trước xanh lá đã trùng đúng hộp đó (Chữ nhật, lề bằng 0).
- Marker nằm yên chỗ bạn đặt: cuộn trang hay trang thay đổi đều không làm nó dịch đi. Tải lại trang thì marker mất, trừ khi bạn đã lưu vào ô.

## Phím tắt dùng trong bài

| Phím | Tác dụng |
| --- | --- |
| `Alt + Z` | bật / tắt chế độ Element |
| `Shift + Z` | đặt hoặc bỏ marker trên phần tử đang rê |
| `Ctrl + Shift + Z` | bấm để xoá marker Element |
| `Ctrl + Shift + Alt + Z` | xoá mọi marker Element |
| `Esc` | thoát chế độ |

Các tổ hợp phím trên là mặc định; bạn có thể đổi từng phím trong trang Options.
