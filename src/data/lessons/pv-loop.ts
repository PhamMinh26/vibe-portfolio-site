export interface InteractiveStage {
    id: string;
    groupTitle: string;
    title: string;
    tag: "Mainline" | "Trap" | "Cấp cứu";
    notation: string;
    coachHtml: string;
    centerStageHtml: string;
    quiz: {
      question: string;
      options: {
        label: string;
        isCorrect: boolean;
        explanation: string;
      }[];
    };
  }
  
  export const PV_LOOP_LESSON = {
    id: "chuc-nang-bom-mau-tim",
    title: "Vòng lặp Áp lực – Thể tích Thất trái (PV Loop)",
    subtitle: "Từ biểu đồ Wiggers đến tư duy huyết động trực quan trong Gây mê Hồi sức",
    stages: [
      {
        id: "stage-1",
        groupTitle: "1 • CƠ CHẾ NỀN TẢNG & CHU CHUYỂN TIM",
        title: "Góc nhìn Thất trái & 'Lát bánh mì Sandwich'",
        tag: "Mainline",
        notation: "Wiggers (đa trục) → PV Loop (LVP vs LVV) → Ngược chiều kim đồng hồ",
        coachHtml: `
          <p>Quên tạm "cơn ác mộng" biểu đồ Wiggers nhồi nhét hàng tá đường cong đi nha! Vòng lặp áp lực – thể tích chỉ đứng duy nhất ở <span class="hl-green">góc nhìn của buồng thất trái</span> trong một chu chuyển tim, đối chiếu trực tiếp áp lực thất trái (trục tung) với thể tích thất trái (trục hoành).</p>
          <p>Nhìn thoáng qua nó giống hệt một lát bánh mì sandwich khép kín. Hãy nhớ quy luật bất di bất dịch: vòng lặp này luôn vận hành <span class="hl-green">ngược chiều kim đồng hồ</span> qua 4 góc A – B – C – D.</p>
        `,
        centerStageHtml: `
          <div class="space-y-3">
            <div class="bg-[#121212] border border-[#2E2E2E] rounded-xl p-2.5">
              <svg viewBox="0 0 560 330" class="w-full h-auto select-none">
                <g stroke="#2E2E2E" stroke-width="1" stroke-dasharray="3,3">
                  <line x1="75" y1="271" x2="510" y2="271" />
                  <line x1="75" y1="174" x2="510" y2="174" />
                  <line x1="75" y1="118" x2="510" y2="118" />
                  <line x1="211" y1="35" x2="211" y2="285" />
                  <line x1="401" y1="35" x2="401" y2="285" />
                </g>
                <line x1="75" y1="285" x2="520" y2="285" stroke="#9CA3AF" stroke-width="2" />
                <line x1="75" y1="285" x2="75" y2="28" stroke="#9CA3AF" stroke-width="2" />
                <text x="295" y="320" fill="#E5E7EB" font-size="12" font-weight="600" text-anchor="middle">Thể tích thất trái (mL)</text>
                <text x="22" y="160" fill="#E5E7EB" font-size="12" font-weight="600" text-anchor="middle" transform="rotate(-90 22 160)">Áp lực thất trái (mmHg)</text>
                <text x="211" y="302" fill="#38BDF8" font-size="11" font-family="monospace" text-anchor="middle">50 (ESV)</text>
                <text x="401" y="302" fill="#38BDF8" font-size="11" font-family="monospace" text-anchor="middle">120 (EDV)</text>
                <text x="67" y="275" fill="#9CA3AF" font-size="11" font-family="monospace" text-anchor="end">10</text>
                <text x="67" y="178" fill="#F5B82E" font-size="11" font-family="monospace" text-anchor="end">80</text>
                <text x="67" y="122" fill="#22C55E" font-size="11" font-family="monospace" text-anchor="end">120</text>
                <path d="M 211 273 Q 255 281, 310 276 T 401 271 L 401 174 C 375 125, 330 118, 300 118 C 265 118, 232 130, 211 146 Z" fill="rgba(56, 189, 248, 0.08)" />
                <path id="s1-seg-ab" d="M 211 273 Q 255 281, 310 276 T 401 271" fill="none" stroke="#38BDF8" stroke-width="3.5" />
                <path id="s1-seg-bc" d="M 401 271 L 401 174" fill="none" stroke="#F5B82E" stroke-width="3.5" />
                <path id="s1-seg-cd" d="M 401 174 C 375 125, 330 118, 300 118 C 265 118, 232 130, 211 146" fill="none" stroke="#22C55E" stroke-width="3.5" />
                <path id="s1-seg-da" d="M 211 146 L 211 273" fill="none" stroke="#EF4444" stroke-width="3.5" />
                <polygon points="310,276 301,271 301,281" fill="#38BDF8" />
                <polygon points="401,218 396,227 406,227" fill="#F5B82E" />
                <polygon points="295,118 304,113 304,123" fill="#22C55E" />
                <polygon points="211,215 206,206 216,206" fill="#EF4444" />
                <g transform="translate(306, 200)">
                  <circle cx="0" cy="0" r="32" fill="#181818" stroke="#2E2E2E" stroke-width="1.5" />
                  <text x="0" y="-4" fill="#F5B82E" font-size="11" font-weight="700" text-anchor="middle">NGƯỢC</text>
                  <text x="0" y="10" fill="#9CA3AF" font-size="9" text-anchor="middle">KIM ĐỒNG HỒ</text>
                </g>
                <circle cx="211" cy="273" r="5.5" fill="#121212" stroke="#38BDF8" stroke-width="2.5" />
                <text x="198" y="276" fill="#38BDF8" font-size="12" font-weight="700" text-anchor="end">A</text>
                <circle cx="401" cy="271" r="5.5" fill="#121212" stroke="#F5B82E" stroke-width="2.5" />
                <text x="413" y="275" fill="#F5B82E" font-size="12" font-weight="700">B</text>
                <circle cx="401" cy="174" r="5.5" fill="#121212" stroke="#22C55E" stroke-width="2.5" />
                <text x="413" y="178" fill="#22C55E" font-size="12" font-weight="700">C</text>
                <circle cx="211" cy="146" r="5.5" fill="#121212" stroke="#EF4444" stroke-width="2.5" />
                <text x="198" y="148" fill="#EF4444" font-size="12" font-weight="700" text-anchor="end">D</text>
                <circle id="s1-beat-dot" cx="401" cy="271" r="7" fill="#F5B82E" stroke="#121212" stroke-width="2" />
              </svg>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button onclick="AnesPV.focusPhase(1)" class="chess-btn p-2.5 rounded-xl text-left cursor-pointer">
                <div class="text-[11px] font-mono text-[#38BDF8] font-bold">A → B</div>
                <div class="text-xs text-gray-200 font-medium">Đổ đầy tâm trương</div>
              </button>
              <button onclick="AnesPV.focusPhase(2)" class="chess-btn p-2.5 rounded-xl text-left cursor-pointer">
                <div class="text-[11px] font-mono text-[#F5B82E] font-bold">B → C</div>
                <div class="text-xs text-gray-200 font-medium">Co đẳng tích</div>
              </button>
              <button onclick="AnesPV.focusPhase(3)" class="chess-btn p-2.5 rounded-xl text-left cursor-pointer">
                <div class="text-[11px] font-mono text-[#22C55E] font-bold">C → D</div>
                <div class="text-xs text-gray-200 font-medium">Tống máu tâm thu</div>
              </button>
              <button onclick="AnesPV.focusPhase(4)" class="chess-btn p-2.5 rounded-xl text-left cursor-pointer">
                <div class="text-[11px] font-mono text-[#EF4444] font-bold">D → A</div>
                <div class="text-xs text-gray-200 font-medium">Giãn đẳng tích</div>
              </button>
            </div>
            <div id="s1-phase-readout" class="bg-[#121212] border border-[#2E2E2E] rounded-xl px-3.5 py-2.5 text-xs text-gray-300">
              Bấm vào từng đoạn <span class="text-[#F5B82E] font-semibold">A→B, B→C, C→D, D→A</span> để xem trạng thái đóng mở van tim tại pha đó.
            </div>
          </div>
        `,
        quiz: {
          question: "Trên biểu đồ vòng lặp áp lực – thể tích thất trái (trục tung là áp lực, trục hoành là thể tích), chu chuyển tim diễn tiến theo chiều nào?",
          options: [
            {
              label: "A. Theo chiều kim đồng hồ (đổ đầy ở trên, tống máu ở dưới)",
              isCorrect: false,
              explanation: "Sai. Nếu đi theo chiều kim đồng hồ thì thất trái sẽ tống máu ở áp lực thấp (10 mmHg) và nhận máu ở áp lực cao (120 mmHg), trái ngược hoàn toàn với sinh lý."
            },
            {
              label: "B. Ngược chiều kim đồng hồ (đổ đầy ở đáy → co đẳng tích phải → tống máu đỉnh → giãn đẳng tích trái)",
              isCorrect: true,
              explanation: "Chính xác! Thất trái nhận máu ở áp lực thấp (đáy dưới), co đẳng tích tăng áp lực bên phải, tống máu ở áp lực cao (đỉnh trên) và giãn đẳng tích tụt áp lực ở cạnh trái."
            },
            {
              label: "C. Đảo chiều liên tục giữa thì tâm thu và thì tâm trương",
              isCorrect: false,
              explanation: "Sai. Nhờ hệ thống van một chiều (van hai lá và van động mạch chủ), dòng máu chỉ đi theo một vòng khép kín ngược chiều kim đồng hồ."
            }
          ]
        }
      },
      {
        id: "stage-2",
        groupTitle: "1 • CƠ CHẾ NỀN TẢNG & CHU CHUYỂN TIM",
        title: "Hai thế giới Áp lực & Thì Tâm thu (T1 → T2)",
        tag: "Mainline",
        notation: "Van 2 lá đóng (T1) → Co đẳng tích (120 mL) → LVP > AoP → Mở van ĐMC → Tống máu (T2)",
        coachHtml: `
          <p>Thất trái phải sống trong <span class="hl-green">hai thế giới áp lực</span>: từ thế giới áp lực thấp của nhĩ trái (~10 mmHg) vươn lên thế giới áp lực cao của động mạch chủ (80–120 mmHg).</p>
          <p>Khi thất trái bắt đầu co, van hai lá đóng sập tạo <span class="hl-green">tiếng T1</span>. Vì van động mạch chủ chưa mở nên mọi van đều đóng kín, tạo đường thẳng đứng bên phải (<span class="hl-green">co đẳng tích</span>) cho tới khi áp lực vượt ngưỡng 80 mmHg để bật mở van động mạch chủ.</p>
        `,
        centerStageHtml: `
          <div class="space-y-3">
            <div class="bg-[#121212] border border-[#2E2E2E] rounded-xl p-2.5">
              <svg viewBox="0 0 560 305" class="w-full h-auto select-none">
                <line x1="75" y1="265" x2="515" y2="265" stroke="#9CA3AF" stroke-width="2" />
                <line x1="75" y1="265" x2="75" y2="25" stroke="#9CA3AF" stroke-width="2" />
                <line x1="75" y1="158" x2="515" y2="158" stroke="#F5B82E" stroke-width="1" stroke-dasharray="5,4" />
                <text x="510" y="150" fill="#F5B82E" font-size="10" font-family="monospace" text-anchor="end">THẾ GIỚI ÁP LỰC CAO (ĐMC ≥ 80 mmHg)</text>
                <text x="510" y="172" fill="#38BDF8" font-size="10" font-family="monospace" text-anchor="end">THẾ GIỚI ÁP LỰC THẤP (Nhĩ trái ~10 mmHg)</text>
                <path d="M 211 253 Q 255 261, 310 256 T 401 251 L 401 158 C 375 110, 330 103, 300 103 C 265 103, 232 115, 211 131 Z" fill="none" stroke="#2E2E2E" stroke-width="2.5" />
                <path d="M 401 251 L 401 158" fill="none" stroke="#F5B82E" stroke-width="4" />
                <path d="M 401 158 C 375 110, 330 103, 300 103 C 265 103, 232 115, 211 131" fill="none" stroke="#22C55E" stroke-width="4" />
                <circle cx="401" cy="251" r="6" fill="#EF4444" />
                <text x="412" y="255" fill="#EF4444" font-size="11" font-weight="700">T1: Van 2 lá đóng</text>
                <circle cx="401" cy="158" r="6" fill="#F5B82E" />
                <text x="412" y="138" fill="#F5B82E" font-size="11" font-weight="700">Mở van ĐMC (80 mmHg)</text>
                <circle cx="211" cy="131" r="6" fill="#EF4444" />
                <text x="200" y="122" fill="#EF4444" font-size="11" font-weight="700" text-anchor="end">T2: Van ĐMC đóng</text>
                <text x="300" y="92" fill="#22C55E" font-size="11" font-weight="700" text-anchor="middle">Đỉnh tống máu (120 mmHg)</text>
                <circle id="s2-tracer" cx="401" cy="251" r="7.5" fill="#38BDF8" stroke="#121212" stroke-width="2" />
                <text x="295" y="294" fill="#9CA3AF" font-size="11" text-anchor="middle">Thể tích: 50 mL ← 120 mL (Giảm khi tống máu)</text>
              </svg>
            </div>
            <div class="bg-[#121212] border border-[#2E2E2E] rounded-xl p-3.5 space-y-2.5">
              <div class="flex items-center justify-between text-xs">
                <span class="text-gray-400">Kéo thanh trượt mô phỏng <strong class="text-white">Thì Tâm thu (T1 → T2)</strong>:</span>
                <span id="s2-pct-label" class="font-mono font-bold text-[#F5B82E]">0% (Khởi đầu T1)</span>
              </div>
              <input id="s2-slider" type="range" min="0" max="100" value="0" oninput="AnesPV.updateSystole(this.value)" class="w-full accent-[#F5B82E] cursor-pointer" />
              <div class="grid grid-cols-3 gap-2 pt-1 text-center font-mono text-xs">
                <div class="bg-[#181818] border border-[#2E2E2E] rounded-lg p-2">
                  <div class="text-[10px] text-gray-500">Áp lực thất trái</div>
                  <div id="s2-lvp" class="text-[#F5B82E] font-bold">10 mmHg</div>
                </div>
                <div class="bg-[#181818] border border-[#2E2E2E] rounded-lg p-2">
                  <div class="text-[10px] text-gray-500">Thể tích thất trái</div>
                  <div id="s2-lvv" class="text-[#38BDF8] font-bold">120 mL</div>
                </div>
                <div class="bg-[#181818] border border-[#2E2E2E] rounded-lg p-2">
                  <div class="text-[10px] text-gray-500">Trạng thái van</div>
                  <div id="s2-valves" class="text-[#EF4444] font-bold">2 van đều đóng</div>
                </div>
              </div>
            </div>
          </div>
        `,
        quiz: {
          question: "Trong giai đoạn co đẳng tích (đường thẳng đứng bên phải trên vòng lặp PV), tại sao áp lực thất trái tăng vọt từ 10 mmHg lên 80 mmHg nhưng thể tích buồng thất vẫn đứng yên ở mức 120 mL?",
          options: [
            {
              label: "A. Vì cơ tim chưa thực sự co bóp mà chỉ có máu từ nhĩ trái dồn xuống thêm",
              isCorrect: false,
              explanation: "Sai. Van hai lá đã đóng lại ở đầu giai đoạn này (tạo tiếng T1), nên không còn máu từ nhĩ trái chảy xuống nữa."
            },
            {
              label: "B. Vì cả van hai lá và van động mạch chủ đều đóng kín, máu không có lối thoát",
              isCorrect: true,
              explanation: "Chính xác! Áp lực thất trái đã cao hơn nhĩ trái (đóng van hai lá) nhưng chưa vượt qua áp lực động mạch chủ 80 mmHg (chưa mở được van ĐMC). Buồng thất kín hoàn toàn nên thể tích bất biến."
            },
            {
              label: "C. Vì van động mạch chủ đã mở nhưng máu chảy ngược về thất trái",
              isCorrect: false,
              explanation: "Sai. Van động mạch chủ chỉ bật mở ngay tại điểm góc trên bên phải khi áp lực thất trái vượt qua áp lực động mạch chủ."
            }
          ]
        }
      },
      {
        id: "stage-3",
        groupTitle: "1 • CƠ CHẾ NỀN TẢNG & CHU CHUYỂN TIM",
        title: "Giãn đẳng tích & Chi tiết tinh tế đầu Đổ đầy Tâm trương",
        tag: "Mainline",
        notation: "Van ĐMC đóng (T2) → Giãn đẳng tích (50 mL) → LVP < LAP → Mở van 2 lá → Đổ đầy",
        coachHtml: `
          <p>Khi áp lực thất trái tụt xuống thấp hơn áp lực động mạch chủ, van động mạch chủ đóng sập tạo <span class="hl-green">tiếng T2</span>. Lúc này mọi van tim lại đóng kín, thất trái giãn ra tạo đường thẳng đứng bên trái (<span class="hl-green">giãn đẳng tích</span>) tại mức thể tích cuối tâm thu 50 mL.</p>
          <p>Hãy để ý chi tiết tinh tế này: ngay khi van hai lá vừa mở và máu bắt đầu đổ vào, <span class="hl-red">áp lực thất trái vẫn tiếp tục giảm thêm một chút</span> do cơ tim vẫn đang thư giãn nốt, rồi mới tăng nhẹ lên 10 mmHg khi buồng tim căng dần.</p>
        `,
        centerStageHtml: `
          <div class="space-y-3">
            <div class="bg-[#121212] border border-[#2E2E2E] rounded-xl p-2.5">
              <svg viewBox="0 0 560 300" class="w-full h-auto select-none">
                <line x1="75" y1="265" x2="515" y2="265" stroke="#9CA3AF" stroke-width="2" />
                <line x1="75" y1="265" x2="75" y2="25" stroke="#9CA3AF" stroke-width="2" />
                <path d="M 401 251 L 401 158 C 375 110, 330 103, 300 103 C 265 103, 232 115, 211 131" fill="none" stroke="#2E2E2E" stroke-width="2.5" />
                <path d="M 211 131 L 211 253" fill="none" stroke="#EF4444" stroke-width="4" />
                <path d="M 211 253 Q 255 263, 310 257 T 401 251" fill="none" stroke="#38BDF8" stroke-width="4" />
                <ellipse cx="248" cy="258" rx="34" ry="12" fill="none" stroke="#F5B82E" stroke-width="1.5" stroke-dasharray="3,2" />
                <line x1="248" y1="246" x2="275" y2="205" stroke="#F5B82E" stroke-width="1.2" />
                <rect x="255" y="172" width="235" height="34" rx="6" fill="#181818" stroke="#F5B82E" stroke-width="1" />
                <text x="372" y="186" fill="#F5B82E" font-size="10.5" font-weight="700" text-anchor="middle">Đầu thì đổ đầy: Áp lực vẫn giảm nhẹ!</text>
                <text x="372" y="199" fill="#9CA3AF" font-size="9.5" text-anchor="middle">(Do thất trái vẫn đang tiếp tục thư giãn chủ động)</text>
                <circle cx="211" cy="131" r="6" fill="#EF4444" />
                <text x="200" y="126" fill="#EF4444" font-size="11" font-weight="700" text-anchor="end">T2: Đóng van ĐMC</text>
                <circle cx="211" cy="253" r="6" fill="#38BDF8" />
                <text x="200" y="256" fill="#38BDF8" font-size="11" font-weight="700" text-anchor="end">Mở van 2 lá</text>
                <text x="198" y="195" fill="#EF4444" font-size="11" font-weight="600" text-anchor="end">Giãn đẳng tích</text>
                <text x="198" y="209" fill="#9CA3AF" font-size="10" font-family="monospace" text-anchor="end">(ESV = 50 mL)</text>
                <text x="315" y="285" fill="#38BDF8" font-size="11" font-weight="600" text-anchor="middle">Đổ đầy tâm trương: Thể tích 50 → 120 mL</text>
                <circle id="s3-step-dot" cx="211" cy="131" r="7.5" fill="#F5B82E" stroke="#121212" stroke-width="2" />
              </svg>
            </div>
            <div class="grid grid-cols-4 gap-1.5">
              <button onclick="AnesPV.setDiastoleStep(0)" class="chess-btn py-2 px-2 rounded-xl text-[11px] font-semibold text-gray-200 cursor-pointer">1. Tiếng T2</button>
              <button onclick="AnesPV.setDiastoleStep(1)" class="chess-btn py-2 px-2 rounded-xl text-[11px] font-semibold text-gray-200 cursor-pointer">2. Giãn đẳng tích</button>
              <button onclick="AnesPV.setDiastoleStep(2)" class="chess-btn py-2 px-2 rounded-xl text-[11px] font-semibold text-gray-200 cursor-pointer">3. Đầu đổ đầy</button>
              <button onclick="AnesPV.setDiastoleStep(3)" class="chess-btn py-2 px-2 rounded-xl text-[11px] font-semibold text-gray-200 cursor-pointer">4. Cuối đổ đầy</button>
            </div>
            <div id="s3-step-desc" class="bg-[#121212] border border-[#2E2E2E] rounded-xl px-3.5 py-2.5 text-xs text-gray-300">
              <strong class="text-[#F5B82E]">Bước 1 (Tiếng T2):</strong> Áp lực thất trái tụt xuống dưới áp lực động mạch chủ, van động mạch chủ đóng lại chấm dứt giai đoạn tống máu.
            </div>
          </div>
        `,
        quiz: {
          question: "Ở ngay giai đoạn đầu khi van hai lá vừa bật mở và máu bắt đầu chảy từ nhĩ trái xuống thất trái, vì sao đường cong áp lực thất trái vẫn tiếp tục dốc nhẹ xuống dưới trước khi tăng trở lại?",
          options: [
            {
              label: "A. Vì cơ thất trái lúc này vẫn đang tiếp tục quá trình thư giãn chủ động",
              isCorrect: true,
              explanation: "Chính xác! Tốc độ giãn cơ tim lúc đầu tâm trương nhanh hơn tốc độ máu đổ vào làm căng buồng tim, nên áp lực thất trái tiếp tục hạ thêm một chút."
            },
            {
              label: "B. Vì van động mạch chủ bị hở nhẹ làm máu thoát bớt ra ngoài",
              isCorrect: false,
              explanation: "Sai. Ở người bình thường, van động mạch chủ đóng kín hoàn toàn suốt thì tâm trương; sự hạ áp lực đầu tâm trương là hiện tượng hút máu sinh lý do cơ tim tiếp tục giãn."
            },
            {
              label: "C. Vì nhĩ trái co bóp hút ngược máu từ thất trái lên",
              isCorrect: false,
              explanation: "Sai. Nhĩ trái có áp lực cao hơn thất trái nên máu chảy xuôi chiều từ nhĩ trái xuống thất trái."
            }
          ]
        }
      },
      {
        id: "stage-4",
        groupTitle: "2 • GIẢI MÃ HUYẾT ĐỘNG & BẪY LÂM SÀNG",
        title: "Huyết áp Tâm trương: Cửa ải mở van Động mạch chủ",
        tag: "Trap",
        notation: "DBP ↑ (80 → 100 mmHg) → Cửa ải mở van ĐMC ↑ → Co đẳng tích kéo dài → MVO2 ↑",
        coachHtml: `
          <p>Trên vòng lặp PV, hãy định nghĩa lại <span class="hl-green">huyết áp tâm trương</span>: đó chính là <span class="hl-green">mức áp lực thất trái bắt buộc phải vượt qua để mở được van động mạch chủ</span> (góc trên bên phải của đường co đẳng tích).</p>
          <p>Cảnh báo bẫy lâm sàng: Khi bệnh nhân có huyết áp tâm trương cao (ví dụ 140/100 mmHg), <span class="hl-red">cửa ải mở van bị đẩy lên tới 100 mmHg</span>. Thất trái phải gồng co đẳng tích lâu hơn mới mở nổi van, làm tăng vọt hậu tải và nguy cơ thiếu máu cơ tim!</p>
        `,
        centerStageHtml: `
          <div class="space-y-3">
            <div class="bg-[#121212] border border-[#2E2E2E] rounded-xl p-2.5">
              <svg viewBox="0 0 560 300" class="w-full h-auto select-none">
                <line x1="75" y1="265" x2="515" y2="265" stroke="#9CA3AF" stroke-width="2" />
                <line x1="75" y1="265" x2="75" y2="25" stroke="#9CA3AF" stroke-width="2" />
                <path d="M 211 253 Q 255 261, 310 256 T 401 251 L 401 158 C 375 110, 330 103, 300 103 C 265 103, 232 115, 211 131 Z" fill="none" stroke="#2E2E2E" stroke-width="2" stroke-dasharray="4,3" />
                <text x="410" y="162" fill="#6B7280" font-size="10" font-family="monospace">Chuẩn: 80 mmHg</text>
                <path id="s4-dynamic-loop" d="M 211 253 Q 255 261, 310 256 T 401 251 L 401 158 C 375 110, 330 103, 300 103 C 265 103, 232 115, 211 131 Z" fill="rgba(245, 184, 46, 0.08)" stroke="#38BDF8" stroke-width="2.5" />
                <line id="s4-ivc-line" x1="401" y1="251" x2="401" y2="158" stroke="#F5B82E" stroke-width="4.5" />
                <line id="s4-dbp-guide" x1="75" y1="158" x2="401" y2="158" stroke="#F5B82E" stroke-width="1.2" stroke-dasharray="4,3" />
                <text id="s4-dbp-axis-text" x="68" y="162" fill="#F5B82E" font-size="11" font-family="monospace" font-weight="700" text-anchor="end">80</text>
                <circle id="s4-av-open-dot" cx="401" cy="158" r="7" fill="#F5B82E" stroke="#121212" stroke-width="2" />
                <text id="s4-av-open-label" x="412" y="155" fill="#F5B82E" font-size="11" font-weight="700">Mở van ĐMC: 80 mmHg</text>
                <text x="295" y="292" fill="#9CA3AF" font-size="11" text-anchor="middle">Thể tích thất trái (mL) — Kéo thanh trượt để tăng DBP</text>
              </svg>
            </div>
            <div class="bg-[#121212] border border-[#2E2E2E] rounded-xl p-3.5 space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="text-gray-300 font-medium">Chỉnh Huyết áp tâm trương (DBP):</span>
                <span id="s4-dbp-val" class="font-mono font-bold text-[#22C55E] text-sm">80 mmHg (Bình thường)</span>
              </div>
              <input id="s4-dbp-slider" type="range" min="60" max="120" step="5" value="80" oninput="AnesPV.updateDBP(this.value)" class="w-full accent-[#F5B82E] cursor-pointer" />
              <div id="s4-clinical-note" class="text-xs text-gray-300 bg-[#181818] border border-[#2E2E2E] rounded-lg p-2.5">
                Tại mức <strong class="text-[#22C55E]">80 mmHg</strong>, thất trái dễ dàng vượt qua cửa ải co đẳng tích để mở van động mạch chủ và bảo toàn thể tích nhát bóp.
              </div>
            </div>
          </div>
        `,
        quiz: {
          question: "Một bệnh nhân vào phòng mổ với huyết áp động mạch xâm lấn là 140/100 mmHg. Trên vòng lặp áp lực – thể tích, van động mạch chủ sẽ bắt đầu mở ra tại ngưỡng áp lực thất trái là bao nhiêu?",
          options: [
            {
              label: "A. Vượt qua mức 140 mmHg",
              isCorrect: false,
              explanation: "Sai. 140 mmHg là huyết áp tâm thu (đỉnh cao nhất của đường cong tống máu sau khi van động mạch chủ đã mở từ trước đó)."
            },
            {
              label: "B. Vượt qua mức 100 mmHg",
              isCorrect: true,
              explanation: "Chính xác! Huyết áp tâm trương (100 mmHg) chính là mức áp lực trong động mạch chủ cuối tâm trương mà thất trái phải vượt qua để mở van động mạch chủ."
            },
            {
              label: "C. Vượt qua mức 40 mmHg (hiệu số 140 trừ 100)",
              isCorrect: false,
              explanation: "Sai. 40 mmHg là áp lực mạch (pulse pressure), không phải ngưỡng áp lực mở van động mạch chủ."
            }
          ]
        }
      },
      {
        id: "stage-5",
        groupTitle: "2 • GIẢI MÃ HUYẾT ĐỘNG & BẪY LÂM SÀNG",
        title: "Huyết áp Tâm thu & Thể tích Nhát bóp (SV = EDV − ESV)",
        tag: "Mainline",
        notation: "SBP = Đỉnh đường cong tống máu (120 mmHg) | SV = EDV (120) − ESV (50) = 70 mL",
        coachHtml: `
          <p>Nếu huyết áp tâm trương là điểm mở van ĐMC, thì <span class="hl-green">huyết áp tâm thu</span> chính là <span class="hl-green">đỉnh cao nhất của đường cong tống máu</span> (khoảng 120 mmHg).</p>
          <p>Còn <span class="hl-green">thể tích nhát bóp (SV)</span> chính là <span class="hl-green">bề ngang của lát bánh mì sandwich</span>: lấy thể tích cuối tâm trương (120 mL) trừ đi thể tích cuối tâm thu (50 mL), ta có đúng 70 mL máu bơm vào động mạch chủ mỗi nhịp.</p>
        `,
        centerStageHtml: `
          <div class="space-y-3">
            <div class="bg-[#121212] border border-[#2E2E2E] rounded-xl p-2.5">
              <svg viewBox="0 0 560 300" class="w-full h-auto select-none">
                <line x1="75" y1="265" x2="515" y2="265" stroke="#9CA3AF" stroke-width="2" />
                <line x1="75" y1="265" x2="75" y2="25" stroke="#9CA3AF" stroke-width="2" />
                <path id="s5-loop-path" d="M 211 253 Q 255 261, 310 256 T 401 251 L 401 158 C 375 110, 330 103, 300 103 C 265 103, 232 115, 211 131 Z" fill="rgba(34, 197, 94, 0.1)" stroke="#22C55E" stroke-width="3" />
                <line id="s5-sbp-line" x1="75" y1="103" x2="300" y2="103" stroke="#22C55E" stroke-width="1.2" stroke-dasharray="4,3" />
                <circle id="s5-sbp-dot" cx="300" cy="103" r="6" fill="#22C55E" />
                <text id="s5-sbp-label" x="300" y="91" fill="#22C55E" font-size="11" font-weight="700" text-anchor="middle">Huyết áp tâm thu (Đỉnh: 120 mmHg)</text>
                <line id="s5-esv-drop" x1="211" y1="131" x2="211" y2="265" stroke="#EF4444" stroke-width="1.2" stroke-dasharray="3,3" />
                <line id="s5-edv-drop" x1="401" y1="158" x2="401" y2="265" stroke="#38BDF8" stroke-width="1.2" stroke-dasharray="3,3" />
                <line id="s5-sv-arrow" x1="216" y1="205" x2="396" y2="205" stroke="#F5B82E" stroke-width="2.5" />
                <rect id="s5-sv-badge" x="256" y="191" width="100" height="24" rx="5" fill="#181818" stroke="#F5B82E" stroke-width="1.2" />
                <text id="s5-sv-text" x="306" y="207" fill="#F5B82E" font-size="11" font-family="monospace" font-weight="700" text-anchor="middle">SV = 70 mL</text>
                <text id="s5-esv-label" x="211" y="282" fill="#EF4444" font-size="10.5" font-family="monospace" font-weight="700" text-anchor="middle">ESV: 50</text>
                <text id="s5-edv-label" x="401" y="282" fill="#38BDF8" font-size="10.5" font-family="monospace" font-weight="700" text-anchor="middle">EDV: 120</text>
              </svg>
            </div>
            <div class="bg-[#121212] border border-[#2E2E2E] rounded-xl p-3.5 space-y-2.5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <div class="flex justify-between text-xs mb-1">
                    <span class="text-[#38BDF8]">Thể tích cuối tâm trương (EDV):</span>
                    <span id="s5-edv-val" class="font-mono font-bold text-white">120 mL</span>
                  </div>
                  <input id="s5-edv-slider" type="range" min="90" max="155" step="5" value="120" oninput="AnesPV.updateSV()" class="w-full accent-[#38BDF8] cursor-pointer" />
                </div>
                <div>
                  <div class="flex justify-between text-xs mb-1">
                    <span class="text-[#EF4444]">Thể tích cuối tâm thu (ESV):</span>
                    <span id="s5-esv-val" class="font-mono font-bold text-white">50 mL</span>
                  </div>
                  <input id="s5-esv-slider" type="range" min="30" max="80" step="5" value="50" oninput="AnesPV.updateSV()" class="w-full accent-[#EF4444] cursor-pointer" />
                </div>
              </div>
              <div class="flex items-center justify-between pt-1.5 border-t border-[#2E2E2E] text-xs font-mono">
                <span class="text-gray-400">Công thức: <span class="text-white">SV = EDV − ESV</span></span>
                <span id="s5-ef-readout" class="text-[#22C55E] font-bold">SV = 70 mL | EF = 58%</span>
              </div>
            </div>
          </div>
        `,
        quiz: {
          question: "Quan sát vòng lặp áp lực – thể tích của một bệnh nhân đang gây mê: cạnh thẳng đứng bên phải nằm tại mốc 130 mL và cạnh thẳng đứng bên trái nằm tại mốc 65 mL. Thể tích nhát bóp (SV) của bệnh nhân là bao nhiêu?",
          options: [
            {
              label: "A. 195 mL",
              isCorrect: false,
              explanation: "Sai. Bạn đang cộng hai thể tích lại; thể tích nhát bóp là lượng máu được tống ra nên phải lấy hiệu số giữa đầu và cuối pha tống máu."
            },
            {
              label: "B. 65 mL",
              isCorrect: true,
              explanation: "Chính xác! Thể tích cuối tâm trương (EDV) là 130 mL và thể tích cuối tâm thu (ESV) là 65 mL, nên SV = 130 − 65 = 65 mL (tương ứng bề ngang vòng lặp)."
            },
            {
              label: "C. 50 mL",
              isCorrect: false,
              explanation: "Sai. 50 mL là giá trị ESV tham chiếu bình thường, còn ở bệnh nhân này ESV đang ở mức 65 mL."
            }
          ]
        }
      },
      {
        id: "stage-6",
        groupTitle: "2 • GIẢI MÃ HUYẾT ĐỘNG & BẪY LÂM SÀNG",
        title: "Thực hành Đọc vị PV Loop trong Sốc & Tăng Hậu tải Cấp",
        tag: "Cấp cứu",
        notation: "Mất máu cấp → EDV ↓ → SV ↓ (Lệch trái) | Cơn THA → DBP/SBP ↑ → SV ↓ (Cao & hẹp)",
        coachHtml: `
          <p>Trong phòng mổ, chỉ cần liếc nhanh biến dạng của vòng lặp PV là bạn đọc vị ngay nguyên nhân tụt huyết áp hay suy tim cấp!</p>
          <p>Nếu bệnh nhân <span class="hl-red">mất máu cấp (giảm tiền tải)</span>, đường đổ đầy rút ngắn làm cả vòng lặp <span class="hl-red">dịch sang trái và hẹp lại</span>. Ngược lại, trong <span class="hl-red">cơn tăng hậu tải cấp</span>, vòng lặp bị kéo cao vọt lên trên và hẹp bề ngang do thất trái không tống hết máu được.</p>
        `,
        centerStageHtml: `
          <div class="space-y-3">
            <div class="bg-[#121212] border border-[#2E2E2E] rounded-xl p-2.5">
              <svg viewBox="0 0 560 300" class="w-full h-auto select-none">
                <line x1="75" y1="265" x2="515" y2="265" stroke="#9CA3AF" stroke-width="2" />
                <line x1="75" y1="265" x2="75" y2="25" stroke="#9CA3AF" stroke-width="2" />
                <path d="M 211 253 Q 255 261, 310 256 T 401 251 L 401 158 C 375 110, 330 103, 300 103 C 265 103, 232 115, 211 131 Z" fill="none" stroke="#374151" stroke-width="2" stroke-dasharray="4,3" />
                <text x="408" y="248" fill="#6B7280" font-size="9.5" font-family="monospace">Chuẩn (120/80)</text>
                <path id="s6-scenario-loop" d="M 211 253 Q 255 261, 310 256 T 401 251 L 401 158 C 375 110, 330 103, 300 103 C 265 103, 232 115, 211 131 Z" fill="rgba(34, 197, 94, 0.12)" stroke="#22C55E" stroke-width="3.5" />
                <rect x="90" y="32" width="255" height="44" rx="6" fill="#181818" stroke="#2E2E2E" stroke-width="1.2" />
                <text id="s6-svg-title" x="102" y="50" fill="#22C55E" font-size="11.5" font-weight="700">TRẠNG THÁI SINH LÝ CHUẨN</text>
                <text id="s6-svg-metrics" x="102" y="66" fill="#E5E7EB" font-size="10.5" font-family="monospace">BP: 120/80 mmHg | SV: 70 mL</text>
                <text x="295" y="292" fill="#9CA3AF" font-size="11" text-anchor="middle">Thể tích thất trái (mL)</text>
              </svg>
            </div>
            <div class="grid grid-cols-3 gap-2">
              <button onclick="AnesPV.setScenario('normal')" class="chess-btn p-2.5 rounded-xl text-left cursor-pointer">
                <div class="text-[11px] font-mono text-[#22C55E] font-bold">1. CHUẨN</div>
                <div class="text-xs text-gray-200 font-medium">Sinh lý bình thường</div>
              </button>
              <button onclick="AnesPV.setScenario('hypovolemia')" class="chess-btn p-2.5 rounded-xl text-left cursor-pointer">
                <div class="text-[11px] font-mono text-[#38BDF8] font-bold">2. MẤT MÁU CẤP</div>
                <div class="text-xs text-gray-200 font-medium">Giảm tiền tải (Preload ↓)</div>
              </button>
              <button onclick="AnesPV.setScenario('afterload')" class="chess-btn p-2.5 rounded-xl text-left cursor-pointer">
                <div class="text-[11px] font-mono text-[#EF4444] font-bold">3. TĂNG HẬU TẢI</div>
                <div class="text-xs text-gray-200 font-medium">Cơn THA (180/110)</div>
              </button>
            </div>
            <div id="s6-scenario-analysis" class="bg-[#121212] border border-[#2E2E2E] rounded-xl px-3.5 py-2.5 text-xs text-gray-300 leading-relaxed">
              <strong class="text-[#22C55E]">Phân tích:</strong> Vòng lặp cân đối giữa 4 pha, mở van ĐMC ở 80 mmHg, đạt đỉnh 120 mmHg và tống ra trọn vẹn 70 mL mỗi nhát bóp.
            </div>
          </div>
        `,
        quiz: {
          question: "Trong lúc phẫu thuật, bệnh nhân chảy máu ồ ạt làm giảm đột ngột lượng máu tĩnh mạch trở về tim (giảm tiền tải). Hình dạng vòng lặp áp lực – thể tích sẽ biến đổi như thế nào?",
          options: [
            {
              label: "A. Vòng lặp dịch chuyển sang trái, thu hẹp bề ngang (giảm SV) và giảm chiều cao đỉnh áp lực",
              isCorrect: true,
              explanation: "Chính xác! Giảm tiền tải làm thể tích cuối tâm trương (EDV) giảm mạnh, khiến cạnh phải dịch sang trái, bề ngang vòng lặp (SV) hẹp lại và huyết áp tâm thu giảm theo cơ chế Frank-Starling."
            },
            {
              label: "B. Vòng lặp giãn rộng sang phải và tăng vọt chiều cao lên 180 mmHg",
              isCorrect: false,
              explanation: "Sai. Giãn rộng sang phải xảy ra khi quá tải thể tích (tăng tiền tải), còn mất máu làm thiếu hụt thể tích đổ đầy."
            },
            {
              label: "C. Hình dạng vòng lặp giữ nguyên không đổi vì van tim tự động điều chỉnh",
              isCorrect: false,
              explanation: "Sai. Thể tích nhát bóp và áp lực tâm thu phụ thuộc trực tiếp vào thể tích đổ đầy cuối tâm trương (EDV)."
            }
          ]
        }
      }
    ]
  };