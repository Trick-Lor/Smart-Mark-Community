/**
 * @file ./site/i18n/vi.mjs
 * @description Vietnamese copy for the docs site, keyed by feature id. Read by .agents/scripts/gen-feature-guides.mjs and gen-landing.mjs; a missing field falls back to English and is printed as a gap, a toneless string aborts the run (lib/toneless-check.mjs). Full diacritics only. Product words stay in English like the extension's own vi locale: Smart Mark, marker, Element / Free draw / Merge, Image pick, Options, Oval, Inscribe / Median / Circumscribe, toast; Rectangle is "Chu nhat" and Diamond is "Thoi" there too.
 * @scope project
 * @updated-at 2026-09-17
 */

"use strict";

/** Site-level strings (hero text = tagline, hero tagline = description). */
export const SITE_VI = {
    tagline: "Đánh dấu và làm nổi bật mọi trang web bằng phím tắt.",
    description: "Smart Mark giúp bạn đánh dấu và làm nổi bật mọi phần tử hoặc vùng trên trang web bằng phím tắt: viền phần tử, vẽ vùng tự do và lưu bố cục. Không thanh công cụ, không menu, không cần chuột. Không thu thập dữ liệu; mọi thứ nằm trên máy bạn."
};

/** Fixed page labels used by the generators. */
export const LABELS_VI = {
    beforeYouStart : "Trước khi bắt đầu",
    shortcuts      : "Phím tắt dùng trong bài",
    keys           : "Phím",
    action         : "Tác dụng",
    videoSoon      : "Video sẽ có sớm.",
    rebindNote     : "Các tổ hợp phím trên là mặc định; bạn có thể đổi từng phím trong trang Options.",
    coreFeatures   : "Tính năng chính",
    smallerFeatures: "Tính năng nhỏ",
    addToChrome    : "Thêm vào Chrome",
    getOnGithub    : "Tải trên GitHub",
    readGuide      : "Đọc hướng dẫn",
    howToUse       : "Cách dùng",
    faq            : "Câu hỏi thường gặp",
    demoTitle      : "Video giới thiệu Smart Mark"
};

/** One { q, a } per FAQ entry, same order as FAQ in feature-demos.config.mjs. */
export const FAQ_VI = [
    { q: "Smart Mark có miễn phí không?", a: "Có. Smart Mark hoàn toàn miễn phí, không quảng cáo, không cần tài khoản." },
    { q: "Nó có thu thập dữ liệu của tôi không?", a: "Không. Mọi bố cục marker được lưu ngay trên máy bạn (chrome.storage.local) và không bao giờ gửi đi đâu." },
    { q: "Nó chạy trên trình duyệt nào?", a: "Google Chrome (Manifest V3). Chạy trên mọi trang web bình thường, nhưng không chạy trên các trang nội bộ chrome:// hay Web Store." },
    { q: "Tôi có phải nhớ hết phím tắt không?", a: "Mọi hành động đều có phím tắt và tất cả đều đổi được trong trang Options. Một toast hiện chế độ đang bật trong lúc bạn làm việc." }
];

const BEFORE_COMMON = ["Cài Smart Mark và ghim biểu tượng của nó.", "Mở một trang web bình thường."];
const SAVE_SECTION = {
    heading: "Lưu lại",
    lines: [
        "- `Ctrl + Shift + Alt + 0-9` lưu các marker hiện tại vào ô 0-9.",
        "- `Alt + 0-9` nạp lại marker từ một ô."
    ]
};
const undoSection = (removeOneKeys, removeAllKeys, what) => ({
    heading: "Hoàn tác và dọn dẹp",
    lines: [
        "- `Ctrl + Z` hoàn tác marker vừa đặt, `Ctrl + Y` làm lại.",
        `- \`${removeOneKeys}\`, rồi bấm vào một marker để xoá riêng nó.`,
        `- \`${removeAllKeys}\` ${what}.`
    ]
});
const shapeSection = (colorTarget) => ({
    heading: "Chỉnh hình marker (tuỳ chọn)",
    lines: [
        "- `Alt + O` - đổi hình dạng: Chữ nhật, Oval hoặc Thoi.",
        "- `Alt + W` - đổi cách ôm: Inscribe, Median hoặc Circumscribe.",
        "- `Alt + =` / `Alt + -` - nới hoặc thu hộp 5 px.",
        `- Mở trang Options để đặt màu cho ${colorTarget}.`
    ]
});

/**
 * Per-feature copy: { title, summary, before[], sections[{ heading, lines[] }],
 * shortcutDescs[] } aligned to the English entry of the same id. The seven
 * small features are not translated yet and fall back to English.
 */
