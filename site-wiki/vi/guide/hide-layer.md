---
title: "Ẩn lớp"
description: "Banner cookie, thanh header dính hay một popup đang che chỗ bạn muốn đánh dấu?"
---

# Ẩn lớp

Banner cookie, thanh header dính hay một popup đang che chỗ bạn muốn đánh dấu? Ẩn nó bằng một cú bấm, đánh dấu phần bên dưới, rồi cho nó hiện lại khi xong. Không có gì trên trang bị xoá.

::: info
Có từ Smart Mark 1.1.0. Nếu bản bạn đang cài cũ hơn, tính năng này sẽ đến trong lần cập nhật kế tiếp trên Chrome Web Store.
:::

![Ẩn lớp](/media/hide-layer.gif)

## Trước khi bắt đầu

- Đã cài Smart Mark.
- Một trang có thứ gì đó che phần bạn muốn đánh dấu.

## Từng bước

1. Nhấn `Alt + A` để bật chế độ ẩn. Phần tử dưới con trỏ có một khung đỏ với dấu X lớn.
2. Bấm để ẩn nó. Một toast cho biết đang ẩn bao nhiêu lớp, và con số đó cũng hiện trên biểu tượng thanh công cụ.
3. Đánh dấu phần bên dưới bằng chế độ đánh dấu bất kỳ.
4. Nhấn `Alt + A` lần nữa hoặc `Esc` để rời chế độ ẩn. Các lớp đã ẩn vẫn ẩn.
5. `Ctrl + Z` hoàn tác một lần ẩn như mọi bước marker khác, `Ctrl + Y` làm lại. `Ctrl + Shift + Alt + A` cho mọi lớp đã ẩn hiện lại cùng lúc.

## Ẩn ngay khi đang đánh dấu

- Trong chế độ Element (`Alt + Z`) hoặc Merge (`Alt + Q`), giữ `Alt`: sau một chút, bản xem trước chuyển sang đỏ. `Alt` + bấm là ẩn; bấm thường vẫn đánh dấu như cũ.
- Chọn nhầm phần tử? Vẫn giữ phím và lăn chuột lên để chuyển sang phần tử cha, lăn xuống để quay lại. Trang không cuộn trong lúc đó.

## Thiết lập

- Options > Marker Configuration > Hide layer: Hide from pick modes (bật / tắt), Hide modifier (Alt, Shift hoặc Ctrl), Climb to parent (Mouse wheel, Arrow up / down, Plus / minus hoặc Custom shortcuts) và Hide preview delay (mặc định 300 ms).
- Options > Notifications: Hide toast và Hidden count badge. Options > Colors & Style: màu Hide preview.

## Mẹo

- Phần tử vẫn nằm trong trang và giữ chỗ của nó, nên bố cục và marker của bạn không dịch đi.
- Lớp đã ẩn vẫn ẩn khi đánh dấu theo ảnh (`Alt + I`) và khi chụp ảnh trang.
- Xoá marker không làm lớp đã ẩn hiện lại. Tải lại trang thì mọi thứ hiện lại.

## Phím tắt dùng trong bài

| Phím | Tác dụng |
| --- | --- |
| `Alt + A` | bật / tắt chế độ ẩn, rồi bấm vào một lớp để ẩn nó |
| `Ctrl + Shift + Alt + A` | cho mọi lớp đã ẩn hiện lại (một bước hoàn tác) |
| `Ctrl + Z` | hoàn tác bước vừa rồi, kể cả một lần ẩn |
| `Esc` | rời chế độ ẩn |

Các tổ hợp phím trên là mặc định; bạn có thể đổi từng phím trong trang Options.
