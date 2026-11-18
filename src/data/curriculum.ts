export interface LessonStage {
  id: string;
  stepNumber: string;
  title: string;
  notation: string; // Chuỗi tóm tắt cơ chế kiểu nước đi cờ (VD: "EDV ↑ → Tiền tải ↑ → SV ↑")
  tag?: "Mainline" | "Trap" | "Cấp cứu";
  groupTitle?: string;
  desc: string;
  guide: string;
  // Thông số cho đồ thị PV Loop (nếu có)
  pvConfig?: {
    phaseIdx: number;
    call: string;
    mitral: "Mở" | "Đóng";
    aortic: "Mở" | "Đóng";
  };
  // Nội dung lý thuyết cho bài chuẩn
  content?: string;
  // Câu hỏi kiểm tra ngay tại phần này
  question: string;
  hint: string;
  options: { id: string; text: string }[];
  correct: string;
  rationale: string;
}

export interface Lesson {
  slug: string;
  lessonNumber: string;
  title: string;
  group?: string;
  duration?: string;
  summary: string;
  status: "ready" | "draft";
  mode?: "interactive-pv" | "standard";
  youtubeId?: string;
  // 3 thanh chỉ số đặc tính kiểu Chess Opening Trainer (0 - 100%)
  metrics?: {
    tactical: number;   // Cơ chế (0) <-> Lâm sàng (100)
    intensity: number;  // Cơ bản (0) <-> Chuyên sâu (100)
    theory: number;     // Lý thuyết (0) <-> Xử trí cấp cứu (100)
  };
  stages?: LessonStage[];
}

export interface Track {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  lessons: Lesson[];
}

