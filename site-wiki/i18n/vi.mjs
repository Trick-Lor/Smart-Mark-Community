/**
 * @file ./site/i18n/vi.mjs
 * @description Vietnamese copy for the docs site, keyed by feature id. Read by .agents/scripts/gen-feature-guides.mjs and gen-landing.mjs; a missing field falls back to English and is printed as a gap, a toneless string aborts the run (lib/toneless-check.mjs). Full diacritics only. Product words stay in English like the extension's own vi locale: Smart Mark, marker, Element / Free draw / Merge, Image pick, Options, Oval, Inscribe / Median / Circumscribe, toast; Rectangle is "Chu nhat" and Diamond is "Thoi" there too.
 * @scope project
 * @updated-at 2026-11-22
 */

"use strict";

/** Site-level strings (hero text = tagline, hero tagline = description). */
export const SITE_VI = {
    tagline: "Đánh dấu và làm nổi bật mọi trang web bằng phím tắt.",
    description: "Smart Mark giúp bạn đánh dấu và làm nổi bật mọi phần tử hoặc vùng trên trang web bằng phím tắt: viền phần tử, vẽ vùng tự do và lưu bố cục. Trỏ bằng chuột, ra lệnh bằng phím: không thanh công cụ, không menu. Không thu thập dữ liệu; mọi thứ nằm trên máy bạn."
};

/** Fixed page labels used by the generators. */
export const LABELS_VI = {
    beforeYouStart : "Trước khi bắt đầu",
    shortcuts      : "Phím tắt dùng trong bài",
    keys           : "Phím",
    action         : "Tác dụng",
    videoSoon      : "Video sẽ có sớm.",
    sinceNote      : "Có từ Smart Mark {version}. Nếu bản bạn đang cài cũ hơn, tính năng này sẽ đến trong lần cập nhật kế tiếp trên Chrome Web Store.",
    rebindNote     : "Các tổ hợp phím trên là mặc định; bạn có thể đổi từng phím trong trang Options.",
    coreFeatures   : "Tính năng chính",
    smallerFeatures: "Tính năng nhỏ",
    addToChrome    : "Thêm vào Chrome",
    communityOnGithub: "Cộng đồng trên GitHub",
    readGuide      : "Đọc hướng dẫn",
    howToUse       : "Cách dùng",
    faq            : "Câu hỏi thường gặp",
    demoTitle      : "Video giới thiệu Smart Mark",
    guide          : "Hướng dẫn",
    about          : "Giới thiệu",
    aboutTitle     : "Giới thiệu Smart Mark",
    getStarted     : "Bắt đầu nhanh",
    startSteps     : [
        "Cài Smart Mark và ghim biểu tượng của nó lên thanh công cụ.",
        "Mở một trang web bình thường rồi bấm `Alt + Z` để bật chế độ phần tử.",
        "Rê chuột lên một phần tử và bấm `Shift + Z`: marker đầu tiên đã xong. Bấm `Esc` để thoát."
    ],
    allFeatures    : "Mỗi mục bên dưới tóm tắt một tính năng; bấm liên kết ở cuối mục để xem hướng dẫn đầy đủ.",
    fullGuide      : "Hướng dẫn đầy đủ",
    moreHeading    : "Tìm hiểu thêm",
    moreText       : "Câu hỏi thường gặp, quyền riêng tư và các liên kết nằm ở trang Giới thiệu.",
    privacyHeading : "Quyền riêng tư",
    privacyText    : "Smart Mark không có máy chủ, không analytics và không theo dõi. Thiết lập và bố cục đã lưu nằm trong bộ nhớ của chính Chrome; nếu bạn bật đồng bộ Chrome, chính Chrome sao chép thiết lập giữa các trình duyệt bạn đã đăng nhập.",
    linksHeading   : "Liên kết",
    linkGithub     : "Kho cộng đồng trên GitHub",
    linkIssues     : "Báo lỗi hoặc góp ý",
    linkPrivacy    : "Chính sách quyền riêng tư (tiếng Anh)",
    linkVideo      : "Video giới thiệu trên YouTube",
    themeLabel     : "Giao diện"
};

/** One { q, a } per FAQ entry, same order as FAQ in feature-demos.config.mjs. */
export const FAQ_VI = [
    { q: "Smart Mark có miễn phí không?", a: "Có. Smart Mark hoàn toàn miễn phí, không quảng cáo, không cần tài khoản." },
    { q: "Nó có thu thập dữ liệu của tôi không?", a: "Không. Thiết lập và bố cục marker được lưu trong bộ nhớ riêng của Chrome. Nếu bạn bật đồng bộ Chrome, chính Google Chrome sao chép chúng giữa các trình duyệt bạn đã đăng nhập; Smart Mark không có server, không gửi gì cho nhà phát triển hay bên thứ ba, và extension không chứa analytics hay theo dõi nào." },
    { q: "Nó chạy trên trình duyệt nào?", a: "Google Chrome (Manifest V3). Chạy trên mọi trang web bình thường, nhưng không chạy trên các trang nội bộ chrome:// hay Web Store." },
    { q: "Tôi có phải nhớ hết phím tắt không?", a: "Không. Popup liệt kê mọi phím tắt, một toast hiện chế độ đang bật trong lúc bạn làm việc, và bạn đổi được gần như mọi tổ hợp trong trang Options (phím mở popup đổi ở chrome://extensions/shortcuts, còn Esc thì giữ nguyên)." }
];

