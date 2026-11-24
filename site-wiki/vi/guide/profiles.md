---
title: "Profile và preset"
description: "Lưu toàn bộ thiết lập của bạn - mọi tuỳ chọn, các ô lưu marker và các preset - thành một profile có tên."
---

# Profile và preset

Lưu toàn bộ thiết lập của bạn - mọi tuỳ chọn, các ô lưu marker và các preset - thành một profile có tên. Chuyển qua lại giữa các profile, áp một preset như Highlighter, mang thiết lập sang máy khác bằng một file, và hoàn tác thay đổi bạn không ưng.

::: info
Có từ Smart Mark 1.1.0. Nếu bản bạn đang cài cũ hơn, tính năng này sẽ đến trong lần cập nhật kế tiếp trên Chrome Web Store.
:::

![Profile và preset](/media/profiles.gif)

## Trước khi bắt đầu

- Mở trang Options (`Ctrl + Alt + ,`).

## Từng bước

1. Mở trang Options và mở rộng mục `Profile` (Profiles). Lần đầu, Smart Mark tạo Default profile từ thiết lập hiện tại của bạn.
2. Đổi bất kỳ thiết lập nào. Thanh profile hiện modified (N), và `Xem thay đổi` (See changes) liệt kê những gì khác đi. Chưa có gì được ghi vào profile cho tới khi bạn lưu.
3. `Lưu` (Save) ghi đè profile đang chọn, trước đó hiện danh sách trước / sau để bạn bỏ bớt thay đổi nào tuỳ ý. `Lưu thành...` (Save as...) lưu thành profile mới với tên mới.
4. Chọn profile khác để chuyển. Nếu còn thay đổi chưa lưu, bạn được hỏi Save first, Discard hay Cancel, và thấy danh sách thay đổi trước khi áp dụng.
5. `Đổi tên` (Rename), `Nhân bản` (Duplicate) và `Xóa` (Delete) áp lên profile đang chọn. Xoá profile thì xoá luôn các preset trong nó.

## Preset

- Một preset chỉ đổi vài thiết lập. Smart Mark có sẵn năm cái: Defaults, Highlighter (nền vàng 35% với nét mảnh), Bug report, High contrast và Subtle.
- Rê chuột lên một dòng preset để xem thử trong khung xem trước; Apply hiện danh sách thay đổi trước khi áp.
- `Chép sang...` (Copy to...) chép một preset sang profile khác.
- `Khôi phục preset mặc định` (Restore default presets) khôi phục preset có sẵn mà bạn đã xoá.

## Xuất và nhập

- `Export` tải profile về thành file JSON. `Export kèm chú thích (.jsonc)` (Export with comments (.jsonc)) ghi file có chú thích; `Export tất cả` (Export all) tải mỗi profile một file.
- `Kèm ô marker` (Include marker slots) quyết định các ô lưu marker có đi kèm profile hay không.
- `Import` đọc file profile hoặc file preset. File trùng tên sẽ ghi đè cái đang có sau khi bạn xác nhận danh sách thay đổi.
- Thiết lập lạ và giá trị ngoài khoảng cho phép bị bỏ qua kèm cảnh báo; phần còn lại của file vẫn được nạp.

## Mẹo

- Undo đảo lại thay đổi hàng loạt gần nhất (áp preset, chuyển profile, nhập file hoặc reset). Nó giữ một mức, nên nhấn lần nữa là làm lại thay đổi đó.
- Các nút Reset đưa về giá trị của profile đang chọn, không phải mặc định gốc.

## Phím tắt dùng trong bài

| Phím | Tác dụng |
| --- | --- |
| `Ctrl + Alt + ,` | mở trang Options, nơi có mục `Profile` (Profiles) |

Các tổ hợp phím trên là mặc định; bạn có thể đổi từng phím trong trang Options.
