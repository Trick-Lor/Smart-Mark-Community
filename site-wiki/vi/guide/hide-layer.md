---
title: "Chế độ Hide Layer"
description: "Banner cookie, thanh header dính hay một popup đang che chỗ bạn muốn đánh dấu?"
---

# Chế độ Hide Layer

Banner cookie, thanh header dính hay một popup đang che chỗ bạn muốn đánh dấu? Ẩn nó bằng một cú bấm, đánh dấu phần bên dưới, rồi cho nó hiện lại khi xong. Không có gì trên trang bị xoá.

::: info
Có từ Smart Mark 1.1.0. Nếu bản bạn đang cài cũ hơn, tính năng này sẽ đến trong lần cập nhật kế tiếp trên Chrome Web Store.
:::

![Chế độ Hide Layer](/media/hide-layer.gif)

## Trước khi bắt đầu

- Đã cài Smart Mark.
- Một trang có thứ gì đó che phần bạn muốn đánh dấu.

## Từng bước

1. Nhấn `Alt + A` để bật chế độ Hide Layer. Phần tử dưới con trỏ có một khung đỏ với dấu X lớn.
2. Bấm để ẩn nó. Một toast cho biết đang ẩn bao nhiêu lớp, và con số đó cũng hiện trên biểu tượng thanh công cụ.
3. Đánh dấu phần bên dưới bằng chế độ đánh dấu bất kỳ.
4. Nhấn `Alt + A` lần nữa hoặc `Esc` để rời chế độ Hide Layer. Các lớp đã ẩn vẫn ẩn.
5. `Ctrl + Z` hoàn tác một lần ẩn như mọi bước marker khác, `Ctrl + Y` làm lại. `Ctrl + Shift + Alt + A` cho mọi lớp đã ẩn hiện lại cùng lúc.

## Ẩn ngay khi đang đánh dấu

- Trong chế độ Element (`Alt + Z`) hoặc Merge (`Alt + Q`), giữ `Alt`: sau một chút, bản xem trước chuyển sang đỏ. `Alt` + bấm là ẩn; bấm thường vẫn đánh dấu như cũ.
- Chọn nhầm phần tử? Vẫn giữ phím và lăn chuột lên để chuyển sang phần tử cha, lăn xuống để quay lại. Trang không cuộn trong lúc đó.
- Trong chế độ Hide Layer (`Alt + A`), lăn chuột chỉ chuyển phần tử cha khi bạn đang giữ `Alt` (hoặc phím ẩn bạn đã chọn); không giữ thì trang cuộn như thường.

## Thiết lập

- Options > `Cấu hình marker` (Marker Configuration) > `Hide Layer`: `Ẩn trong Element và Merge` (Hide in Element and Merge) (bật / tắt), `Phím ẩn` (Hide modifier) (`Alt`, `Shift` hoặc `Ctrl`), `Lên khung cha` (Climb to parent) (`Lăn chuột` (Mouse wheel), `Mũi tên lên / xuống` (Arrow up / down), `Cộng / trừ` (Plus / minus) hoặc `Phím tắt tự chọn` (Custom shortcuts)) và `Thời gian chờ khi ẩn` (Hide preview delay) (mặc định 300 ms).
- Options > `Thông báo` (Notifications): `Toast khi ẩn` (Hide Layer toast) và `Số lớp ẩn trên icon` (Hidden count badge). Options > `Màu & Kiểu dáng` (Colors & Style): `Xem trước khi ẩn` (Hide preview).

## Mẹo

- Phần tử vẫn nằm trong trang và giữ chỗ của nó, nên bố cục và marker của bạn không dịch đi.
- Lớp đã ẩn vẫn ẩn khi đánh dấu theo ảnh (`Alt + I`) và khi chụp ảnh trang.
- Xoá marker không làm lớp đã ẩn hiện lại. Tải lại trang thì mọi thứ hiện lại.

## Phím tắt dùng trong bài

| Phím | Tác dụng |
| --- | --- |
| `Alt + A` | bật / tắt chế độ Hide Layer, rồi bấm vào một lớp để ẩn nó |
| `Ctrl + Shift + Alt + A` | cho mọi lớp đã ẩn hiện lại (một bước hoàn tác) |
| `Ctrl + Z` | hoàn tác bước vừa rồi, kể cả một lần ẩn |
| `Esc` | rời chế độ Hide Layer |

Các tổ hợp phím trên là mặc định; bạn có thể đổi từng phím trong trang Options.
