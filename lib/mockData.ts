import type { Vocabulary, Lesson } from "./types";
import { Level, WordType } from "./types";

/**
 * ===========================
 * LESSON MOCK DATA **********
 * ===========================
 */
export const lessons: Lesson[] = [
  {
    id: "1a2f4d91-7e3a-4d65-9f8e-1a8a8f9b0001",
    lessonNumber: 1,
    level: Level.N5,
    source: "Minna no Nihongo",
    grammar: [
      {
        id: "g-0001",
        pattern: "～です",
        structure: "N は N です",
        meaning: "là",
        explaination: "Dùng để khẳng định",
        notes: "Cấu trúc cơ bản nhất",
        examples: [
          {
            japanese: "わたしは学生です。",
            romaji: "Watashi wa gakusei desu.",
            vietnamese: "Tôi là sinh viên.",
            explanation: "Sử dụng です để khẳng định nghề nghiệp",
          },
          {
            japanese: "これは本です。",
            romaji: "Kore wa hon desu.",
            vietnamese: "Đây là quyển sách.",
            explanation: "Sử dụng です để xác định đồ vật",
          },
          {
            japanese: "田中さんは先生です。",
            romaji: "Tanaka-san wa sensei desu.",
            vietnamese: "Anh/Chị Tanaka là giáo viên.",
            explanation: "Giới thiệu nghề nghiệp của người khác",
          },
        ],
        level: Level.N5,
      },
      {
        id: "g-0002",
        pattern: "～ではありません",
        structure: "N は N ではありません",
        meaning: "không phải là",
        notes: "Dạng phủ định của です",
        examples: [],
        level: Level.N5,
      },
    ],
  },
  {
    id: "2b9a41ef-0e4c-45e8-8c62-8c2e4b9d0002",
    lessonNumber: 2,
    level: Level.N5,
    source: "Minna no Nihongo",
    grammar: [
      {
        id: "g-0003",
        pattern: "～か",
        structure: "N は N ですか",
        meaning: "câu hỏi yes/no",
        notes: "Dùng để hỏi",
        examples: [],
        level: Level.N5,
      },
    ],
  },
  {
    id: "3c82a89e-f5d4-41a2-8c34-bf83a1b70003",
    lessonNumber: 3,
    level: Level.N5,
    source: "Minna no Nihongo",
    grammar: [
      {
        id: "g-0004",
        pattern: "これ／それ／あれ",
        structure: "これ は N です",
        meaning: "đại từ chỉ vật",
        notes: "Phân biệt khoảng cách",
        examples: [],
        level: Level.N5,
      },
    ],
  },
  {
    id: "4d2f17be-6bb1-4c3a-9d4e-4a8d4e910004",
    lessonNumber: 4,
    level: Level.N5,
    source: "Minna no Nihongo",
    grammar: [
      {
        id: "g-0005",
        pattern: "～の",
        structure: "N の N",
        meaning: "sở hữu",
        notes: "Diễn tả quan hệ",
        examples: [],
        level: Level.N5,
      },
    ],
  },
  {
    id: "5e12b0df-87fd-4b5f-b2b3-79b0c1f20005",
    lessonNumber: 5,
    level: Level.N5,
    source: "Minna no Nihongo",
    grammar: [
      {
        id: "g-0006",
        pattern: "～ます",
        structure: "V-ます",
        meaning: "dạng lịch sự",
        notes: "Thì hiện tại / tương lai",
        examples: [],
        level: Level.N5,
      },
      {
        id: "g-0007",
        pattern: "～ません",
        structure: "V-ません",
        meaning: "phủ định",
        notes: "Phủ định của ～ます",
        examples: [],
        level: Level.N5,
      },
    ],
  },
  {
    id: "6f4b9c02-47d4-4c61-bc29-8bb0c8c60006",
    lessonNumber: 6,
    level: Level.N5,
    source: "Minna no Nihongo",
    grammar: [
      {
        id: "g-0008",
        pattern: "～を",
        structure: "N を V",
        meaning: "trợ từ tân ngữ",
        notes: "Chỉ đối tượng tác động",
        examples: [],
        level: Level.N5,
      },
    ],
  },
  {
    id: "7a1d8e3b-5d38-4c34-b87b-72b7b4d30007",
    lessonNumber: 7,
    level: Level.N5,
    source: "Minna no Nihongo",
    grammar: [
      {
        id: "g-0009",
        pattern: "～に／へ",
        structure: "N に／へ 行きます",
        meaning: "chỉ điểm đến",
        notes: "Dùng với động từ di chuyển",
        examples: [],
        level: Level.N5,
      },
    ],
  },
  {
    id: "8b23cf4a-cc34-49c9-9c2f-30dfbcdd0008",
    lessonNumber: 8,
    level: Level.N5,
    source: "Minna no Nihongo",
    grammar: [
      {
        id: "g-0010",
        pattern: "～で",
        structure: "N で V",
        meaning: "địa điểm xảy ra hành động",
        notes: "Không dùng cho tồn tại",
        examples: [],
        level: Level.N5,
      },
    ],
  },
  {
    id: "9c7a8b11-8c3f-4c01-a26b-1d73f9b90009",
    lessonNumber: 9,
    level: Level.N4,
    source: "Minna no Nihongo II",
    grammar: [
      {
        id: "g-0011",
        pattern: "～と思います",
        structure: "普通形 + と思います",
        meaning: "tôi nghĩ rằng",
        notes: "Diễn đạt ý kiến",
        examples: [],
        level: Level.N4,
      },
    ],
  },
  {
    id: "aa18d0e9-fce5-4b36-8c0f-2d1f77d50010",
    lessonNumber: 10,
    level: Level.N4,
    source: "Minna no Nihongo II",
    grammar: [
      {
        id: "g-0012",
        pattern: "～そうです",
        structure: "普通形 + そうです",
        meaning: "nghe nói là",
        notes: "Truyền đạt thông tin",
        examples: [],
        level: Level.N4,
      },
    ],
  },
];