const BEFORE_COMMON = ["Cài Smart Mark và ghim biểu tượng của nó.", "Mở một trang web bình thường."];
const SAVE_SECTION = {
    heading: "Lưu lại",
    lines: [
        "- `Ctrl + Shift + Alt + 0-9` lưu các marker hiện tại vào ô 0-9.",
        "- `Alt + 0-9` nạp lại marker từ một ô."
    ]
};
const undoSection = (removeOneKeys, removeAllKeys, what, extraLines = []) => ({
    heading: "Hoàn tác và dọn dẹp",
    lines: [
        "- `Ctrl + Z` hoàn tác marker vừa đặt, `Ctrl + Y` làm lại.",
        `- \`${removeOneKeys}\`, rồi bấm vào một marker để xoá riêng nó.`,
        `- \`${removeAllKeys}\` ${what}.`,
        ...extraLines
    ]
});
const shapeSection = (colorTarget) => ({
    heading: "Chỉnh hình marker (tuỳ chọn)",
    lines: [
        "- `Alt + O` - đổi hình dạng: Chữ nhật, Oval hoặc Thoi.",
        "- `Alt + W` - đổi cách ôm: Inscribe, Median hoặc Circumscribe.",
        "- `Alt + =` / `Alt + -` - nới hoặc thu hộp 5 px.",
        "- `Alt + ]` / `Alt + [` - bo góc tròn hơn hoặc vuông hơn 1 px (Chữ nhật và Thoi).",
        `- Mở trang Options để đặt màu cho ${colorTarget}.`
    ]
});