export const curriculum: { tracks: Track[] } = {
  tracks: [
    {
      id: "sinh-ly",
      title: "Sinh lý học (Physiology)",
      shortTitle: "Sinh lý học",
      badge: "Môn cơ sở • 17 bài",
      description: "Hệ thống hóa 17 bài sinh lý học kinh điển bám sát đề cương thi chuyên khoa theo từng hệ cơ quan.",
      lessons: [
        { slug: "hong-cau-nhom-mau", lessonNumber: "Bài 01", title: "Sinh lý hồng cầu - Nhóm máu", group: "Máu & Cầm máu", summary: "Cấu trúc, chức năng hồng cầu, kháng nguyên hệ ABO, Rh và nguyên tắc truyền máu.", status: "draft", metrics: { tactical: 45, intensity: 30, theory: 40 } },
        { slug: "tieu-cau-cam-mau", lessonNumber: "Bài 02", title: "Sinh lý tiểu cầu và sự cầm máu", group: "Máu & Cầm máu", summary: "Các giai đoạn cầm máu: co mạch, nút chặn tiểu cầu, đông máu huyết tương và tiêu sợi huyết.", status: "draft", metrics: { tactical: 60, intensity: 50, theory: 55 } },
        { slug: "hoat-dong-dien-tim", lessonNumber: "Bài 03", title: "Hoạt động điện của tim", group: "Tuần hoàn", summary: "Điện thế hoạt động tế bào cơ tim đáp ứng nhanh - chậm và hệ thống dẫn truyền.", status: "draft", metrics: { tactical: 50, intensity: 65, theory: 45 } },
        {
          slug: "chuc-nang-bom-mau-tim",
          lessonNumber: "Bài 04",
          title: "Vòng Áp lực – Thể tích Thất trái (PV Loop)",
          group: "Tuần hoàn",
          duration: "35 phút",
          summary: "Mô hình huyết động học tương tác trực quan minh họa 4 pha chu chuyển tim, tiền tải, hậu tải và sức co bóp ESPVR.",
          status: "ready",
          mode: "interactive-pv",
          metrics: { tactical: 85, intensity: 75, theory: 80 },
          stages: [
            {
              id: "do-day-that",
              stepNumber: "01",
              title: "Đổ đầy thất (Ventricular Filling)",
              notation: "1. Mitral Mở → EDV ↑ → Tiền tải",
              tag: "Mainline",
              groupTitle: "1 • CHU CHUYỂN TIM CƠ BẢN",
              desc: "Thể tích tăng lên do máu từ nhĩ đổ vào thất đang giãn.",
              guide: "Máu chảy từ nhĩ trái xuống thất trái. Quan sát phần đáy nằm ngang phía dưới của vòng PV.",
              pvConfig: { phaseIdx: 0, call: "Thể tích ↑", mitral: "Mở", aortic: "Đóng" },
              question: "Trong pha đổ đầy thất, thể tích thất trái thay đổi như thế nào?",
              hint: "Theo dõi chiều dòng máu chảy qua van hai lá vào buồng thất.",
              options: [
                { id: "a", text: "A. Thể tích tăng dần khi máu đi vào thất cho tới mức EDV." },
                { id: "b", text: "B. Thể tích không đổi vì cả hai van đều đóng." },
                { id: "c", text: "C. Thể tích giảm mạnh do máu bị tống ra ngoài." }
              ],
              correct: "a",
              rationale: "Van hai lá mở ra cho phép máu chảy từ nhĩ xuống thất theo gradient áp lực, làm tăng thể tích buồng thất đến Thể tích cuối tâm trương (EDV)."
            },
            {
              id: "co-dang-tich",
              stepNumber: "02",
              title: "Co đẳng tích (Isovolumetric Contraction)",
              notation: "2. Van đóng → P_LV ↑↑ → dP/dt max",
              tag: "Mainline",
              desc: "Áp lực tăng mạnh trong khi thể tích thất trái hoàn toàn không đổi.",
              guide: "Quan sát đường thẳng đứng bên phải của vòng. Cơ tim đang co bóp nhưng chưa có van nào mở.",
              pvConfig: { phaseIdx: 1, call: "Áp lực ↑", mitral: "Đóng", aortic: "Đóng" },
              question: "Tại sao áp lực tăng vọt trong khi thể tích thất trái vẫn giữ nguyên?",
              hint: "Hãy suy nghĩ xem máu có thể đi vào hoặc đi ra khỏi thất ở thời điểm này hay không.",
              options: [
                { id: "a", text: "A. Cả van hai lá và van động mạch chủ đều đóng kín, giữ máu trong buồng thất." },
                { id: "b", text: "B. Cơ tim đã ngừng co bóp hoàn toàn." },
                { id: "c", text: "C. Van động mạch chủ đang mở và máu đang tống ra ngoài." }
              ],
              correct: "a",
              rationale: "Cả hai van đều đóng kín. Cơ tim thất co bóp đẳng tích làm áp lực nội thất vọt lên cao cho đến khi vượt qua áp lực tâm trương động mạch chủ."
            },
            {
              id: "tong-mau-that",
              stepNumber: "03",
              title: "Tống máu thất (Ventricular Ejection)",
              notation: "3. P_LV > P_Ao → Aortic Mở → SV",
              tag: "Trap",
              groupTitle: "2 • TƯƠNG TÁC HUYẾT ĐỘNG LÂM SÀNG",
              desc: "Van động mạch chủ mở, thể tích thất giảm nhanh chóng khi tống máu.",
              guide: "Áp lực thất trái đã vượt quá áp lực động mạch chủ, đẩy van động mạch chủ bật mở. Điểm kết thúc chạm đường ESPVR.",
              pvConfig: { phaseIdx: 2, call: "Thể tích ↓", mitral: "Đóng", aortic: "Mở" },
              question: "Bẫy lâm sàng: Khi tăng hậu tải (Afterload) đột ngột mà sức co bóp không đổi, Thể tích cuối tâm thu (ESV) sẽ thay đổi ra sao?",
              hint: "Xem đường ESPVR giữ nguyên độ dốc, nhưng điểm kết thúc tống máu nằm ở mức áp lực cao hơn.",
              options: [
                { id: "a", text: "A. ESV tăng lên, làm giảm Thể tích nhát bóp (SV)." },
                { id: "b", text: "B. ESV giảm xuống, làm tăng Phân số tống máu (EF)." },
                { id: "c", text: "C. ESV hoàn toàn không bị ảnh hưởng bởi hậu tải." }
              ],
              correct: "a",
              rationale: "Hậu tải tăng khiến thất trái phải tốn nhiều năng lượng hơn để mở van ĐMC và dừng tống máu sớm hơn dọc theo đường ESPVR, dẫn đến ESV tăng và SV giảm."
            },
            {
              id: "gian-dang-tich",
              stepNumber: "04",
              title: "Giãn đẳng tích (Isovolumetric Relaxation)",
              notation: "4. Aortic Đóng → P_LV ↓↓ → Lusitropy",
              tag: "Cấp cứu",
              desc: "Áp lực giảm mạnh trong khi thể tích thất trái không đổi.",
              guide: "Van động mạch chủ đã đóng. Thất giãn chủ động (tiêu thụ ATP) nhưng máu chưa thể vào cho đến khi van hai lá mở.",
              pvConfig: { phaseIdx: 3, call: "Áp lực ↓", mitral: "Đóng", aortic: "Đóng" },
              question: "Thiếu máu cơ tim cấp gây rối loạn pha giãn đẳng tích (suy tâm trương) chủ yếu do cơ chế nào?",
              hint: "Quá trình tách cầu nối actin-myosin và bơm Ca2+ về lưới nội cơ tương cần năng lượng.",
              options: [
                { id: "a", text: "A. Thiếu hụt ATP làm chậm quá trình thu hồi Ca2+ vào lưới nội cơ tương (SERCA)." },
                { id: "b", text: "B. Van hai lá mở quá sớm làm trào ngược máu." },
                { id: "c", text: "C. Tăng áp lực động mạch chủ làm van ĐMC không đóng được." }
              ],
              correct: "a",
              rationale: "Giãn cơ tim là quá trình chủ động tiêu tốn ATP để bơm Ca2+ ngược lại lưới nội cơ tương. Thiếu máu cơ tim làm giảm ATP ngay lập tức, gây cứng thành thất và tăng áp lực đổ đầy."
            }
          ]
        },
        { slug: "dieu-hoa-hoat-dong-tim", lessonNumber: "Bài 05", title: "Điều hòa hoạt động tim", group: "Tuần hoàn", summary: "Cơ chế nội tại Frank-Starling và điều hòa thần kinh - thể dịch trên tim mạch.", status: "draft", metrics: { tactical: 70, intensity: 60, theory: 65 } },
        {
          slug: "co-hoc-ho-hap",
          lessonNumber: "Bài 06",
          title: "Cơ học hô hấp: Áp suất màng phổi & Độ giãn nở",
          group: "Hô hấp",
          duration: "45 phút",
          summary: "Cơ chế áp suất âm khoang màng phổi, biến thiên áp lực chu kỳ thở, định luật Laplace và độ giãn nở phổi.",
          status: "ready",
          mode: "standard",
          youtubeId: "1O3zJ3EdWu4",
          metrics: { tactical: 80, intensity: 70, theory: 85 },
          stages: [
            {
              id: "ap-suat-mang-phoi",
              stepNumber: "01",
              title: "Cơ chế tạo áp suất âm khoang màng phổi",
              notation: "1. P_el (Phổi) ↔ P_cw (Thành ngực) → P_pl âm",
              tag: "Mainline",
              groupTitle: "1 • CƠ HỌC THÔNG KHÍ",
              desc: "Sự cân bằng đối nghịch giữa lực co hồi đàn hồi phổi và lực bật nở lồng ngực tại điểm FRC.",
              guide: "Xem video phần đầu và nắm vững trị số áp suất khoang màng phổi (-3 đến -5 cmH2O) ở cuối thì thở ra bình thường.",
              content: "Khoang màng phổi là một khoang ảo giữa lá thành và lá tạng. Ở cuối thì thở ra bình thường (FRC), áp suất khoang màng phổi (Ppl) âm so với khí quyển (-3 đến -5 cmH2O) nhờ hai lực đối nghịch: xu hướng co hồi hướng tâm của nhu mô phổi và xu hướng bật nở ly tâm của thành lồng ngực.",
              question: "Ở cuối thì hít vào bình thường (cuối thể tích VT), áp suất trong phế nang (Palv) bằng bao nhiêu so với khí quyển?",
              hint: "Khi dòng khí ngừng di chuyển ở cuối thì hít vào, chênh lệch áp suất bằng 0.",
              options: [
                { id: "a", text: "A. Bằng 0 cmH2O (bằng áp suất khí quyển)" },
                { id: "b", text: "B. Âm hơn áp suất khí quyển (-5 cmH2O)" },
                { id: "c", text: "C. Dương hơn áp suất khí quyển (+3 cmH2O)" }
              ],
              correct: "a",
              rationale: "Cuối thì hít vào, dòng khí ngừng lưu chuyển vì chênh lệch áp suất giữa phế nang và miệng bằng 0. Do đó, Palv trở về bằng đúng áp suất khí quyển (quy ước là 0 cmH2O)."
            },
            {
              id: "do-gian-no-phoi",
              stepNumber: "02",
              title: "Độ giãn nở phổi (Compliance) & Báo động máy thở",
              notation: "2. C_stat = ΔV / (P_plat - PEEP) → Phân tầng ARDS",
              tag: "Trap",
              groupTitle: "2 • ỨNG DỤNG THỞ MÁY",
              desc: "Phân biệt độ giãn nở động (Dynamic) và độ giãn nở tĩnh (Static) khi xử trí báo động áp lực đỉnh đường thở cao.",
              guide: "Chú ý công thức tính C_stat dựa vào áp lực cao nguyên (P_plat) chứ không phải áp lực đỉnh (P_peak).",
              content: "Độ giãn nở biểu thị khả năng biến thiên thể tích trên một đơn vị áp suất (C = ΔV / ΔP). Phân biệt độ giãn nở động (Dynamic Compliance) và tĩnh (Static Compliance) là chìa khóa phân tầng nguyên nhân báo động áp lực cao trên máy thở: nếu P_peak tăng nhưng P_plat bình thường, vấn đề nằm ở sức cản đường thở (đờm, co thắt phế quản); nếu cả hai cùng tăng, độ giãn nở tĩnh đã giảm.",
              question: "Yếu tố nào làm GIẢM độ giãn nở tĩnh (Static Compliance) của phổi trên bệnh nhân thở máy?",
              hint: "Tìm tổn thương nằm tại nhu mô phế nang thay vì lòng ống dẫn khí.",
              options: [
                { id: "a", text: "A. Hội chứng suy hô hấp cấp tiến triển (ARDS)" },
                { id: "b", text: "B. Đờm nhớt tắc trong ống nội khí quản" },
                { id: "c", text: "C. Co thắt phế quản cấp" }
              ],
              correct: "a",
              rationale: "ARDS gây tổn thương màng phế nang - mao mạch, mất surfactant và xẹp phổi lan tỏa, làm giảm trực tiếp độ giãn nở tĩnh của phổi."
            }
          ]
        },
        { slug: "trao-doi-khi-phoi", lessonNumber: "Bài 07", title: "Trao đổi khí tại phổi", group: "Hô hấp", summary: "Khuếch tán khí qua màng phế nang mao mạch, tương quan thông khí/tưới máu (V/Q).", status: "draft", metrics: { tactical: 75, intensity: 65, theory: 70 } },
        { slug: "chuyen-cho-khi-trong-mau", lessonNumber: "Bài 08", title: "Chuyên chở khí trong máu", group: "Hô hấp", summary: "Đường cong phân ly HbO2, hiệu ứng Bohr, vận chuyển CO2 và hiệu ứng Haldane.", status: "draft", metrics: { tactical: 80, intensity: 70, theory: 75 } },
        { slug: "chuc-nang-tao-nuoc-tieu", lessonNumber: "Bài 09", title: "Chức năng tạo nước tiểu & bài xuất", group: "Thận - Tiết niệu", summary: "Lọc cầu thận (GFR), tái hấp thu và bài tiết tại các đoạn ống thận.", status: "draft", metrics: { tactical: 55, intensity: 60, theory: 50 } },
        { slug: "chuc-nang-noi-tiet-than", lessonNumber: "Bài 10", title: "Chức năng nội tiết của thận", group: "Thận - Tiết niệu", summary: "Hệ thống Renin-Angiotensin-Aldosterone (RAAS), Erythropoietin và chuyển hóa Vitamin D.", status: "draft", metrics: { tactical: 65, intensity: 55, theory: 60 } },
        { slug: "tieu-hoa-da-day", lessonNumber: "Bài 11", title: "Tiêu hóa ở dạ dày", group: "Tiêu hóa", summary: "Vận động dạ dày, bài tiết dịch vị, cơ chế kiểm soát tiết acid HCl.", status: "draft", metrics: { tactical: 40, intensity: 45, theory: 40 } },
        { slug: "tieu-hoa-ruot-non", lessonNumber: "Bài 12", title: "Tiêu hóa ở ruột non", group: "Tiêu hóa", summary: "Dịch tụy, dịch mật, dịch ruột và cơ chế hấp thu dưỡng chất.", status: "draft", metrics: { tactical: 40, intensity: 45, theory: 40 } },
        { slug: "khai-quat-noi-tiet", lessonNumber: "Bài 13", title: "Khái quát hoạt động hệ nội tiết", group: "Nội tiết", summary: "Bản chất hormone, cơ chế tác động qua thụ thể và điều hòa ngược (feedback).", status: "draft", metrics: { tactical: 50, intensity: 50, theory: 45 } },
        { slug: "sinh-ly-tuyen-giap", lessonNumber: "Bài 14", title: "Sinh lý tuyến giáp", group: "Nội tiết", summary: "Tổng hợp, vận chuyển, tác dụng sinh học của T3, T4 và điều hòa trục hạ đồi - tuyến yên - giáp.", status: "draft", metrics: { tactical: 60, intensity: 55, theory: 60 } },
        { slug: "sinh-ly-tuy-noi-tiet", lessonNumber: "Bài 15", title: "Sinh lý tuyến tụy nội tiết", group: "Nội tiết", summary: "Tác dụng của Insulin và Glucagon trong điều hòa đường huyết.", status: "draft", metrics: { tactical: 70, intensity: 60, theory: 75 } },
        { slug: "sinh-ly-tuy-gai", lessonNumber: "Bài 16", title: "Sinh lý tủy gai", group: "Thần kinh", summary: "Chức năng dẫn truyền cảm giác - vận động và các cung phản xạ tủy.", status: "draft", metrics: { tactical: 65, intensity: 65, theory: 60 } },
        { slug: "than-kinh-tu-chu", lessonNumber: "Bài 17", title: "Sinh lý hệ thần kinh tự chủ (ANS)", group: "Thần kinh", summary: "Hệ giao cảm, phó giao cảm, các thụ thể adrenergic - cholinergic và đáp ứng tạng.", status: "draft", metrics: { tactical: 90, intensity: 80, theory: 90 } }
      ]
    },
    {
      id: "gay-me-co-so",
      title: "Gây mê Hồi sức (Anesthesia)",
      shortTitle: "Gây mê Hồi sức",
      badge: "Môn chuyên ngành • 08 bài",
      description: "8 chuyên đề nền tảng về tổ chức khoa phòng, dược lý vô cảm, khám tiền mê và kiểm soát tai biến phòng mổ.",
      lessons: [
        { slug: "lich-su-gmhs", lessonNumber: "Bài 01", title: "Lịch sử phát triển của ngành Gây mê Hồi sức", group: "Đại cương", summary: "Các cột mốc phát minh ether, chloroform và sự hình thành chuyên ngành hiện đại.", status: "draft", metrics: { tactical: 20, intensity: 20, theory: 20 } },
        { slug: "to-chuc-khoa-gmhs", lessonNumber: "Bài 02", title: "Tổ chức khoa GMHS: Phòng khám, Phòng mổ, PACU, ICU", group: "Đại cương", summary: "Cấu trúc chức năng, luồng vận hành một chiều và an toàn trong khu phẫu thuật.", status: "draft", metrics: { tactical: 50, intensity: 40, theory: 55 } },
        { slug: "dai-cuong-vo-cam", lessonNumber: "Bài 03", title: "Đại cương về các phương pháp vô cảm", group: "Vô cảm", summary: "Nguyên lý gây mê toàn thân (GA) và các phương pháp gây tê vùng (RA).", status: "draft", metrics: { tactical: 75, intensity: 60, theory: 70 } },
        { slug: "thuoc-trong-gmhs", lessonNumber: "Bài 04", title: "Thuốc dùng trong GMHS", group: "Dược lý", summary: "Dược lý thuốc mê hô hấp (MAC), thuốc mê tĩnh mạch, thuốc tê và thuốc dãn cơ.", status: "draft", metrics: { tactical: 90, intensity: 85, theory: 85 } },
        { slug: "kham-tien-me", lessonNumber: "Bài 05", title: "Khám tiền mê & Chuẩn bị bệnh nhân trước mổ", group: "Lâm sàng", summary: "Phân loại ASA, tiên lượng đường thở khó, nhịn ăn uống và tối ưu hóa bệnh nền.", status: "draft", metrics: { tactical: 85, intensity: 65, theory: 80 } },
        { slug: "chong-dau-sau-mo", lessonNumber: "Bài 06", title: "Các phương pháp chống đau sau phẫu thuật", group: "Lâm sàng", summary: "Giảm đau đa mô thức (multimodal analgesia), PCA và các kỹ thuật phong bế vùng.", status: "draft", metrics: { tactical: 80, intensity: 60, theory: 75 } },
        { slug: "san-soc-sau-gay-me", lessonNumber: "Bài 07", title: "Săn sóc bệnh nhân sau gây mê và phẫu thuật", group: "Hồi tỉnh", summary: "Theo dõi hồi tỉnh tại PACU, tiêu chuẩn Aldrete, xử trí suy hô hấp và hạ thân nhiệt.", status: "draft", metrics: { tactical: 85, intensity: 70, theory: 85 } },
        { slug: "tai-bien-bien-chung", lessonNumber: "Bài 08", title: "Tai biến và biến chứng của gây mê", group: "Cấp cứu", summary: "Xử trí đặt nội khí quản khó, hít sặc phổi, ngộ độc thuốc tê (LAST) và tăng thân nhiệt ác tính.", status: "draft", metrics: { tactical: 95, intensity: 95, theory: 100 } }
      ]
    }
  ]
};