/**
 * ===========================
 * VOCABULARY MOCK DATA ******
 * ===========================
 */
export const vocabularies: Vocabulary[] = [
  {
    id: "3f0e5b7a-1a3e-4c9a-9e32-0dbe6c7b1f01",
    word: "食べる",
    kanji: "食べる",
    romaji: "taberu",
    meaning: "ăn",
    wordType: WordType.VERB,
    level: Level.N5,
    examples: [
      {
        japanese: "ご飯を食べます。",
        romaji: "gohan o tabemasu.",
        vietnamese: "Tôi ăn cơm.",
        explanation: "Câu ví dụ sử dụng động từ 食べる ở dạng lịch sự.",
      },
    ],
  },
  {
    id: "b1a2e8c4-6c77-4f2b-9c65-2c71d5e7b902",
    word: "行く",
    kanji: "行く",
    romaji: "iku",
    meaning: "đi",
    wordType: WordType.VERB,
    level: Level.N5,
    examples: [
      {
        japanese: "学校へ行きます。",
        romaji: "gakkou e ikimasu.",
        vietnamese: "Tôi đi đến trường.",
        explanation: "Dùng 行く để diễn tả sự di chuyển đến một địa điểm.",
      },
    ],
  },
  {
    id: "c7d0e3a9-4f9c-41b1-b6a0-0a8e0e93b203",
    word: "見る",
    kanji: "見る",
    romaji: "miru",
    meaning: "xem, nhìn",
    wordType: WordType.VERB,
    level: Level.N5,
    examples: [
      {
        japanese: "テレビを見ます。",
        romaji: "terebi o mimasu.",
        vietnamese: "Tôi xem TV.",
        explanation: "見る được dùng cho hành động xem, nhìn.",
      },
    ],
  },
  {
    id: "e41d7a20-ecf3-4c92-9b0f-77c02cde9404",
    word: "大きい",
    kanji: "大きい",
    romaji: "ookii",
    meaning: "to, lớn",
    wordType: WordType.ADJECTIVE,
    level: Level.N5,
    examples: [
      {
        japanese: "大きい家です。",
        romaji: "ookii ie desu.",
        vietnamese: "Đó là ngôi nhà lớn.",
        explanation: "Tính từ い dùng để miêu tả kích thước.",
      },
    ],
  },
  {
    id: "9a5c1f4e-8c19-4d68-bde4-1c7cdb1d3a05",
    word: "小さい",
    kanji: "小さい",
    romaji: "chiisai",
    meaning: "nhỏ",
    wordType: WordType.ADJECTIVE,
    level: Level.N5,
    examples: [
      {
        japanese: "小さい猫です。",
        romaji: "chiisai neko desu.",
        vietnamese: "Đó là con mèo nhỏ.",
        explanation: "小さい là tính từ trái nghĩa với 大きい.",
      },
    ],
  },
  {
    id: "2d7f9a40-bb16-4fa2-8f64-7f63b9b9ad06",
    word: "学生",
    kanji: "学生",
    romaji: "gakusei",
    meaning: "học sinh, sinh viên",
    wordType: WordType.NOUN,
    level: Level.N5,
    examples: [
      {
        japanese: "私は学生です。",
        romaji: "watashi wa gakusei desu.",
        vietnamese: "Tôi là sinh viên.",
        explanation: "Mẫu câu danh từ + です.",
      },
    ],
  },
  {
    id: "6e8b9c21-6c0f-4bb7-a87d-1f7f6d1b8e07",
    word: "先生",
    kanji: "先生",
    romaji: "sensei",
    meaning: "giáo viên",
    wordType: WordType.NOUN,
    level: Level.N5,
    examples: [
      {
        japanese: "先生に聞きます。",
        romaji: "sensei ni kikimasu.",
        vietnamese: "Tôi hỏi giáo viên.",
        explanation: "Dùng trợ từ に để chỉ đối tượng được hỏi.",
      },
    ],
  },
  {
    id: "0b2dfd31-8a52-4c73-8f03-4a4f45c9b108",
    word: "本",
    kanji: "本",
    romaji: "hon",
    meaning: "sách",
    wordType: WordType.NOUN,
    level: Level.N5,
    examples: [
      {
        japanese: "本を読みます。",
        romaji: "hon o yomimasu.",
        vietnamese: "Tôi đọc sách.",
        explanation: "本 là danh từ chỉ đồ vật.",
      },
    ],
  },
  {
    id: "e3d9c7f1-2f47-4c27-b5a3-17c6c5a21e09",
    word: "買う",
    kanji: "買う",
    romaji: "kau",
    meaning: "mua",
    wordType: WordType.VERB,
    level: Level.N5,
    examples: [
      {
        japanese: "パンを買います。",
        romaji: "pan o kaimasu.",
        vietnamese: "Tôi mua bánh mì.",
        explanation: "Động từ 買う dùng cho hành động mua.",
      },
    ],
  },
  {
    id: "4a12b62b-0a25-45e7-a47c-f6f7d61c5f10",
    word: "飲む",
    kanji: "飲む",
    romaji: "nomu",
    meaning: "uống",
    wordType: WordType.VERB,
    level: Level.N5,
    examples: [
      {
        japanese: "水を飲みます。",
        romaji: "mizu o nomimasu.",
        vietnamese: "Tôi uống nước.",
        explanation: "飲む dùng cho đồ uống.",
      },
    ],
  },

  // ---- N4 ----
  {
    id: "8c3e8d55-bc7b-4f58-9c1a-8b65aab1e111",
    word: "始める",
    kanji: "始める",
    romaji: "hajimeru",
    meaning: "bắt đầu",
    wordType: WordType.VERB,
    level: Level.N4,
    examples: [
      {
        japanese: "仕事を始めます。",
        romaji: "shigoto o hajimemasu.",
        vietnamese: "Tôi bắt đầu công việc.",
        explanation: "始める diễn tả sự bắt đầu hành động.",
      },
    ],
  },
  {
    id: "c90a0b39-9df6-40f3-bd2f-23b3a1f2e212",
    word: "終わる",
    kanji: "終わる",
    romaji: "owaru",
    meaning: "kết thúc",
    wordType: WordType.VERB,
    level: Level.N4,
    examples: [
      {
        japanese: "授業が終わります。",
        romaji: "jugyou ga owarimasu.",
        vietnamese: "Buổi học kết thúc.",
        explanation: "終わる dùng cho sự kết thúc.",
      },
    ],
  },
  {
    id: "b8b9c112-f1f3-4b0c-9a2b-6cb8c6c1f313",
    word: "便利",
    kanji: "便利",
    romaji: "benri",
    meaning: "tiện lợi",
    wordType: WordType.ADJECTIVE,
    level: Level.N4,
    examples: [
      {
        japanese: "このアプリは便利です。",
        romaji: "kono apuri wa benri desu.",
        vietnamese: "Ứng dụng này rất tiện.",
        explanation: "便利 là tính từ な.",
      },
    ],
  },
  {
    id: "c2c4d9b5-6f59-4f9e-93f7-4f9b8a91a414",
    word: "必要",
    kanji: "必要",
    romaji: "hitsuyou",
    meaning: "cần thiết",
    wordType: WordType.ADJECTIVE,
    level: Level.N4,
    examples: [
      {
        japanese: "お金が必要です。",
        romaji: "okane ga hitsuyou desu.",
        vietnamese: "Tôi cần tiền.",
        explanation: "必要 là tính từ な, thường dùng với が.",
      },
    ],
  },
  {
    id: "1a91c9f1-7a77-4db1-9a0b-fb2e4f9c1515",
    word: "会社",
    kanji: "会社",
    romaji: "kaisha",
    meaning: "công ty",
    wordType: WordType.NOUN,
    level: Level.N4,
    examples: [
      {
        japanese: "会社で働きます。",
        romaji: "kaisha de hatarakimasu.",
        vietnamese: "Tôi làm việc ở công ty.",
        explanation: "で chỉ địa điểm diễn ra hành động.",
      },
    ],
  },
];
