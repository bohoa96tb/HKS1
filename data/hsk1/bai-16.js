/**
 * HSK STUDIO - DỮ LIỆU BÀI 16 (PHẦN 1/2)
 * Bao gồm: Nhóm 1 (Từ 1 - 6) & Nhóm 2 (Từ 7 - 12)
 * Tiêu chuẩn: Đầy đủ 6 chiều tiếp cận, chuyên đề bẫy tư duy Việt - Trung, Audio queues chuẩn xác.
 */

(function(){
  // Khởi tạo đối tượng lưu trữ dùng chung giữa Phần 1 và Phần 2
  window.HSK_BAI16_DATA = window.HSK_BAI16_DATA || {
    id: "hsk1-bai-16",
    number: 16,
    title: "Bài 16: Từ vựng trong đời sống và giao tiếp",
    level: "HSK1",
    desc: "24 từ vựng mở rộng chuyên sâu bẫy người Việt, cùng 4 đoạn hội thoại đường dài 16-24 lượt tương tác giọng Nam – Nữ.",
    objectives: [
      "Nắm vững 24 từ vựng thực tế và bản chất ngữ dụng phân biệt với tiếng Việt.",
      "Vượt qua 24 bẫy chuyển di ngôn ngữ tiêu cực thường gặp của người học Việt Nam.",
      "Luyện phản xạ giao tiếp qua 4 đoạn hội thoại thực tế đường dài (16-24 lượt thoại)."
    ],
    groups: [],
    dialogues: []
  };

  // ==========================================
  // NHÓM 1: PHƯƠNG HƯỚNG, ĐỘNG TÁC & ĐẠI TỪ NHÂN XƯNG
  // ==========================================
  const group1 = {
    id: "hsk1-bai-16-g1",
    title: "Nhóm 1: Phương Hướng, Động Tác & Đại Từ Nhân Xưng",
    desc: "Học cách dùng chuyên sâu các từ: 右, 得到, 开车, 北, 他们, 动作; nhận diện bẫy vị trí mốc không gian và động tác cụ thể.",
    words: [
      // --- TỪ 1: 右 ---
      {
        id: "hsk1-bai-16-g1-w1",
        index: 1,
        hanzi: "右",
        pinyin: "yòu",
        coreMeaning: "Bên phải, phía bên phải",
        introAudio: [
          { lang: "zh-CN", text: "右", pause: 500 },
          { lang: "vi-VN", text: "Bên phải, phía bên phải", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi chỉ phương hướng di chuyển, xác định tọa độ vị trí vật thể hoặc cơ thể trong không gian thực tế.",
          detail: "Chỉ phía bên phải. Khi đóng vai trò định vị không gian độc lập, luôn dùng danh từ phương vị '右边'. Khi chỉ hướng chuyển động, kết hợp với giới từ: '往右' hoặc '向右'.",
          keyPoint: "Bên phải. Luôn đặt vật mốc chuẩn ở TRƯỚC từ phương vị: [Vật mốc + 右边].",
          audio: [
            { lang: "vi-VN", text: "Từ thứ nhất: Hữu, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "右", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là bên phải. Khi nói vị trí, dùng ", pause: 300 },
            { lang: "zh-CN", text: "右边", pause: 400 },
            { lang: "vi-VN", text: "; khi chỉ hướng rẽ, dùng ", pause: 300 },
            { lang: "zh-CN", text: "往右", pause: 400 },
            { lang: "vi-VN", text: "hoặc", pause: 200 },
            { lang: "zh-CN", text: "向右", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Vị trí tương đối so với vật mốc",
            pattern: "[Vật mốc] + (的) + 右边",
            note: "Vật mốc chuẩn luôn đứng TRƯỚC phương vị từ. Ví dụ: 学校右边 (Bên phải trường học).",
            audio: [
              { lang: "vi-VN", text: "Cấu trúc một: Vật mốc đứng trước, phương vị từ đứng sau.", pause: 400 },
              { lang: "zh-CN", text: "学校右边有一家书店。", pause: 800 },
              { lang: "vi-VN", text: "Phía bên phải trường học có một hiệu sách.", pause: 400 }
            ]
          },
          {
            title: "2. Hướng di chuyển, rẽ hướng",
            pattern: "往 / 向 + 右 + [Động từ: 走 / 拐 / 转]",
            note: "Giới từ chỉ hướng đứng trước động từ hành động: 往右拐 (Rẽ sang phải).",
            audio: [
              { lang: "vi-VN", text: "Cấu trúc hai: Giới từ chỉ hướng đứng trước động từ rẽ.", pause: 400 },
              { lang: "zh-CN", text: "到路口请往右拐。", pause: 800 },
              { lang: "vi-VN", text: "Đến ngã rẽ xin vui lòng rẽ sang phải.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "学校的右边有一个商店。",
            vi: "Phía bên phải trường học có một cửa hàng.",
            situation: "Mô tả vị trí cửa hàng khi chỉ đường cho bạn học trong khuôn viên trường.",
            analysis: "学校 là vật mốc đứng trước; 右边 là phương vị từ đứng sau, liên kết bởi trợ từ 的.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Trường học là mốc chuẩn đứng trước, phương vị từ đứng sau.", pause: 400 },
              { lang: "zh-CN", text: "学校的右边有一个商店。", pause: 800 }
            ]
          },
          {
            zh: "到路口请往右拐。",
            vi: "Đến ngã rẽ xin vui lòng rẽ sang phải.",
            situation: "Hướng dẫn tài xế taxi hoặc bạn bè khi lái xe tới nút giao thông.",
            analysis: "到路口 là trạng ngữ thời gian/địa điểm; 往右拐 chỉ rõ hành động chuyển hướng sang phải.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Chỉ dẫn chuyển hướng tại ngã rẽ.", pause: 400 },
              { lang: "zh-CN", text: "到路口请往右拐。", pause: 800 }
            ]
          },
          {
            zh: "我的右手有点儿疼。",
            vi: "Tay phải của tôi hơi đau một chút.",
            situation: "Nói với bác sĩ hoặc bạn bè khi tay phải bị chấn thương sau khi chơi bóng.",
            analysis: "右 kết hợp trực tiếp với danh từ chỉ bộ phận cơ thể 手 tạo thành danh từ: 右手 (tay phải).",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Ghép trực tiếp với bộ phận cơ thể.", pause: 400 },
              { lang: "zh-CN", text: "我的右手有点儿疼。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy dịch ngược trật tự từ tiếng Việt (Word-by-word Trap)",
            situation: "Bạn muốn nói 'Bên phải trường học có một hiệu sách'.",
            explanation: "Người Việt có thói quen nói chữ 'Bên phải' trước rồi mới tới 'Trường học'. Nếu dịch từng chữ thành '右边学校' là SAI HOÀN TOÀN về mặt tư duy không gian Hán ngữ.",
            wrong: "右边学校有一家书店。 (Sai trật tự)",
            right: "学校右边有一家书店。 (Chuẩn người bản xứ)",
            tip: "Quy tắc Không gian: Cái to/Vật mốc có trước -> Phương vị gắn vào sau lưng.",
            boundary: "Khi đứng độc lập trả lời câu hỏi 'Ở đâu?': Có thể nói ngắn gọn '在右边' (Ở bên phải).",
            comparisons: [
              { zh: "学校右边", vi: "Bên phải trường học (Mốc đứng trước)" },
              { zh: "右边的人", vi: "Người ở phía bên phải (Định ngữ bổ nghĩa)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Cảnh báo bẫy ngữ pháp: Người Việt thường nói bên phải trường học nên hay dịch nhầm thành ", pause: 300 },
              { lang: "zh-CN", text: "右边学校", pause: 400 },
              { lang: "vi-VN", text: ". Trong tiếng Trung, vật mốc trường học bắt buộc phải đứng trước: ", pause: 300 },
              { lang: "zh-CN", text: "学校右边", pause: 500 }
            ]
          }
        ],
        pron: {
          guide: "Thanh bốn (dấu huyền dứt khoát): bắt đầu từ cao độ 5 rơi nhanh xuống 1. Không kéo dài như dấu nặng tiếng Việt.",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm thanh bốn:", pause: 300 },
            { lang: "zh-CN", text: "右", pause: 800 }
          ]
        },
        write: {
          desc: "Bao gồm nét ngang nét phẩy ở trên, phía dưới là chữ Khẩu (口). Mẹo phân biệt: Tay phải đưa cơm vào Miệng (口) -> Chữ Hữu (右). Tay trái cầm dụng cụ Công cụ (工) -> Chữ Tả (左).",
          audio: [
            { lang: "vi-VN", text: "Mẹo nhớ mặt chữ: Phía dưới chữ Hữu có chữ Khẩu, tức là tay phải cầm đồ ăn đưa vào miệng.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Vật mốc + 右边; Rẽ phải: 往右拐.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng từ Hữu: Vật mốc đứng trước, hữu biên đứng sau. Rẽ phải dùng vãng hữu quải.", pause: 400 }
        ]
      },

      // --- TỪ 2: 得到 ---
      {
        id: "hsk1-bai-16-g1-w2",
        index": 2,
        hanzi": "得到",
        pinyin": "dédào",
        coreMeaning: "Được, đạt được, nhận được (kết quả, giải thưởng, sự chấp thuận, giúp đỡ)",
        introAudio: [
          { lang: "zh-CN", text: "得到", pause: 500 },
          { lang: "vi-VN", text: "Được, đạt được, nhận được kết quả tốt hoặc sự giúp đỡ", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi người nói nhận được một giá trị tích cực, sự chấp thuận, cơ hội, hoặc thành quả sau một quá trình phấn đấu nỗ lực.",
          detail: "Động từ biểu thị sự tiếp nhận kết quả (mang tính trừu tượng hoặc thành tựu). Thường đi kèm với: 帮助 (giúp đỡ), 同意 (đồng ý), 机会 (cơ hội), 第一名 (giải nhất).",
          keyPoint: "Nhấn mạnh vào KẾT QUẢ ĐẠT ĐƯỢC sau quá trình nỗ lực hoặc tác động xã hội.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ hai: Đắc đáo, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "得到", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là đạt được, có được sự giúp đỡ, đồng thuận hoặc giải thưởng.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Tiếp nhận sự hỗ trợ hoặc đồng thuận",
            pattern: "得到 + [Danh từ trừu tượng: 帮助 / 同意 / 支持]",
            note: "Biểu thị nhận được sự hậu thuẫn quý giá từ người khác.",
            audio: [
              { lang: "zh-CN", text: "我得到了老师的帮助。", pause: 800 },
              { lang: "vi-VN", text: "Tôi đã nhận được sự giúp đỡ của thầy giáo.", pause: 400 }
            ]
          },
          {
            title: "2. Đạt được thành tích hoặc cơ hội",
            pattern: "得到 + [Cơ hội / Thành tích: 机会 / 好成绩 / 第一名]",
            note: "Nhấn mạnh kết quả tích cực xứng đáng sau quá trình phấn đấu.",
            audio: [
              { lang: "zh-CN", text: "经过努力，他得到了这个工作机会。", pause: 800 },
              { lang: "vi-VN", text: "Qua nỗ lực, anh ấy đã có được cơ hội việc làm này.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "在汉语课上，我得到了老师的帮助。",
            vi: "Trong tiết học tiếng Trung, tôi đã nhận được sự giúp đỡ của giáo viên.",
            situation: "Bày tỏ lòng biết ơn khi được thầy cô giáo kiên nhẫn sửa phát âm và giảng bài.",
            analysis: "得到 kết hợp với tân ngữ trừu tượng 老师的帮助 (sự giúp đỡ của thầy).",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Nhận được sự giúp đỡ.", pause: 300 },
              { lang: "zh-CN", text: "在汉语课上，我得到了老师的帮助。", pause: 800 }
            ]
          },
          {
            zh: "这个计划得到了大家的同意。",
            vi: "Kế hoạch này đã nhận được sự đồng ý của mọi người.",
            situation: "Báo cáo kết quả cuộc họp thảo luận đề xuất công việc với cả nhóm.",
            analysis: "得到的同意 là sự đồng thuận tập thể được thiết lập sau buổi bàn bạc.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Đạt được sự đồng ý của tập thể.", pause: 300 },
              { lang: "zh-CN", text: "这个计划得到了大家的同意。", pause: 800 }
            ]
          },
          {
            zh: "他在比赛中得到了第一名。",
            vi: "Anh ấy đã đạt được giải nhất trong cuộc thi.",
            situation: "Khen ngợi và chúc mừng bạn học vừa giành chiến thắng trong kỳ thi thể thao.",
            analysis: "第一名 (hạng nhất) là phần thưởng/kết quả đạt được sau cuộc thi.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Đạt giải thưởng trong cuộc thi.", pause: 300 },
              { lang: "zh-CN", text: "他在比赛中得到了第一名。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy nhầm lẫn giữa 得到 (dédào) và 收到 (shōudào)",
            situation: "Bạn muốn nói 'Tôi vừa nhận được quà sinh nhật' hoặc 'nhận được tin nhắn'.",
            explanation: "Người Việt dịch chung cả hai từ là 'nhận được'. Tuy nhiên: 收到 dùng cho đồ vật cụ thể, bưu phẩm, thư từ được gửi tới qua đường vận chuyển. Còn 得到 dùng cho sự đồng thuận, giúp đỡ, giải thưởng, cơ hội.",
            wrong: "我得到了他的生日礼物。 (Dùng 得到 cho gói quà vật lý là thiếu tự nhiên)",
            right: "我收到了他的生日礼物。 (Đồ vật gửi tới dùng 收到)",
            tip: "Đồ vật cầm nắm trên tay qua bưu điện/chuyển giao -> dùng 收到. Sự giúp đỡ, cơ hội, tình cảm, giải thưởng -> dùng 得到.",
            boundary: "Trong văn viết trang trọng, 得到 có thể đi với một số phần thưởng vật chất mang tính biểu trưng (得到奖杯 - nhận cúp).",
            comparisons: [
              { zh: "得到帮助", vi: "Nhận được sự giúp đỡ (Trừu tượng -> Dùng 得到)" },
              { zh: "收到信 / 礼物", vi: "Nhận được thư / quà (Vật lý gửi đến -> Dùng 收到)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Phân biệt 得到 và 收到: Quà cáp, tin nhắn chuyển tới dùng thu đáo ", pause: 300 },
              { lang: "zh-CN", text: "收到", pause: 400 },
              { lang: "vi-VN", text: ". Sự giúp đỡ, giải thưởng, đồng thuận sau nỗ lực dùng đắc đáo ", pause: 300 },
              { lang: "zh-CN", text: "得到", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "Đọc dé (thanh 2 đi lên) + dào (thanh 4 giáng mạnh). Nhịp đọc dứt khoát.",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "得到", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ 得 gồm bộ Xích (彳) bên trái, chữ Đán (旦) và Thốn (寸) bên phải. Chữ 到 gồm chữ Chí (至) và bộ Đao đứng (刂).",
          audio: [
            { lang: "vi-VN", text: "Nhận diện chữ Hán: Nhớ cụm từ cố định đắc đáo bang trợ để khắc sâu mặt chữ.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: 得到 + 帮助 / 同意 / 机会 / 成绩 (Thành quả trừu tượng).",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng từ Đắc đáo: Nhận được giúp đỡ, cơ hội và thành tích tốt.", pause: 400 }
        ]
      },

      // --- TỪ 3: 开车 ---
      {
        id: "hsk1-bai-16-g1-w3",
        index": 3,
        hanzi": "开车",
        pinyin": "kāichē",
        coreMeaning": "Lái xe, chạy xe (người trực tiếp điều khiển vô lăng)",
        introAudio: [
          { lang: "zh-CN", text: "开车", pause: 500 },
          { lang: "vi-VN", text: "Lái xe, tự điều khiển phương tiện ô tô", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi nói về năng lực lái xe, hành vi đang cầm vô lăng điều khiển xe ô tô trên đường.",
          detail: "Động từ ly hợp (开 + 车). Chỉ dành cho người trực tiếp lái xe. Nếu là hành khách đi nhờ hoặc ngồi xe công cộng, tuyệt đối không dùng từ này.",
          keyPoint: "Người trực tiếp cầm lái = 开车. Hành khách ngồi trên xe = 坐车.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ ba: Khai xa, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "开车", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là tự cầm lái xe hơi. Cả hai âm đều đọc thanh một bằng phẳng.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Phương thức di chuyển đi làm, đi học",
            pattern: "开车 + 去 + [Địa điểm: 上班 / 上学 / 书店]",
            note: "Lái xe đóng vai trò trạng ngữ chỉ cách thức thực hiện hành động.",
            audio: [
              { lang: "zh-CN", text: "我爸开车去上班。", pause: 800 },
              { lang: "vi-VN", text: "Bố tôi lái xe đi làm.", pause: 400 }
            ]
          },
          {
            title: "2. Khả năng kỹ năng lái xe",
            pattern: "会 / 不会 + 开车",
            note: "Hỏi hoặc nói về kỹ năng có biết lái xe hay không.",
            audio: [
              { lang: "zh-CN", text: "你会开车吗？", pause: 800 },
              { lang: "vi-VN", text: "Bạn có biết lái xe không?", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "我爸爸每天开车去上班。",
            vi: "Bố tôi mỗi ngày đều lái xe đi làm.",
            situation: "Kể về thói quen di chuyển hàng ngày của bố bằng phương tiện cá nhân.",
            analysis: "开车 là trạng ngữ chỉ phương thức đứng trước động từ 去上班.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Bố lái xe đi làm.", pause: 300 },
              { lang: "zh-CN", text: "我爸爸每天开车去上班。", pause: 800 }
            ]
          },
          {
            zh: "你会开车吗？路上车很多，请慢点儿开。",
            vi: "Bạn có biết lái xe không? Trên đường xe đông lắm, xin hãy lái chậm một chút.",
            situation: "Nhắc nhở bạn bè chú ý an toàn giao thông khi ngồi trên xe ô tô.",
            analysis: "慢点儿开 tách động từ 开 ra độc lập để bổ nghĩa tốc độ lái xe chậm rãi.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Nhắc nhở lái xe chậm và an toàn.", pause: 300 },
              { lang: "zh-CN", text: "路上车很多，请慢点儿开。", pause: 800 }
            ]
          },
          {
            zh: "今天他不打算开车，他想坐地铁。",
            vi: "Hôm nay anh ấy không định lái xe, anh ấy muốn đi tàu điện ngầm.",
            situation: "Giải thích lý do để xe ở nhà nhằm tránh tắc đường vào giờ cao điểm.",
            analysis: "Đối chiếu rõ ràng giữa 开车 (tự lái) và 坐地铁 (ngồi tàu điện ngầm làm hành khách).",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Đối chiếu giữa tự lái xe và đi phương tiện công cộng.", pause: 300 },
              { lang: "zh-CN", text: "今天他不打算开车，他想坐地铁。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy tư duy 'Đi xe' của người Việt (Lái xe vs Ngồi xe)",
            situation: "Bạn đón taxi hoặc xe buýt đi học, bạn nói bằng tiếng Việt 'Tôi đi xe đến trường'.",
            explanation: "Người Việt quen gọi chung là 'đi xe'. Nếu dịch thành '我开车去学校' thì người bản xứ sẽ hiểu là bạn tự lái xe ô tô của riêng mình. Khi bạn là hành khách, bắt buộc phải dùng 坐车 (ngồi xe) hoặc 打车 (gọi taxi).",
            wrong: "我开车公共汽车去学校。 (Sai hoàn toàn)",
            right: "我坐公共汽车去学校。 (Hành khách dùng 坐车)",
            tip: "Cầm vô lăng -> 开车. Ngồi ở ghế sau/ghế phụ -> 坐车.",
            boundary: "Khi nói lái loại xe cụ thể, chỉ dùng động từ '开' + tên xe: 开出租车 (lái taxi), không được nói '开车出租车'.",
            comparisons: [
              { zh: "我开车去", vi: "Tôi tự lái xe đi (Tôi là tài xế)" },
              { zh: "我坐车去", vi: "Tôi ngồi xe đi (Tôi là hành khách)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Lưu ý bẫy lái xe: Bạn ngồi xe buýt hoặc taxi phải dùng tọa xa ", pause: 300 },
              { lang: "zh-CN", text: "坐车", pause: 400 },
              { lang: "vi-VN", text: ". Chỉ khi tự cầm vô lăng mới dùng khai xa ", pause: 300 },
              { lang: "zh-CN", text: "开车", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "Cả hai âm đều thanh một (kāi - chē). Giữ âm vực cao, ngang và ngân đều, không thả giọng.",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm hai âm thanh một:", pause: 300 },
            { lang: "zh-CN", text: "开车", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Khai (开) gồm hai nét ngang và hai nét sổ. Chữ Xa (车) có nét sổ thẳng cắt qua thân xe.",
          audio: [
            { lang: "vi-VN", text: "Nhận diện mặt chữ: Nhớ chữ Xa tượng hình bánh xe và trục xe.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Tự cầm lái = 开车; Hành khách ngồi xe = 坐车.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng từ Khai xa: Tự lái xe là khai xa, hành khách ngồi xe là tọa xa.", pause: 400 }
        ]
      },

      // --- TỪ 4: 北 ---
      {
        id: "hsk1-bai-16-g1-w4",
        index": 4,
        hanzi: "北",
        pinyin: "běi",
        coreMeaning: "Bắc, hướng bắc, phía bắc",
        introAudio: [
          { lang: "zh-CN", text: "北", pause: 500 },
          { lang: "vi-VN", text: "Bắc, hướng bắc, phía bắc", pause: 500 }
        ],
        meaning: {
          situation: "Dùng để xác định phương vị địa lý trên bản đồ, vị trí các tòa nhà, hoặc hướng di chuyển của phương tiện.",
          detail: "Danh từ phương vị địa lý chỉ hướng bắc. Trong khẩu ngữ xác định vị trí tương đối thường dùng '北边'. Khi chỉ hướng chuyển động dùng '往北' hoặc '向北'.",
          keyPoint: "Phương hướng địa lý cố định trên la bàn. Vật mốc + 北边.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ tư: Bắc, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "北", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là hướng bắc. Vị trí ở phía bắc dùng ", pause: 300 },
            { lang: "zh-CN", text: "北边", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Vị trí ở phía bắc so với vật mốc",
            pattern: "[Vật mốc] + (的) + 北边",
            note: "Ví dụ: 学校北边 (Phía bắc của trường học).",
            audio: [
              { lang: "zh-CN", text: "车站在学校北边。", pause: 800 },
              { lang: "vi-VN", text: "Bến xe nằm ở phía bắc trường học.", pause: 400 }
            ]
          },
          {
            title: "2. Hướng di chuyển về phương bắc",
            pattern: "往 / 向 + 北 + 走",
            note: "Đi về hướng bắc theo chỉ dẫn giao thông.",
            audio: [
              { lang: "zh-CN", text: "从这里一直往北走。", pause: 800 },
              { lang: "vi-VN", text: "Từ đây cứ đi thẳng về hướng bắc.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "车站在学校北边。",
            vi: "Nhà ga nằm ở phía bắc trường học.",
            situation: "Chỉ vị trí nhà ga khi bạn bè hỏi đường tại cổng trường.",
            analysis: "学校 là vật mốc đứng trước; 北边 chỉ rõ tọa độ phía bắc.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Nhà ga ở phía bắc trường học.", pause: 300 },
              { lang: "zh-CN", text: "车站在学校北边。", pause: 800 }
            ]
          },
          {
            zh: "从这里一直往北走，就是有名的人民公园。",
            vi: "Từ đây cứ đi thẳng về hướng bắc là đến công viên Nhân Dân nổi tiếng.",
            situation: "Chỉ đường đi bộ dạo mát cho khách du lịch trong thành phố.",
            analysis: "往北走 kết hợp phó từ 一直 (đi thẳng liên tục về phía bắc).",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Cứ đi thẳng về phía bắc.", pause: 300 },
              { lang: "zh-CN", text: "从这里一直往北走，就是有名的人民公园。", pause: 800 }
            ]
          },
          {
            zh: "我的家在中国北方的一个小城市。",
            vi: "Nhà của tôi ở một thành phố nhỏ thuộc miền bắc Trung Quốc.",
            situation: "Giới thiệu quê quán của du học sinh với bạn cùng phòng.",
            analysis: "北方 là danh từ chỉ vùng miền: miền bắc.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Quê ở miền bắc.", pause: 300 },
              { lang: "zh-CN", text: "我的家在中国北方的一个小城市。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy đồng nhất hướng tương đối của cơ thể với hướng la bàn",
            situation: "Khi nhìn bản đồ hoặc đứng trên đường, thấy hướng bên phải vội vàng cho là hướng bắc.",
            explanation: "Phải (右) và Trái (左) là phương hướng tương đối thay đổi theo vị trí cơ thể quay mặt. Còn Bắc (北) và Nam (南) là tọa độ địa lý cố định của trái đất. Không được nhầm lẫn giữa 右边 và 北边.",
            wrong: "Nhầm lẫn giữa 往右 (rẽ phải) và 往北 (đi về hướng bắc).",
            right: "看地图时，上面是北，右边是东。",
            tip: "Nhìn bản đồ: Trên Bắc, Dưới Nam, Trái Tây, Phải Đông.",
            boundary: "Bắc Kinh (北京) có chữ Bắc này nghĩa là thủ đô phương bắc.",
            comparisons: [
              { zh: "北边", vi: "Phía bắc (Tọa độ la bàn cố định)" },
              { zh: "右边", vi: "Bên phải (Phương vị tương đối theo người đứng)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Lưu ý: Hướng bắc bắc biên là phương vị la bàn cố định, không được đồng nhất với bên phải hữu biên.", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "Thanh ba (běi): hạ thấp giọng xuống đáy cổ họng rồi bật nhẹ lên.",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm thanh ba:", pause: 300 },
            { lang: "zh-CN", text: "北", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Bắc gồm hai phần đối xứng lưng vào nhau (tượng hình hai người quay lưng vào nhau tránh gió lạnh phương bắc).",
          audio: [
            { lang: "vi-VN", text: "Chữ Bắc tượng hình hai người ngồi quay lưng chống lại giá lạnh.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Mốc + 北边 (Phía bắc của mốc); 往北走 (Đi về hướng bắc).",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng từ Bắc: Mốc đứng trước bắc biên đứng sau, đi về hướng bắc dùng vãng bắc tẩu.", pause: 400 }
        ]
      },

      // --- TỪ 5: 他们 ---
      {
        id: "hsk1-bai-16-g1-w5",
        index": 5,
        hanzi: "他们",
        pinyin": "tāmen",
        coreMeaning: "Họ, bọn họ, chúng nó (nhóm nam hoặc cả nam lẫn nữ)",
        introAudio: [
          { lang: "zh-CN", text: "他们", pause: 500 },
          { lang: "vi-VN", text: "Họ, bọn họ, nhóm nhiều người", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi ngôi thứ nhất và ngôi thứ hai cùng nhắc tới một nhóm người thứ ba từ hai người trở lên.",
          detail: "Đại từ nhân xưng số nhiều ngôi thứ ba. Được dùng phổ quát cho nhóm toàn nam giới HOẶC nhóm hỗn hợp có cả nam và nữ, hoặc khi chưa rõ danh tính giới tính cụ thể.",
          keyPoint: "Nhóm có cả nam lẫn nữ -> BẮT BUỘC dùng chữ Họ có bộ Nhân đứng (他们).",
          audio: [
            { lang: "vi-VN", text: "Từ thứ năm: Tha môn, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "他们", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là bọn họ, chúng nó.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Vị trí phó từ nhấn mạnh tính tập thể",
            pattern: "他们 + 都 + [Vị ngữ]",
            note: "Phó từ 都 (đều) luôn đứng NGAY SAU chủ ngữ 他们.",
            audio: [
              { lang: "zh-CN", text: "他们都在这里。", pause: 800 },
              { lang: "vi-VN", text: "Họ đều đang ở đây.", pause: 400 }
            ]
          },
          {
            title: "2. Cụm đồng hành cùng ai đó",
            pattern: "跟 / 和 + 他们 + 一起 + [Hành động]",
            note: "Cùng làm việc gì đó với họ.",
            audio: [
              { lang: "zh-CN", text: "我想跟他们一起去打球。", pause: 800 },
              { lang: "vi-VN", text: "Tôi muốn cùng bọn họ đi chơi bóng.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "他们都是我的大学同学。",
            vi: "Họ đều là bạn học đại học của tôi.",
            situation: "Giới thiệu một nhóm bạn cũ đang đứng trò chuyện với người thân.",
            analysis: "他们 làm chủ ngữ số nhiều; 都 nhấn mạnh toàn bộ các bạn đều chung thuộc tính bạn học.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Giới thiệu bạn học đại học.", pause: 300 },
              { lang: "zh-CN", text: "他们都是我的大学同学。", pause: 800 }
            ]
          },
          {
            zh: "明天下午他们想去书店买书。",
            vi: "Chiều mai bọn họ muốn đi hiệu sách mua sách.",
            situation: "Thông báo kế hoạch của nhóm bạn khác cho người đối thoại biết.",
            analysis: "Trạng ngữ thời gian 明天下午 đứng trước chủ ngữ 他们.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Kế hoạch đi mua sách của họ.", pause: 300 },
              { lang: "zh-CN", text: "明天下午他们想去书店买书。", pause: 800 }
            ]
          },
          {
            zh: "你看，他们正在车站等车呢。",
            vi: "Bạn xem kìa, họ đều đang đứng ở nhà ga đợi xe buýt đấy.",
            situation: "Chỉ tay cho bạn đi cùng nhìn thấy nhóm bạn đang tập trung ở bến xe.",
            analysis: "正在...呢 biểu thị hành vi chờ xe của nhóm họ đang diễn ra tại thời điểm nói.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Họ đang đứng đợi xe ở nhà ga.", pause: 300 },
              { lang: "zh-CN", text: "你看，他们正在车站等车呢。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy phân biệt chữ viết 他们 và 她们 trong giao tiếp thực tế",
            situation: "Nghe trong băng phát ra âm thanh 'tāmen', vội vàng viết thành chữ 她们 có bộ Nữ.",
            explanation: "Trong ngữ âm, 他们 (nam/chung) và 她们 (nữ) phát âm giống hệt nhau 100%. Tuy nhiên, trong chữ viết: chỉ khi nhóm đó 100% là nữ giới mới được viết 她们. Nếu trong nhóm có dù chỉ một người nam, hoặc chưa xác định rõ giới tính, BẮT BUỘC phải viết là 他们 (bộ Nhân đứng).",
            wrong: "Thấy trong lớp có 10 bạn nữ và 1 bạn nam mà viết 她们 là sai chính tả quy chuẩn.",
            right: "Có cả nam lẫn nữ -> Dùng 他们.",
            tip: "Nhóm hỗn hợp hoặc chung chung -> Luôn ưu tiên dùng 他们.",
            boundary: "Với đồ vật hoặc động vật số nhiều, dùng chữ 它们 (bộ Miên).",
            comparisons: [
              { zh: "他们", vi: "Bọn họ (Toàn nam HOẶC Cả nam lẫn nữ)" },
              { zh: "她们", vi: "Bọn họ (Bắt buộc 100% toàn nữ)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Lưu ý mặt chữ: Nghe âm tāmen giống nhau nhưng khi viết, nhóm có cả nam lẫn nữ bắt buộc dùng tha môn bộ nhân đứng ", pause: 300 },
              { lang: "zh-CN", text: "他们", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "tā (thanh một cao đều) + men (thanh nhẹ, đọc ngắn, lướt nhẹ, không nhấn giọng).",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "他们", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ 他 có bộ Nhân đứng (亻) và chữ Dã (也). Chữ 们 có bộ Nhân đứng (亻) và chữ Môn (门).",
          audio: [
            { lang: "vi-VN", text: "Nhận diện mặt chữ: Cả hai chữ đều có bộ Nhân đứng bên trái.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Nhóm hỗn hợp nam nữ = 他们; 都 luôn đứng sau 他们.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Họ số nhiều chung dùng tha môn, phó từ đô đứng liền sau.", pause: 400 }
        ]
      },

      // --- TỪ 6: 动作 ---
      {
        id: "hsk1-bai-16-g1-w6",
        index": 6,
        hanzi: "动作",
        pinyin: "dòngzuò",
        coreMeaning: "Động tác, hành động, thao tác cụ thể",
        introAudio: [
          { lang: "zh-CN", text: "动作", pause: 500 },
          { lang: "vi-VN", text: "Động tác, cử chỉ, thao tác cụ thể", pause: 500 }
        ],
        meaning: {
          situation: "Dùng trong các ngữ cảnh tập luyện thể dục thể thao, học múa võ, hướng dẫn thao tác làm việc hoặc nhận xét sự nhanh nhẹn của cơ thể.",
          detail: "Danh từ chỉ cử động cụ thể của chân tay, tư thế thân thể hoặc thao tác kỹ thuật. Thường đi với động từ 做 (làm): 做动作 (thực hiện động tác) hoặc tính từ miêu tả: 动作很快 (thao tác rất nhanh).",
          keyPoint: "Cử động tay chân, tư thế vận động cụ thể của hình thể = 动作.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ sáu: Động tác, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "动作", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là cử động hoặc thao tác tay chân cụ thể.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Thực hiện một động tác",
            pattern: "做 + (这个 / 那个) + 动作",
            note: "Học theo hoặc làm theo tư thế mẫu.",
            audio: [
              { lang: "zh-CN", text: "请跟我做这个动作。", pause: 800 },
              { lang: "vi-VN", text: "Xin hãy làm theo tôi động tác này.", pause: 400 }
            ]
          },
          {
            title: "2. Nhận xét tốc độ thao tác",
            pattern: "动作 + 很 / 非常 + 快 / 慢",
            note: "Miêu tả thao tác làm việc hoặc di chuyển cơ thể nhanh hay chậm.",
            audio: [
              { lang: "zh-CN", text: "他的动作真快！", pause: 800 },
              { lang: "vi-VN", text: "Động tác của anh ấy nhanh thật đấy!", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "请大家跟我做这个动作。",
            vi: "Xin mời mọi người cùng làm theo tôi động tác này.",
            situation: "Giáo viên thể dục đứng trước lớp hướng dẫn bài tập khởi động đầu giờ.",
            analysis: "跟我做 là trạng ngữ đồng hành: cùng làm theo tôi; 这个动作 là tân ngữ chỉ động tác cụ thể.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Làm theo động tác này.", pause: 300 },
              { lang: "zh-CN", text: "请大家跟我做这个动作。", pause: 800 }
            ]
          },
          {
            zh: "他的动作很快，一分钟就做完了。",
            vi: "Thao tác của anh ấy rất nhanh, một phút đã hoàn thành xong rồi.",
            situation: "Khen ngợi tốc độ xử lý nhanh nhẹn của người thợ đóng gói sản phẩm.",
            analysis: "动作 đóng vai trò chủ ngữ; 快 là vị ngữ tính từ nhận xét tốc độ.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Thao tác rất nhanh nhẹn.", pause: 300 },
              { lang: "zh-CN", text: "他的动作很快，一分钟就做完了。", pause: 800 }
            ]
          },
          {
            zh: "打篮球的时候，这个动作非常重要。",
            vi: "Khi chơi bóng rổ, động tác này hết sức quan trọng.",
            situation: "Huấn luyện viên bóng rổ hướng dẫn tư thế ném rổ ghi điểm cho học viên.",
            analysis: "打篮球的时候 nêu bối cảnh thể thao mà động tác kỹ thuật đó phát huy tác dụng.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Động tác quan trọng trong thể thao.", pause: 300 },
              { lang: "zh-CN", text: "打篮球的时候，这个动作非常重要。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy nhầm lẫn giữa 动作 (dòngzuò) và 行动 (xíngdòng)",
            situation: "Khi chuẩn bị thực hiện một chiến dịch hoặc kế hoạch, bạn muốn hô hào 'Bắt đầu hành động!'.",
            explanation: "Cả hai từ tiếng Hán Việt đều dịch là 'hành động'. Nhưng 动作 là cử động tay chân, tư thế hình thể cụ thể. Còn 行动 là hành động mang tính chiến lược, kế hoạch, quyết định của tư duy. Hô khẩu hiệu phải dùng 开始行动, không được dùng 开始动作.",
            wrong: "大家注意，现在开始动作！ (Sai ngữ cảnh chiến lược)",
            right: "大家注意，现在开始行动！ (Kế hoạch hành động)",
            tip: "Cử động tay chân, múa võ, tập bóng -> 动作. Kế hoạch, dự án, hành động cụ thể hóa lời nói -> 行动.",
            boundary: "Trong điện ảnh: 'Phim hành động' gọi là 动作电影 (Action movies) vì có nhiều cảnh võ thuật đánh đấm tay chân.",
            comparisons: [
              { zh: "做动作", vi: "Làm động tác (Cử động cơ thể)" },
              { zh: "开始行动", vi: "Bắt đầu hành động (Triển khai kế hoạch)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Phân biệt động tác và hành động: Cử động chân tay dùng động tác ", pause: 300 },
              { lang: "zh-CN", text: "动作", pause: 400 },
              { lang: "vi-VN", text: ". Thực hiện kế hoạch, chiến lược dùng hành động ", pause: 300 },
              { lang: "zh-CN", text: "行动", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "Cả hai âm đều thanh bốn: dòng - zuò. Giáng âm sắc gọn, không kéo dài.",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm hai thanh bốn:", pause: 300 },
            { lang: "zh-CN", text: "动作", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Động (动) có chữ Trọng (重) và chữ Lực (力). Chữ Tác (作) có bộ Nhân đứng (亻) và chữ Tạ (乍).",
          audio: [
            { lang: "vi-VN", text: "Nhận diện chữ Hán: Nhớ cụm từ làm động tác tố động tác.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Làm động tác = 做动作; Thao tác nhanh = 动作很快.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Cử động tay chân dùng tố động tác, khen nhanh nhẹn dùng động tác ngận khoái.", pause: 400 }
        ]
      }
    ],

    // BÀI TẬP TRẮC NGHIỆM NGỮ DỤNG CHO NHÓM 1
    exercises: [
      {
        id: "hsk1-b16-g1-ex1",
        type: "Phân biệt trật tự mốc không gian",
        prompt: "Chọn câu đúng nhất để diễn đạt: 'Phía bên phải trường học có một cửa hàng tiện lợi lớn.'",
        options: [
          "右边的学校有一个大商店。",
          "学校右边有一个大商店。",
          "学校的大商店在右边里面。",
          "在右边学校有一个大商店。"
        ],
        correct: 1,
        reasonRight: "Chuẩn xác! Quy tắc Hán ngữ bắt buộc mốc chuẩn trường học (学校) phải đứng TRƯỚC phương vị từ (右边).",
        reasonWrong: "Chưa đúng: Tiếng Trung không cho phép đặt phương vị từ trước mốc chuẩn trong cấu trúc chỉ vị trí tồn hiện.",
        questionAudio: [{ lang: "vi-VN", text: "Chọn câu diễn đạt đúng vị trí bên phải trường học.", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "学校右边有一个大商店。", pause: 600 },
          { lang: "vi-VN", text: "Trường học làm mốc đứng trước, hữu biên đứng sau.", pause: 400 }
        ]
      },
      {
        id: "hsk1-b16-g1-ex2",
        type: "Phân biệt 得到 và 收到",
        prompt: "Điền từ thích hợp vào chỗ trống: '在这次考试中，他经过努力，____了第一名。'",
        options: ["收到", "得到", "送到", "买到"],
        correct: 1,
        reasonRight: "Chính xác! Giải nhất (第一名) là kết quả phấn đấu nỗ lực trừu tượng, bắt buộc dùng 得到.",
        reasonWrong: "Chưa đúng: 收到 chỉ dùng cho đồ vật, thư từ hoặc bưu kiện cụ thể được gửi đến.",
        questionAudio: [{ lang: "zh-CN", text: "他经过努力，什么了第一名？", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "得到了第一名", pause: 600 },
          { lang: "vi-VN", text: "Đạt giải nhất sau nỗ lực bắt buộc dùng đắc đáo.", pause: 400 }
        ]
      },
      {
        id: "hsk1-b16-g1-ex3",
        type: "Phân biệt 开车 và 坐车",
        prompt: "Tiểu An là hành khách đi taxi đến chỗ hẹn. Tiểu An nên nói câu nào với bạn bè?",
        options: [
          "我正在开车出租车，马上到。",
          "我坐出租车去，马上到。",
          "我开车出租车去学校。",
          "我是出租车开车人。"
        ],
        correct: 1,
        reasonRight: "Tuyệt vời! Hành khách ngồi trên xe taxi bắt buộc dùng động từ 坐 (ngồi): 坐出租车.",
        reasonWrong: "Chưa đúng: 开车 chỉ dùng cho người tài xế trực tiếp cầm vô lăng.",
        questionAudio: [{ lang: "vi-VN", text: "Hành khách đi taxi nên dùng từ nào?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "我坐出租车去，马上到。", pause: 600 },
          { lang: "vi-VN", text: "Hành khách dùng tọa xuất tô xa.", pause: 400 }
        ]
      },
      {
        id: "hsk1-b16-g1-ex4",
        type: "Phương vị địa lý",
        prompt: "Nhìn bản đồ thấy nhà ga ở phía bắc trường học. Câu nào chuẩn xác?",
        options: [
          "学校在车站的北边。",
          "车站在学校的北边。",
          "车站的北边是学校的右边。",
          "学校往北是车站的左边。"
        ],
        correct: 1,
        reasonRight: "Chuẩn xác! Trường học là mốc chuẩn, nhà ga nằm ở phía bắc: 车站在学校的北边.",
        reasonWrong: "Chưa đúng: Bạn đã đảo ngược vị trí giữa chủ thể nhà ga và vật mốc trường học.",
        questionAudio: [{ lang: "vi-VN", text: "Nhà ga nằm ở phía bắc trường học, nói thế nào?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "车站在学校的北边。", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g1-ex5",
        type: "Đại từ nhân xưng hỗn hợp",
        prompt: "Trong phòng có 3 thầy giáo nam và 5 cô giáo nữ. Khi nói 'Bọn họ đều là giáo viên', dùng chữ Hán nào?",
        options: ["她们都是老师。", "他们都是老师。", "它们都是老师。", "大家他们是老师。"],
        correct: 1,
        reasonRight: "Chính xác! Nhóm có cả nam lẫn nữ bắt buộc dùng đại từ 他们 (bộ Nhân đứng).",
        reasonWrong: "Chưa đúng: 她们 chỉ được dùng khi 100% người trong nhóm là nữ giới.",
        questionAudio: [{ lang: "vi-VN", text: "Nhóm có cả nam lẫn nữ dùng chữ Hán nào?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "他们都是老师。", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g1-ex6",
        type: "Nhận diện từ loại 动作",
        prompt: "Điền từ vào câu: '老师在前面做，大家请跟着老师做____。'",
        options: ["行动", "动作", "工作", "活动"],
        correct: 1,
        reasonRight: "Chuẩn xác! Tư thế, cử động mẫu mà thầy cô thực hiện để học sinh làm theo là 动作 (động tác).",
        reasonWrong: "Chưa đúng: 行动 là kế hoạch hành động chiến lược, không dùng cho cử động thể hình.",
        questionAudio: [{ lang: "zh-CN", text: "请跟着老师做什么？", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "做动作", pause: 600 }
        ]
      }
    ],

    // THỰC HÀNH TỰ ĐẶT CÂU (ACTIVE OUTPUT) 3 TẦNG TRỢ GIÚP
    selfUse: [
      {
        id: "hsk1-b16-g1-su1",
        situation: "Tình huống: Bạn đang đứng trước cổng trường cùng một người bạn nước ngoài. Bạn muốn nói bằng tiếng Trung: 'Phía bên phải trường học có một hiệu sách rất nổi tiếng.'",
        hint1: "1. Xác định mốc chuẩn trước: Đưa 'Trường học' (学校) lên đầu, tiếp theo là từ chỉ 'bên phải' (右边), sau đó dùng cấu trúc tồn hiện 'có một' (有一个).",
        hint2: "2. Khung cấu trúc chữ Hán: 学校 + 的 + 右边 + 有 + 一个 + 很有名的 + 书店。",
        modelAnswer: "学校的右边有一个很有名的书店。",
        modelExplain: "Trường học làm mốc chuẩn đứng trước phương vị từ bên phải, tiếp theo là cụm định ngữ hiệu sách nổi tiếng.",
        questionAudio: [{ lang: "vi-VN", text: "Tình huống 1: Hãy tự nói câu Phía bên phải trường học có một hiệu sách rất nổi tiếng.", pause: 400 }],
        hint1Audio: [{ lang: "vi-VN", text: "Gợi ý 1: Đặt trường học lên trước bên phải.", pause: 300 }],
        hint2Audio: [{ lang: "vi-VN", text: "Gợi ý 2: Khung câu là trường học hữu biên hữu nhất cá ngận hữu danh đích thư điếm.", pause: 400 }],
        modelAudio: [
          { lang: "zh-CN", text: "学校的右边有一个很有名的书店。", pause: 800 },
          { lang: "vi-VN", text: "Câu chuẩn: Phía bên phải trường học có một hiệu sách rất nổi tiếng.", pause: 400 }
        ]
      },
      {
        id: "hsk1-b16-g1-su2",
        situation: "Tình huống: Bạn muốn kể với đồng nghiệp: 'Hôm nay bố tôi lái xe đưa tôi đi làm, thao tác lái xe của bố rất nhanh và an toàn.'",
        hint1: "1. Vế đầu: Bố tôi tự cầm lái (我爸爸开车) đưa tôi đi làm (送我去上班). Vế sau: Nhận xét thao tác lái xe (他的动作) rất nhanh (很快).",
        hint2: "2. Khung cấu trúc chữ Hán: 今天我爸开车送我去上班，他的动作很快也很安全。",
        modelAnswer: "今天我爸开车送我去上班，他的动作很快也很安全。",
        modelExplain: "Sử dụng đại từ thân mật bố tôi, phương thức lái xe và danh từ thao tác cử động chỉ sự nhanh nhẹn.",
        questionAudio: [{ lang: "vi-VN", text: "Tình huống 2: Hãy tự diễn đạt câu Bố lái xe đưa tôi đi làm, thao tác rất nhanh.", pause: 400 }],
        hint1Audio: [{ lang: "vi-VN", text: "Gợi ý 1: Ai lái xe đưa đi làm, thao tác ra sao?", pause: 300 }],
        hint2Audio: [{ lang: "vi-VN", text: "Gợi ý 2: Dùng ngã ba khai xa tống ngã khứ thượng ban, tha đích động tác ngận khoái.", pause: 400 }],
        modelAudio: [
          { lang: "zh-CN", text: "今天我爸开车送我去上班，他的动作很快也很安全。", pause: 800 }
        ]
      }
    ],

    // NGÂN HÀNG ÔN TẬP SRS MỐC 1 - 3 - 7 NGÀY
    reviews: [
      {
        id: "hsk1-b16-g1-rev1",
        day: 1,
        type: "Phản xạ trật tự từ",
        q: "Người đi đường hỏi bạn hiệu sách ở đâu. Bạn muốn nói 'Đi về phía bên phải', tiếng Trung nói thế nào?",
        answer: "往右走。",
        explain: "Chỉ hướng đi về bên phải bắt buộc dùng giới từ chỉ hướng 往 hoặc 向 kết hợp với 右 và động từ 走: 往右走.",
        listenAudio: [{ lang: "vi-VN", text: "Hỏi: Nói Đi về phía bên phải bằng tiếng Trung thế nào?", pause: 300 }],
        audio: [
          { lang: "zh-CN", text: "往右走。", pause: 700 },
          { lang: "vi-VN", text: "Đáp án là: Vãng hữu tẩu.", pause: 300 }
        ]
      },
      {
        id: "hsk1-b16-g1-rev2",
        day: 3,
        type: "Phân biệt bẫy động từ",
        q: "Bạn đi làm bằng xe buýt với tư cách hành khách. Hãy nói câu 'Tôi đi xe buýt đi làm' mà không mắc bẫy 开车.",
        answer: "我坐公共汽车去上班。",
        explain: "Hành khách ngồi xe công cộng phải dùng 坐车 (ngồi xe); tuyệt đối không dùng 开车 (chỉ người tài xế lái).",
        listenAudio: [{ lang: "vi-VN", text: "Hỏi: Nói câu Tôi đi xe buýt đi làm mà không mắc bẫy khai xa.", pause: 300 }],
        audio: [
          { lang: "zh-CN", text: "我坐公共汽车去上班。", pause: 700 },
          { lang: "vi-VN", text: "Hành khách phải dùng tọa công cộng khí xa khứ thượng ban.", pause: 300 }
        ]
      },
      {
        id: "hsk1-b16-g1-rev3",
        day: 7,
        type: "Vận dụng ngữ cảnh tổng hợp",
        q: "Hãy nói: 'Nhà ga nằm ở phía bắc của trường đại học, bọn họ đều đang đợi ở đó.'",
        answer: "车站在大学的北边，他们都在那里等。",
        explain: "Kết hợp mốc trường học đứng trước bắc biên (大学北边) và đại từ nhân xưng số nhiều (他们) đi với phó từ 都.",
        listenAudio: [{ lang: "vi-VN", text: "Hỏi: Nói Nhà ga ở phía bắc trường đại học, họ đều đợi ở đó.", pause: 300 }],
        audio: [
          { lang: "zh-CN", text: "车站在大学的北边，他们都在那里等。", pause: 800 }
        ]
      }
    ]
  };

  // ==========================================
  // NHÓM 2: HÀNH ĐỘNG SONG SONG, ĐÁNH GIÁ & ĐỜI SỐNG HỌC ĐƯỜNG
  // ==========================================
  const group2 = {
    id: "hsk1-bai-16-g2",
    title: "Nhóm 2: Hành Động Song Song, Đánh Giá & Đời Sống Học Đường",
    desc: "Học cách dùng chuyên sâu các từ: 一边, 真的, 下课, 有名, 大学, 这里; nắm vững cấu trúc đồng thời và động từ ly hợp.",
    words: [
      // --- TỪ 7: 一边 ---
      {
        id: "hsk1-bai-16-g2-w7",
        index": 7,
        hanzi: "一边",
        pinyin: "yībiān",
        coreMeaning: "Một bên; vừa... vừa... (hai hành động diễn ra song song)",
        introAudio: [
          { lang: "zh-CN", text: "一边", pause: 500 },
          { lang: "vi-VN", text: "Một bên; vừa... vừa... diễn tả hai hành động đồng thời", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi người nói thực hiện hoặc quan sát ai đó tiến hành cùng lúc hai hành vi trong cùng một khoảng thời gian.",
          detail: "Có 2 công năng: 1. Danh từ chỉ phương vị không gian: 路的一边 (Một bên đường). 2. Cấu trúc liên từ song hành: 一边 [Hành động 1] 一边 [Hành động 2] (Vừa làm việc này vừa làm việc kia).",
          keyPoint: "Bắt buộc 2 hành động phải diễn ra ĐỒNG THỜI 100% trong cùng một thời điểm.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ bảy: Nhất biên, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "一边", pause: 400 },
            { lang: "vi-VN", text: "dùng trong cấu trúc vừa làm việc này vừa làm việc kia song song.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Cấu trúc hai hành động đồng thời",
            pattern: "[Chủ ngữ] + 一边 + [Động từ 1] + 一边 + [Động từ 2]",
            note: "Ví dụ: 我一边听音乐一边看书 (Tôi vừa nghe nhạc vừa đọc sách).",
            audio: [
              { lang: "zh-CN", text: "我一边听音乐一边看书。", pause: 800 },
              { lang: "vi-VN", text: "Tôi vừa nghe nhạc vừa đọc sách.", pause: 400 }
            ]
          },
          {
            title: "2. Danh từ phương vị không gian",
            pattern: "路的一边是……，另一边是……",
            note: "Một bên đường là... bên còn lại là...",
            audio: [
              { lang: "zh-CN", text: "路的一边是大学，另一边是书店。", pause: 800 },
              { lang: "vi-VN", text: "Một bên đường là trường đại học, bên kia là hiệu sách.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "我喜欢一边听音乐一边写作业。",
            vi: "Tôi thích vừa nghe nhạc vừa làm bài tập.",
            situation: "Chia sẻ về thói quen học tập và thư giãn cá nhân buổi tối.",
            analysis: "Nghe nhạc và làm bài tập diễn ra cùng lúc, chia đôi sự chú ý một cách hài hòa.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Vừa nghe nhạc vừa làm bài tập.", pause: 300 },
              { lang: "zh-CN", text: "我喜欢一边听音乐一边写作业。", pause: 800 }
            ]
          },
          {
            zh: "爸爸一边喝茶一边看书。",
            vi: "Bố vừa uống trà vừa đọc sách.",
            situation: "Miêu tả hình ảnh bố thư giãn thảnh thơi vào sáng chủ nhật.",
            analysis: "Hai động từ 喝茶 (uống trà) và 看书 (đọc sách) kết nối trực tiếp với 一边.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Bố vừa thưởng trà vừa đọc sách.", pause: 300 },
              { lang: "zh-CN", text: "爸爸一边喝茶一边看书。", pause: 800 }
            ]
          },
          {
            zh: "路的一边是大学，另一边是车站。",
            vi: "Một bên đường là trường đại học, bên còn lại là nhà ga.",
            situation: "Mô tả cảnh quan hai bên đại lộ chính trước cổng trường.",
            analysis: "Sử dụng 一边 với ý nghĩa danh từ chỉ ranh giới không gian.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Miêu tả hai bên con đường.", pause: 300 },
              { lang: "zh-CN", text: "路的一边是大学，另一边是车站。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy dùng 一边...一边... cho hai hành động diễn ra trước - sau",
            situation: "Bạn muốn nói 'Tôi ăn cơm xong rồi đi ngủ' nhưng lại dùng cấu trúc 一边...一边...",
            explanation: "Cấu trúc 一边...一边... bắt buộc hai hành động phải diễn ra ĐỒNG THỜI. Bạn không thể vừa ăn cơm vừa ngủ được. Những hành động nối tiếp theo thứ tự thời gian phải dùng cấu trúc 先……再…… (Trước tiên... sau đó...).",
            wrong: "我一边吃完饭一边去睡觉。 (Phi logic thực tế)",
            right: "我先吃晚饭，再去睡觉。 (Hành động trước sau dùng 先...再...)",
            tip: "Đồng thời 100% -> Dùng 一边...一边... Trước - sau tuần tự -> Dùng 先...再...",
            boundary: "Không dùng cho các hành động gây nguy hiểm tính mạng: Lái xe thì không nên vừa lái vừa bấm điện thoại.",
            comparisons: [
              { zh: "一边看书一边听音乐", vi: "Vừa đọc vừa nghe (Đồng thời)" },
              { zh: "先洗手再吃饭", vi: "Rửa tay trước rồi mới ăn cơm (Trước sau)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Cảnh báo: Nhất biên nhất biên chỉ dùng cho hai việc xảy ra đồng thời. Việc trước sau phải dùng tiên... tái...", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "Biến điệu của chữ 一: Khi đứng trước 边 (thanh 1), chữ 一 biến điệu thành thanh bốn: yìbiān.",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm biến điệu thanh bốn:", pause: 300 },
            { lang: "zh-CN", text: "一边", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ 一 là một nét ngang. Chữ Biên (边) có bộ Quai xước (辶) bao quanh chữ Lực (力).",
          audio: [
            { lang: "vi-VN", text: "Nhận diện chữ Hán: Chữ Biên có bộ Quai xước bên ngoài.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: 一边 [Động từ 1] 一边 [Động từ 2] (Đồng thời 100%).",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Hai việc xảy ra cùng lúc dùng cấu trúc nhất biên nhất biên.", pause: 400 }
        ]
      },

      // --- TỪ 8: 真的 ---
      {
        id: "hsk1-bai-16-g1-w8",
        index": 8,
        hanzi: "真的",
        pinyin: "zhēnde",
        coreMeaning: "Thật sự, thật đấy, quả thật (xác nhận tính chân thực)",
        introAudio: [
          { lang: "zh-CN", text: "真的", pause: 500 },
          { lang: "vi-VN", text: "Thật sự, thật đấy, quả thật chân thành", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi khẳng định một sự việc là thật 100%, hoặc bày tỏ cảm xúc chân thành trước một lời khen, hoặc hỏi lại để xác nhận tin tức giật gân.",
          detail: "Có 2 cách dùng phổ biến: 1. Đứng trước hình dung từ/động từ làm trạng ngữ tăng sức nặng: 真的很好 (Thật sự rất tốt). 2. Dùng trong câu hỏi xác nhận: 真的吗？ (Thật vậy sao?).",
          keyPoint: "Biểu đạt tính chân thực khách quan và mức độ cảm xúc chân thành.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ tám: Chân đích, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "真的", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là thật sự, thật đấy.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Câu hỏi xác nhận thông tin",
            pattern: "真的吗？ / 是真的吗？",
            note: "Hỏi lại khi nghe một tin tức bất ngờ.",
            audio: [
              { lang: "zh-CN", text: "真的吗？我也想去。", pause: 800 },
              { lang: "vi-VN", text: "Thật vậy sao? Tôi cũng muốn đi.", pause: 400 }
            ]
          },
          {
            title: "2. Trạng ngữ gia tăng mức độ chân thành",
            pattern: "真的 + [Tính từ: 好 / 高兴 / 漂亮] hoặc [Động từ: 喜欢 / 想去]",
            note: "Tăng cường tính chân thực: 真的很高兴 (Thực sự rất vui mừng).",
            audio: [
              { lang: "zh-CN", text: "这个汉语老师真的很好。", pause: 800 },
              { lang: "vi-VN", text: "Thầy giáo tiếng Trung này thật sự rất tuyệt vời.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "这个汉语老师真的很好。",
            vi: "Thầy giáo tiếng Trung này thật sự rất tốt.",
            situation: "Khen ngợi thầy giáo với bạn học khi được hỏi ý kiến giới thiệu lớp học.",
            analysis: "真的 đứng trước tính từ 好 biểu thị sự đánh giá chân thành xuất phát từ đáy lòng.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Thầy giáo tiếng Trung thực sự rất tốt.", pause: 300 },
              { lang: "zh-CN", text: "这个汉语老师真的很好。", pause: 800 }
            ]
          },
          {
            zh: "是真的吗？我有点儿不太相信。",
            vi: "Có thật không vậy? Tôi có chút không tin lắm.",
            situation: "Phản ứng bất ngờ khi nghe bạn cùng phòng trúng vé số hoặc học bổng lớn.",
            analysis: "是真的吗 là mẫu câu cố định để yêu cầu người nói tái khẳng định sự thật.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Hỏi lại để xác minh tin tức.", pause: 300 },
              { lang: "zh-CN", text: "是真的吗？我有点儿不太相信。", pause: 800 }
            ]
          },
          {
            zh: "今天能见到你，我真的非常高兴！",
            vi: "Hôm nay được gặp bạn, tôi thật sự vô cùng vui sướng!",
            situation: "Bày tỏ niềm hân hoan khi gặp lại người bạn thân lâu năm xa cách.",
            analysis: "真的非常高兴 là sự kết hợp kép giữa tính xác thực và mức độ vui vẻ cực đỉnh.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Bày tỏ niềm vui chân thành khi hội ngộ.", pause: 300 },
              { lang: "zh-CN", text: "今天能见到你，我真的非常高兴！", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy ngộ nhận 真的 chỉ dùng để hỏi mà không biết làm trạng ngữ",
            situation: "Nhiều người nghĩ chữ 真的 chỉ có trong câu hỏi '真的吗？'.",
            explanation: "Trong khẩu ngữ thực tế, 真的 xuất hiện dày đặc trước tính từ và động từ tâm lý để bày tỏ sự chân thành: 真的很喜欢, 真的想去. Không chỉ giới hạn trong câu nghi vấn.",
            wrong: "Hạn chế chỉ dùng 真 mà không dám dùng 真的.",
            right: "这部电影真的很好看！ (Rất tự nhiên)",
            tip: "Dùng 真的 + Tính từ để lời khen của bạn nghe chân thành gấp đôi.",
            boundary: "Trong câu cảm thán ngắn có ngữ khí từ: 真好看啊 thường phổ biến hơn 真的好看啊.",
            comparisons: [
              { zh: "真的很好", vi: "Thật sự rất tốt (Đánh giá khách quan, chân thành)" },
              { zh: "真好！", vi: "Tốt quá! (Cảm thán tức thời)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Lưu ý: Chân đích đứng trước tính từ làm lời khen ngợi thêm phần chân thành.", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "zhēn (thanh 1 bằng phẳng) + de (thanh nhẹ lướt nhanh).",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "真的", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Chân (真) có nét thập ở trên, thân giữa có 3 nét ngang khép kín bên trong, chân dưới là nét phẩy và chấm.",
          audio: [
            { lang: "vi-VN", text: "Chữ Chân bên trong có ba nét ngang, đừng viết thiếu nét.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: 真的吗？ (Hỏi thật à?); 真的 + [Tính từ] (Thật sự rất...).",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng từ Chân đích: Hỏi xác nhận dùng chân đích ma, khen chân thành dùng chân đích ngận hảo.", pause: 400 }
        ]
      },

      // --- TỪ 9: 下课 ---
      {
        id: "hsk1-bai-16-g2-w9",
        index": 9,
        hanzi: "下课",
        pinyin: "xiàkè",
        coreMeaning: "Tan học, hết giờ học, kết thúc buổi học",
        introAudio: [
          { lang: "zh-CN", text: "下课", pause: 500 },
          { lang: "vi-VN", text: "Tan học, hết tiết, kết thúc giờ học", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi chuông báo hết tiết vang lên, giáo viên cho học sinh nghỉ, hoặc hẹn bạn bè làm gì đó sau giờ tan trường.",
          detail: "Động từ ly hợp (下 + 课). Biểu thị hành vi kết thúc một tiết học hoặc buổi học. Trái nghĩa với 上课 (vào lớp/bắt đầu học).",
          keyPoint: "Là động từ ly hợp: TUYỆT ĐỐI KHÔNG mang tân ngữ môn học phía sau.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ chín: Hạ khóa, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "下课", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là tan học, hết giờ giảng.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Mốc thời gian sau giờ học",
            pattern: "下课 + 以后 / 后，[Hành động tiếp theo]",
            note: "Ví dụ: 下课以后，我们去书店吧 (Sau khi tan học, chúng mình đi hiệu sách nhé).",
            audio: [
              { lang: "zh-CN", text: "下课以后，我们去书店吧。", pause: 800 },
              { lang: "vi-VN", text: "Hết tiết học chúng ta cùng đi hiệu sách nhé.", pause: 400 }
            ]
          },
          {
            title: "2. Thời điểm hết giờ cụ thể",
            pattern: "[Mốc giờ] + 下课",
            note: "Ví dụ: 我们下午四点下课 (Bọn tôi tan học lúc 4 giờ chiều).",
            audio: [
              { lang: "zh-CN", text: "我们下午四点下课。", pause: 800 },
              { lang: "vi-VN", text: "Chúng tôi bốn giờ chiều tan học.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "老师说：“同学们，下课了！”",
            vi: "Thầy giáo nói: “Các em học sinh, tan học rồi!”",
            situation: "Lời tuyên bố của giáo viên khi đồng hồ điểm hết giờ giảng bài trên lớp.",
            analysis: "下课了 với trợ từ ngữ khí 了 biểu thị trạng thái tiết học đã chính thức kết thúc.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Lời báo tan học của thầy giáo.", pause: 300 },
              { lang: "zh-CN", text: "老师说：“同学们，下课了！”", pause: 800 }
            ]
          },
          {
            zh: "下课以后，我们去学校右边的书店买书吧。",
            vi: "Sau khi tan học, chúng mình đến hiệu sách bên phải trường mua sách nhé.",
            situation: "Rủ bạn học cùng lớp đi mua tài liệu sau khi nghe xong bài giảng.",
            analysis: "下课以后 làm trạng ngữ thời gian ở đầu câu, xác định rõ thời điểm xuất phát.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Rủ nhau đi hiệu sách sau giờ học.", pause: 300 },
              { lang: "zh-CN", text: "下课以后，我们去学校右边的书店买书吧。", pause: 800 }
            ]
          },
          {
            zh: "你今天几点下课？我开车去接你。",
            vi: "Hôm nay bạn mấy giờ tan học? Tôi lái xe qua đón bạn.",
            situation: "Người thân hoặc bạn bè gọi điện hỏi giờ tan trường để chủ động đón xe.",
            analysis: "几点下课 là câu hỏi giờ giấc kết thúc buổi học thông dụng nhất.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Hỏi giờ tan học để đón xe.", pause: 300 },
              { lang: "zh-CN", text: "你今天几点下课？我开车去接你。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy ghép tân ngữ môn học vào sau động từ ly hợp 下课",
            situation: "Bạn muốn nói 'Học xong môn tiếng Trung rồi' và dịch thành '下课汉语了'.",
            explanation: "下课 là động từ ly hợp (Động từ 下 + Danh từ 课). Trong ngữ pháp tiếng Trung, động từ ly hợp KHÔNG ĐƯỢC mang thêm bất kỳ tân ngữ nào phía sau nó nữa. Muốn nói học xong môn tiếng Trung, phải đưa tên môn học lên trước làm định ngữ cho 课: 汉语课下课了, hoặc dùng cụm 上完汉语课.",
            wrong: "我下课汉语了。 (Sai ngữ pháp nghiêm trọng)",
            right: "我的汉语课下课了。 / 上完汉语课了。 (Chuẩn xác)",
            tip: "Đã có chữ 课 thì không nhét thêm tên môn học phía sau nó nữa.",
            boundary: "Phân biệt 下课 (kết thúc một tiết học) với 放学 (kết thúc toàn bộ ngày học ở trường, học sinh ra về).",
            comparisons: [
              { zh: "下课", vi: "Hết tiết học / Tan một buổi học" },
              { zh: "放学", vi: "Tan trường (Hết sạch các tiết trong ngày, về nhà)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Cảnh báo động từ ly hợp: Tuyệt đối không nói hạ khóa hán ngữ. Phải nói hán ngữ khóa hạ khóa liễu.", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "Cả hai âm đều thanh bốn: xià - kè. Âm kè bật hơi mạnh ở vòm họng.",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm bật hơi:", pause: 300 },
            { lang: "zh-CN", text: "下课", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Hạ (下) có nét ngang ở trên, nét sổ và chấm ở dưới. Chữ Khóa (课) có bộ Ngôn (讠) và chữ Quả (果).",
          audio: [
            { lang: "vi-VN", text: "Chữ Khóa liên quan đến ngôn từ bài học nên có bộ Ngôn đứng đầu.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: 下课以后 + [Hành động]; Không mang tân ngữ môn học sau 下课.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Tan học là hạ khóa, sau giờ học là hạ khóa dĩ hậu.", pause: 400 }
        ]
      },

      // --- TỪ 10: 有名 ---
      {
        id: "hsk1-bai-16-g1-w10",
        index": 10,
        hanzi: "有名",
        pinyin: "yǒumíng",
        coreMeaning: "Có tiếng, nổi tiếng (được nhiều người biết đến)",
        introAudio: [
          { lang: "zh-CN", text: "有名", pause: 500 },
          { lang: "vi-VN", text: "Nổi tiếng, có tiếng tăm lừng lẫy", pause: 500 }
        ],
        meaning: {
          situation: "Dùng để khen ngợi hoặc giới thiệu danh lam thắng cảnh, trường đại học lớn, nhân vật lừng danh, món ăn đặc sản.",
          detail: "Hình dung từ (tính từ) chỉ danh tiếng. Có thể làm vị ngữ trong câu: 很有名 (rất nổi tiếng) HOẶC làm định ngữ bổ nghĩa cho danh từ: 有名的大学 (trường đại học nổi tiếng).",
          keyPoint: "Bản thân là tính từ: KHÔNG cần thêm động từ 是 khi đứng trước 很有名.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ mười: Hữu danh, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "有名", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là có tiếng tăm, nổi tiếng.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Vị ngữ tính từ miêu tả",
            pattern: "[Chủ ngữ] + (在 + Địa điểm) + 很有名",
            note: "Ví dụ: 这所大学在中国很有名 (Trường đại học này rất nổi tiếng ở Trung Quốc).",
            audio: [
              { lang: "zh-CN", text: "这所大学很有名。", pause: 800 },
              { lang: "vi-VN", text: "Trường đại học này rất nổi tiếng.", pause: 400 }
            ]
          },
          {
            title: "2. Định ngữ bổ nghĩa cho danh từ",
            pattern: "有名的 + [Danh từ: 人 / 老师 / 地方 / 菜]",
            note: "Ví dụ: 有名的中国菜 (Món ăn Trung Quốc nổi tiếng).",
            audio: [
              { lang: "zh-CN", text: "北京烤鸭是一道很有名的中国菜。", pause: 800 },
              { lang: "vi-VN", text: "Vịt quay Bắc Kinh là một món ăn Trung Quốc rất nổi tiếng.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "这所大学在中国很有名。",
            vi: "Trường đại học này rất nổi tiếng ở Trung Quốc.",
            situation: "Giới thiệu ngôi trường danh giá mà bạn bè hoặc người thân đang theo học.",
            analysis: "在中国 là giới từ phạm vi; 很有名 làm vị ngữ miêu tả trực tiếp.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Trường đại học nổi tiếng ở Trung Quốc.", pause: 300 },
              { lang: "zh-CN", text: "这所大学在中国很有名。", pause: 800 }
            ]
          },
          {
            zh: "我想买那位有名的老师写的书。",
            vi: "Tôi muốn mua cuốn sách do người thầy giáo nổi tiếng kia viết.",
            situation: "Tìm kiếm sách giáo trình chất lượng của các tác giả uy tín trong hiệu sách.",
            analysis: "有名的 làm định ngữ bổ nghĩa cho danh từ người thầy (老师).",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Mua sách của thầy giáo nổi tiếng.", pause: 300 },
              { lang: "zh-CN", text: "我想买那位有名的老师写的书。", pause: 800 }
            ]
          },
          {
            zh: "这是一家很有名的老书店，开了三十年了。",
            vi: "Đây là một hiệu sách cũ rất có tiếng tăm, đã mở được ba mươi năm rồi.",
            situation: "Kể về bề dày lịch sử của hiệu sách truyền thống bên cạnh trường học.",
            analysis: "Cụm tính từ 很有名 bổ nghĩa cho danh từ hiệu sách cũ (老书店).",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Hiệu sách cũ rất có tiếng tăm.", pause: 300 },
              { lang: "zh-CN", text: "这是一家很有名的老书店，开了三十年了。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy chèn động từ '是' vào trước vị ngữ tính từ 有名",
            situation: "Người Việt nghĩ 'Trường đại học này LÀ rất nổi tiếng' nên dịch thành '这所大学是很有名'.",
            explanation: "Trong ngữ pháp tiếng Trung cơ bản, vị ngữ hình dung từ không cần dùng động từ 是, chỉ cần dùng phó từ mức độ 很 đứng trước tính từ: 这所大学很有名. Nếu dùng 是很有名 thì mang sắc thái nhấn mạnh khẳng định đối lập (Ừ thì công nhận là nổi tiếng thật đấy nhưng mà...).",
            wrong: "这所大学是很有名。 (Dư thừa chữ 是 trong câu miêu tả trung tính)",
            right: "这所大学很有名。 (Chuẩn mực tự nhiên)",
            tip: "Câu miêu tả tính từ: Bỏ động từ 是 đi, chỉ giữ lại 很 + 有名.",
            boundary: "Phân biệt 有名 (nổi tiếng) với 有名字 (có tên gọi, có danh xưng cụ thể).",
            comparisons: [
              { zh: "他很有名", vi: "Anh ấy rất nổi tiếng (Ai cũng biết)" },
              { zh: "这只狗有名字", vi: "Con chó này có tên đặt rồi (Không phải vô danh)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Lưu ý: Không chèn động từ thị vào trước ngận hữu danh trong câu miêu tả bình thường.", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "yǒu (thanh 3 giữ trầm) + míng (thanh 2 vuốt lên cao).",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "有名", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Hữu (有) có nét ngang phẩy và chữ Nguyệt (月). Chữ Danh (名) có chữ Tịch (夕) và chữ Khẩu (口).",
          audio: [
            { lang: "vi-VN", text: "Chữ Danh gồm chữ Tịch là đêm tối và chữ Khẩu là miệng gọi tên.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: [Chủ ngữ] + 很有名; Có tiếng: 有名的 + [Danh từ].",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Nổi tiếng dùng ngận hữu danh, người nổi tiếng dùng hữu danh đích nhân.", pause: 400 }
        ]
      },

      // --- TỪ 11: 大学 ---
      {
        id: "hsk1-bai-16-g1-w11",
        index": 11,
        hanzi: "大学",
        pinyin: "dàxué",
        coreMeaning: "Đại học, trường đại học (bậc giáo dục đại học)",
        introAudio: [
          { lang: "zh-CN", text: "大学", pause: 500 },
          { lang: "vi-VN", text: "Đại học, trường đại học", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi nói về cơ sở đào tạo giáo dục bậc cao, giảng đường đại học, hoặc thời kỳ thanh xuân sinh viên.",
          detail: "Danh từ chỉ trường đại học hoặc bậc đại học. Lượng từ tiêu chuẩn của trường đại học là '所' (suǒ): 一所大学. Khi nói đi học đại học, người bản xứ dùng cụm '上大学' hoặc '在大学读书'.",
          keyPoint: "Học đại học = 上大学 hoặc 在大学读书 (KHÔNG dùng *学大学*).",
          audio: [
            { lang: "vi-VN", text: "Từ thứ mười một: Đại học, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "大学", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là trường đại học hoặc bậc học đại học.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Động từ học đại học chuẩn bản xứ",
            pattern: "上大学 / 在大学读书",
            note: "Ví dụ: 我姐在大学读书 (Chị tôi đang theo học đại học).",
            audio: [
              { lang: "zh-CN", text: "我姐在大学读书。", pause: 800 },
              { lang: "vi-VN", text: "Chị tôi đang học đại học.", pause: 400 }
            ]
          },
          {
            title: "2. Lượng từ chuẩn của trường đại học",
            pattern: "一所 + 很有名的 + 大学",
            note: "Lượng từ 所 dùng cho trường học, bệnh viện, cơ quan.",
            audio: [
              { lang: "zh-CN", text: "这是一所很有名的大学。", pause: 800 },
              { lang: "vi-VN", text: "Đây là một trường đại học rất nổi tiếng.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "我哥哥在北京的一所大学读书。",
            vi: "Anh trai tôi đang học tại một trường đại học ở Bắc Kinh.",
            situation: "Kể về việc học tập xa nhà của anh trai tại thủ đô.",
            analysis: "一所大学 sử dụng lượng từ 所 chuẩn mực; 读书 mang nghĩa theo học sinh viên.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Anh trai học ở trường đại học Bắc Kinh.", pause: 300 },
              { lang: "zh-CN", text: "我哥哥在北京的一所大学读书。", pause: 800 }
            ]
          },
          {
            zh: "大学里有很多外国留学生。",
            vi: "Trong trường đại học có rất nhiều du học sinh nước ngoài.",
            situation: "Miêu tả không khí giao lưu quốc tế năng động trong khuôn viên trường.",
            analysis: "大学里 kết hợp từ chỉ vị trí 里 (bên trong khuôn viên trường đại học).",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Trong trường đại học có nhiều du học sinh.", pause: 300 },
              { lang: "zh-CN", text: "大学里有很多外国留学生。", pause: 800 }
            ]
          },
          {
            zh: "他们都是我的大学同学。",
            vi: "Bọn họ đều là bạn học thời đại học của tôi.",
            situation: "Giới thiệu những người bạn cùng khóa với người thân gia đình.",
            analysis: "大学同学 là cụm danh từ cố định: bạn học đại học.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Bạn học thời đại học.", pause: 300 },
              { lang: "zh-CN", text: "他们都是我的大学同学。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy dịch 'Học đại học' thành '学大学'",
            situation: "Bạn muốn nói 'Tôi đang học đại học' và dùng động từ 学 thành '我学大学'.",
            explanation: "Động từ 学 chỉ đi kèm với tên môn học hoặc kỹ năng cụ thể: 学汉语 (học tiếng Trung), 学开车 (học lái xe). Đại học là bậc học, trường học, nên bắt buộc dùng động từ 上 (lên học): 上大学, hoặc cụm 在大学读书. Tuyệt đối không nói 学大学.",
            wrong: "我学大学四年了。 (Sai ngữ pháp)",
            right: "我上大学 / 我在大学读书。 (Chuẩn mực)",
            tip: "Môn học dùng 学; Bậc học đại học dùng 上大学.",
            boundary: "Sinh viên đại học gọi là 大学生.",
            comparisons: [
              { zh: "上大学", vi: "Học đại học (Bậc học)" },
              { zh: "学汉语", vi: "Học môn tiếng Trung (Môn học)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Lưu ý: Học đại học phải dùng thượng đại học hoặc tại đại học độc thư, không nói học đại học.", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "dà (thanh 4 giáng mạnh) + xué (thanh 2 vuốt cao).",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "大学", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Đại (大) có nét ngang, phẩy và mác. Chữ Học (学) có bộ Mịch ở trên và chữ Tử (子) ở dưới.",
          audio: [
            { lang: "vi-VN", text: "Nhận diện mặt chữ: Chữ Đại to lớn ghép với chữ Học học tập.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Học đại học = 上大学; Lượng từ = 一所大学; Bạn đại học = 大学同学.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng từ Đại học: Thượng đại học là đi học đại học, lượng từ dùng nhất sở đại học.", pause: 400 }
        ]
      },

      // --- TỪ 12: 这里 ---
      {
        id: "hsk1-bai-16-g1-w12",
        index": 12,
        hanzi: "这里",
        pinyin: "zhèlǐ",
        coreMeaning: "Ở đây, nơi này, chỗ này (khoảng cách gần người nói)",
        introAudio: [
          { lang: "zh-CN", text: "这里", pause: 500 },
          { lang: "vi-VN", text: "Ở đây, nơi này, chỗ này gần người nói", pause: 500 }
        ],
        meaning: {
          situation: "Dùng để chỉ vị trí, địa điểm hoặc không gian mà người nói đang có mặt hoặc ở khoảng cách rất gần tầm với.",
          detail: "Đại từ chỉ định nơi chốn. Đồng nghĩa với '这儿' (zhèr - phổ biến ở miền bắc Trung Quốc). Thường đi sau giới từ 在: '在这里' (ở đây), hoặc làm chủ ngữ chỉ địa điểm.",
          keyPoint: "Đại từ chỉ nơi chốn độc lập. Ở đây = 在这里 / 在这儿 (KHÔNG dùng *在这个*).",
          audio: [
            { lang: "vi-VN", text: "Từ thứ mười hai: Giá lý, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "这里", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là ở đây, nơi này.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Trạng ngữ nơi chốn chỉ vị trí hiện tại",
            pattern: "在 + 这里 + [Động từ hành động]",
            note: "Ví dụ: 我们在这里等你 (Chúng tôi chờ bạn ở đây).",
            audio: [
              { lang: "zh-CN", text: "我们在这里等你。", pause: 800 },
              { lang: "vi-VN", text: "Chúng tôi đợi bạn ở đây.", pause: 400 }
            ]
          },
          {
            title: "2. Chủ ngữ chỉ cảnh quan địa điểm",
            pattern: "这里 + [Tính từ / Hiện tượng]",
            note: "Ví dụ: 这里人很多 (Ở đây rất đông người).",
            audio: [
              { lang: "zh-CN", text: "这里的人真多！", pause: 800 },
              { lang: "vi-VN", text: "Người ở đây đông thật đấy!", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "我们在这里学汉语。",
            vi: "Chúng tôi học tiếng Trung ở nơi này.",
            situation: "Nói với người lạ về địa điểm lớp học mà cả nhóm đang theo học.",
            analysis: "在这里 là cụm giới từ chỉ địa điểm đứng trước động từ 学汉语.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Học tiếng Trung ở đây.", pause: 300 },
              { lang: "zh-CN", text: "我们在这里学汉语。", pause: 800 }
            ]
          },
          {
            zh: "这里的天气非常好，不冷也不热。",
            vi: "Thời tiết ở đây rất đẹp, không lạnh cũng không nóng.",
            situation: "Khen ngợi khí hậu dễ chịu khi vừa đặt chân tới thành phố du lịch.",
            analysis: "这里的天气 đưa đại từ nơi chốn lên làm định ngữ bổ nghĩa cho thời tiết.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Thời tiết ở đây rất tuyệt vời.", pause: 300 },
              { lang: "zh-CN", text: "这里的天气非常好，不冷也不热。", pause: 800 }
            ]
          },
          {
            zh: "请问，这里有人坐吗？",
            vi: "Xin hỏi, chỗ này đã có ai ngồi chưa ạ?",
            situation: "Hỏi lịch sự trước khi kéo ghế ngồi xuống bàn trong thư viện hoặc quán cà phê.",
            analysis: "这里 đại diện cho vị trí chiếc ghế ngồi gần người đối thoại.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Xin hỏi chỗ này có ai ngồi chưa.", pause: 300 },
              { lang: "zh-CN", text: "请问，这里有人坐吗？", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy dùng '在这个' khi muốn nói 'ở đây'",
            situation: "Bạn muốn nói 'Tôi chờ bạn ở đây' và buột miệng dịch thành '我在这个等你'.",
            explanation: "这个 (cái này) là đại từ chỉ thị đồ vật, bắt buộc phải có danh từ đi kèm: 个人 (người này), 本书 (cuốn sách này). Muốn nói 'ở đây' (nơi chốn) bắt buộc phải dùng đại từ nơi chốn: 这里 hoặc 这儿. Nói 在这个 mà không có danh từ là sai cấu trúc.",
            wrong: "我在这个等你。 (Sai ngữ pháp)",
            right: "我在这里 / 这儿等你。 (Chuẩn xác)",
            tip: "Nơi chốn gần -> 这里 / 这儿. Đồ vật gần -> 这个 + [Danh từ].",
            boundary: "Đối lập với khoảng cách xa: 那里 / 那儿 (ở kia, chỗ đằng kia).",
            comparisons: [
              { zh: "在这里", vi: "Ở đây (Nơi chốn)" },
              { zh: "这个东西", vi: "Đồ vật này (Đồ vật cụ thể)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Lưu ý: Nói ở đây phải dùng tại giá lý hoặc tại giá nhi, không nói tại giá cá.", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "zhè (thanh 4 giáng mạnh) + lǐ (thanh 3 trầm sâu).",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "这里", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Giá (这) có bộ Quai xước (辶) và chữ Văn (文). Chữ Lý (里) có chữ Điền (田) ở trên và chữ Thổ (土) ở dưới.",
          audio: [
            { lang: "vi-VN", text: "Chữ Lý bên trong có chữ Điền là đồng ruộng và chữ Thổ là đất đai.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Ở đây = 在这里 / 在这儿; Chờ ở đây = 在这里等.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng từ Giá lý: Ở đây là tại giá lý, đối lập với ở đằng kia là tại na lý.", pause: 400 }
        ]
      }
    ],

    // BÀI TẬP TRẮC NGHIỆM NGỮ DỤNG CHO NHÓM 2
    exercises: [
      {
        id: "hsk1-b16-g2-ex1",
        type: "Phân biệt hành động đồng thời",
        prompt: "Chọn câu diễn đạt tự nhiên nhất: 'Tôi vừa nghe nhạc vừa viết bài tập.'",
        options: [
          "我先听音乐，再一边写作业。",
          "我一边听音乐，一边写作业。",
          "我一边写完作业，一边去听音乐。",
          "我听音乐的一边在写作业。"
        ],
        correct: 1,
        reasonRight: "Chính xác! Hai hành động nghe nhạc và làm bài tập diễn ra song song 100% dùng 一边...一边...",
        reasonWrong: "Chưa đúng: Cấu trúc song hành yêu cầu đặt 一边 trước cả hai động từ.",
        questionAudio: [{ lang: "vi-VN", text: "Chọn câu diễn đạt vừa nghe nhạc vừa làm bài tập.", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "我一边听音乐，一边写作业。", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g2-ex2",
        type: "Trạng ngữ gia tăng tính chân thành",
        prompt: "Điền từ vào chỗ trống để tạo lời khen chân thành nhất: '这个汉语老师____很好，我很喜欢他。'",
        options: ["真的", "真吗", "的真", "是真的"],
        correct: 0,
        reasonRight: "Tuyệt vời! Phó từ 真的 đứng trước tính từ 很好 làm lời khen ngợi trở nên chân thành sâu sắc.",
        reasonWrong: "Chưa đúng: 真吗 không tồn tại; 是真的 không đứng trực tiếp làm trạng ngữ trước tính từ.",
        questionAudio: [{ lang: "zh-CN", text: "这个汉语老师什么很好？", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "真的很好", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g2-ex3",
        type: "Bẫy động từ ly hợp 下课",
        prompt: "Câu nào dưới đây đúng ngữ pháp tiếng Trung chuẩn bản xứ?",
        options: [
          "我们四点下课汉语课。",
          "四点下课以后，我们去书店。",
          "老师下课了同学们汉语。",
          "下课英语以后我回家。"
        ],
        correct: 1,
        reasonRight: "Chuẩn xác! 下课 là động từ ly hợp không mang tân ngữ môn học; dùng 下课以后 làm mốc thời gian là chuẩn 100%.",
        reasonWrong: "Chưa đúng: Các câu khác đều mắc bẫy nhồi nhét tên môn học (汉语, 英语) vào sau động từ ly hợp 下课.",
        questionAudio: [{ lang: "vi-VN", text: "Tìm câu dùng đúng động từ ly hợp tan học.", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "四点下课以后，我们去书店。", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g2-ex4",
        type: "Vị ngữ tính từ 有名",
        prompt: "Chọn câu đúng khi nói về danh tiếng của trường đại học:",
        options: [
          "这所大学是很有名。",
          "这所大学很有名。",
          "这所大学有名的。",
          "这所大学是在有名。"
        ],
        correct: 1,
        reasonRight: "Chính xác! Vị ngữ tính từ tiếng Trung dùng trực tiếp 很 + 有名, không chèn động từ 是.",
        reasonWrong: "Chưa đúng: Chèn 是 vào trước 很有名 là lỗi dịch từng chữ từ tiếng Việt.",
        questionAudio: [{ lang: "vi-VN", text: "Câu nào miêu tả trường đại học nổi tiếng đúng ngữ pháp?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "这所大学很有名。", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g2-ex5",
        type: "Bẫy dùng từ 'Học đại học'",
        prompt: "Muốn nói 'Chị tôi đang học đại học ở Bắc Kinh', câu nào chuẩn mực nhất?",
        options: [
          "我姐在北京学大学。",
          "我姐在北京的大学读书。",
          "我姐在北京学很大的学校。",
          "我姐在大学学读书。"
        ],
        correct: 1,
        reasonRight: "Tuyệt vời! Theo học đại học người bản xứ dùng 在大学读书 hoặc 上大学, không bao giờ dùng 学大学.",
        reasonWrong: "Chưa đúng: Tiếng Trung không dùng động từ 学 đi với danh từ bậc học 大学.",
        questionAudio: [{ lang: "vi-VN", text: "Chị tôi học đại học ở Bắc Kinh, nói thế nào chuẩn?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "我姐在北京的大学读书。", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g2-ex6",
        type: "Phân biệt đại từ nơi chốn 这里",
        prompt: "Bạn muốn bảo bạn mình: 'Cậu đứng chờ tớ ở đây nhé!', câu nào chuẩn xác?",
        options: [
          "你在在这个等我吧！",
          "你在这个等我吧！",
          "你在这里等我吧！",
          "你这儿个等我吧！"
        ],
        correct: 2,
        reasonRight: "Chuẩn xác! Đại từ nơi chốn độc lập ở đây là 这里 (hoặc 这儿), đi sau giới từ 在.",
        reasonWrong: "Chưa đúng: 这个 là chỉ định từ đồ vật, không dùng thay thế cho trạng ngữ nơi chốn.",
        questionAudio: [{ lang: "vi-VN", text: "Cậu chờ tớ ở đây nhé, câu nào đúng?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "你在这里等我吧！", pause: 600 }
        ]
      }
    ],

    // THỰC HÀNH TỰ ĐẶT CÂU (ACTIVE OUTPUT) 3 TẦNG TRỢ GIÚP
    selfUse: [
      {
        id: "hsk1-b16-g2-su1",
        situation: "Tình huống: Bạn muốn rủ bạn cùng lớp: 'Sau khi tan học, chúng mình ngồi ở đây vừa uống trà vừa đọc cuốn sách nổi tiếng này nhé!'",
        hint1: "1. Mốc thời gian: Sau khi tan học (下课以后). Nơi chốn: Ngồi ở đây (在这里坐). Hành động song song: Vừa uống trà vừa đọc sách nổi tiếng (一边喝茶一边看这本很有名的书).",
        hint2: "2. Khung cấu trúc chữ Hán: 下课以后，我们在这里一边喝茶，一边看这本很有名的书吧。",
        modelAnswer: "下课以后，我们在这里一边喝茶，一边看这本很有名的书吧。",
        modelExplain: "Kết hợp mốc thời gian tan học ở đầu câu, trạng ngữ nơi chốn ở đây, và cấu trúc hành động song hành nhất biên nhất biên.",
        questionAudio: [{ lang: "vi-VN", text: "Tình huống 1: Hãy tự nói câu Tan học xong ngồi ở đây vừa uống trà vừa đọc sách nổi tiếng.", pause: 400 }],
        hint1Audio: [{ lang: "vi-VN", text: "Gợi ý 1: Đặt tan học xong lên trước, rồi tới ngồi ở đây, rồi cấu trúc vừa vừa.", pause: 300 }],
        hint2Audio: [{ lang: "vi-VN", text: "Gợi ý 2: Khung câu hạ khóa dĩ hậu, ngã môn tại giá lý nhất biên hát trà nhất biên khán thư.", pause: 400 }],
        modelAudio: [
          { lang: "zh-CN", text: "下课以后，我们在这里一边喝茶，一边看这本很有名的书吧。", pause: 800 }
        ]
      },
      {
        id: "hsk1-b16-g2-su2",
        situation: "Tình huống: Bạn gặp lại bạn cũ và tự hào khoe: 'Trường đại học của tôi thực sự rất nổi tiếng, ở đây có rất nhiều sinh viên nước ngoài.'",
        hint1: "1. Vế đầu: Trường đại học của tôi (我的大学) thực sự rất nổi tiếng (真的很有名). Vế sau: Ở đây (这里) có rất nhiều sinh viên nước ngoài (有很多外国留学生).",
        hint2: "2. Khung cấu trúc chữ Hán: 我的大学真的很有名，这里有很多外国留学生。",
        modelAnswer: "我的大学真的很有名，这里有很多外国留学生。",
        modelExplain: "Sử dụng phó từ xác thực chân đích tăng sức nặng cho tính từ nổi tiếng, kết hợp đại từ nơi chốn giá lý làm chủ ngữ chỉ sự tồn hiện.",
        questionAudio: [{ lang: "vi-VN", text: "Tình huống 2: Khoe trường đại học của tôi thật sự rất nổi tiếng, ở đây nhiều du học sinh.", pause: 400 }],
        hint1Audio: [{ lang: "vi-VN", text: "Gợi ý 1: Trường đại học của tôi thực sự rất nổi tiếng, ở nơi này có nhiều sinh viên.", pause: 300 }],
        hint2Audio: [{ lang: "vi-VN", text: "Gợi ý 2: Ngã đích đại học chân đích ngận hữu danh, giá lý hữu ngận đa ngoại quốc lưu học sinh.", pause: 400 }],
        modelAudio: [
          { lang: "zh-CN", text: "我的大学真的很有名，这里有很多外国留学生。", pause: 800 }
        ]
      }
    ],

    // NGÂN HÀNG ÔN TẬP SRS MỐC 1 - 3 - 7 NGÀY
    reviews: [
      {
        id: "hsk1-b16-g2-rev1",
        day: 1,
        type: "Hành động song hành",
        q: "Hãy nói: 'Bố tôi vừa uống trà vừa đọc sách báo.' bằng cấu trúc song song chuẩn xác.",
        answer: "我爸爸一边喝茶一边看书。",
        explain: "Cấu trúc 一边 + [Hành động 1] + 一边 + [Hành động 2] diễn tả hai hành vi diễn ra đồng thời 100%.",
        listenAudio: [{ lang: "vi-VN", text: "Hỏi: Nói Bố tôi vừa uống trà vừa đọc sách.", pause: 300 }],
        audio: [
          { lang: "zh-CN", text: "我爸爸一边喝茶一边看书。", pause: 700 }
        ]
      },
      {
        id: "hsk1-b16-g2-rev2",
        day: 3,
        type: "Khắc phục bẫy ngữ pháp",
        q: "Bạn hết tiết học lúc 4 giờ 20 phút chiều. Hãy nói câu thông báo giờ tan học tự nhiên nhất.",
        answer: "我下午四点二十下课。",
        explain: "Đặt mốc thời gian cụ thể trước động từ ly hợp 下课, không nhồi nhét từ ngữ thừa thãi.",
        listenAudio: [{ lang: "vi-VN", text: "Hỏi: Nói Tôi tan học lúc 4 giờ 20 chiều.", pause: 300 }],
        audio: [
          { lang: "zh-CN", text: "我下午四点二十下课。", pause: 700 }
        ]
      },
      {
        id: "hsk1-b16-g2-rev3",
        day: 7,
        type: "Vận dụng ngữ cảnh tổng hợp",
        q: "Hãy nói: 'Trường đại học này thật sự rất có tiếng tăm, chúng tôi đều thích học tập ở đây.'",
        answer: "这所大学真的很有名，我们都喜欢在这里学习。",
        explain: "Kết hợp lượng từ 所 cho trường đại học, phó từ 真的 trước 很有名, và cụm giới từ 在这里 trước động từ học tập.",
        listenAudio: [{ lang: "vi-VN", text: "Hỏi: Nói Trường đại học này thực sự rất nổi tiếng, chúng tôi đều thích học ở đây.", pause: 300 }],
        audio: [
          { lang: "zh-CN", text: "这所大学真的很有名，我们都喜欢在这里学习。", pause: 800 }
        ]
      }
    ]
  };

  // Đăng ký Nhóm 1 và Nhóm 2 vào đối tượng bài học chung
  window.HSK_BAI16_DATA.groups.push(group1, group2);

  // Tự động đăng ký với ứng dụng HSK Studio để có thể học ngay 12 từ đầu tiên
  if (typeof window.HSK_REGISTER === 'function') {
    window.HSK_REGISTER(window.HSK_BAI16_DATA);
  }
})();
/**
 * HSK STUDIO - DỮ LIỆU BÀI 16 (PHẦN 2/3)
 * Bao gồm: Nhóm 3 (Từ 13 - 18) & Nhóm 4 (Từ 19 - 24)
 * Tiêu chuẩn: Đầy đủ 6 chiều tiếp cận, chuyên đề bẫy tư duy Việt - Trung, Audio queues chuẩn xác.
 */

(function(){
  // Khởi tạo hoặc lấy đối tượng lưu trữ dùng chung của Bài 16
  window.HSK_BAI16_DATA = window.HSK_BAI16_DATA || {
    id: "hsk1-bai-16",
    number: 16,
    title: "Bài 16: Từ vựng trong đời sống và giao tiếp",
    level: "HSK1",
    desc: "24 từ vựng mở rộng chuyên sâu bẫy người Việt, cùng 4 đoạn hội thoại đường dài 16-24 lượt tương tác giọng Nam – Nữ.",
    objectives: [
      "Nắm vững 24 từ vựng thực tế và bản chất ngữ dụng phân biệt với tiếng Việt.",
      "Vượt qua 24 bẫy chuyển di ngôn ngữ tiêu cực thường gặp của người học Việt Nam.",
      "Luyện phản xạ giao tiếp qua 4 đoạn hội thoại thực tế đường dài (16-24 lượt thoại)."
    ],
    groups: [],
    dialogues: []
  };

  // ==========================================
  // NHÓM 3: THỜI GIAN, XÃ HỘI, THẨM MỸ & GIA ĐÌNH
  // ==========================================
  const group3 = {
    id: "hsk1-bai-16-g3",
    title: "Nhóm 3: Thời Gian, Xã Hội, Thẩm Mỹ & Gia Đình",
    desc: "Học cách dùng chuyên sâu các từ: 有时候, 后天, 国家, 书店, 好看, 爸; phân biệt tần suất, mốc tương đối và sắc thái thẩm mỹ.",
    words: [
      // --- TỪ 13: 有时候 ---
      {
        id: "hsk1-bai-16-g3-w13",
        index: 13,
        hanzi: "有时候",
        pinyin: "yǒushíhou",
        coreMeaning: "Có lúc, có khi, thỉnh thoảng (tần suất thất thường, không liên tục)",
        introAudio: [
          { lang: "zh-CN", text: "有时候", pause: 500 },
          { lang: "vi-VN", text: "Có lúc, có khi, thỉnh thoảng, tần suất không cố định", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi miêu tả thói quen, hiện tượng thời tiết hoặc sự việc thỉnh thoảng mới diễn ra, không xảy ra đều đặn mỗi ngày.",
          detail: "Phó từ chỉ tần suất. Đứng trước vị ngữ động từ hoặc tính từ. Có thể dùng độc lập hoặc đi thành cặp song hành: 有时候……，有时候…… (Có lúc thế này, có lúc thế kia).",
          keyPoint: "Biểu thị TẦN SUẤT THẤT THƯỜNG. Tuyệt đối không nhầm với mốc thời gian diễn ra một sự việc.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ mười ba: Hữu thời hậu, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "有时候", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là có lúc, thỉnh thoảng, biểu thị tần suất không cố định.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Vị trí phó từ chỉ tần suất trong câu",
            pattern: "[Chủ ngữ] + 有时候 + [Động từ / Tính từ]",
            note: "Ví dụ: 我有时候去书店 (Tôi thỉnh thoảng đi hiệu sách).",
            audio: [
              { lang: "zh-CN", text: "我有时候去书店看书。", pause: 800 },
              { lang: "vi-VN", text: "Tôi thỉnh thoảng đến hiệu sách đọc sách.", pause: 400 }
            ]
          },
          {
            title: "2. Cấu trúc hai trạng thái đan xen",
            pattern: "有时候……，有时候……",
            note: "Miêu tả hai trạng thái hoặc hành vi luân phiên thay đổi.",
            audio: [
              { lang: "zh-CN", text: "这里的春天，有时候冷，有时候热。", pause: 800 },
              { lang: "vi-VN", text: "Mùa xuân ở đây có lúc lạnh, có lúc nóng.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "周末我有时候去学校打球，有时候在家看书。",
            vi: "Cuối tuần tôi có lúc đến trường chơi bóng, có lúc ở nhà đọc sách.",
            situation: "Chia sẻ về các hoạt động giải trí linh hoạt vào dịp cuối tuần.",
            analysis: "Sử dụng cặp liên từ 有时候……，有时候…… để kết nối hai hoạt động diễn ra tùy hứng.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Cuối tuần có lúc chơi bóng, có lúc đọc sách.", pause: 300 },
              { lang: "zh-CN", text: "周末我有时候去学校打球，有时候在家看书。", pause: 800 }
            ]
          },
          {
            zh: "爸爸工作很忙，有时候晚上不回家吃饭。",
            vi: "Bố tôi công việc rất bận, có khi buổi tối không về nhà ăn cơm.",
            situation: "Kể về lịch trình làm việc bận rộn và thất thường của người cha.",
            analysis: "有时候 đứng trước cụm phủ định 晚上不回家吃饭.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Bố bận việc, có khi không về ăn cơm tối.", pause: 300 },
              { lang: "zh-CN", text: "爸爸工作很忙，有时候晚上不回家吃饭。", pause: 800 }
            ]
          },
          {
            zh: "这个字的意思很难，有时候我也记不住。",
            vi: "Nghĩa của chữ này rất khó, thỉnh thoảng chính tôi cũng không nhớ nổi.",
            situation: "Đồng cảm và động viên bạn học khi gặp chữ Hán khó nhớ.",
            analysis: "有时候 kết hợp phó từ 也 bổ trợ cho vị ngữ phủ định khả năng.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Chữ khó, thỉnh thoảng tôi cũng quên.", pause: 300 },
              { lang: "zh-CN", text: "这个字的意思很难，有时候我也记不住。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy nhầm lẫn giữa 有时候 (tần suất) và ……的时候 (mốc thời gian)",
            situation: "Bạn muốn nói 'Khi tan học tôi sẽ gọi cho bạn' nhưng lại nói nhầm thành '有时候下课...'.",
            explanation: "Người Việt hay nhầm vì cả hai đều có chữ 'thời điểm/lúc'. Nhưng: 有时候 là phó từ chỉ tần suất (thỉnh thoảng). Còn ……的时候 là định ngữ thời gian (lúc/khi một sự việc diễn ra). Khi muốn nói 'Lúc tan học' bắt buộc phải dùng 下课的时候, tuyệt đối không dùng 有时候下课.",
            wrong: "有时候下课，我给你打电话。 (Sai logic thời gian)",
            right: "下课的时候，我给你打电话。 (Chuẩn xác)",
            tip: "Tần suất (thỉnh thoảng, có lúc) -> 有时候. Mốc sự kiện (khi làm việc gì) -> [Hành động] + 的时候.",
            boundary: "Trong khẩu ngữ thân mật, 有时候 có thể rút gọn thành 有时 (yǒushí).",
            comparisons: [
              { zh: "有时候去", vi: "Thỉnh thoảng mới đi (Chỉ tần suất thất thường)" },
              { zh: "去的时候", vi: "Lúc đi / Khi đi (Mốc thời điểm diễn ra hành động)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Cảnh báo bẫy: Thỉnh thoảng làm gì dùng hữu thời hậu ", pause: 300 },
              { lang: "zh-CN", text: "有时候", pause: 400 },
              { lang: "vi-VN", text: ". Lúc làm việc gì phải dùng chữ đích thời hậu đứng sau hành động ", pause: 300 },
              { lang: "zh-CN", text: "的时候", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "yǒu (thanh 3) + shí (thanh 2) + hou (thanh nhẹ, lướt nhanh và ngắn).",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "有时候", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Hữu (有), chữ Thời (时) có bộ Nhật (日) chỉ thời gian, chữ Hậu (候) có nét sổ nhân đứng bên trái.",
          audio: [
            { lang: "vi-VN", text: "Chữ Thời có bộ Nhật bên trái chỉ ánh mặt trời thời gian.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Tần suất = 有时候; Cặp luân phiên = 有时候……，有时候……; Lúc làm gì = [V] + 的时候.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Thỉnh thoảng dùng hữu thời hậu, không nhầm với đích thời hậu.", pause: 400 }
        ]
      },

      // --- TỪ 14: 后天 ---
      {
        id: "hsk1-bai-16-g3-w14",
        index": 14,
        hanzi: "后天",
        pinyin: "hòutiān",
        coreMeaning: "Ngày kia, ngày mốt (ngày sau ngày mai)",
        introAudio: [
          { lang: "zh-CN", text: "后天", pause: 500 },
          { lang: "vi-VN", text: "Ngày kia, ngày mốt, ngày sau ngày mai", pause: 500 }
        ],
        meaning: {
          situation: "Dùng để ấn định lịch hẹn, thời hạn nộp bài, hoặc kế hoạch di chuyển trong tương lai gần cách mốc hôm nay đúng hai ngày.",
          detail: "Danh từ chỉ thời gian tương đối. Luôn lấy ngày hôm nay làm mốc chuẩn (+2 ngày). Thường làm trạng ngữ thời gian ở đầu câu hoặc đứng ngay sau chủ ngữ.",
          keyPoint: "Mốc cố định so với HÔM NAY (+2 ngày).",
          audio: [
            { lang: "vi-VN", text: "Từ thứ mười bốn: Hậu thiên, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "后天", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là ngày mốt hoặc ngày kia.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Trạng ngữ thời gian chỉ lịch hẹn",
            pattern: "后天 + [Buổi / Giờ] + [Hành động]",
            note: "Ví dụ: 后天下午见 (Hẹn gặp vào chiều ngày kia).",
            audio: [
              { lang: "zh-CN", text: "后天下午我们一起去买书。", pause: 800 },
              { lang: "vi-VN", text: "Chiều ngày kia chúng mình cùng nhau đi mua sách.", pause: 400 }
            ]
          },
          {
            title: "2. Câu phán đoán mốc ngày",
            pattern: "后天是 + [Thứ trong tuần / Ngày tháng]",
            note: "Ví dụ: 后天是星期天 (Ngày kia là chủ nhật).",
            audio: [
              { lang: "zh-CN", text: "后天是星期天，不用上课。", pause: 800 },
              { lang: "vi-VN", text: "Ngày kia là chủ nhật, không cần đi học.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "我们后天下午在学校门口见吧。",
            vi: "Chúng mình hẹn gặp nhau ở cổng trường vào chiều ngày mốt nhé.",
            situation: "Thống nhất thời gian và địa điểm hẹn gặp với bạn cùng lớp.",
            analysis: "后天下午 là trạng ngữ thời gian; 在学校门口 là trạng ngữ nơi chốn đứng trước động từ 见.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Hẹn gặp ở cổng trường chiều ngày mốt.", pause: 300 },
              { lang: "zh-CN", text: "我们后天下午在学校门口见吧。", pause: 800 }
            ]
          },
          {
            zh: "后天我们要去参加汉语考试。",
            vi: "Ngày kia chúng tôi phải đi tham gia kỳ thi tiếng Trung.",
            situation: "Thông báo kế hoạch thi cử quan trọng sắp tới cho người nhà.",
            analysis: "后天 đứng ở đầu câu làm trạng ngữ xác định khung thời gian của sự kiện.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Ngày kia đi thi tiếng Trung.", pause: 300 },
              { lang: "zh-CN", text: "后天我们要去参加汉语考试。", pause: 800 }
            ]
          },
          {
            zh: "我姐姐后天从北京坐火车回来。",
            vi: "Chị gái tôi ngày kia sẽ đi tàu hỏa từ Bắc Kinh trở về.",
            situation: "Kể về lịch trình về thăm nhà của người thân ở xa.",
            analysis: "从北京坐火车回來 là cụm liên động chỉ phương thức và hướng di chuyển.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Chị gái ngày kia đi tàu về từ Bắc Kinh.", pause: 300 },
              { lang: "zh-CN", text: "我姐姐后天从北京坐火车回来。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy dùng 后天 khi tự sự câu chuyện quá khứ",
            situation: "Bạn kể: 'Năm ngoái tôi đến Bắc Kinh, ngày hôm sau/ngày kia tôi đi Vạn Lý Trường Thành.'",
            explanation: "后天 CHỈ ĐƯỢC DÙNG so với mốc HÔM NAY trong thời gian thực. Khi kể một câu chuyện trong quá khứ hoặc mốc tương lai xa khác, muốn nói 'ngày tiếp theo/ngày sau đó', người bản xứ bắt buộc phải dùng 第二天 (ngày hôm sau) hoặc 过两天 (hai ngày sau). Tuyệt đối không dùng 后天 trong ngữ cảnh tự sự quá khứ.",
            wrong: "去年我去北京，后天我去了长城。 (Sai logic dòng thời gian)",
            right: "去年我去北京，过了两天我去了长城。 (Chuẩn mực tự sự)",
            tip: "So với hôm nay -> Dùng 后天. So với một mốc quá khứ -> Dùng 第二天 / 过了两天.",
            boundary: "Trục thời gian 5 ngày: 前天 (hôm kia) -> 昨天 (hôm qua) -> 今天 (hôm nay) -> 明天 (ngày mai) -> 后天 (ngày kia).",
            comparisons: [
              { zh: "后天见", vi: "Ngày kia gặp (So với hôm nay)" },
              { zh: "第二天", vi: "Ngày hôm sau (So với mốc sự kiện kể lại)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Lưu ý trục thời gian: Hậu thiên chỉ dùng tính từ hôm nay. Trong lời kể chuyện quá khứ phải dùng đệ nhị thiên ", pause: 300 },
              { lang: "zh-CN", text: "第二天", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "hòu (thanh 4 giáng mạnh) + tiān (thanh 1 bằng phẳng, ngân dài).",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "后天", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Hậu (后) có nét phẩy, ngang, sổ và chữ Khẩu bên dưới. Chữ Thiên (天) có hai nét ngang và chữ Đại (大).",
          audio: [
            { lang: "vi-VN", text: "Nhận diện mặt chữ: Nhớ trục tiền thiên, tạc thiên, kim thiên, minh thiên, hậu thiên.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Hôm nay + 2 ngày = 后天; Lịch hẹn: 后天 + [Thời gian] + 见.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Ngày mốt là hậu thiên, hẹn gặp dùng hậu thiên kiến.", pause: 400 }
        ]
      },

      // --- TỪ 15: 国家 ---
      {
        id: "hsk1-bai-16-g3-w15",
        index": 15,
        hanzi: "国家",
        pinyin: "guójiā",
        coreMeaning: "Quốc gia, đất nước, nhà nước",
        introAudio: [
          { lang: "zh-CN", text: "国家", pause: 500 },
          { lang: "vi-VN", text: "Quốc gia, đất nước, nhà nước", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi nói về lãnh thổ các nước trên thế giới, văn hóa đa quốc gia, hoặc thể chế của một dân tộc.",
          detail: "Danh từ chung chỉ quốc gia hoặc đất nước. Lượng từ tiêu chuẩn là '个' (gè): 一个国家. Thường dùng trong câu hỏi lựa chọn: 哪个国家 (nước nào) hoặc 哪些国家 (những nước nào).",
          keyPoint: "Danh từ chung chỉ ĐẤT NƯỚC. Không nhầm với 家 (nhà riêng/gia đình).",
          audio: [
            { lang: "vi-VN", text: "Từ thứ mười lăm: Quốc gia, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "国家", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là đất nước, quốc gia trên thế giới.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Hỏi về quốc gia lựa chọn",
            pattern: "哪个 / 哪些 + 国家？",
            note: "Ví dụ: 你想去哪个国家？ (Bạn muốn đi quốc gia nào?).",
            audio: [
              { lang: "zh-CN", text: "你想去哪个国家？", pause: 800 },
              { lang: "vi-VN", text: "Bạn muốn đi quốc gia nào?", pause: 400 }
            ]
          },
          {
            title: "2. Lượng từ và bổ nghĩa số lượng",
            pattern: "一个 / 很多 + 国家 + 的 + [Danh từ]",
            note: "Ví dụ: 很多国家的人 (Người của rất nhiều quốc gia).",
            audio: [
              { lang: "zh-CN", text: "中国是一个很有名的国家。", pause: 800 },
              { lang: "vi-VN", text: "Trung Quốc là một quốc gia rất nổi tiếng.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "你想去哪个国家旅游？",
            vi: "Bạn muốn đi du lịch ở quốc gia nào?",
            situation: "Hỏi thăm sở thích và kế hoạch khám phá thế giới của bạn bè.",
            analysis: "哪个国家 làm tân ngữ chỉ địa điểm hướng tới của động từ 旅游.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Bạn muốn đi du lịch quốc gia nào?", pause: 300 },
              { lang: "zh-CN", text: "你想去哪个国家旅游？", pause: 800 }
            ]
          },
          {
            zh: "我们大学里有来自很多国家的留学生。",
            vi: "Trong trường đại học của chúng tôi có lưu học sinh đến từ rất nhiều quốc gia.",
            situation: "Giới thiệu môi trường học tập đa văn hóa và quốc tế tại giảng đường.",
            analysis: "来自很多国家 là cụm giới từ xuất xứ bổ nghĩa cho du học sinh (留学生).",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Sinh viên đến từ nhiều quốc gia.", pause: 300 },
              { lang: "zh-CN", text: "我们大学里有来自很多国家的留学生。", pause: 800 }
            ]
          },
          {
            zh: "我想买一本介绍世界各国的书。",
            vi: "Tôi muốn mua một cuốn sách giới thiệu về các quốc gia trên thế giới.",
            situation: "Hỏi nhân viên hiệu sách tìm tài liệu địa lý văn hóa các nước.",
            analysis: "各国 là cách nói cô đọng của 各个国家 (từng quốc gia/các nước).",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Mua sách giới thiệu các quốc gia.", pause: 300 },
              { lang: "zh-CN", text: "我想买一本介绍世界各国的书。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy nhét từ 国家 vào sau tên riêng đất nước",
            situation: "Bạn muốn giới thiệu 'Tôi đến từ đất nước Việt Nam' và dịch thành '我来自越南国家'.",
            explanation: "Trong tiếng Trung, tên các nước (như 中国, 越南, 日本) bản thân nó đã mang trọn vẹn tư cách của một quốc gia độc lập. Tuyệt đối không được nói '越南国家' hay '中国国家'. Chỉ dùng từ 国家 khi nói khái niệm chung: 哪个国家 (nước nào), 很多国家 (nhiều nước).",
            wrong: "我来自越南国家。 (Dư thừa chữ 国家)",
            right: "我来自越南。 / 越南是一个美丽的国家。 (Chuẩn người bản xứ)",
            tip: "Tên riêng nước đứng độc lập. Chỉ dùng 国家 khi làm danh từ chung (nước nào, quốc gia lớn).",
            boundary: "Phân biệt 国家 (đất nước) với 家 (ngôi nhà, gia đình riêng). Không dùng 国家 để hỏi địa chỉ nhà ở.",
            comparisons: [
              { zh: "我回国", vi: "Tôi về nước (Về tổ quốc)" },
              { zh: "我回家", vi: "Tôi về nhà (Về mái ấm gia đình riêng)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Cảnh báo bẫy: Tên đất nước đứng một mình như Việt Nam, Trung Quốc; tuyệt đối không ghép thêm quốc gia phía sau.", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "guó (thanh 2 vuốt cao) + jiā (thanh 1 cao và bằng).",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "国家", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Quốc (国) có bộ Vi (囗) bao quanh ngọc quý (玉). Chữ Gia (家) có bộ Miên (宀) là mái nhà che cho đàn lợn (豕).",
          audio: [
            { lang: "vi-VN", text: "Chữ Quốc có khung thành bao quanh bảo vệ viên ngọc quý bên trong.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Quốc gia nào = 哪个国家; Tên riêng nước đứng độc lập (không thêm 国家).",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Quốc gia nào là ná cá quốc gia, tên nước đứng độc lập.", pause: 400 }
        ]
      },

      // --- TỪ 16: 书店 ---
      {
        id: "hsk1-bai-16-g3-w16",
        index": 16,
        hanzi: "书店",
        pinyin: "shūdiàn",
        coreMeaning: "Hiệu sách, nhà sách, cửa hàng bán sách",
        introAudio: [
          { lang: "zh-CN", text: "书店", pause: 500 },
          { lang: "vi-VN", text: "Hiệu sách, nhà sách, cửa hàng bán sách", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi bạn muốn đi mua sách giáo trình, từ điển, tìm truyện tranh, hoặc hẹn bạn bè tại cửa hàng sách.",
          detail: "Danh từ chỉ nơi kinh doanh sách. Lượng từ tiêu chuẩn cho hiệu sách là '家' (jiā): 一家书店. Có thể kết hợp động từ: 去书店 (đi hiệu sách), 在书店买书/读书 (mua/đọc sách ở hiệu sách).",
          keyPoint: "Cửa hàng bán sách. Lượng từ chuẩn: 一家书店.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ mười sáu: Thư điếm, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "书店", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là hiệu sách, nhà sách bán tài liệu.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Lượng từ chuẩn của hiệu sách",
            pattern: "一家 + (很有名的) + 书店",
            note: "Lượng từ 家 dùng cho các cửa hàng, công ty, doanh nghiệp.",
            audio: [
              { lang: "zh-CN", text: "大学旁边有一家书店。", pause: 800 },
              { lang: "vi-VN", text: "Bên cạnh trường đại học có một hiệu sách.", pause: 400 }
            ]
          },
          {
            title: "2. Hành động tại hiệu sách",
            pattern: "去书店 + [买书 / 看书 / 找朋友]",
            note: "Ví dụ: 下课以后去书店 (Tan học xong đi hiệu sách).",
            audio: [
              { lang: "zh-CN", text: "我们去书店买汉语书吧。", pause: 800 },
              { lang: "vi-VN", text: "Chúng mình đi hiệu sách mua sách tiếng Trung nhé.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "学校右边有一家很大的书店。",
            vi: "Phía bên phải trường học có một hiệu sách rất lớn.",
            situation: "Chỉ đường cho tân sinh viên tìm địa điểm mua giáo trình học tập.",
            analysis: "学校右边 là mốc vị trí đứng trước; 一家很大的书店 là tân ngữ tồn tại.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Bên phải trường có hiệu sách lớn.", pause: 300 },
              { lang: "zh-CN", text: "学校右边有一家很大的书店。", pause: 800 }
            ]
          },
          {
            zh: "这家书店里有很多桌子和椅子，可以在这里看书。",
            vi: "Trong hiệu sách này có rất nhiều bàn ghế, có thể đọc sách ở đây.",
            situation: "Giới thiệu không gian yên tĩnh của hiệu sách kết hợp quán cà phê.",
            analysis: "书店里 là danh từ chỉ nơi chốn (bên trong hiệu sách).",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Hiệu sách có bàn ghế để đọc tại chỗ.", pause: 300 },
              { lang: "zh-CN", text: "这家书店里有很多桌子和椅子，可以在这里看书。", pause: 800 }
            ]
          },
          {
            zh: "我想去书店买一本介绍不同国家的书。",
            vi: "Tôi muốn đến hiệu sách mua một cuốn sách giới thiệu về các quốc gia khác nhau.",
            situation: "Bàn bạc với bạn cùng phòng về mục đích ghé thăm nhà sách chiều nay.",
            analysis: "Câu liên động: 去书店 (đi hiệu sách) để 买书 (mua sách).",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Đi hiệu sách mua sách về các nước.", pause: 300 },
              { lang: "zh-CN", text: "我想去书店买一本介绍不同国家的书。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy định kiến: Nghĩ 书店 chỉ được mua sách, không được ngồi đọc",
            situation: "Bạn thấy câu '他在书店看书' và nghĩ câu này sai vì đọc sách phải ở thư viện (图书馆).",
            explanation: "Thực tế tại Trung Quốc và hiện đại: Các hiệu sách lớn (như Tân Hoa Thư Điếm) đều có khu vực đọc sách tại chỗ miễn phí hoặc kèm cà phê sách. Do đó cụm 在书店看书 (đọc sách ở hiệu sách) là hoàn toàn tự nhiên và đúng 100%.",
            wrong: "Đồng nhất máy móc: Đọc sách chỉ dùng 图书馆, hiệu sách chỉ được nói 买书.",
            right: "在书店买书 和 在书店看书 đều chuẩn xác.",
            tip: "Hiệu sách (kinh doanh) -> 书店. Thư viện (mượn sách công cộng) -> 图书馆.",
            boundary: "Lượng từ của hiệu sách là 家 (一家书店), không dùng *一个书店* trong văn cảnh trang trọng.",
            comparisons: [
              { zh: "书店", vi: "Hiệu sách (Cửa hàng mua bán sách)" },
              { zh: "图书馆", vi: "Thư viện (Nơi mượn, tra cứu sách công cộng)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Phân biệt hiệu sách và thư viện: Hiệu sách thư điếm dùng lượng từ gia ", pause: 300 },
              { lang: "zh-CN", text: "一家书店", pause: 400 },
              { lang: "vi-VN", text: ". Thư viện mượn sách công cộng dùng đồ thư quán ", pause: 300 },
              { lang: "zh-CN", text: "图书馆", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "shū (thanh 1 cao dài, uốn lưỡi nhẹ) + diàn (thanh 4 dứt khoát).",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "书店", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Thư (书) gồm nét ngang gập móc, nét sổ và dấu chấm ở trên. Chữ Điếm (店) có bộ Nghiễm (广) che phía trên chữ Chiêm (占).",
          audio: [
            { lang: "vi-VN", text: "Chữ Điếm có bộ Nghiễm là mái nhà của cửa hàng.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Lượng từ = 一家书店; Đi hiệu sách = 去书店买书 / 看书.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Một hiệu sách là nhất gia thư điếm, đi hiệu sách là khứ thư điếm.", pause: 400 }
        ]
      },

      // --- TỪ 17: 好看 ---
      {
        id: "hsk1-bai-16-g3-w17",
        index": 17,
        hanzi: "好看",
        pinyin: "hǎokàn",
        coreMeaning: "Đẹp, ưa nhìn (ngoại hình); hay, cuốn hút (nội dung phim ảnh, sách báo)",
        introAudio: [
          { lang: "zh-CN", text: "好看", pause: 500 },
          { lang: "vi-VN", text: "Đẹp mắt, ưa nhìn về ngoại hình; hay, hấp dẫn về nội dung phim sách", pause: 500 }
        ],
        meaning: {
          situation: "Dùng để khen ngợi diện mạo người, màu sắc kiểu dáng quần áo (đẹp) HOẶC khen ngợi nội dung phim, kịch, tiểu thuyết, truyện tranh (hay, hấp dẫn).",
          detail: "Hình dung từ đa năng thuộc giác quan thị giác. Có thể làm vị ngữ: 很好看 HOẶC làm định ngữ: 好看的电影 (bộ phim hay), 好看的衣服 (bộ quần áo đẹp).",
          keyPoint: "Thị giác: Ngoại hình = ĐẸP; Tác phẩm thị giác (phim/sách) = HAY.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ mười bảy: Hảo khán, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "好看", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là đẹp mắt hoặc nội dung phim truyện rất hay.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Khen ngợi nội dung phim ảnh hoặc sách",
            pattern: "[Phim / Sách] + 很好看 / 真的很好看",
            note: "Ví dụ: 这部电影很好看 (Bộ phim này rất hay).",
            audio: [
              { lang: "zh-CN", text: "这部电影真的很好看。", pause: 800 },
              { lang: "vi-VN", text: "Bộ phim này thật sự rất hay.", pause: 400 }
            ]
          },
          {
            title: "2. Khen ngợi diện mạo trang phục",
            pattern: "[Người / Quần áo] + 穿起来 + 很好看",
            note: "Ví dụ: 这件衣服真好看 (Chiếc áo này đẹp thật đấy).",
            audio: [
              { lang: "zh-CN", text: "你穿这件衣服真好看！", pause: 800 },
              { lang: "vi-VN", text: "Bạn mặc chiếc áo này đẹp thật đấy!", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "这本书的封面很漂亮，里面的故事也很好看。",
            vi: "Bìa cuốn sách này rất đẹp, câu chuyện bên trong cũng rất hay.",
            situation: "Nhận xét toàn diện cả về hình thức bên ngoài lẫn chất lượng nội dung của cuốn sách.",
            analysis: "Đối chiếu tinh tế giữa 漂亮 (đẹp hình thức bìa) và 好看 (hay về nội dung cốt truyện).",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Bìa đẹp và câu chuyện bên trong rất hay.", pause: 300 },
              { lang: "zh-CN", text: "这本书的封面很漂亮，里面的故事也很好看。", pause: 800 }
            ]
          },
          {
            zh: "昨天晚上我看了一部很有名的中国电影，非常好看。",
            vi: "Tối hôm qua tôi đã xem một bộ phim Trung Quốc rất nổi tiếng, hay vô cùng.",
            situation: "Khen ngợi và chia sẻ bộ phim điện ảnh chất lượng với bạn bè.",
            analysis: "非常好看 làm vị ngữ tính từ nhận xét đỉnh cao về tác phẩm nghệ thuật.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Phim Trung Quốc rất nổi tiếng và hay.", pause: 300 },
              { lang: "zh-CN", text: "昨天晚上我看了一部很有名的中国电影，非常好看。", pause: 800 }
            ]
          },
          {
            zh: "你在书店买的那本书好看吗？",
            vi: "Cuốn sách bạn mua ở hiệu sách đọc có hay không?",
            situation: "Hỏi thăm cảm nhận của bạn sau khi đọc thử tác phẩm mới mua.",
            analysis: "好看吗 là câu hỏi đánh giá chất lượng trải nghiệm đọc.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Cuốn sách bạn mua đọc có hay không?", pause: 300 },
              { lang: "zh-CN", text: "你在书店买的那本书好看吗？", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy phân biệt hệ từ giác quan: 好看 vs 好听 vs 好吃",
            situation: "Nghe một bài hát hay nhưng buột miệng khen là '这首歌很好看'.",
            explanation: "Tiếng Trung phân biệt cực kỳ rạch ròi theo cơ quan thụ cảm giác quan: Mắt thấy (ngoại hình, tranh ảnh, phim, sách) -> Dùng 好看. Tai nghe (bài hát, âm nhạc, giọng nói) -> Bắt buộc dùng 好听. Miệng nếm (món ăn, đồ uống) -> Dùng 好吃 / 好喝. Không được dùng 好看 cho âm nhạc.",
            wrong: "这首歌真的很好看。 (Sai cơ quan cảm thụ)",
            right: "这首歌真的很好听。 (Bài hát dùng 好听)",
            tip: "Thấy bằng mắt (phim, sách, người) -> 好看. Nghe bằng tai (nhạc, giọng) -> 好听. Ăn bằng miệng -> 好吃.",
            boundary: "Khen người: 漂亮 thường dùng riêng cho phái nữ; 好看 dùng được cho cả nam, nữ và đồ vật.",
            comparisons: [
              { zh: "电影好看", vi: "Phim hay (Thị giác xem)" },
              { zh: "音乐好听", vi: "Nhạc hay (Thính giác nghe)" },
              { zh: "菜好吃", vi: "Món ăn ngon (Vị giác nếm)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Phân biệt hệ giác quan: Phim sách mắt thấy dùng hảo khán ", pause: 300 },
              { lang: "zh-CN", text: "好看", pause: 400 },
              { lang: "vi-VN", text: ". Bài hát tai nghe dùng hảo thính ", pause: 300 },
              { lang: "zh-CN", text: "好听", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "hǎo (thanh 3 trầm sâu) + kàn (thanh 4 giáng mạnh dứt khoát).",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "好看", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Hảo (好) có bộ Nữ (女) và Tử (子). Chữ Khán (看) có bộ Thủ (手) che trên mắt bộ Mục (目) để phóng tầm mắt nhìn xa.",
          audio: [
            { lang: "vi-VN", text: "Chữ Khán tượng hình bàn tay che trên mắt nhìn ra xa.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Phim/sách hay = 电影/书很好看; Quần áo đẹp = 衣服好看; Nhạc hay = 好听.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Phim sách hay hoặc áo đẹp dùng hảo khán, bài hát hay dùng hảo thính.", pause: 400 }
        ]
      },

      // --- TỪ 18: 爸 ---
      {
        id: "hsk1-bai-16-g3-w18",
        index": 18,
        hanzi: "爸",
        pinyin: "bà",
        coreMeaning: "Bố, ba, cha (xưng hô thân tộc trong gia đình)",
        introAudio: [
          { lang: "zh-CN", text: "爸", pause: 500 },
          { lang: "vi-VN", text: "Bố, ba, cha, cách gọi thân mật trong gia đình", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi xưng hô gọi trực tiếp người cha, hoặc dùng khi kể về người bố với bạn bè, đồng nghiệp thân thiết.",
          detail: "Danh từ thân tộc. Trong khẩu ngữ có thể gọi đơn âm tiết là '爸' hoặc trùng điệp '爸爸'. Khi biểu thị quan hệ sở hữu gia đình ruột thịt, khẩu ngữ thường lược bỏ trợ từ 的: 我爸 (bố tôi).",
          keyPoint: "Khẩu ngữ thân mật: Bố tôi = 我爸 (thường lược bỏ 的).",
          audio: [
            { lang: "vi-VN", text: "Từ thứ mười tám: Ba, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "爸", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là bố, ba, cha trong gia đình.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Khẩu ngữ thân mật gia đình (lược bỏ 的)",
            pattern: "我爸 / 你爸 / 他爸",
            note: "Trong khẩu ngữ, nói 我爸 nghe gần gũi và tự nhiên hơn 我的爸爸.",
            audio: [
              { lang: "zh-CN", text: "我爸每天开车去上班。", pause: 800 },
              { lang: "vi-VN", text: "Bố tôi mỗi ngày đều lái xe đi làm.", pause: 400 }
            ]
          },
          {
            title: "2. Gọi chung cha mẹ",
            pattern: "爸妈 (Bố mẹ / Ba má)",
            note: "Cách gọi tắt thân thương của 爸爸妈妈.",
            audio: [
              { lang: "zh-CN", text: "我爸妈都在家呢。", pause: 800 },
              { lang: "vi-VN", text: "Bố mẹ tôi đều đang ở nhà đấy.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "我爸今天不开车，他坐地铁去上班。",
            vi: "Bố tôi hôm nay không lái xe, ông ấy đi tàu điện ngầm đi làm.",
            situation: "Kể về sự thay đổi phương tiện di chuyển của người cha trong ngày mưa gió.",
            analysis: "我爸 làm chủ ngữ; 开车 và 坐地铁 tạo thế đối lập rõ ràng.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Bố hôm nay không lái xe, đi tàu điện ngầm.", pause: 300 },
              { lang: "zh-CN", text: "我爸今天不开车，他坐地铁去上班。", pause: 800 }
            ]
          },
          {
            zh: "爸，后天下午我们去那家书店买书吧！",
            vi: "Bố ơi, chiều ngày kia bố con mình đến hiệu sách kia mua sách nhé!",
            situation: "Hô ngữ trực tiếp rủ người cha cùng đi mua sách vào ngày nghỉ.",
            analysis: "Chữ 爸 đứng đơn độc ở đầu câu đóng vai trò thưa gửi trực tiếp.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Bố ơi, chiều ngày kia đi hiệu sách nhé.", pause: 300 },
              { lang: "zh-CN", text: "爸，后天下午我们去那家书店买书吧！", pause: 800 }
            ]
          },
          {
            zh: "周末我有时候跟我爸一起去打球。",
            vi: "Cuối tuần tôi thỉnh thoảng cùng bố đi chơi bóng.",
            situation: "Kể về hoạt động gắn kết tình cảm phụ tử qua thể thao.",
            analysis: "跟我爸一起 là trạng ngữ đồng hành: cùng với bố tôi.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Cuối tuần thỉnh thoảng cùng bố chơi bóng.", pause: 300 },
              { lang: "zh-CN", text: "周末我有时候跟我爸一起去打球。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy ép buộc chèn chữ '的' máy móc (Tư duy của người nước ngoài)",
            situation: "Nhiều người nghĩ 'Bố của tôi' bắt buộc phải dịch thành '我的爸爸', cho rằng '我爸' là thiếu chữ.",
            explanation: "Trong tư duy ngôn ngữ Hán ngữ bản xứ: Đối với những mối quan hệ gia đình ruột thịt thân cận nhất (bố, mẹ, anh, chị, em) hoặc cơ quan đơn vị gắn bó, người bản xứ LUÔN LƯỢC BỎ chữ 的 để thể hiện sự gắn kết ruột thịt tự nhiên. Nói 我爸, 我妈 nghe như người bản xứ. Nói 我的爸 nghe rất gượng gạo và xa cách.",
            wrong: "今天我的爸送我去学校。 (Kém tự nhiên)",
            right: "今天我爸送我去学校。 (Chuẩn khẩu ngữ bản xứ)",
            tip: "Người thân ruột thịt (bố, mẹ, anh, chị) -> Bỏ chữ 的 (我爸, 我妈, 我姐).",
            boundary: "爸爸 hai âm tiết đọc: âm đầu thanh 4 (bà), âm sau thanh nhẹ (ba).",
            comparisons: [
              { zh: "我爸", vi: "Bố tôi (Khẩu ngữ thân mật bản xứ)" },
              { zh: "我的老师", vi: "Thầy giáo của tôi (Mối quan hệ xã hội -> Giữ chữ 的)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Lưu ý khẩu ngữ: Với bố mẹ ruột thịt, người bản xứ luôn nói ngã ba ngã ma lược bỏ chữ đích để tạo sự gần gũi.", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "Thanh bốn (bà): phát âm dứt khoát từ cao độ 5 giáng xuống 1.",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "爸", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Ba (爸) gồm bộ Phụ (父) là người cha ở trên, chữ Ba (巴) đóng vai trò biểu âm ở dưới.",
          audio: [
            { lang: "vi-VN", text: "Chữ Ba có bộ Phụ chỉ người cha ở phần trên.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Khẩu ngữ gần gũi = 我爸 (bỏ 的); Bố mẹ = 爸妈; Bố lái xe = 我爸开车.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Bố thân mật dùng ngã ba, bố mẹ nói tắt là ba ma.", pause: 400 }
        ]
      }
    ],

    // BÀI TẬP TRẮC NGHIỆM NGỮ DỤNG CHO NHÓM 3
    exercises: [
      {
        id: "hsk1-b16-g3-ex1",
        type: "Phân biệt 有时候 và 的时候",
        prompt: "Chọn câu đúng nhất để diễn đạt: 'Lúc tan học, xin hãy gọi điện thoại cho tôi.'",
        options: [
          "有时候下课，请给我打电话。",
          "下课的时候，请给我打电话。",
          "下课有的时候，请给我打电话。",
          "在有时候下课，请打电话。"
        ],
        correct: 1,
        reasonRight: "Chính xác! Mốc thời điểm diễn ra một hành động bắt buộc dùng cấu trúc: [Hành động] + 的时候.",
        reasonWrong: "Chưa đúng: 有时候 là phó từ chỉ tần suất thỉnh thoảng, không dùng làm mốc sự kiện.",
        questionAudio: [{ lang: "vi-VN", text: "Lúc tan học hãy gọi điện cho tôi, nói thế nào đúng?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "下课的时候，请给我打电话。", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g3-ex2",
        type: "Trục thời gian tương đối 后天",
        prompt: "Hôm nay là thứ Sáu (星期五). Vậy 后天 là thứ mấy?",
        options: ["星期六 (Thứ Bảy)", "星期天 (Chủ Nhật)", "星期一 (Thứ Hai)", "星期二 (Thứ Ba)"],
        correct: 1,
        reasonRight: "Tuyệt vời! 后天 là ngày kia (+2 ngày kể từ hôm nay). Thứ Sáu + 2 ngày = Chủ Nhật (星期天).",
        reasonWrong: "Chưa đúng: Thứ Sáu + 1 ngày là ngày mai (明天 - Thứ Bảy); ngày kia (后天) phải là Chủ Nhật.",
        questionAudio: [{ lang: "vi-VN", text: "Hôm nay là thứ sáu, hậu thiên là thứ mấy?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "后天是星期天。", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g3-ex3",
        type: "Bẫy danh từ riêng 国家",
        prompt: "Chọn câu giới thiệu quê hương tự nhiên và chuẩn mực nhất của người bản xứ:",
        options: [
          "我来自越南国家，很高兴认识你。",
          "我来自越南，很高兴认识你。",
          "越南国家是一个很大的国家。",
          "我是国家越南人。"
        ],
        correct: 1,
        reasonRight: "Chuẩn xác! Tên riêng quốc gia đứng độc lập: 我来自越南. Không ghép thừa chữ 国家 phía sau.",
        reasonWrong: "Chưa đúng: Ghép 越南国家 là lỗi dịch từng chữ từ tiếng mẹ đẻ sang tiếng Trung.",
        questionAudio: [{ lang: "vi-VN", text: "Câu giới thiệu quê hương nào chuẩn bản xứ nhất?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "我来自越南，很高兴认识你。", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g3-ex4",
        type: "Lượng từ cho hiệu sách 书店",
        prompt: "Điền lượng từ thích hợp vào chỗ trống: '学校旁边有一____很有名的书店。'",
        options: ["本", "家", "个", "所"],
        correct: 1,
        reasonRight: "Chính xác! Lượng từ tiêu chuẩn cho hiệu sách, cửa hàng, công ty là 家 (jiā): 一家书店.",
        reasonWrong: "Chưa đúng: 本 là lượng từ của cuốn sách; 所 là lượng từ của trường học/bệnh viện.",
        questionAudio: [{ lang: "zh-CN", text: "有一什么很有名的书店？", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "有一家很有名的书店", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g3-ex5",
        type: "Phân biệt hệ giác quan 好看 vs 好听",
        prompt: "Muốn khen 'Bài hát tiếng Trung này nghe hay thật đấy!', câu nào chuẩn xác?",
        options: [
          "这首中文歌真好看！",
          "这首中文歌真好听！",
          "这首中文歌真好吃！",
          "这首中文歌真好读！"
        ],
        correct: 1,
        reasonRight: "Tuyệt vời! Âm nhạc cảm nhận qua thính giác tai nghe bắt buộc dùng 好听; 好看 chỉ dùng cho thị giác mắt nhìn.",
        reasonWrong: "Chưa đúng: 好看 chỉ dùng cho phim ảnh, sách báo hoặc ngoại hình đẹp mắt.",
        questionAudio: [{ lang: "vi-VN", text: "Khen bài hát nghe hay dùng từ nào?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "这首中文歌真好听！", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g3-ex6",
        type: "Khẩu ngữ thân tộc 我爸",
        prompt: "Trong giao tiếp khẩu ngữ tự nhiên hàng ngày, cách nói nào được người bản xứ ưa chuộng nhất?",
        options: ["我的爸每天开车去上班。", "我爸每天开车去上班。", "我和爸每天开车去上班。", "有的爸每天开车去上班。"],
        correct: 1,
        reasonRight: "Chuẩn xác! Người thân ruột thịt trong khẩu ngữ luôn lược bỏ chữ 的 để tăng sự gần gũi: 我爸.",
        reasonWrong: "Chưa đúng: Nói 我的爸 nghe trang trọng quá mức và tạo cảm giác xa cách, thiếu tự nhiên.",
        questionAudio: [{ lang: "vi-VN", text: "Khẩu ngữ tự nhiên nói Bố tôi lái xe đi làm thế nào?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "我爸每天开车去上班。", pause: 600 }
        ]
      }
    ],

    // THỰC HÀNH TỰ ĐẶT CÂU (ACTIVE OUTPUT) 3 TẦNG TRỢ GIÚP
    selfUse: [
      {
        id: "hsk1-b16-g3-su1",
        situation: "Tình huống: Bạn muốn hẹn bạn học: 'Chiều ngày mốt bạn có thời gian không? Chúng mình cùng đến hiệu sách bên phải trường học mua một cuốn sách hay nhé!'",
        hint1: "1. Mốc thời gian: Chiều ngày mốt (后天下午). Lời hỏi rảnh không: Có thời gian không (有时间吗). Địa điểm: Hiệu sách bên phải trường (学校右边的书店). Mục đích: Mua một cuốn sách hay (买一本好看的书).",
        hint2: "2. Khung cấu trúc chữ Hán: 后天下午你有时间吗？我们一起去学校右边的书店买一本好看的书吧。",
        modelAnswer: "后天下午你有时间吗？我们一起去学校右边的书店买一本好看的书吧。",
        modelExplain: "Kết hợp trạng ngữ ngày kia, mốc chuẩn trường học đứng trước bên phải, lượng từ của sách và tính từ sách hay.",
        questionAudio: [{ lang: "vi-VN", text: "Tình huống 1: Hẹn bạn chiều ngày mốt đến hiệu sách bên phải trường mua sách hay.", pause: 400 }],
        hint1Audio: [{ lang: "vi-VN", text: "Gợi ý 1: Chiều ngày mốt rảnh không, cùng đi hiệu sách bên phải trường mua sách hay.", pause: 300 }],
        hint2Audio: [{ lang: "vi-VN", text: "Gợi ý 2: Hậu thiên hạ ngọ nhĩ hữu thời gian ma, ngã môn nhất khởi khứ học hiệu hữu biên đích thư điếm...", pause: 400 }],
        modelAudio: [
          { lang: "zh-CN", text: "后天下午你有时间吗？我们一起去学校右边的书店买一本好看的书吧。", pause: 800 }
        ]
      },
      {
        id: "hsk1-b16-g3-su2",
        situation: "Tình huống: Bạn kể về gia đình: 'Bố tôi công việc rất bận, nhưng cuối tuần thỉnh thoảng bố vẫn lái xe đưa cả nhà đi chơi.'",
        hint1: "1. Vế đầu: Bố tôi công việc rất bận (我爸工作很忙). Vế sau: Nhưng cuối tuần (但是周末), thỉnh thoảng (有时候), lái xe đưa chúng tôi đi chơi (开车送/带我们去玩儿).",
        hint2: "2. Khung cấu trúc chữ Hán: 我爸工作很忙，但是周末有时候会开车带我们去玩儿。",
        modelAnswer: "我爸工作很忙，但是周末有时候会开车带我们去玩儿。",
        modelExplain: "Sử dụng đại từ thân mật bố tôi, liên từ chuyển ngoặt đán thị, phó từ tần suất hữu thời hậu và cụm lái xe đi chơi.",
        questionAudio: [{ lang: "vi-VN", text: "Tình huống 2: Kể bố tôi bận việc nhưng cuối tuần thỉnh thoảng lái xe đưa đi chơi.", pause: 400 }],
        hint1Audio: [{ lang: "vi-VN", text: "Gợi ý 1: Bố tôi công việc rất bận, nhưng cuối tuần thỉnh thoảng lái xe đưa đi chơi.", pause: 300 }],
        hint2Audio: [{ lang: "vi-VN", text: "Gợi ý 2: Ngã ba công tác ngận mang, đán thị chu mạt hữu thời hậu hội khai xa đới ngã môn khứ ngoạn nhi.", pause: 400 }],
        modelAudio: [
          { lang: "zh-CN", text: "我爸工作很忙，但是周末有时候会开车带我们去玩儿。", pause: 800 }
        ]
      }
    ],

    // NGÂN HÀNG ÔN TẬP SRS MỐC 1 - 3 - 7 NGÀY
    reviews: [
      {
        id: "hsk1-b16-g3-rev1",
        day: 1,
        type: "Khắc phục bẫy tần suất",
        q: "Hãy nói câu: 'Tôi thỉnh thoảng đến hiệu sách đó đọc sách.' bằng tiếng Trung chuẩn xác.",
        answer: "我有时候去那家书店看书。",
        explain: "Phó từ tần suất 有时候 đứng trước động từ 去; hiệu sách dùng lượng từ 家: 那家书店.",
        listenAudio: [{ lang: "vi-VN", text: "Hỏi: Nói Tôi thỉnh thoảng đến hiệu sách đó đọc sách.", pause: 300 }],
        audio: [
          { lang: "zh-CN", text: "我有时候去那家书店看书。", pause: 700 }
        ]
      },
      {
        id: "hsk1-b16-g3-rev2",
        day: 3,
        type: "Khẩu ngữ thân tộc tự nhiên",
        q: "Bạn muốn nói 'Bố tôi hôm nay không lái xe đi làm', hãy dùng khẩu ngữ gần gũi nhất.",
        answer: "我爸今天不开车去上班。",
        explain: "Lược bỏ chữ 的 khi nói về người thân ruột thịt: 我爸 (bố tôi); 开车去上班 (lái xe đi làm).",
        listenAudio: [{ lang: "vi-VN", text: "Hỏi: Nói Bố tôi hôm nay không lái xe đi làm bằng khẩu ngữ thân mật.", pause: 300 }],
        audio: [
          { lang: "zh-CN", text: "我爸今天不开车去上班。", pause: 700 }
        ]
      },
      {
        id: "hsk1-b16-g3-rev3",
        day: 7,
        type: "Vận dụng ngữ cảnh tổng hợp",
        q: "Hãy nói: 'Chiều ngày kia chúng mình cùng đi xem bộ phim rất nổi tiếng và hay đó nhé!'",
        answer: "后天下午我们一起去看看那部很有名、很好看的电影吧！",
        explain: "Kết hợp trạng ngữ 后天下午, cụm đồng hành 一起, lượng từ 部 cho phim ảnh và cặp tính từ 有名, 好看.",
        listenAudio: [{ lang: "vi-VN", text: "Hỏi: Nói Chiều ngày kia cùng đi xem bộ phim nổi tiếng và hay đó nhé.", pause: 300 }],
        audio: [
          { lang: "zh-CN", text: "后天下午我们一起去看看那部很有名、很好看的电影吧！", pause: 800 }
        ]
      }
    ]
  };

  // ==========================================
  // NHÓM 4: THỂ THAO, GIAO THÔNG, HỌC TẬP & THAO TÁC CỤ THỂ
  // ==========================================
  const group4 = {
    id: "hsk1-bai-16-g4",
    title: "Nhóm 4: Thể Thao, Giao Thông, Học Tập & Thao Tác Cụ Thể",
    desc: "Học cách dùng chuyên sâu các từ: 打球, 路口, 读书, 姐, 车站, 打开; nắm vững động từ thể thao, điểm hẹn giao thông và ý nghĩa kép của từ đọc sách.",
    words: [
      // --- TỪ 19: 打球 ---
      {
        id: "hsk1-bai-16-g4-w19",
        index: 19,
        hanzi: "打球",
        pinyin: "dǎqiú",
        coreMeaning: "Chơi bóng, đánh bóng (các môn thể thao dùng tay hoặc vợt)",
        introAudio: [
          { lang: "zh-CN", text: "打球", pause: 500 },
          { lang: "vi-VN", text: "Chơi bóng, đánh bóng các môn dùng tay hoặc vợt", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi nói về hoạt động thể dục thể thao rèn luyện sức khỏe, rủ bạn bè đi chơi bóng rổ, bóng bàn, cầu lông sau giờ tan học.",
          detail: "Động từ ly hợp (打 + 球). Chỉ áp dụng cho các môn bóng dùng tay đập, ném, bắt hoặc cầm vợt đánh. Khi nói rõ môn cụ thể, thay thế chữ 球 bằng tên môn: 打篮球 (chơi bóng rổ), 打羽毛球 (đánh cầu lông).",
          keyPoint: "Môn bóng DÙNG TAY/VỢT = 打. Môn bóng đá DÙNG CHÂN = 踢 (tī).",
          audio: [
            { lang: "vi-VN", text: "Từ thứ mười chín: Đả cầu, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "打球", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là chơi bóng các môn dùng tay hoặc vợt.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Rủ nhau đi chơi bóng sau giờ học",
            pattern: "下课以后 + 去打球",
            note: "Ví dụ: 我们去打球吧 (Chúng mình đi chơi bóng đi).",
            audio: [
              { lang: "zh-CN", text: "下课以后我们去打球吧。", pause: 800 },
              { lang: "vi-VN", text: "Tan học xong chúng mình đi chơi bóng nhé.", pause: 400 }
            ]
          },
          {
            title: "2. Nêu môn thể thao cụ thể",
            pattern: "打 + [Tên môn bóng: 篮球 / 网球 / 羽毛球]",
            note: "Thay thế chữ 球 bằng tên môn thể thao tương ứng.",
            audio: [
              { lang: "zh-CN", text: "你喜欢打篮球还是打网球？", pause: 800 },
              { lang: "vi-VN", text: "Bạn thích chơi bóng rổ hay chơi quần vợt?", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "下午下课以后，我和同学去学校北边打球。",
            vi: "Chiều nay sau khi tan học, tôi và bạn học đến phía bắc trường chơi bóng.",
            situation: "Kể về kế hoạch thể thao thư giãn sau một ngày học tập căng thẳng.",
            analysis: "学校北边 là trạng ngữ chỉ địa điểm sân bóng; 去打球 là vị ngữ hành động.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Tan học đến phía bắc trường chơi bóng.", pause: 300 },
              { lang: "zh-CN", text: "下午下课以后，我和同学去学校北边打球。", pause: 800 }
            ]
          },
          {
            zh: "我哥哥打球打得非常好，大家都喜欢看他比赛。",
            vi: "Anh trai tôi chơi bóng rất cừ, ai cũng đều thích xem anh ấy thi đấu.",
            situation: "Khoe về tài năng và phong độ chơi bóng xuất sắc của người anh.",
            analysis: "Cấu trúc bổ ngữ trạng thái lặp lại động từ: 打球打得非常好.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Anh trai chơi bóng rất cừ khôi.", pause: 300 },
              { lang: "zh-CN", text: "我哥哥打球打得非常好，大家都喜欢看他比赛。", pause: 800 }
            ]
          },
          {
            zh: "周末你喜欢在宿舍看书还是去外面打球？",
            vi: "Cuối tuần bạn thích ở ký túc xá đọc sách hay là ra ngoài chơi bóng?",
            situation: "Hỏi thăm sở thích nghỉ ngơi thư giãn của người bạn cùng lớp.",
            analysis: "Câu hỏi lựa chọn 还是 giữa hai hoạt động đọc sách tĩnh và chơi bóng động.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Thích ở ký túc xá đọc sách hay ra ngoài chơi bóng?", pause: 300 },
              { lang: "zh-CN", text: "周末你喜欢在宿舍看书还是去外面打球？", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy ghép thừa từ '打球篮球' & Bẫy dùng '打' cho bóng đá",
            situation: "1. Nói 'Tôi chơi bóng rổ' thành '我打球篮球'. 2. Nói 'Đi đá bóng' thành '去打足球'.",
            explanation: "Hai lỗi nghiêm trọng: 1. Chữ 球 là danh từ chung, khi có tên môn cụ thể thì phải bỏ 球 và thay bằng tên môn: 打篮球 (chơi bóng rổ), tuyệt đối không nói 打球篮球. 2. Bóng đá là môn thể thao dùng bàn chân sút, người Trung Quốc bắt buộc dùng động từ 踢 (tī - đá): 踢足球. Nói 打足球 là sai bản chất thể thao.",
            wrong: "我下课去打足球。 / 我喜欢打球篮球。 (Sai hoàn toàn)",
            right: "我下课去踢足球。 / 我喜欢打篮球。 (Chuẩn người bản xứ)",
            tip: "Môn dùng tay (bóng rổ, bóng chuyền, cầu lông) -> Dùng 打. Môn dùng chân (bóng đá) -> Dùng 踢 (踢足球).",
            boundary: "Đánh bóng bàn là 打乒乓球.",
            comparisons: [
              { zh: "打篮球", vi: "Chơi bóng rổ (Dùng tay -> 打)" },
              { zh: "踢足球", vi: "Đá bóng đá (Dùng chân -> 踢)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Lưu ý bẫy thể thao: Môn dùng tay như bóng rổ dùng đả lan cầu. Riêng môn bóng đá dùng chân bắt buộc dùng thích túc cầu ", pause: 300 },
              { lang: "zh-CN", text: "踢足球", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "dǎ (thanh 3 trầm) + qiú (thanh 2 vuốt cao). Bật nhẹ hơi ở âm q.",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "打球", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Đả (打) có bộ Thủ (扌) chỉ bàn tay tác động. Chữ Cầu (球) có bộ Vương (王) là ngọc tròn quý và chữ Cầu (求).",
          audio: [
            { lang: "vi-VN", text: "Chữ Đả có bộ Tài gảy tay bên trái chỉ động tác tay cầm ném.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Môn dùng tay = 打 + [Môn]; Bóng đá = 踢足球; Chơi bóng = 打球.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Chơi bóng rổ dùng đả lan cầu, đá bóng dùng thích túc cầu.", pause: 400 }
        ]
      },

      // --- TỪ 20: 路口 ---
      {
        id: "hsk1-bai-16-g4-w20",
        index": 20,
        hanzi: "路口",
        pinyin: "lùkǒu",
        coreMeaning: "Ngã rẽ, nút giao, đầu đường, ngã tư, giao lộ",
        introAudio: [
          { lang: "zh-CN", text: "路口", pause: 500 },
          { lang: "vi-VN", text: "Ngã rẽ, nút giao thông, đầu đường, giao lộ", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi chỉ đường đi, hướng dẫn tài xế taxi rẽ hướng, hoặc hẹn bạn bè đứng đón xe tại một nút giao cắt cụ thể.",
          detail: "Danh từ chỉ điểm giao cắt của hai hay nhiều tuyến đường, hoặc cửa ngõ mở ra của một con phố. Thường đi với giới từ: 在路口 (ở ngã rẽ), 到路口 (đến ngã rẽ), 下一个路口 (ngã rẽ tiếp theo).",
          keyPoint: "Điểm giao lộ cố định làm mốc chuyển hướng hoặc điểm đón hẹn.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ hai mươi: Lộ khẩu, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "路口", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là ngã rẽ, nút giao lộ hoặc đầu đường.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Điểm đón hẹn tại nút giao",
            pattern: "在 + [Mốc] + 前面的路口 + 等 / 见",
            note: "Ví dụ: 在学校前面的路口见 (Gặp ở ngã rẽ phía trước trường).",
            audio: [
              { lang: "zh-CN", text: "我们在前面的路口见吧。", pause: 800 },
              { lang: "vi-VN", text: "Chúng mình gặp nhau ở ngã rẽ phía trước nhé.", pause: 400 }
            ]
          },
          {
            title: "2. Hướng dẫn chuyển hướng giao thông",
            pattern: "到 + (下一个) + 路口，往 + [右 / 左] + 拐",
            note: "Đến ngã rẽ (tiếp theo) thì rẽ sang phải/trái.",
            audio: [
              { lang: "zh-CN", text: "到前面的路口请往右拐。", pause: 800 },
              { lang: "vi-VN", text: "Đến ngã rẽ phía trước xin vui lòng rẽ sang phải.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "一直往前走到路口，请往右拐。",
            vi: "Cứ đi thẳng về phía trước đến ngã rẽ, xin vui lòng rẽ sang bên phải.",
            situation: "Chỉ đường chi tiết cho khách du lịch tìm đến bến xe buýt.",
            analysis: "一直往前走 là hành động đi thẳng; 到路口 là mốc chuyển hướng 往右拐.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Đi thẳng đến ngã rẽ thì rẽ phải.", pause: 300 },
              { lang: "zh-CN", text: "一直往前走到路口，请往右拐。", pause: 800 }
            ]
          },
          {
            zh: "我就在车站旁边的路口等你，你到了就给我打电话。",
            vi: "Tôi đứng đợi bạn ngay ở ngã rẽ cạnh nhà ga, bạn đến nơi thì gọi điện cho tôi nhé.",
            situation: "Hẹn đón bạn bè bằng xe máy hoặc ô tô tại góc giao lộ thoáng đãng.",
            analysis: "车站旁边的路口 là cụm định ngữ xác định chính xác tọa độ điểm hẹn.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Đợi bạn ở ngã rẽ cạnh nhà ga.", pause: 300 },
              { lang: "zh-CN", text: "我就在车站旁边的路口等你，你到了就给我打电话。", pause: 800 }
            ]
          },
          {
            zh: "下一个路口有一家很大的书店。",
            vi: "Ở ngã rẽ tiếp theo có một hiệu sách rất to.",
            situation: "Chỉ vị trí của cửa hàng sách nằm ngay nút giao kế tiếp trên đại lộ.",
            analysis: "下一个路口 làm trạng ngữ nơi chốn đứng đầu câu tồn hiện.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Ngã rẽ tiếp theo có hiệu sách to.", pause: 300 },
              { lang: "zh-CN", text: "下一个路口有一家很大的书店。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy nói chung chung 路上 khi cần xác định điểm hẹn",
            situation: "Bạn gọi điện thoại bảo bạn mình: 'Tớ đứng chờ cậu trên đường nhé!'.",
            explanation: "路上 chỉ không gian chung chung trên lộ trình di chuyển (hoặc đang đi trên đường: 我在路上). Khi bạn hẹn người khác đón xe hoặc gặp mặt tại một vị trí cụ thể, bắt buộc phải dùng mốc giao lộ: 路口 hoặc tên tòa nhà. Nói 在路上等你 khiến người nghe không biết bạn đang đứng ở đoạn nào của cả con đường dài hàng cây số.",
            wrong: "我在路上等你。 (Mơ hồ, không thể tìm thấy)",
            right: "我在学校前面的路口等你。 (Chính xác điểm hẹn)",
            tip: "Đang trên đường di chuyển -> 在路上. Điểm hẹn nút giao -> 在路口.",
            boundary: "Ngã tư lớn có đèn tín hiệu giao thông thường gọi là 十字路口 (ngã tư chữ Thập).",
            comparisons: [
              { zh: "路口", vi: "Ngã rẽ / Nút giao (Tọa độ cụ thể để rẽ hoặc hẹn đón)" },
              { zh: "路上", vi: "Trên đường (Không gian di chuyển chung chung)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Phân biệt lộ khẩu và lộ thượng: Hẹn đón cụ thể phải dùng lộ khẩu ", pause: 300 },
              { lang: "zh-CN", text: "路口", pause: 400 },
              { lang: "vi-VN", text: ". Đang đi trên đường mới dùng tại lộ thượng ", pause: 300 },
              { lang: "zh-CN", text: "在路上", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "lù (thanh 4 dứt khoát) + kǒu (thanh 3 trầm sâu).",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "路口", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Lộ (路) có bộ Túc (足) là bước chân đi trên đường và chữ Các (各). Chữ Khẩu (口) là cái miệng hoặc cửa ngõ.",
          audio: [
            { lang: "vi-VN", text: "Chữ Lộ có bộ Túc chỉ bàn chân bước đi trên con đường.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Đến ngã rẽ = 到路口; Ngã rẽ tiếp theo = 下一个路口; Hẹn ở ngã rẽ = 在路口等.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Ngã rẽ là lộ khẩu, đến ngã rẽ rẽ phải là đáo lộ khẩu vãng hữu quải.", pause: 400 }
        ]
      },

      // --- TỪ 21: 读书 ---
      {
        id: "hsk1-bai-16-g4-w21",
        index": 21,
        hanzi: "读书",
        pinyin: "dúshū",
        coreMeaning: "Đọc sách (ngâm cứu, đọc to); đi học, theo học (ở trường lớp bậc cao)",
        introAudio: [
          { lang: "zh-CN", text: "读书", pause: 500 },
          { lang: "vi-VN", text: "Đọc sách, ngâm cứu tài liệu; đi học, theo học đại học", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi nói về thói quen đọc sách bồi dưỡng tri thức HOẶC nói về việc theo học sinh viên tại các trường đại học lớn.",
          detail: "Động từ mang 2 tầng nghĩa cực kỳ quan trọng: 1. Đọc sách: 喜欢读书 (thích đọc sách). 2. Đi học/Theo học tại cơ sở giáo dục: 在大学读书 (học đại học), 在北京读书 (theo học ở Bắc Kinh).",
          keyPoint: "Nghĩa mở rộng quan trọng: 在 + [Trường/Nơi chốn] + 读书 = THEO HỌC TẠI ĐÓ.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ hai mươi mốt: Độc thư, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "读书", pause: 400 },
            { lang: "vi-VN", text: "vừa có nghĩa đọc sách, vừa có nghĩa là đi học đại học.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Biểu thị theo học sinh viên",
            pattern: "在 + [Đại học / Thành phố] + 读书",
            note: "Đồng nghĩa với 上大学 (theo học đại học).",
            audio: [
              { lang: "zh-CN", text: "我姐在北京的一所大学读书。", pause: 800 },
              { lang: "vi-VN", text: "Chị tôi đang học tại một trường đại học ở Bắc Kinh.", pause: 400 }
            ]
          },
          {
            title: "2. Thói quen đọc sách mở mang",
            pattern: "喜欢 / 认真 + 读书",
            note: "Yêu thích việc đọc sách báo, tài liệu.",
            audio: [
              { lang: "zh-CN", text: "他从小就很喜欢读书。", pause: 800 },
              { lang: "vi-VN", text: "Cậu ấy từ nhỏ đã rất thích đọc sách.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "我姐姐在一所很有名的大学读书。",
            vi: "Chị gái tôi đang theo học tại một trường đại học rất nổi tiếng.",
            situation: "Giới thiệu học vấn của chị gái với niềm tự hào trong buổi gặp mặt.",
            analysis: "在大学读书 ở đây mang nghĩa là sinh viên đang theo học, không phải hành vi cầm sách đọc trong vài phút.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Chị gái theo học trường đại học nổi tiếng.", pause: 300 },
              { lang: "zh-CN", text: "我姐姐在一所很有名的大学读书。", pause: 800 }
            ]
          },
          {
            zh: "他在房间里认真读书呢，请大家小声一点儿。",
            vi: "Cậu ấy đang chăm chú đọc sách trong phòng đấy, xin mọi người nói nhỏ một chút.",
            situation: "Nhắc nhở người nhà giữ trật tự để bạn tập trung ôn thi.",
            analysis: "认真读书 thể hiện thái độ học tập và đọc sách nghiêm túc.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Chăm chú đọc sách trong phòng.", pause: 300 },
              { lang: "zh-CN", text: "他在房间里认真读书呢，请大家小声一点儿。", pause: 800 }
            ]
          },
          {
            zh: "现代很多年轻人喜欢一边喝咖啡一边读书。",
            vi: "Rất nhiều người trẻ hiện đại thích vừa uống cà phê vừa đọc sách.",
            situation: "Miêu tả lối sống văn hóa thư giãn thịnh hành của giới trẻ tại các đô thị.",
            analysis: "Kết hợp cấu trúc song hành 一边……一边…… với hai hành vi tao nhã.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Vừa uống cà phê vừa đọc sách.", pause: 300 },
              { lang: "zh-CN", text: "现代很多年轻人喜欢一边喝咖啡一边读书。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy hiểu máy móc '读书' chỉ là cầm cuốn sách đọc to",
            situation: "Nghe người ta nói '我姐姐在北京读书', bạn lại tưởng chị gái sang Bắc Kinh chỉ để đọc một cuốn sách.",
            explanation: "Trong văn hóa Hán ngữ, từ 读书 (độc thư) từ xa xưa đã đồng nghĩa với việc dùi mài kinh sử, đi học, thụ hưởng nền giáo dục chính quy. Khi nói '在大学读书' tức là người đó đang là sinh viên đại học. Khác với 看书 (khán thư) chỉ đơn thuần là hành động thị giác đọc một tờ báo hay cuốn truyện bất kỳ.",
            wrong: "Hiểu 在大学读书 là ngồi trong trường mở sách ra đọc.",
            right: "在大学读书 = Đang học đại học (Sinh viên).",
            tip: "Nêu con đường học vấn, đi học xa -> Dùng 读书. Đọc cuốn sách, tờ báo cụ thể -> Dùng 看书 / 读书.",
            boundary: "Người chăm chỉ đèn sách, học thức cao thời xưa gọi là 读书人 (kẻ sĩ, người có học).",
            comparisons: [
              { zh: "在大学读书", vi: "Học đại học (Con đường học vấn)" },
              { zh: "看这本书", vi: "Xem/đọc cuốn sách này (Hành vi cụ thể)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Lưu ý nghĩa rộng: Tại đại học độc thư nghĩa là theo học đại học, không phải hành vi đọc sách đơn thuần.", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "dú (thanh 2 vuốt lên) + shū (thanh 1 bằng phẳng, uốn lưỡi nhẹ).",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "读书", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Độc (读) có bộ Ngôn (讠) chỉ lời nói câu từ. Chữ Thư (书) là cuốn sách vở.",
          audio: [
            { lang: "vi-VN", text: "Chữ Độc có bộ Ngôn đứng đầu chỉ ngôn từ tri thức.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Học đại học = 在大学读书; Thích đọc sách = 喜欢读书.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Độc thư vừa là đọc sách vừa là theo học tại giảng đường đại học.", pause: 400 }
        ]
      },

      // --- TỪ 22: 姐 ---
      {
        id: "hsk1-bai-16-g4-w22",
        index": 22,
        hanzi: "姐",
        pinyin: "jiě",
        coreMeaning: "Chị, chị gái (quan hệ thân tộc hoặc xưng hô thân mật)",
        introAudio: [
          { lang: "zh-CN", text: "姐", pause: 500 },
          { lang: "vi-VN", text: "Chị, chị gái, xưng hô thân tộc trong gia đình", pause: 500 }
        ],
        meaning: {
          situation: "Dùng để gọi trực tiếp người chị gái ruột trong gia đình, hoặc kết hợp với họ để xưng hô lịch thiệp, thân thiện với nữ đồng nghiệp lớn tuổi hơn mình ở công sở.",
          detail: "Danh từ xưng hô. Dạng đơn âm tiết: 姐; dạng trùng điệp: 姐姐. Khẩu ngữ thân mật gia đình thường lược bỏ 的: 我姐 (chị tôi). Nơi công sở, ghép họ trước chữ 姐: 王姐 (chị Vương), 李姐 (chị Lý).",
          keyPoint: "Chị gái ruột: 我姐; Nữ đồng nghiệp thân quen: [Họ] + 姐.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ hai mươi hai: Tỷ, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "姐", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là chị gái trong gia đình hoặc xưng hô nơi công sở.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Khẩu ngữ thân mật gia đình",
            pattern: "我姐 / 我姐姐",
            note: "Ví dụ: 我姐在北京读书 (Chị tôi đang học ở Bắc Kinh).",
            audio: [
              { lang: "zh-CN", text: "我姐比我大两岁。", pause: 800 },
              { lang: "vi-VN", text: "Chị tôi lớn hơn tôi hai tuổi.", pause: 400 }
            ]
          },
          {
            title: "2. Xưng hô đồng nghiệp công sở",
            pattern: "[Họ người nữ] + 姐",
            note: "Ví dụ: 王姐 (Chị Vương), 张姐 (Chị Trương).",
            audio: [
              { lang: "zh-CN", text: "王姐工作非常认真。", pause: 800 },
              { lang: "vi-VN", text: "Chị Vương làm việc hết sức chăm chỉ.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "我姐在北京的一所大学读书，后天下午回来。",
            vi: "Chị tôi đang học tại một trường đại học ở Bắc Kinh, chiều ngày kia sẽ về.",
            situation: "Khoe với bạn học về lịch trình của người chị gái sắp về thăm nhà.",
            analysis: "我姐 lược bỏ chữ 的 tạo cảm giác ruột thịt gần gũi; 后天下午 chỉ mốc thời gian trở về.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Chị học ở Bắc Kinh, chiều ngày kia về.", pause: 300 },
              { lang: "zh-CN", text: "我姐在北京的一所大学读书，后天下午回来。", pause: 800 }
            ]
          },
          {
            zh: "姐，后天我们一起去那家有名的书店买书吧！",
            vi: "Chị ơi, chiều ngày kia hai chị em mình cùng đến hiệu sách nổi tiếng kia mua sách nhé!",
            situation: "Hô ngữ trực tiếp đầu câu khi rủ chị gái cùng đi mua sắm.",
            analysis: "Chữ 姐 đứng đầu câu làm từ xưng hô thưa gửi thân thuộc.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Chị ơi, ngày kia cùng đi hiệu sách nhé.", pause: 300 },
              { lang: "zh-CN", text: "姐，后天我们一起去那家有名的书店买书吧！", pause: 800 }
            ]
          },
          {
            zh: "王姐对大家很好，经常帮助新来的同学。",
            vi: "Chị Vương đối xử với mọi người rất tốt, thường xuyên giúp đỡ bạn học mới đến.",
            situation: "Khen ngợi và bày tỏ lòng kính trọng với người chị khóa trên trong hội sinh viên.",
            analysis: "王姐 ghép họ Vương với danh xưng chị thể hiện sự tôn trọng vừa phải.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Chị Vương rất tốt bụng, hay giúp người mới.", pause: 300 },
              { lang: "zh-CN", text: "王姐对大家很好，经常帮助新来的同学。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy gọi người phụ nữ lạ ngoài đường là '姐' theo thói quen tiếng Việt",
            situation: "Ra đường hỏi đường một người phụ nữ trẻ lạ mặt, bạn buột miệng gọi: '姐，请问……'.",
            explanation: "Ở Việt Nam, gọi phụ nữ lạ trạc tuổi là 'chị' là rất lịch sự. Nhưng ở Trung Quốc, phụ nữ trẻ rất sợ bị gọi là 姐 vì cảm giác bị xem là 'già đi'. Với người lạ chưa quen biết, an toàn và lịch thiệp nhất là mở lời bằng '您好' (Chào bạn/chị) hoặc '不好意思' (Xin lỗi làm phiền), hoặc trong giao tiếp thương mại gọi là '美女' (người đẹp). Chỉ dùng 姐 khi là chị ruột hoặc đồng nghiệp đã quen biết.",
            wrong: "Gặp phụ nữ lạ chưa quen mà đon đả gọi 姐, 大姐.",
            right: "你好 / 不好意思，请问去车站在哪儿？ (Lịch thiệp chuẩn mực)",
            tip: "Chị ruột / Đồng nghiệp quen biết -> Dùng 姐 (我姐, 王姐). Người lạ ngoài đường -> Dùng 您好 / 不好意思.",
            boundary: "Trái nghĩa: 妹 / 妹妹 (em gái). Cả hai chữ đều có bộ Nữ (女).",
            comparisons: [
              { zh: "我姐", vi: "Chị gái tôi (Ruột thịt)" },
              { zh: "王姐", vi: "Chị Vương (Đồng nghiệp quen biết)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Cảnh báo văn hóa: Người lạ ngoài đường không tùy tiện gọi là tỷ tỷ. Hãy mở lời bằng ninh hảo hoặc bất hảo ý tư.", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "Thanh ba (jiě): hạ giọng xuống trầm rồi bật nhẹ lên. Trong từ 姐姐, âm sau đọc thanh nhẹ (jiějie).",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "姐", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Tỷ (姐) gồm bộ Nữ (女) bên trái chỉ phái nữ và chữ Thả (且) bên phải đóng vai trò cấu trúc.",
          audio: [
            { lang: "vi-VN", text: "Chữ Tỷ có bộ Nữ chỉ người phụ nữ bên trái.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Chị tôi = 我姐 (bỏ 的); Đồng nghiệp = [Họ] + 姐; Người lạ = 您好.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng từ Tỷ: Chị gái ruột dùng ngã tỷ, đồng nghiệp ghép họ với tỷ.", pause: 400 }
        ]
      },

      // --- TỪ 23: 车站 ---
      {
        id: "hsk1-bai-16-g4-w23",
        index": 23,
        hanzi: "车站",
        pinyin: "chēzhàn",
        coreMeaning: "Bến xe, nhà ga, trạm dừng xe (nơi đón trả khách)",
        introAudio: [
          { lang: "zh-CN", text: "车站", pause: 500 },
          { lang: "vi-VN", text: "Bến xe, nhà ga, trạm dừng xe trung chuyển khách", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi bạn cần bắt xe buýt, đón tàu hỏa, tiễn người thân đi xa hoặc hẹn nhau ở điểm trung chuyển giao thông công cộng.",
          detail: "Danh từ chung chỉ bến xe hoặc nhà ga. Muốn cụ thể hóa phương tiện, ghép tên phương tiện phía trước: 公共汽车站 (trạm xe buýt), 火车站 (ga xe lửa), 地铁站 (ga tàu điện ngầm).",
          keyPoint: "Bến xe / Nhà ga công cộng. Hẹn ở bến xe = 在车站等.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ hai mươi ba: Xa trạm, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "车站", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là bến xe, nhà ga đón trả khách.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Vị trí bến xe so với vật mốc",
            pattern: "[Vật mốc] + (的) + [Phương vị: 北边 / 右边] + 是车站",
            note: "Ví dụ: 学校北边是车站 (Phía bắc trường là nhà ga).",
            audio: [
              { lang: "zh-CN", text: "车站在学校北边。", pause: 800 },
              { lang: "vi-VN", text: "Nhà ga nằm ở phía bắc trường học.", pause: 400 }
            ]
          },
          {
            title: "2. Chờ đón tại bến xe",
            pattern: "在车站 + [等 / 接] + [Ai đó]",
            note: "Ví dụ: 在车站接我姐 (Đón chị tôi ở bến xe).",
            audio: [
              { lang: "zh-CN", text: "我后天要去车站接我姐。", pause: 800 },
              { lang: "vi-VN", text: "Ngày mốt tôi phải ra bến xe đón chị gái tôi.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "车站在学校北边，书店在学校右边。",
            vi: "Nhà ga nằm ở phía bắc trường học, hiệu sách nằm ở phía bên phải trường.",
            situation: "Phân biệt rõ ràng hai tọa độ khác nhau cho người hỏi đường trước cổng trường.",
            analysis: "Đối chiếu rõ hai mốc phương vị: 北边 (phía bắc) và 右边 (bên phải).",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Nhà ga ở phía bắc, hiệu sách ở bên phải.", pause: 300 },
              { lang: "zh-CN", text: "车站在学校北边，书店在学校右边。", pause: 800 }
            ]
          },
          {
            zh: "很多大学生都在车站等车呢。",
            vi: "Rất nhiều sinh viên đại học đều đang đứng ở trạm xe đợi xe buýt đấy.",
            situation: "Miêu tả cảnh tượng đông đúc nhộn nhịp tại bến xe buýt vào giờ tan tầm.",
            analysis: "在车站等车 là cụm giới từ chỉ địa điểm kết hợp hành động chờ xe buýt.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Sinh viên đang đợi xe ở trạm xe.", pause: 300 },
              { lang: "zh-CN", text: "很多大学生都在车站等车呢。", pause: 800 }
            ]
          },
          {
            zh: "我后天下午去火车站接我姐姐。",
            vi: "Chiều ngày mốt tôi sẽ đến ga tàu hỏa đón chị gái tôi.",
            situation: "Thông báo kế hoạch ra ga xe lửa đón chị đi học xa về thăm nhà.",
            analysis: "火车站 chỉ định cụ thể là ga xe lửa, tránh nhầm với bến xe buýt.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Chiều ngày mốt ra ga tàu hỏa đón chị.", pause: 300 },
              { lang: "zh-CN", text: "我后天下午去火车站接我姐姐。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy dịch mọi 车站 thành 'Ga tàu hỏa'",
            situation: "Nghe trong đoạn hội thoại nói '在车站等', bạn vội dịch ngay thành 'đợi ở ga xe lửa'.",
            explanation: "车站 là danh từ chung bao quát tất cả các loại bến đỗ (bến xe buýt, bến xe khách liên tỉnh, ga tàu). Phải dựa vào ngữ cảnh: Nếu người nói đi học hàng ngày bằng xe buýt thì 车站 chính là trạm xe buýt (公交站). Muốn nói rõ ga xe lửa, người Trung Quốc luôn dùng 火车站.",
            wrong: "Mặc định 车站 luôn là ga tàu hỏa đường sắt.",
            right: "车站 = Bến xe nói chung; 火车站 = Ga tàu hỏa; 公共汽车站 = Trạm xe buýt.",
            tip: "Chung chung -> 车站. Rõ ga tàu hỏa -> 火车站. Rõ xe buýt -> 公共汽车站.",
            boundary: "Ga tàu điện ngầm ngầm dưới lòng đất gọi là 地铁站.",
            comparisons: [
              { zh: "公共汽车站", vi: "Trạm xe buýt (Xe công cộng nội đô)" },
              { zh: "火车站", vi: "Ga xe lửa (Tàu hỏa đường dài)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Phân biệt bến ga: Xa trạm là bến xe chung, ga tàu hỏa phải nói rõ là hỏa xa trạm ", pause: 300 },
              { lang: "zh-CN", text: "火车站", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "chē (thanh 1 bằng phẳng) + zhàn (thanh 4 giáng mạnh dứt khoát). Cả hai đều uốn lưỡi nhẹ.",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "车站", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Xa (车) là chiếc xe. Chữ Trạm (站) có bộ Lập (立) là đứng thẳng và chữ Chiêm (占) chỉ vị trí dừng chân đứng đợi.",
          audio: [
            { lang: "vi-VN", text: "Chữ Trạm có bộ Lập chỉ người đứng đợi bên cạnh trục xe.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Bến xe nói chung = 车站; Ga tàu hỏa = 火车站; Trạm xe buýt = 公共汽车站.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Bến xe chung là xa trạm, đón người ở bến xe là tại xa trạm tiếp.", pause: 400 }
        ]
      },

      // --- TỪ 24: 打开 ---
      {
        id: "hsk1-bai-16-g4-w24",
        index": 24,
        hanzi: "打开",
        pinyin: "dǎkāi",
        coreMeaning: "Mở, mở ra, bật (sách vở, cửa nẻo, hộp quà, máy tính, ứng dụng)",
        introAudio: [
          { lang: "zh-CN", text: "打开", pause: 500 },
          { lang: "vi-VN", text: "Mở, mở ra, bật lên đồ vật hoặc thiết bị điện tử", pause: 500 }
        ],
        meaning: {
          situation: "Dùng khi giáo viên yêu cầu lật mở sách giáo trình, nhờ ai đó mở cửa sổ cho thoáng, mở gói quà hoặc bật máy tính, mở video trên điện thoại.",
          detail: "Động từ mang bổ ngữ kết quả (打 + 开). Áp dụng đa năng: 1. Mở vật thể vật lý: 打开书 (mở sách), 打开门/窗户 (mở cửa/cửa sổ), 打开盒子 (mở hộp). 2. Khởi động phần mềm, thiết bị: 打开电脑 (bật máy tính), 打开手机/视频 (mở điện thoại/video).",
          keyPoint: "Bổ ngữ kết quả: Làm cho sự vật chuyển từ trạng thái ĐÓNG sang MỞ.",
          audio: [
            { lang: "vi-VN", text: "Từ thứ hai mươi tư: Đả khai, đọc là ", pause: 300 },
            { lang: "zh-CN", text: "打开", pause: 400 },
            { lang: "vi-VN", text: "nghĩa là mở sách, mở cửa hoặc bật máy tính, video.", pause: 400 }
          ]
        },
        structures: [
          {
            title: "1. Yêu cầu mở sách giáo trình",
            pattern: "请打开书，看第 + [Số trang] + 页",
            note: "Mẫu câu lớp học kinh điển của giáo viên.",
            audio: [
              { lang: "zh-CN", text: "同学们，请打开书，看第十页。", pause: 800 },
              { lang: "vi-VN", text: "Các em học sinh, xin mời mở sách, xem trang mười.", pause: 400 }
            ]
          },
          {
            title: "2. Mở thiết bị điện tử hoặc tệp tin",
            pattern: "打开 + [电脑 / 手机 / 视频 / 文件]",
            note: "Bật hoặc truy cập dữ liệu trên thiết bị.",
            audio: [
              { lang: "zh-CN", text: "他打开电脑开始工作。", pause: 800 },
              { lang: "vi-VN", text: "Anh ấy bật máy tính lên bắt đầu làm việc.", pause: 400 }
            ]
          }
        ],
        examples: [
          {
            zh: "同学们，请打开书，看第二十页的生词。",
            vi: "Các em học sinh, xin mời mở sách ra, xem từ mới ở trang hai mươi.",
            situation: "Lời giáo viên bắt đầu bài học mới trên bục giảng trường đại học.",
            analysis: "打开书 là cụm động tân chuẩn; 看第二十页 là hành động tiếp nối.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ một: Mở sách xem từ mới ở trang hai mươi.", pause: 300 },
              { lang: "zh-CN", text: "同学们，请打开书，看第二十页的生词。", pause: 800 }
            ]
          },
          {
            zh: "屋里有点儿热，请你把窗户打开吧。",
            vi: "Trong phòng hơi nóng một chút, bạn mở giúp tôi cửa sổ ra nhé.",
            situation: "Nhờ người bạn ngồi gần cửa sổ mở cửa đón gió mát vào phòng học.",
            analysis: "Cấu trúc câu chữ 把 tác động trực tiếp vào cửa sổ (窗户) đạt trạng thái mở (打开).",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ hai: Trong phòng hơi nóng, mở cửa sổ ra nhé.", pause: 300 },
              { lang: "zh-CN", text: "屋里有点儿热，请你把窗户打开吧。", pause: 800 }
            ]
          },
          {
            zh: "我手机里有一个视频，我们现在打开看看吧。",
            vi: "Trong điện thoại của tôi có một video, bây giờ chúng mình mở lên xem nhé.",
            situation: "Mở video clip trên điện thoại để cả hai cùng theo dõi động tác bóng rổ.",
            analysis: "打开看看 kết hợp lặp động từ xem thử một chút.",
            explainAudio: [
              { lang: "vi-VN", text: "Ví dụ ba: Mở video trong điện thoại lên xem.", pause: 300 },
              { lang: "zh-CN", text: "我手机里有一个视频，我们现在打开看看吧。", pause: 800 }
            ]
          }
        ],
        traps: [
          {
            name: "Bẫy suy đoán máy móc: Ghép '打开车' để nói 'lái xe'",
            situation: "Biết chữ 开 là mở, chữ 打 trong 打开, bèn ghép thành '打开车' với ý định nói lái xe.",
            explanation: "Tuyệt đối không suy diễn máy móc: 1. Lái xe ô tô chỉ dùng động từ 开: 开车 (không có 打). 2. 打开 xe chỉ có thể đi với cánh cửa xe vật lý: 打开车门 (mở cửa xe ô tô để bước vào). Ghép 打开车 là câu vô nghĩa.",
            wrong: "今天我爸打开车送我去上学。 (Sai hoàn toàn)",
            right: "今天我爸开车送我去上学。 (Chuẩn mực lái xe)",
            tip: "Cầm vô lăng lái xe -> 开车. Mở cánh cửa xe -> 打开车门. Mở sách/máy tính -> 打开书/电脑.",
            boundary: "Trái nghĩa với 打开 là 关 (guān - đóng, tắt): 关门 (đóng cửa), 关电脑 (tắt máy tính).",
            comparisons: [
              { zh: "开车", vi: "Lái xe ô tô (Cầm lái điều khiển)" },
              { zh: "打开车门", vi: "Mở cửa xe ô tô (Thao tác mở cánh cửa)" }
            ],
            audio: [
              { lang: "vi-VN", text: "Cảnh báo: Lái xe là khai xa, mở cửa xe mới dùng đả khai xa môn, không ghép bừa thành đả khai xa.", pause: 400 }
            ]
          }
        ],
        pron: {
          guide: "dǎ (thanh 3 trầm) + kāi (thanh 1 bằng phẳng, ngân dài).",
          audio: [
            { lang: "vi-VN", text: "Luyện phát âm:", pause: 300 },
            { lang: "zh-CN", text: "打开", pause: 800 }
          ]
        },
        write: {
          desc: "Chữ Đả (打) có bộ Thủ (扌). Chữ Khai (开) gồm hai nét ngang và hai nét sổ thẳng.",
          audio: [
            { lang: "vi-VN", text: "Nhận diện mặt chữ: Nhớ cụm từ đả khai thư, đả khai điện não.", pause: 400 }
          ]
        },
        summary: "Quy tắc vàng: Mở sách = 打开书; Bật máy tính/video = 打开电脑/视频; Mở cửa sổ = 打开窗户; Lái xe = 开车.",
        summaryAudio: [
          { lang: "vi-VN", text: "Chốt cách dùng: Đả khai là mở sách, mở cửa, bật máy vi tính; đối lập với đóng tắt là quan.", pause: 400 }
        ]
      }
    ],

    // BÀI TẬP TRẮC NGHIỆM NGỮ DỤNG CHO NHÓM 4
    exercises: [
      {
        id: "hsk1-b16-g4-ex1",
        type: "Phân biệt động từ thể thao 打 vs 踢",
        prompt: "Điền động từ đúng vào chỗ trống: '下课以后，我们去学校操场____足球吧！'",
        options: ["打", "踢", "开", "做"],
        correct: 1,
        reasonRight: "Chính xác! Môn bóng đá (足球) dùng chân đá nên bắt buộc dùng động từ 踢: 踢足球.",
        reasonWrong: "Chưa đúng: 打 chỉ dùng cho các môn bóng dùng tay hoặc vợt (bóng rổ, bóng bàn, cầu lông).",
        questionAudio: [{ lang: "zh-CN", text: "去操场什么足球？", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "踢足球", pause: 600 },
          { lang: "vi-VN", text: "Bóng đá bắt buộc dùng thích túc cầu.", pause: 400 }
        ]
      },
      {
        id: "hsk1-b16-g4-ex2",
        type: "Phân biệt điểm hẹn 路口 vs 路上",
        prompt: "Bạn muốn thông báo vị trí chính xác đứng đón xe với tài xế taxi, nên dùng câu nào?",
        options: [
          "我在马路上，你快来吧。",
          "我就在学校前面的路口等您。",
          "我在开车上等您。",
          "我正在路上走呢。"
        ],
        correct: 1,
        reasonRight: "Tuyệt vời! Điểm hẹn đón xe chính xác phải có mốc ngã rẽ cụ thể: 学校前面的路口 (ngã rẽ trước trường).",
        reasonWrong: "Chưa đúng: 在马路上 chỉ nói chung chung trên đường lớn, tài xế không thể biết bạn đứng ở đâu.",
        questionAudio: [{ lang: "vi-VN", text: "Hẹn đón xe với tài xế dùng câu nào chuẩn xác?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "我就在学校前面的路口等您。", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g4-ex3",
        type: "Nghĩa mở rộng của 读书",
        prompt: "Khi nghe người bản xứ giới thiệu: '我姐姐在北京的一所大学读书', câu này mang ý nghĩa gì?",
        options: [
          "Chị tôi sang Bắc Kinh đọc một cuốn sách.",
          "Chị tôi đang là sinh viên theo học tại trường đại học ở Bắc Kinh.",
          "Chị tôi làm nhân viên bán sách ở trường đại học Bắc Kinh.",
          "Chị tôi đến Bắc Kinh đọc to thành tiếng."
        ],
        correct: 1,
        reasonRight: "Chuẩn xác! 在大学读书 là cách nói chuẩn mực biểu thị việc theo học đại học (làm sinh viên).",
        reasonWrong: "Chưa đúng: Bạn đã hiểu máy móc chữ 读书 theo nghĩa đen hành vi đọc một cuốn sách.",
        questionAudio: [{ lang: "vi-VN", text: "Ở trường đại học độc thư mang nghĩa là gì?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "在大学读书就是上大学的意思。", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g4-ex4",
        type: "Xưng hô công sở với từ 姐",
        prompt: "Trong cơ quan, đồng nghiệp nữ họ Vương lớn tuổi hơn bạn, bạn nên xưng hô thế nào cho lịch sự và thân thiết?",
        options: ["姐王", "王姐", "我的王姐", "美女王"],
        correct: 1,
        reasonRight: "Chính xác! Quy tắc Hán ngữ công sở: [Họ người nữ] + 姐 -> 王姐 (chị Vương).",
        reasonWrong: "Chưa đúng: Tiếng Trung luôn đặt họ lên trước danh xưng; không nói đảo ngược 姐王.",
        questionAudio: [{ lang: "vi-VN", text: "Xưng hô với chị đồng nghiệp họ Vương thế nào?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "王姐", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g4-ex5",
        type: "Phân biệt các loại bến ga 车站",
        prompt: "Bạn muốn nói 'Tôi ra ga xe lửa để đón chị gái đi tàu từ Bắc Kinh về', dùng từ nào chuẩn nhất?",
        options: ["公共汽车站", "火车站", "出租车站", "飞车站"],
        correct: 1,
        reasonRight: "Tuyệt vời! Ga đón tàu hỏa đường sắt bắt buộc dùng 火车站 (hỏa xa trạm).",
        reasonWrong: "Chưa đúng: 公共汽车站 là trạm xe buýt; 出租车站 là điểm đón taxi.",
        questionAudio: [{ lang: "vi-VN", text: "Ga đón tàu hỏa tiếng Trung là gì?", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "火车站", pause: 600 }
        ]
      },
      {
        id: "hsk1-b16-g4-ex6",
        type: "Bẫy dùng từ 打开 vs 开车",
        prompt: "Chọn câu đúng ngữ pháp khi giáo viên yêu cầu học sinh mở sách bài tập:",
        options: [
          "同学们，请开车载书，看第十页。",
          "同学们，请把书打开，看第十页。",
          "同学们，请打车书，看第十页。",
          "同学们，请打开车，看第十页。"
        ],
        correct: 1,
        reasonRight: "Chuẩn xác! Mở sách ra dùng cụm 把书打开 hoặc 请打开书; 开车 chỉ dùng cho lái xe.",
        reasonWrong: "Chưa đúng: Các câu khác đều nhầm lẫn tai hại giữa 打开 (mở ra) và 开车 (lái xe).",
        questionAudio: [{ lang: "zh-CN", text: "老师请同学们做什么？", pause: 400 }],
        explainAudio: [
          { lang: "zh-CN", text: "请把书打开，看第十页。", pause: 600 }
        ]
      }
    ],

    // THỰC HÀNH TỰ ĐẶT CÂU (ACTIVE OUTPUT) 3 TẦNG TRỢ GIÚP
    selfUse: [
      {
        id: "hsk1-b16-g4-su1",
        situation: "Tình huống: Bạn hướng dẫn đường đi cho người quen: 'Cứ đi thẳng đến ngã rẽ phía trước, rẽ sang bên phải là nhìn thấy một bến xe buýt rất lớn.'",
        hint1: "1. Vế một: Cứ đi thẳng đến ngã rẽ phía trước (一直往前走到前面的路口). Vế hai: Rẽ sang phải (往右拐). Vế ba: Liền có thể nhìn thấy một trạm xe lớn (就能看见一个大车站).",
        hint2: "2. Khung cấu trúc chữ Hán: 一直往前走到前面的路口，往右拐，就能看见一个大车站。",
        modelAnswer: "一直往前走到前面的路口，往右拐，就能看见一个大车站。",
        modelExplain: "Kết hợp phó từ đi thẳng nhất trực vãng tiền tẩu, mốc giao lộ tiền diện đích lộ khẩu, giới từ hướng rẽ và danh từ trạm xe.",
        questionAudio: [{ lang: "vi-VN", text: "Tình huống 1: Đi thẳng đến ngã rẽ phía trước rẽ phải là thấy bến xe lớn.", pause: 400 }],
        hint1Audio: [{ lang: "vi-VN", text: "Gợi ý 1: Đi thẳng đến ngã rẽ phía trước, quẹo phải, nhìn thấy bến xe lớn.", pause: 300 }],
        hint2Audio: [{ lang: "vi-VN", text: "Gợi ý 2: Nhất trực vãng tiền tẩu đáo tiền diện đích lộ khẩu, vãng hữu quải, tựu năng khán kiến nhất cá đại xa trạm.", pause: 400 }],
        modelAudio: [
          { lang: "zh-CN", text: "一直往前走到前面的路口，往右拐，就能看见一个大车站。", pause: 800 }
        ]
      },
      {
        id: "hsk1-b16-g4-su2",
        situation: "Tình huống: Bạn tự hào khoe với bạn bè: 'Chị gái tôi học đại học ở Bắc Kinh, chị ấy vừa thích đọc sách vừa thích chơi bóng rổ.'",
        hint1: "1. Vế đầu: Chị tôi học đại học ở Bắc Kinh (我姐在北京的大学读书). Vế sau: Chị ấy vừa thích đọc sách vừa thích chơi bóng rổ (她一边喜欢读书，一边喜欢打篮球).",
        hint2: "2. Khung cấu trúc chữ Hán: 我姐在北京的大学读书，她一边喜欢读书，一边喜欢打篮球。",
        modelAnswer: "我姐在北京的大学读书，她一边喜欢读书，一边喜欢打篮球。",
        modelExplain: "Sử dụng đại từ chị gái thân mật ngã tỷ, cụm theo học đại học tại đại học độc thư và cấu trúc hành động song hành nhất biên nhất biên.",
        questionAudio: [{ lang: "vi-VN", text: "Tình huống 2: Khoe chị gái học đại học ở Bắc Kinh, vừa thích đọc sách vừa thích chơi bóng rổ.", pause: 400 }],
        hint1Audio: [{ lang: "vi-VN", text: "Gợi ý 1: Chị gái tôi học đại học ở Bắc Kinh, vừa thích đọc sách vừa thích chơi bóng rổ.", pause: 300 }],
        hint2Audio: [{ lang: "vi-VN", text: "Gợi ý 2: Ngã tỷ tại Bắc Kinh đích đại học độc thư, tha nhất biên hỷ hoan độc thư, nhất biên hỷ hoan đả lan cầu.", pause: 400 }],
        modelAudio: [
          { lang: "zh-CN", text: "我姐在北京的大学读书，她一边喜欢读书，一边喜欢打篮球。", pause: 800 }
        ]
      }
    ],

    // NGÂN HÀNG ÔN TẬP SRS MỐC 1 - 3 - 7 NGÀY
    reviews: [
      {
        id: "hsk1-b16-g4-rev1",
        day: 1,
        type: "Khắc phục bẫy thể thao",
        q: "Rủ bạn học cùng lớp: 'Tan học chúng mình cùng đi chơi bóng rổ nhé!', nói thế nào không mắc bẫy?",
        answer: "下课以后我们一起去打篮球吧！",
        explain: "Bóng rổ dùng tay nên dùng động từ 打; thay thế chữ 球 bằng tên môn: 打篮球 (không nói 打球篮球).",
        listenAudio: [{ lang: "vi-VN", text: "Hỏi: Rủ tan học cùng đi chơi bóng rổ mà không mắc bẫy.", pause: 300 }],
        audio: [
          { lang: "zh-CN", text: "下课以后我们一起去打篮球吧！", pause: 700 }
        ]
      },
      {
        id: "hsk1-b16-g4-rev2",
        day: 3,
        type: "Thao tác thiết bị mở video",
        q: "Bạn muốn bảo bạn mình: 'Trong điện thoại tớ có một video, mở lên xem thử nhé!', nói thế nào?",
        answer: "我手机里有一个视频，打开看看吧！",
        explain: "Mở video trên thiết bị điện thoại di động dùng động từ mang bổ ngữ kết quả: 打开 (đả khai).",
        listenAudio: [{ lang: "vi-VN", text: "Hỏi: Nói Trong điện thoại có video, mở lên xem thử nhé.", pause: 300 }],
        audio: [
          { lang: "zh-CN", text: "我手机里有一个视频，打开看看吧！", pause: 700 }
        ]
      },
      {
        id: "hsk1-b16-g4-rev3",
        day: 7,
        type: "Vận dụng ngữ cảnh tổng hợp toàn bộ 24 từ",
        q: "Hãy nói: 'Chị tôi ngày kia về, tôi đứng ở ngã rẽ cạnh nhà ga đón chị ấy.'",
        answer: "我姐后天回来，我在车站旁边的路口接她。",
        explain: "Kết hợp đại từ 我姐, mốc thời gian 后天, danh từ 车站 và điểm hẹn cụ thể 路口.",
        listenAudio: [{ lang: "vi-VN", text: "Hỏi: Nói Chị tôi ngày kia về, tôi đứng ở ngã rẽ cạnh nhà ga đón chị.", pause: 300 }],
        audio: [
          { lang: "zh-CN", text: "我姐后天回来，我在车站旁边的路口接她。", pause: 800 }
        ]
      }
    ]
  };

  // Đăng ký Nhóm 3 và Nhóm 4 vào đối tượng bài học chung
  window.HSK_BAI16_DATA.groups.push(group3, group4);

  // Tự động cập nhật đăng ký với ứng dụng HSK Studio để hoàn thiện đầy đủ 24 từ vựng
  if (typeof window.HSK_REGISTER === 'function') {
    window.HSK_REGISTER(window.HSK_BAI16_DATA);
  }
})();