/**
 * Per-feature copy: { title, summary, before[], sections[{ heading, lines[] }],
 * shortcutDescs[] } aligned to the English entry of the same id. Every feature
 * is translated; a field left out falls back to English and is reported.
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
            undoSection("Ctrl + Shift + Z", "Ctrl + Shift + Alt + Z", "xoá mọi marker phần tử cùng lúc", ["- Marker tạo bằng Ghép phần tử cũng tính là marker phần tử, nên hai phím này xoá cả chúng."]),
            SAVE_SECTION,
            {
                heading: "Mẹo",
                lines: [
                    "- Viền xanh dương cho thấy hộp thật của phần tử, nên bạn biết chính xác cái gì được đánh dấu dù marker đã nới lề hay đổi dạng. Viền tự ẩn khi bản xem trước xanh lá đã trùng đúng hộp đó (Chữ nhật, lề bằng 0).",
                    "- Banner cookie hay thanh header dính đang che? Giữ `Alt` rồi bấm vào nó để ẩn đi (xem Ẩn lớp).",
                    "- Marker nằm yên chỗ bạn đặt: cuộn trang hay trang thay đổi đều không làm nó dịch đi. Tải lại trang thì marker mất, trừ khi bạn đã lưu vào ô."
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
                    "- Trong lúc kéo, viền xanh dương cho thấy hộp thô tính từ điểm bắt đầu, giúp bạn đặt thật chính xác. Viền tự ẩn khi bản xem trước đã trùng đúng hộp đó (Chữ nhật, lề bằng 0).",
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
                    "- `Alt + O` đổi hình dạng, `Alt + W` đổi cách ôm, `Alt + =` / `Alt + -` nới hoặc thu hộp 5 px, `Alt + ]` / `Alt + [` bo góc (xem Hình dạng và cách ôm).",
                    "- Mở trang Options để đặt màu cho Merge."
                ]
            },
            undoSection("Ctrl + Shift + D", "Ctrl + Shift + Alt + D", "xoá mọi marker trên trang"),
            SAVE_SECTION,
            {
                heading: "Mẹo",
                lines: [
                    "- Dùng khi hộp của một phần tử quá nhỏ - chọn phần tử đầu và phần tử cuối để bao trọn cả vùng.",
                    "- Viền cam ở lần bấm thứ hai cho thấy đúng khoảng trước khi bạn chốt.",
                    "- Marker ghép tính là marker phần tử: `Ctrl + Shift + Z` và `Ctrl + Shift + Alt + Z` cũng xoá được nó."
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
                    "4. Nhấn `Alt + ]` hoặc `Alt + [` để bo góc tròn hơn hoặc vuông hơn 1 px (chỉ Chữ nhật và Thoi).",
                    "5. Vẽ một marker - nó dùng hình dạng, cách ôm, lề và bo góc hiện tại.",
                    "6. Options > Marker Configuration có các giá trị này, thêm Base offset: số pixel cố định cộng vào mọi marker, ngoài phần lề."
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
        shortcutDescs: ["xoay vòng hình dạng: Chữ nhật, Oval, Thoi", "xoay vòng cách ôm: Inscribe, Median, Circumscribe", "lề +5 px (thô)", "lề -5 px (thô)", "lề +1 px (tinh)", "lề -1 px (tinh)", "bo góc +1 px", "bo góc -1 px"]
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
                heading: "Quản lý ô lưu",
                lines: [
                    "- Options > Marker Slots: dấu x trên một ô xoá ô đó; Delete all slots xoá mọi ô sau khi bạn xác nhận.",
                    "- Confirm overwrite: khi bật, lưu vào ô đã có marker phải nhấn lần hai trong vòng 3 giây; lần nhấn đầu chỉ hiện toast.",
                    "- Slots shown (1-10) đặt số ô hiện trong popup và Options. Ô bị ẩn vẫn giữ phím tắt và dữ liệu."
                ]
            },
            {
                heading: "Khi nào marker mất",
                lines: [
                    "- Marker chưa lưu sẽ mất khi bạn tải lại trang hoặc rời trang. Hãy lưu vào ô trước.",
                    "- Cuộn trang hay trang thay đổi không làm marker dịch đi hay mất; chỉ Clear, hoàn tác hoặc tải lại mới xoá nó.",
                    "- Một ô nạp được trên mọi trang. Nếu ô được lưu ở trang khác, một toast cho biết trang đó."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Phím số trên bàn phím số (numpad) cũng dùng được cho phím tắt ô lưu.",
                    "- Ô lưu nằm trong bộ nhớ riêng của Chrome. Nếu bật đồng bộ Chrome, chính Chrome chép chúng sang các trình duyệt bạn đã đăng nhập; Smart Mark tự nó không gửi đi đâu."
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
                    "3. Hoàn tác và làm lại áp dụng cho việc tạo và xoá marker, nạp một ô lưu và ẩn một lớp."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Khi không còn gì để hoàn tác, `Ctrl + Z` về lại trang như bình thường (ví dụ để hoàn tác chữ bạn gõ).",
                    "- Số bước hoàn tác (10-500) nằm trong Options > Marker Configuration."
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
                    "3. Nhấn `Ctrl + Shift + D` lần nữa, hoặc `Esc`, để rời chế độ xoá. Các marker bạn không bấm vẫn còn."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Mỗi chế độ đánh dấu còn có phím xoá riêng: xem Đánh dấu phần tử và Vẽ tự do.",
                    "- Xoá marker không làm hiện lại các lớp bạn đã ẩn; dùng `Ctrl + Shift + Alt + A` cho việc đó (xem Ẩn lớp)."
                ]
            }
        ],
        shortcutDescs: ["bấm để xoá một marker bất kỳ", "xoá mọi marker trên trang", "thoát chế độ xoá"]
    },
    "hide-layer": {
        title  : "Ẩn lớp",
        summary: "Banner cookie, thanh header dính hay một popup đang che chỗ bạn muốn đánh dấu? Ẩn nó bằng một cú bấm, đánh dấu phần bên dưới, rồi cho nó hiện lại khi xong. Không có gì trên trang bị xoá.",
        before : ["Đã cài Smart Mark.", "Một trang có thứ gì đó che phần bạn muốn đánh dấu."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Nhấn `Alt + A` để bật chế độ ẩn. Phần tử dưới con trỏ có một khung đỏ với dấu X lớn.",
                    "2. Bấm để ẩn nó. Một toast cho biết đang ẩn bao nhiêu lớp, và con số đó cũng hiện trên biểu tượng thanh công cụ.",
                    "3. Đánh dấu phần bên dưới bằng chế độ đánh dấu bất kỳ.",
                    "4. Nhấn `Alt + A` lần nữa hoặc `Esc` để rời chế độ ẩn. Các lớp đã ẩn vẫn ẩn.",
                    "5. `Ctrl + Z` hoàn tác một lần ẩn như mọi bước marker khác, `Ctrl + Y` làm lại. `Ctrl + Shift + Alt + A` cho mọi lớp đã ẩn hiện lại cùng lúc."
                ]
            },
            {
                heading: "Ẩn ngay khi đang đánh dấu",
                lines: [
                    "- Trong chế độ Element (`Alt + Z`) hoặc Merge (`Alt + Q`), giữ `Alt`: sau một chút, bản xem trước chuyển sang đỏ. `Alt` + bấm là ẩn; bấm thường vẫn đánh dấu như cũ.",
                    "- Chọn nhầm phần tử? Vẫn giữ phím và lăn chuột lên để chuyển sang phần tử cha, lăn xuống để quay lại. Trang không cuộn trong lúc đó."
                ]
            },
            {
                heading: "Thiết lập",
                lines: [
                    "- Options > Marker Configuration > Hide layer: Hide from pick modes (bật / tắt), Hide modifier (Alt, Shift hoặc Ctrl), Climb to parent (Mouse wheel, Arrow up / down, Plus / minus hoặc Custom shortcuts) và Hide preview delay (mặc định 300 ms).",
                    "- Options > Notifications: Hide toast và Hidden count badge. Options > Colors & Style: màu Hide preview."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Phần tử vẫn nằm trong trang và giữ chỗ của nó, nên bố cục và marker của bạn không dịch đi.",
                    "- Lớp đã ẩn vẫn ẩn khi đánh dấu theo ảnh (`Alt + I`) và khi chụp ảnh trang.",
                    "- Xoá marker không làm lớp đã ẩn hiện lại. Tải lại trang thì mọi thứ hiện lại."
                ]
            }
        ],
        shortcutDescs: ["bật / tắt chế độ ẩn, rồi bấm vào một lớp để ẩn nó", "cho mọi lớp đã ẩn hiện lại (một bước hoàn tác)", "hoàn tác bước vừa rồi, kể cả một lần ẩn", "rời chế độ ẩn"]
    },
    "mark-text": {
        title  : "Đánh dấu chữ đã bôi đen",
        summary: "Bôi đen một đoạn chữ, chuột phải, rồi đánh dấu đúng đoạn đó: thành một khung bao quanh, hoặc tô một dải màu lên từng dòng như bút dạ quang.",
        before : ["Đã cài Smart Mark.", "Một trang có đoạn chữ bạn muốn chỉ ra."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Bôi đen đoạn chữ bằng chuột.",
                    "2. Chuột phải lên đó và mở mục Smart Mark.",
                    "3. Chọn Đánh dấu chữ: khung bao (một marker quanh đoạn chữ) hoặc Đánh dấu chữ: tô từng dòng (mỗi dòng một dải màu).",
                    "4. Đoạn chữ được đánh dấu, vùng bôi đen tự bỏ, và một toast xác nhận."
                ]
            },
            {
                heading: "Dùng phím tắt",
                lines: [
                    "- Đánh dấu chữ đã bôi đen lúc đầu chưa có phím. Gán phím trong Options > Keyboard Shortcuts, ví dụ `Alt + S`.",
                    "- Phím tắt dùng kiểu mặc định: Options > Marker Configuration > Chữ đã bôi đen > Kiểu đánh dấu chữ mặc định (Khung bao hoặc Tô từng dòng).",
                    "- Khi đã gán, mục chuột phải của kiểu mặc định hiện luôn phím đó, ví dụ Đánh dấu chữ: khung bao (Alt+S)."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Một lần tô là một marker dù dài bao nhiêu dòng: một lần `Ctrl + Z` là mất cả đoạn, và ô lưu lưu nguyên đoạn.",
                    "- Kiểu khung bao dùng hình dạng, cách ôm, lề và màu Marker hiện tại. Kiểu tô dùng màu Tô chữ (Options > Colors & Style), mặc định vàng.",
                    "- Chữ trong ô nhập hay vùng văn bản không đánh dấu được; hãy bôi đen chữ trên chính trang."
                ]
            }
        ],
        shortcutDescs: ["hoàn tác lần đánh dấu vừa rồi, kể cả cả một đoạn tô", "mở trang Options để gán phím"]
    },
    "colors": {
        title  : "Màu marker",
        summary: "Cho mỗi chế độ đánh dấu một màu riêng, để marker phần tử, marker vẽ tự do và marker ghép dễ phân biệt chỉ bằng một cái nhìn.",
        before : ["Mở trang Options (`Ctrl + Alt + ,`)."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Mở trang Options và mở rộng mục Colors & Style.",
                    "2. Chọn màu cho từng chế độ: Marker, Element mode, Free draw, Merge, Clear / Delete, Image pick và Hide preview.",
                    "3. Locating outline có màu riêng: Outline (hộp trên phần tử thật khi bạn chọn) và Merge span outline, kèm Outline width.",
                    "4. Overlay đặt màu lớp phủ tối trên trang trong lúc Free Draw và Merge.",
                    "5. Thay đổi áp dụng ngay - bản xem trước, viền và marker tương ứng đều đổi sang màu đã chọn.",
                    "6. Color format quyết định mọi ô màu hiện và nhận giá trị thế nào: chữ HEX, hoặc số RGB / HSL.",
                    "7. Reset colors & style đưa màu và kiểu về giá trị của profile đang chọn."
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
                    "3. Options > Notifications: bật hoặc tắt toast và dòng tổ hợp phím trong toast, đặt Toast duration (0,5-5 giây), Toast fade và Toast position (dưới hoặc trên)."
                ]
            },
            {
                heading: "Các thông báo khác",
                lines: [
                    "- Desktop notifications: thông báo hệ thống khi Smart Mark bắt đầu nạp trên một trang và khi đã sẵn sàng. Mặc định bật; tắt trong Options > Notifications.",
                    "- Hide toast và Hidden count badge: số lớp đã ẩn hiện sau mỗi lần ẩn, và con số trên biểu tượng thanh công cụ (xem Ẩn lớp)."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Toggle combo display và Toggle desktop notifications không có phím mặc định. Gán phím cho chúng trong Options > Keyboard Shortcuts nếu bạn hay bật tắt."
                ]
            }
        ],
        shortcutDescs: ["bật / tắt toast phím tắt"]
    },
    "custom-shortcuts": {
        title  : "Phím tắt tuỳ chỉnh",
        summary: "Đặt tổ hợp phím hợp tay bạn ngay trong trang Options - không cần tải lại. Gần như mọi phím tắt đều đổi được, và phím nào cũng tắt riêng được.",
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
                    "- `Esc` không đổi được. Phím mở popup `Ctrl + ,` thuộc về Chrome: đổi nó tại chrome://extensions/shortcuts.",
                    "- Vài hành động không có phím mặc định (ví dụ Toggle combo display); bấm Edit để gán phím.",
                    "- Bỏ chọn ô ở đầu một dòng để tắt riêng phím tắt đó; tổ hợp phím vẫn được giữ và hiện bị gạch ngang.",
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
                    "4. Trong Options: Marker Configuration, Colors & Style, Marker Slots (xoá một ô hoặc tất cả), Image Detection, Site access, Notifications, Keyboard Shortcuts, Appearance, Profiles và Diagnostics.",
                    "5. Chân popup có Disable on this site, link tới trang Options, và Help để mở trang hướng dẫn này."
                ]
            },
            {
                heading: "Trang Options",
                lines: [
                    "- Khung xem trước vẽ lại sau mỗi thay đổi, và chỉ vào phần một dòng thay đổi khi bạn rê chuột lên dòng đó.",
                    "- Trên màn hình rộng, trang chia ba cột: mục lục, các thiết lập và khung xem trước."
                ]
            },
            {
                heading: "Báo lỗi",
                lines: [
                    "1. Mở Options, mở mục Diagnostics, bật Ghi sự kiện.",
                    "2. Làm lại thao tác bị lỗi.",
                    "3. Quay lại mục Diagnostics, bấm Chép báo cáo rồi dán vào nội dung báo lỗi.",
                    "4. Xong thì tắt Ghi sự kiện; tắt cũng là xoá sạch phần đã ghi.",
                    "- Báo cáo nằm trên máy bạn: chỉ gồm việc Smart Mark đã làm, kèm phiên bản extension và chuỗi trình duyệt. Không gửi đi đâu."
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
    },
    "image-marking": {
        title  : "Đánh dấu theo ảnh",
        summary: "Khi cả trang là một ảnh lớn, một video, một SVG hay một ảnh chụp màn hình thì không có phần tử nào để rê chuột. Đánh dấu theo ảnh quét trang, tìm các khối nhìn thấy được và cho bạn chọn bằng cú bấm hoặc bằng một phím.",
        before : BEFORE_COMMON,
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Nhấn `Alt + I`. Với cách chụp Screenshot, một toast hiện Capturing page 1/N trong lúc Smart Mark cuộn qua trang dài; sau đó trang mờ đi và một vạch quét chạy qua màn hình trong lúc phân tích.",
                    "2. Mỗi khối tìm được có một khung tím kèm nhãn, và một toast báo tìm được bao nhiêu khối. No blocks found hoặc Page analysis failed nghĩa là không có gì để chọn; thử đổi thiết lập nhận diện.",
                    "3. Bấm vào một khối, hoặc bấm phím nhãn của nó, để đặt marker lên khối đó. Chọn bao nhiêu khối cũng được.",
                    "4. Nhấn `Esc` để thoát chế độ. Các khung nhãn biến mất, marker của bạn vẫn còn."
                ]
            },
            {
                heading: "Chọn bằng phím",
                lines: [
                    "- Các khối đang thấy trên màn hình được gắn nhãn theo thứ tự đọc (trên xuống, rồi trái sang phải) và gắn lại khi bạn cuộn.",
                    "- Mặc định chín khối đầu mang nhãn `1`-`9`, các khối sau mang chữ `A`-`Z` (bỏ qua I và O). Bấm một phím là chọn ngay.",
                    "- Thích dùng số? Đặt Label style thành Numbers trong trang Options. Khi đó, nếu có hơn 9 khối trên màn hình, gõ nhanh hai chữ số: `1` rồi `5` chọn khối 15; gõ riêng `0` chọn khối 10."
                ]
            },
            {
                heading: "Tinh chỉnh việc nhận diện",
                lines: [
                    "- Mở trang Options và mở rộng mục Image Detection.",
                    "- Các thanh trượt Detail, Denoise, Color sensitivity (1-5) và Min block size quyết định thế nào thì tính là một khối. Advanced parameters hiện các giá trị gốc; Reset detection trả tất cả về như cũ.",
                    "- Capture method: Screenshot (mặc định, chính xác từng điểm ảnh) hoặc Render (không cuộn trang).",
                    "- Detection animation, Scan speed, Reveal animation (khối hiện dần theo vạch quét, hoặc hiện hết một lần lúc xong), Badge size, Hotkey labels và Label style đổi cách hiển thị lúc quét và cách bạn chọn khối.",
                    "- Thử thiết lập trên ảnh của chính bạn: trong khung xem trước, dùng Load image, hoặc thả hay dán một ảnh chụp màn hình."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Marker tạo ở đây là marker bình thường: hoàn tác, làm lại, ô lưu và xoá tất cả đều dùng được.",
                    "- Lớp bạn đã ẩn vẫn ẩn khi quét, nên hãy ẩn banner trước nếu nó che chỗ bạn cần (xem Ẩn lớp).",
                    "- Việc phân tích chạy ngay trong trình duyệt của bạn. Ảnh của trang không bao giờ được tải lên đâu cả."
                ]
            }
        ],
        shortcutDescs: ["quét trang và hiện các khối có số (nhấn lần nữa để thoát)", "thoát chế độ và xoá các khung số"]
    },
    "themes": {
        title  : "Theme giao diện",
        summary: "Đổi diện mạo của popup và trang Options. Có sẵn sáu theme, cả sáng lẫn tối. Marker trên trang web thì giống nhau ở mọi theme.",
        before : ["Mở trang Options (`Ctrl + Alt + ,`)."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Mở trang Options và mở rộng mục Appearance.",
                    "2. Chọn một UI Theme: Hand Drawn (mặc định), Hand Drawn Dark, AI Vibe, AI Vibe Dark, Neon hoặc VS Code.",
                    "3. Popup và mọi tab Options đang mở đổi ngay lập tức - không cần tải lại."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Theme chỉ đổi giao diện các trang của riêng Smart Mark. Marker, toast và lớp phủ trên trang web không bị ảnh hưởng.",
                    "- Theme được lưu cùng các thiết lập khác, nên profile cũng nhớ nó."
                ]
            }
        ],
        shortcutDescs: ["mở trang Options, nơi có ô chọn theme"]
    },
    "settings-search": {
        title  : "Tìm kiếm thiết lập",
        summary: "Tìm bất kỳ thiết lập, mục hay phím tắt nào bằng cách gõ một từ hoặc một tổ hợp phím. Dùng được ở cả popup lẫn trang Options, và nó chỉ lọc rồi nhảy tới - không bao giờ tự chạy một hành động.",
        before : ["Mở popup (`Ctrl + ,`) hoặc trang Options (`Ctrl + Alt + ,`)."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Ô tìm kiếm nằm ngay dưới phần đầu trang. Ở trang Options, nhấn `/` để nhảy vào ô đó.",
                    "2. Gõ một từ như `color` hoặc `toast`. Mục không khớp sẽ ẩn đi; mục khớp tự mở kèm số kết quả và phần chữ khớp được tô sáng.",
                    "3. Gõ một tổ hợp phím như `alt+i` (hoặc `alt i`) để tìm phím tắt đang gắn với các phím đó. Sau khi bạn đổi phím tắt, tìm kiếm sẽ thấy phím mới.",
                    "4. Nhấn `Esc` hoặc nút x để xoá. Mọi mục trở về trạng thái mở hoặc đóng như trước đó."
                ]
            },
            {
                heading: "Trong popup",
                lines: [
                    "- Kết quả chỉ có ở trang Options được liệt kê dưới nhóm In Options.",
                    "- Bấm vào một kết quả để mở trang Options, cuộn tới đúng thiết lập đó và thiết lập nhấp nháy."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Từ tiếng Việt khớp được dù bạn gõ có dấu hay không dấu."
                ]
            }
        ],
        shortcutDescs: ["mở popup", "mở trang Options"]
    },
    "profiles": {
        title  : "Profile và preset",
        summary: "Lưu toàn bộ thiết lập của bạn - mọi tuỳ chọn, các ô lưu marker và các preset - thành một profile có tên. Chuyển qua lại giữa các profile, áp một preset như Highlighter, mang thiết lập sang máy khác bằng một file, và hoàn tác thay đổi bạn không ưng.",
        before : ["Mở trang Options (`Ctrl + Alt + ,`)."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Mở trang Options và mở rộng mục Profiles. Lần đầu, Smart Mark tạo Default profile từ thiết lập hiện tại của bạn.",
                    "2. Đổi bất kỳ thiết lập nào. Thanh profile hiện modified (N), và See changes liệt kê những gì khác đi. Chưa có gì được ghi vào profile cho tới khi bạn lưu.",
                    "3. Save ghi đè profile đang chọn, trước đó hiện danh sách trước / sau để bạn bỏ bớt thay đổi nào tuỳ ý. Save as lưu thành profile mới với tên mới.",
                    "4. Chọn profile khác để chuyển. Nếu còn thay đổi chưa lưu, bạn được hỏi Save first, Discard hay Cancel, và thấy danh sách thay đổi trước khi áp dụng.",
                    "5. Rename, Duplicate và Delete áp lên profile đang chọn. Xoá profile thì xoá luôn các preset trong nó."
                ]
            },
            {
                heading: "Preset",
                lines: [
                    "- Một preset chỉ đổi vài thiết lập. Smart Mark có sẵn năm cái: Defaults, Highlighter (nền vàng 35% với nét mảnh), Bug report, High contrast và Subtle.",
                    "- Rê chuột lên một dòng preset để xem thử trong khung xem trước; Apply hiện danh sách thay đổi trước khi áp.",
                    "- Copy to... chép một preset sang profile khác.",
                    "- Restore default presets khôi phục preset có sẵn mà bạn đã xoá."
                ]
            },
            {
                heading: "Xuất và nhập",
                lines: [
                    "- Export tải profile về thành file JSON. Export with comments (.jsonc) ghi file có chú thích; Export all tải mỗi profile một file.",
                    "- Include marker slots quyết định các ô lưu marker có đi kèm profile hay không.",
                    "- Import đọc file profile hoặc file preset. File trùng tên sẽ ghi đè cái đang có sau khi bạn xác nhận danh sách thay đổi.",
                    "- Thiết lập lạ và giá trị ngoài khoảng cho phép bị bỏ qua kèm cảnh báo; phần còn lại của file vẫn được nạp."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Undo đảo lại thay đổi hàng loạt gần nhất (áp preset, chuyển profile, nhập file hoặc reset). Nó giữ một mức, nên nhấn lần nữa là làm lại thay đổi đó.",
                    "- Các nút Reset đưa về giá trị của profile đang chọn, không phải mặc định gốc."
                ]
            }
        ],
        shortcutDescs: ["mở trang Options, nơi có mục Profiles"]
    },
    "screenshot-export": {
        title  : "Chụp màn hình kèm marker",
        summary: "Tải về một ảnh PNG của trang có vẽ sẵn các marker của bạn - sẵn sàng để dán vào báo cáo lỗi, tài liệu hay khung chat.",
        before : ["Đã cài Smart Mark.", "Một trang có ít nhất một marker."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Đánh dấu những gì bạn muốn chỉ ra.",
                    "2. Nhấn `Ctrl + Shift + Alt + S`.",
                    "3. Smart Mark dựng ảnh trang cùng các marker và tải về file `smart-mark-<site>-<date>.png`.",
                    "4. Một toast xác nhận đã tải, hoặc báo cho bạn khi không dựng được ảnh trang."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Toast và các khung số của chế độ đánh dấu theo ảnh không xuất hiện trong ảnh.",
                    "- Lớp bạn đã ẩn vẫn ẩn trong ảnh (xem Ẩn lớp).",
                    "- Ảnh được tạo ngay trong trình duyệt của bạn. Không có gì được tải lên."
                ]
            }
        ],
        shortcutDescs: ["tải về ảnh PNG của trang kèm các marker"]
    },
    "marker-style": {
        title  : "Kiểu marker",
        summary: "Quyết định marker trông ra sao và hoạt động thế nào: độ dày nét, nét liền, nét đứt hay nét chấm, độ đậm của nền, lớp phủ tối đến mức nào, toast hiện bao lâu và hoàn tác nhớ bao nhiêu bước. Mọi thay đổi áp dụng ngay.",
        before : ["Mở trang Options (`Ctrl + Alt + ,`)."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Mở trang Options và mở rộng mục Colors & Style. Khung xem trước vẽ lại sau mỗi thay đổi.",
                    "2. Marker: độ dày nét (1-10 px), kiểu nét (solid, dashed, dotted) và độ đậm nền (0% giữ kiểu chỉ có viền như cũ).",
                    "3. Preview: độ dày và nền của đường viền bạn thấy khi rê chuột hoặc khi vẽ, cùng độ tối (0-60%) và độ nhoè của trang phía sau lớp phủ trong lúc Free Draw và Merge.",
                    "4. Per-mode previews: cho Element, Free draw, Merge và Clear độ dày và kiểu nét xem trước riêng thay vì dùng chung.",
                    "5. Thời gian hiện, thời gian mờ dần và vị trí của toast nằm trong mục Notifications; số bước hoàn tác (10-500) nằm trong mục Marker Configuration.",
                    "6. Reset colors & style đưa các giá trị này về profile đang chọn."
                ]
            },
            {
                heading: "Kiểu bút dạ quang",
                lines: [
                    "- Mở mục Profiles và áp preset Highlighter: nền vàng 35% với nét mảnh, giống bút dạ quang."
                ]
            },
            {
                heading: "Mẹo",
                lines: [
                    "- Rê chuột lên bất kỳ dòng tuỳ chọn nào: một ghi chú giải thích nó và khung xem trước chỉ vào phần nó thay đổi.",
                    "- Màu và kiểu kết hợp với nhau: ô chọn màu đặt sắc màu, các dòng kiểu đặt độ đậm."
                ]
            }
        ],
        shortcutDescs: ["mở trang Options, nơi có các dòng chỉnh kiểu"]
    },
    "site-control": {
        title  : "Khi gõ chữ và tắt theo site",
        summary: "Smart Mark không cản đường bạn: phím tắt tạm nghỉ khi bạn đang gõ chữ, một phím chỉ bị giữ lại khi thật sự có việc để làm, và bạn có thể tắt extension trên những site bạn chọn.",
        before : ["Đã cài Smart Mark."],
        sections: [
            {
                heading: "Khi bạn đang gõ chữ",
                lines: [
                    "- Khi con trỏ nằm trong ô nhập, vùng văn bản hay trình soạn thảo, mọi phím tắt của Smart Mark được nhường cho trang. `Ctrl + Z` hoàn tác chữ bạn gõ như bình thường.",
                    "- `Esc` vẫn thoát chế độ đánh dấu."
                ]
            },
            {
                heading: "Chỉ khi có việc để làm",
                lines: [
                    "- `Ctrl + Z` và `Ctrl + Y` chỉ bị giữ lại khi có lịch sử marker để hoàn tác hoặc làm lại.",
                    "- Các phím xoá tất cả chỉ bị giữ lại khi trang có marker tương ứng.",
                    "- Ngoài ra trang nhận phím như bình thường và không có toast nào hiện lên."
                ]
            },
            {
                heading: "Tắt Smart Mark trên một site",
                lines: [
                    "1. Mở popup và dùng Disable on this site ở chân popup, hoặc",
                    "2. mở trang Options, mở rộng mục Site access, gõ tên miền rồi nhấn Add. Xoá một site cũng ở danh sách đó.",
                    "3. Trên site có trong danh sách và các tên miền con của nó, mọi phím tắt đều tắt. Marker đã có trên trang vẫn hiển thị, và thay đổi áp dụng không cần tải lại."
                ]
            },
            {
                heading: "Tắt riêng một phím tắt",
                lines: [
                    "- Trong Options > Keyboard Shortcuts, bỏ chọn ô của một phím tắt để tắt riêng phím đó. Tổ hợp phím của nó vẫn được giữ để dùng sau và hiện bị gạch ngang."
                ]
            }
        ],
        shortcutDescs: ["mở popup (Disable on this site nằm ở chân popup)", "mở trang Options (mục Site access)"]
    },
    "diagnostics": {
        title  : "Chẩn đoán và báo lỗi",
        summary: "Smart Mark không ghi gì cho tới khi bạn cho phép. Khi có trục trặc, bật Chẩn đoán, làm lại lỗi một lần, rồi chép một báo cáo ngắn để dán vào phần báo lỗi - báo cáo không rời khỏi máy bạn.",
        before : ["Mở trang Options (`Ctrl + Alt + ,`) và mở mục Diagnostics."],
        sections: [
            {
                heading: "Từng bước",
                lines: [
                    "1. Tích `Ghi sự kiện`. Từ lúc này Smart Mark lưu hoạt động gần đây của chính nó trong trình duyệt này. Tích ngay sau khi gặp lỗi vẫn bắt được lần chạy đó, miễn là bạn chưa tải lại trang.",
                    "2. Quay lại trang web và làm lại thao tác bị lỗi một lần.",
                    "3. Trở về Options > Diagnostics rồi bấm `Chép báo cáo`. Báo cáo vào clipboard và hiện trong ô bên dưới, nên bạn vẫn bôi đen chép tay được nếu clipboard bị chặn.",
                    "4. Dán vào nội dung báo lỗi trên trang issue.",
                    "5. Xong thì bỏ tích `Ghi sự kiện`. Bỏ tích cũng là xoá sạch phần đã ghi; nút `Xoá` xoá mà không tắt."
                ]
            },
            {
                heading: "Trong báo cáo có gì",
                lines: [
                    "- Phần đầu: tên và phiên bản extension, chuỗi trình duyệt của bạn.",
                    "- Tối đa 200 dòng có mốc thời gian, là hoạt động của chính Smart Mark: đổi chế độ, các bước của một lần nhận diện, cảnh báo, lỗi kèm dòng stack đầu tiên, và cả lỗi không ai bắt trên trang.",
                    "- Không có nội dung trang, địa chỉ trang, phím bạn gõ, marker của bạn, hay thông tin về bạn."
                ]
            },
            {
                heading: "Tốn bao nhiêu",
                lines: [
                    "- Khi tắt thì không ghi gì vào bộ nhớ lưu trữ, và bản phát hành mặc định là tắt. Trang chỉ giữ 200 dòng gần nhất trong bộ nhớ tạm, tải lại là mất.",
                    "- Khi bật, phần ghi bị chặn trần: 200 dòng, mỗi dòng cắt còn 300 ký tự, tức dưới 70 KB trong bộ nhớ riêng của extension (Chrome cho 10 MB).",
                    "- Chỉ giữ 200 dòng mới nhất, dòng cũ tự rụng.",
                    "- Tắt, bấm Xoá, hoặc gỡ extension là mất sạch."
                ]
            },
            {
                heading: "Nó không đi đâu cả",
                lines: [
                    "- Không máy chủ, không analytics, không gửi lên mạng. Báo cáo chỉ đi khi chính bạn dán nó vào đâu đó.",
                    "- Lưu theo từng máy và không nằm trong đồng bộ Chrome, nên không lan sang trình duyệt khác của bạn.",
                    "- Cũng không nằm trong file profile hay preset, nên xuất profile không mang nó theo."
                ]
            }
        ],
        shortcutDescs: ["mở trang Options, nơi có mục Diagnostics"]
    }
};