export const FEATURES_VI = {
    "element-marking": {
        title  : "Đánh dấu phần tử",
        summary: "Rê chuột lên bất kỳ phần tử nào trên trang web - nút, ảnh, thẻ hay đoạn văn - rồi thả một marker hình hộp ôm sát phần tử đó. Rất hợp để chỉ điểm trong ảnh chụp màn hình, báo lỗi và bài hướng dẫn.",
        before : ["Cài Smart Mark và ghim biểu tượng của nó.", "Mở một trang web bình thường (không chạy trên các trang nội bộ chrome://)."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Nhấn `Alt + Z` để bật chế độ Element. Một toast nhỏ xác nhận chế độ.",
                    "2. Rê chuột lên một phần tử. Viền xanh dương cho thấy đúng phần tử sẽ được đánh dấu; bản xem trước màu xanh lá cho thấy hình dạng marker.",
                    "3. Nhấn `Shift + Z` để đặt marker lên phần tử đang rê.",
                    "4. Rê sang phần tử khác và nhấn `Shift + Z` lần nữa để đánh dấu thêm.",
                    "5. Nhấn `Esc` để thoát chế độ Element khi xong."
                ]
            },
            shapeSection("chế độ Element"),
            undoSection("Ctrl + Shift + Z", "Ctrl + Shift + Alt + Z", "xoá mọi marker phần tử cùng lúc"),
            SAVE_SECTION,
            {
                heading: "Mẹo",
                lines: [
                    "- Viền xanh dương luôn cho thấy hộp thật của phần tử, nên bạn biết chính xác cái gì được đánh dấu dù hình đã lệch lề hay đổi dạng.",
                    "- Mọi thứ điều khiển bằng bàn phím, hai tay bạn không cần rời phím."
                ]
            }
        ],
        shortcutDescs: ["bật / tắt chế độ Element", "đặt hoặc bỏ marker trên phần tử đang rê", "bấm để xoá marker phần tử", "xoá mọi marker phần tử", "thoát chế độ"]
    },
    "free-draw": {
        title  : "Vẽ tự do",
        summary: "Vẽ một marker chữ nhật ở bất kỳ đâu trên trang, không phụ thuộc phần tử nào. Kéo thả tự do, hoặc bấm hai góc đối diện để chính xác hơn.",
        before : BEFORE_COMMON,
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Nhấn `Alt + X` để bật chế độ Free Draw.",
                    "2. Bấm và kéo trên trang để vẽ một hình chữ nhật, thả chuột để đặt marker.",
                    "3. Tuỳ chọn: nhấn `Shift + X` để chuyển sang chế độ hai lần bấm - bấm một góc, rồi bấm góc đối diện.",
                    "4. Lặp lại để vẽ thêm marker.",
                    "5. Nhấn `Esc` để thoát khi xong."
                ]
            },
            shapeSection("Free draw"),
            undoSection("Ctrl + Shift + X", "Ctrl + Shift + Alt + X", "xoá mọi marker vẽ tự do cùng lúc"),
            SAVE_SECTION,
            {
                heading: "Mẹo",
                lines: [
                    "- Trong lúc kéo, viền xanh dương cho thấy hộp thô tính từ điểm bắt đầu, giúp bạn đặt thật chính xác.",
                    "- Chế độ hai lần bấm tiện khi khó kéo một mạch (ví dụ qua vùng nội dung đang cuộn)."
                ]
            }
        ],
        shortcutDescs: ["bật chế độ Free Draw (kéo để vẽ)", "chuyển sang chế độ bấm hai góc", "bấm để xoá marker vẽ tự do", "xoá mọi marker vẽ tự do", "thoát chế độ"]
    },
    "element-merge": {
        title  : "Ghép phần tử",
        summary: "Đánh dấu chính xác một vùng chữ nhật xác định bởi hai phần tử. Hộp trải từ góc trên trái của phần tử thứ nhất tới góc dưới phải của phần tử thứ hai - lý tưởng để đánh dấu cả một khu vực gồm nhiều phần tử.",
        before : BEFORE_COMMON,
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Nhấn `Alt + Q` để bật chế độ Merge.",
                    "2. Bấm phần tử thứ nhất. Smart Mark ghi lại góc trên trái của nó và bắt đầu một hộp động.",
                    "3. Rê sang phần tử thứ hai. Viền cam cho thấy khoảng sẽ được đánh dấu.",
                    "4. Bấm phần tử thứ hai. Marker giờ phủ vùng từ góc trên trái của phần tử một tới góc dưới phải của phần tử hai.",
                    "5. Nhấn `Esc` để thoát khi xong."
                ]
            },
            {
                heading: "Điều chỉnh (tuỳ chọn)",
                lines: [
                    "- Mở trang Options để đặt màu cho Merge.",
                    "- `Alt + =` / `Alt + -` nới hoặc thu hộp 5 px."
                ]
            },
            undoSection("Ctrl + Shift + D", "Ctrl + Shift + Alt + D", "xoá mọi marker trên trang"),
            SAVE_SECTION,
            {
                heading: "Mẹo",
                lines: [
                    "- Dùng khi hộp của một phần tử quá nhỏ - chọn phần tử đầu và phần tử cuối để bao trọn cả vùng.",
                    "- Viền cam ở lần bấm thứ hai cho thấy đúng khoảng trước khi bạn chốt."
                ]
            }
        ],
        shortcutDescs: ["bật chế độ Merge, rồi bấm hai phần tử", "bấm để xoá bất kỳ marker nào", "xoá mọi marker trên trang", "thoát chế độ"]
    },
    "shape-and-fit": {
        title  : "Hình dạng và cách ôm",
        summary: "Đổi hình dạng marker (Chữ nhật, Oval, Thoi) và độ ôm sát mục tiêu ngay bằng bàn phím. Thay đổi áp dụng cho các marker bạn vẽ tiếp theo, ở mọi chế độ đánh dấu.",
        before : ["Cài Smart Mark và ghim biểu tượng của nó.", "Đang ở một chế độ đánh dấu bất kỳ (Element, Free Draw hoặc Merge)."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Nhấn `Alt + O` để xoay vòng hình dạng: Chữ nhật, Oval, Thoi.",
                    "2. Nhấn `Alt + W` để xoay vòng cách ôm: Inscribe (nằm trong hộp), Median (ở giữa), Circumscribe (bao quanh hộp).",
                    "3. Nhấn `Alt + =` hoặc `Alt + -` để nới hoặc thu hộp 5 px; giữ thêm `Ctrl` để đi từng 1 px.",
                    "4. Vẽ một marker - nó dùng hình dạng, cách ôm và lề hiện tại.",
                    "5. Bạn cũng có thể đặt các giá trị này làm mặc định trong trang Options (kể cả bo góc)."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Một toast hiện hình dạng và cách ôm hiện tại mỗi lần bạn nhấn phím, nên bạn luôn biết thiết lập đang dùng.",
                    "- Oval và Thoi rất hợp để khoanh hoặc chỉ vào mục tiêu tròn hay không đều."
                ]
            }
        ],
        shortcutDescs: ["xoay vòng hình dạng: Chữ nhật, Oval, Thoi", "xoay vòng cách ôm: Inscribe, Median, Circumscribe", "lề +5 px (thô)", "lề -5 px (thô)", "lề +1 px (tinh)", "lề -1 px (tinh)"]
    },
    "save-and-load": {
        title  : "Lưu và nạp bố cục",
        summary: "Lưu các marker trên một trang vào một ô có số, rồi khôi phục bất cứ lúc nào - tối đa 10 ô cho mỗi trang. Rất hợp cho checklist review dùng lại hoặc khi quay lại trang sau.",
        before : ["Đặt vài marker lên trang trước."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Nhấn `Ctrl + Shift + Alt + 0-9` để lưu các marker hiện tại vào ô 0 tới 9.",
                    "2. Tải lại trang hoặc quay lại sau.",
                    "3. Nhấn `Alt + 0-9` để nạp lại marker từ ô đó (thay thế các marker hiện có).",
                    "4. Popup tô sáng những ô đang có dữ liệu."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Phím số trên bàn phím số (numpad) cũng dùng được cho phím tắt ô lưu.",
                    "- Bố cục được lưu ngay trên máy bạn (chrome.storage.local) và không bao giờ gửi đi đâu."
                ]
            }
        ],
        shortcutDescs: ["lưu marker hiện tại vào ô N", "nạp marker từ ô N (thay thế hiện tại)"]
    },
    "history": {
        title  : "Hoàn tác và làm lại",
        summary: "Lùi và tiến qua từng thao tác đánh dấu, nên một lần lỡ tay chỉ cách một phím bấm.",
        before : ["Đặt hoặc xoá vài marker trước."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Nhấn `Ctrl + Z` để hoàn tác thao tác marker vừa rồi.",
                    "2. Nhấn `Ctrl + Y` để làm lại.",
                    "3. Hoàn tác và làm lại áp dụng cho cả việc tạo và xoá marker."
                ]
            }
        ],
        shortcutDescs: ["hoàn tác thao tác marker vừa rồi", "làm lại thao tác vừa hoàn tác"]
    },
    "cleanup": {
        title  : "Xoá marker",
        summary: "Xoá một marker bằng cách bấm vào nó, hoặc dọn cả trang một lần - dùng được ở mọi chế độ đánh dấu.",
        before : ["Có vài marker trên trang."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Nhấn `Ctrl + Shift + D`, rồi bấm vào bất kỳ marker nào để xoá riêng nó.",
                    "2. Nhấn `Ctrl + Shift + Alt + D` để xoá mọi marker trên trang cùng lúc.",
                    "3. Nhấn `Esc` để rời chế độ xoá."
                ]
            }
        ],
        shortcutDescs: ["bấm để xoá một marker bất kỳ", "xoá mọi marker trên trang", "thoát chế độ xoá"]
    },
    "colors": {
        title  : "Màu marker",
        summary: "Cho mỗi chế độ đánh dấu một màu riêng, để marker phần tử, marker vẽ tự do và marker ghép dễ phân biệt chỉ bằng một cái nhìn.",
        before : ["Mở trang Options (`Ctrl + Alt + ,`)."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Mở trang Options và mở rộng mục Colors.",
                    "2. Chọn màu cho từng chế độ: Marker, Element, Free draw, Merge, Clear/Delete, Overlay.",
                    "3. Thay đổi áp dụng ngay - bản xem trước, viền và marker tương ứng đều đổi sang màu đã chọn.",
                    "4. Dùng Reset colors để quay về màu mặc định."
                ]
            }
        ],
        shortcutDescs: ["mở trang Options, nơi có phần màu"]
    },
    "notifications": {
        title  : "Toast báo chế độ",
        summary: "Một thẻ nhỏ nổi trên trang xác nhận mỗi lần đổi chế độ và mỗi lần nhấn phím tắt, nên bạn luôn biết cái gì đang bật. Có thể tắt nó hoặc ẩn tổ hợp phím.",
        before : ["Đã cài Smart Mark."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Bật một chế độ bất kỳ - toast hiện ở cuối trang.",
                    "2. Nhấn `Alt + T` để bật hoặc tắt toast.",
                    "3. Nhấn `Shift + Alt + T` để bật hoặc tắt việc toast hiện tổ hợp phím.",
                    "4. Các tuỳ chọn này cũng có trong mục Notifications của trang Options."
                ]
            }
        ],
        shortcutDescs: ["bật / tắt toast phím tắt", "bật / tắt hiện tổ hợp phím trên toast"]
    },
    "custom-shortcuts": {
        title  : "Phím tắt tuỳ chỉnh",
        summary: "Mọi phím tắt đều đổi được. Đặt tổ hợp phím hợp tay bạn ngay trong trang Options - không cần tải lại.",
        before : ["Mở trang Options (`Ctrl + Alt + ,`)."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Mở trang Options và mở rộng mục Keyboard Shortcuts.",
                    "2. Bấm Edit ở một dòng bất kỳ, rồi nhấn tổ hợp phím mới.",
                    "3. Smart Mark kiểm tra tổ hợp với các phím hệ thống được giữ riêng và các dòng khác, rồi lưu lại.",
                    "4. Dùng Reset all to defaults để bỏ mọi thay đổi cùng lúc."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Các tổ hợp được giữ riêng (như Esc) không đổi được.",
                    "- Danh sách phím tắt trong popup và Options luôn hiện tổ hợp bạn đang dùng."
                ]
            }
        ],
        shortcutDescs: ["mở popup", "mở trang Options"]
    },
    "settings": {
        title  : "Popup và Options",
        summary: "Mở popup gọn để chỉnh nhanh marker, hoặc trang Options đầy đủ cho mọi thứ - màu, hình dạng, ô lưu, thông báo và phím tắt - tất cả không rời bàn phím.",
        before : ["Đã cài và ghim Smart Mark."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Nhấn `Ctrl + ,` để mở popup (hoặc bấm biểu tượng trên thanh công cụ).",
                    "2. Trong popup: đặt hình dạng, cách ôm và lề; xem ô nào đã lưu; xem danh sách phím tắt đang dùng.",
                    "3. Nhấn `Ctrl + Alt + ,` để mở trang Options đầy đủ trong tab mới.",
                    "4. Trong Options: cấu hình marker kèm bo góc, sáu màu theo chế độ, ô lưu marker, công tắc thông báo và phím tắt đổi được.",
                    "5. Link ở chân popup cũng mở trang Options."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Nếu `Ctrl + ,` trùng với extension khác, đổi nó tại chrome://extensions/shortcuts.",
                    "- Mọi mục trong Options đều thu gọn được và nhớ trạng thái mở / đóng."
                ]
            }
        ],
        shortcutDescs: ["mở popup", "mở trang Options"]
    }
};
