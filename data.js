const HOAH_DATA = {
    translations: {
        en: {
            "common.appName": "HoAh",
            "hero.title.1": "Capture ",
            "hero.title.2": "Refine ",
            "hero.title.3": "Transform",
            "hero.subtitle": "<strong>Fast, Local, Multilingual</strong>, and <strong>Non-Profit & Free</strong> speech-to-text for macOS. <strong>Polished by AI</strong>, <strong>Translate Any Language</strong> <span id=\"crazy-trigger\" class=\"interactive-trigger\">(even 🐱, 🐶 & 👽!)</span>.",
            "feat.core.title": "Local & Multilingual",
            "feat.core.desc": "Powered by local Whisper models. Speak freely in a mix of any languages. Your audio never leaves your Mac.",
            "feat.polish.title": "AI Polish",
            "feat.polish.desc": "Turn rambling thoughts into crisp, professional prose. HoAh removes fillers, fixes grammar, and structures your text instantly.",
            "feat.transform.title": "Any-to-Any Translation",
            "feat.transform.desc": "Universal translation between any languages. English to Chinese, Spanish to German, or even <strong>🐱, 🐶 & 👽 to Human</strong>.",
            "detail.privacy.title": "Privacy First. Always.",
            "detail.privacy.desc": "HoAh is designed efficiently to run powerful AI models locally on Apple Silicon. <strong>Forever Free.</strong> No sign-up, no ads, no subscriptions, no data collection.",
            "companies.label": "Trusted by users at",
            "hero.disclaimer": "* Demo outputs generated using <strong>gpt-oss-120B</strong>. Actual results may vary based on model selection.",
            "hero.help_link": "New to AI? Setup Guide →",

            "hero.guide_link": "User Guide →",
            "hero.slogan": "Saving you at least one second on every HoAh dictation.",

            // iOS Page
            "ios.hero.title": "HoAh for iOS",
            "ios.hero.subtitle": "The power of HoAh, now in your pocket. <br><strong>Local, Fast, and Syncs</strong> seamlessly with your Mac.",
            "ios.cta.testflight": "Join TestFlight Beta",
            "ios.cta.waitlist": "Join Waitlist",
            "ios.feat.sync.title": "iCloud Sync",
            "ios.feat.sync.desc": "Your history, vocabulary, and settings sync instantly across all your devices.",
            "ios.feat.mobile.title": "Mobile Optimized",
            "ios.feat.mobile.desc": "Designed for touch. Record professionally on the go with the same powerful AI models.",


            // Help Page (API Setup)
            "help.title": "Get Started with HoAh AI",
            "help.subtitle": "HoAh's dictation is <strong>100% local</strong> and <strong>free to use forever</strong>. To enable advanced <strong>polishing and translation</strong>, we connect to powerful cloud AI models. This requires a generic \"API Key\". Don't worry, it's simple to get and usually free!",
            "help.step1.title": "1. What is an API Key?",
            "help.step1.desc": "Think of an API Key as a digital <strong>VIP Pass</strong>. It allows HoAh to send your text to a super-smart AI brain (like ChatGPT) for processing and get the result back. You are in full control of this key.",
            "help.step2.title": "2. Choose a Provider",
            "help.step2.desc": "There are many AI providers. We recommend <strong>Groq</strong> or <strong>Cerebras</strong> for speed (free), or <strong>OpenAI</strong> / <strong>Google Gemini</strong> for quality. <br><span class=\"cost-note\">Note: Free tiers are sufficient for most daily usage. Even for paid providers like OpenAI, heavy usage typically costs less than <strong>$0.02/day</strong>.</span>",
            "help.provider.groq.desc": "Extremely fast. <strong>Free tier available</strong>. Perfect for real-time dictation polish.",
            "help.provider.openai.desc": "The industry standard. High intelligence. <strong>Paid</strong> (pay-as-you-go). Best for complex translations.",
            "help.provider.gemini.desc": "Google's powerful model. <strong>Free tier available but limited</strong>. Paid plan recommended.",
            "help.provider.cerebras.desc": "World's fastest AI inference. <strong>Free tier available</strong>. Powered by custom wafer-scale chips.",
            "help.provider.btn": "Get Key",
            "help.provider.guide": "View Guide",
            "help.back": "← Back to Home",
            "help.step3.title": "3. Alternative: Run AI Locally with Ollama",
            "help.step3.desc": "Don't want to use cloud APIs? <strong>Ollama</strong> lets you run AI models entirely on your Mac — no API key, no internet, no cost. Perfect for privacy-focused users.",
            "help.provider.ollama.desc": "Run AI models locally on your Mac. <strong>100% free, 100% private</strong>. No API key needed.",
            "help.ollama.setup_title": "Setup in 3 steps:",
            "help.ollama.step1": "Install Ollama from <a href='https://ollama.com' target='_blank' style='color: var(--accent);'>ollama.com</a>",
            "help.ollama.step2": "Open Terminal and run: <code style='background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px;'>ollama pull qwen2.5:1.5b</code>",
            "help.ollama.step3": "In HoAh, add an AI Configuration → select <strong>Ollama (Local)</strong> as the provider",
            "help.ollama.models_title": "Recommended models:",
            "help.ollama.models_list": "<code style='background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px;'>qwen2.5:1.5b</code> — Fast, lightweight (default)<br><code style='background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px;'>llama3.2:3b</code> — Good balance of speed and quality<br><code style='background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px;'>gemma2:2b</code> — Google's compact model<br><code style='background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px;'>phi3:3.8b</code> — Microsoft's efficient model",
            "help.ollama.tip": "Tip: Run <code style='background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px;'>ollama list</code> to see installed models. If HoAh can't connect, make sure Ollama is running (<code style='background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px;'>ollama serve</code>).",
            "help.ollama.download": "Download Ollama",
            "help.ollama.browse_models": "Browse Models",

            // Guide Page (User Manual)
            "guide.title": "HoAh User Guide",
            "guide.subtitle": "Master the basics of HoAh in 1 minute.",
            "guide.step1.title": "1. Download Local Model",
            "guide.step1.desc": "For offline use, click <strong>Dictation Models</strong> in the sidebar (no need to open Settings). Select any local model (e.g., <strong>Large v3 Turbo</strong>) and click <strong>Download</strong>. We recommend downloading at least one.",
            "guide.step2.title": "2. How to Dictate",
            "guide.step2.desc": "<strong>Two ways to record:</strong><br>1. <strong>Toggle:</strong> Press <strong>Right Option (⌥)</strong> once to start, speak, then press again to stop.<br>2. <strong>Push-to-Talk:</strong> Hold the key while speaking, release to stop.<br><br><strong>Where does the text go?</strong><br>• The text is <strong>always</strong> automatically copied to your <strong>Clipboard</strong>.<br>• If a text box is focused, HoAh also <strong>types directly</strong> for you.",
            "guide.cancel.title": "3. Cancel Recording",
            "guide.cancel.desc": "Double-tap <strong>Escape</strong> to discard the current recording instantly.",
            "guide.advanced.title": "4. Advanced: Enable AI Polish",
            "guide.advanced.desc": "Want to fix grammar or translate? <br>1. Get a free <a href='../help/' class='inline-link'>API Key</a> (e.g. Groq).<br>2. In sidebar, click <strong>AI Action</strong> → <strong>Add Configuration</strong>.<br>3. Paste your key and <strong>Save</strong>.<br>4. Turn on <strong>Enable AI Action</strong>.<br>5. Select a <strong>Default Action</strong> (e.g. Polish).",
            "guide.protips.title": "5. Pro Tips",
            "guide.protips.desc": "<strong>Mini Recorder:</strong> <strong>Hover</strong> over the icon to quickly switch AI Actions or view the last 3 history items.<br><strong>Shortcuts:</strong> Use <code>Cmd + 1/2/3/4</code> to switch <strong>AI Actions</strong> instantly.",
            "guide.more_settings.title": "6. Useful Settings",
            "guide.more_settings.desc": "• <strong>General:</strong> Set <strong>Launch at Login</strong> or <strong>Hide Dock Icon</strong> to run in background.<br>• <strong>History:</strong> Auto-delete old transcripts in <strong>Data & Privacy</strong>.<br>• <strong>History View:</strong> <strong>Search</strong> past text, view raw transcripts, copy, or <strong>Export</strong> with one click.",

            // Demo Cards Keys

            // Demo Cards Keys
            "demo.a1.title": "Polish · Basic",
            "demo.a2.title": "Polish · Writing",
            "demo.a3.title": "Polish · High-EQ",
            "demo.a4.title": "Polish · Mix",
            "demo.b1.title": "Translate / Spanish",
            "demo.b2.title": "Translate / Wenyan",
            "demo.b3.title": "Translate / Klingon",
            "demo.b5.title": "Translate / Python",
            "demo.b6.title": "Translate / Logic",
            "demo.b7.title": "Translate / 🐶",
            "demo.b8.title": "Translate / Binary"
        },
        zh: {
            "common.appName": "吼蛙 (HoAh)",
            "hero.title.1": "捕捉",
            "hero.title.2": "精炼",
            "hero.title.3": "转化",
            "hero.subtitle": "macOS 上<strong>快速、本地、多语言</strong>，且<strong>非盈利 & 免费</strong>的语音转写工具。支持 <strong>AI 润色</strong>、<strong>任意语言互译</strong><span id=\"crazy-trigger\" class=\"interactive-trigger\">（甚至 🐱、🐶 & 👽！）</span>。",
            "feat.core.title": "本地 & 多语言",
            "feat.core.desc": "由本地 Whisper 模型驱动。任意语言混合输入也能流畅识别。除非您选择云端模型，否则音频绝不出库。",
            "feat.polish.title": "AI 润色",
            "feat.polish.desc": "将凌乱的语音转化为干练、专业的文本。HoAh 自动去除口癖、修正语法，并整理结构。",
            "feat.transform.title": "万能互译",
            "feat.transform.desc": "打破一切语言障碍。支持中英互译、小语种转换，甚至是<strong>将 🐱、🐶 & 👽 语翻译成人话</strong>。",
            "detail.privacy.title": "隐私至上",
            "detail.privacy.desc": "专为 Apple Silicon 优化，高效运行本地 AI 模型。<strong>永久免费</strong>。无登录、无广告、无订阅、无数据收集。",
            "companies.label": "用户来自以下顶尖团队",
            "hero.disclaimer": "* 演示案例基于 <strong>gpt-oss-120B</strong>生成。实际效果因所选模型而异。",
            "hero.guide_link": "用户指南 →",
            "hero.help_link": "AI 新手？设置向导 →",
            "hero.slogan": "每一次吼蛙听写，都为您省下至少一秒",

            // iOS Page
            "ios.hero.title": "吼蛙 (HoAh) iOS 版",
            "ios.hero.subtitle": "HoAh 的强大能力，现已装进口袋。<br><strong>本地、极速</strong>，与您的 Mac <strong>无缝同步</strong>。",
            "ios.cta.testflight": "加入 TestFlight 测试",
            "ios.cta.waitlist": "加入候补名单",
            "ios.feat.sync.title": "iCloud 同步",
            "ios.feat.sync.desc": "您的历史记录、词汇表和设置将在所有设备间即时同步。",
            "ios.feat.mobile.title": "移动端优化",
            "ios.feat.mobile.desc": "专为触控设计。在移动中也能享受与桌面端一致的专业级语音 AI。",


            // Help Page (API Setup)
            "help.title": "开启 HoAh AI 之旅",
            "help.subtitle": "HoAh 的听写功能<strong>完全本地运行</strong>，<strong>下载即可永久免费使用</strong>。但为了提供<strong>润色、翻译</strong>等高级能力，我们需要连接更强大的云端大模型。这需要您配置一个“密钥 (Key)”。别担心，这通常是免费的，获取也很简单！",
            "help.step1.title": "1. 什么是 API Key？",
            "help.step1.desc": "您可以把 API Key 想象成一张数字<strong>通行证</strong>。它允许 HoAh 将您的文本发送给超级聪明的 AI 大脑（如 ChatGPT）进行处理，并取回结果。您完全掌控这张通行证。",
            "help.step2.title": "2. 选择 AI 提供商",
            "help.step2.desc": "有很多 AI 提供商可供选择。我们推荐 <strong>Groq</strong> 或 <strong>Cerebras</strong>（极速、免费），或 <strong>OpenAI</strong> / <strong>Google Gemini</strong>（高质量）。<br><span class=\"cost-note\">注：免费额度已足够绝大多数人日常使用。即使使用 OpenAI 等付费服务，高强度使用每天成本通常也不到 <strong>$0.02</strong>（约 0.15 元）。</span>",
            "help.provider.groq.desc": "极速响应。<strong>提供免费额度</strong>。非常适合实时语音润色。",
            "help.provider.openai.desc": "行业标准，高智商。<strong>付费</strong>（按量计费）。适合复杂的翻译任务。",
            "help.provider.gemini.desc": "Google 的强力模型。<strong>提供免费额度但是极为有限</strong>，建议付费。",
            "help.provider.cerebras.desc": "全球最快 AI 推理。<strong>提供免费额度</strong>。由晶圆级芯片驱动。",
            "help.provider.btn": "获取 Key",
            "help.provider.guide": "查看教程",
            "help.back": "← 返回首页",
            "help.step3.title": "3. 替代方案：使用 Ollama 本地运行 AI",
            "help.step3.desc": "不想使用云端 API？<strong>Ollama</strong> 让你在 Mac 上完全本地运行 AI 模型 — 无需密钥、无需联网、完全免费。非常适合注重隐私的用户。",
            "help.provider.ollama.desc": "在 Mac 上本地运行 AI 模型。<strong>完全免费、完全私密</strong>。无需 API Key。",
            "help.ollama.setup_title": "三步完成配置：",
            "help.ollama.step1": "从 <a href='https://ollama.com' target='_blank' style='color: var(--accent);'>ollama.com</a> 下载安装 Ollama",
            "help.ollama.step2": "打开终端运行：<code style='background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px;'>ollama pull qwen2.5:1.5b</code>",
            "help.ollama.step3": "在 HoAh 中添加 AI 配置 → 选择 <strong>Ollama (Local)</strong> 作为提供商",
            "help.ollama.models_title": "推荐模型：",
            "help.ollama.models_list": "<code style='background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px;'>qwen2.5:1.5b</code> — 快速、轻量（默认）<br><code style='background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px;'>llama3.2:3b</code> — 速度与质量兼顾<br><code style='background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px;'>gemma2:2b</code> — Google 的紧凑模型<br><code style='background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px;'>phi3:3.8b</code> — 微软的高效模型",
            "help.ollama.tip": "提示：运行 <code style='background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px;'>ollama list</code> 查看已安装模型。如果 HoAh 无法连接，请确保 Ollama 正在运行（<code style='background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px;'>ollama serve</code>）。",
            "help.ollama.download": "下载 Ollama",
            "help.ollama.browse_models": "浏览模型",

            // Guide Page (User Manual)
            "guide.title": "HoAh 使用指南",
            "guide.subtitle": "1 分钟玩转 HoAh。",
            "guide.step1.title": "1. 下载本地模型",
            "guide.step1.desc": "如需离线使用，请点击侧边栏的 <strong>听写模型 (Dictation Models)</strong>（无需进入设置）。选择任意一个本地模型（如 <strong>Large v3 Turbo</strong>）点击 <strong>下载</strong> 即可。建议至少下载一个模型。",
            "guide.step2.title": "2. 如何听写",
            "guide.step2.desc": "<strong>两种录音方式：</strong><br>1. <strong>切换模式：</strong>按一下<strong>右侧 Option (⌥)</strong> 开始说话，说完再按一下停止。<br>2. <strong>对讲机模式：</strong>按住键说话，说完松开。<br><br><strong>文字去哪了？</strong><br>• 文字<strong>始终</strong>会自动进入<strong>剪贴板</strong>（可随时按 <code>Cmd + V</code> 粘贴）。<br>• 如果光标在输入框内，HoAh 还会帮你<strong>直接打字</strong>。",
            "guide.cancel.title": "3. 取消录音",
            "guide.cancel.desc": "双击 <strong>Escape</strong> 键可立即丢弃当前录音。",
            "guide.advanced.title": "4. 进阶：开启 AI 润色",
            "guide.advanced.desc": "想要自动修复语法或翻译？<br>1. 获取免费 <a href='../help/' class='inline-link'>Key</a>（如 Groq）。<br>2. 点击侧边栏 <strong>AI Action</strong> → <strong>添加配置</strong>。<br>3. 粘贴 Key 并<strong>保存</strong>。<br>4. 开启 <strong>Enable AI Action</strong>。<br>5. 选择一个 <strong>Default Action</strong> (如 Polish)。",
            "guide.protips.title": "5. 高手秘籍",
            "guide.protips.desc": "<strong>迷你录音机：</strong>鼠标<strong>悬停 (Hover)</strong> 在图标上可快速切换 AI Action，或查看最近 3 条历史记录。<br><strong>快捷键：</strong>使用 <code>Cmd + 1/2/3/4</code> 瞬间切换 <strong>AI Action</strong>。",
            "guide.more_settings.title": "6. 更多实用设置",
            "guide.more_settings.desc": "• <strong>通用设置：</strong>设置 <strong>开机自启 (Launch at Login)</strong> 或 <strong>隐藏 Dock 图标</strong> 以在后台运行。<br>• <strong>历史管理：</strong>在 <strong>Data & Privacy</strong> 中设置自动删除旧记录。<br>• <strong>历史记录：</strong>在主窗口可<strong>搜索</strong>历史文本、查看原始记录、复制内容，或一键<strong>导出</strong>。",

            // Demo Cards Keys

            // Demo Cards Keys
            "demo.a1.title": "润色 · 基础",
            "demo.a2.title": "润色 · 写作",
            "demo.a3.title": "润色 · 高情商",
            "demo.a4.title": "润色 · 混合",
            "demo.b1.title": "翻译 · 西班牙语",
            "demo.b2.title": "翻译 · 文言文",
            "demo.b3.title": "翻译 · 克林贡语",
            "demo.b5.title": "翻译 · Python",
            "demo.b6.title": "翻译 · 逻辑",
            "demo.b7.title": "翻译 · 🐶",
            "demo.b8.title": "翻译 · 二进制"
        }
    },
    crazyModes: [
        // --- Technical ---
        { id: 'sql', icon: '💾', name: 'SQL Query', input: "Find users named John who signed up last year.", output: "SELECT * FROM users WHERE name = 'John' AND signup_date >= DATE('now', '-1 year');" },
        { id: 'bash', icon: '💻', name: 'Bash Cmd', input: "Find all large files and delete them.", output: "find . -type f -size +100M -delete # WARNING: Handle with care!" },
        { id: 'regex', icon: '🧩', name: 'Regex', input: "Match a valid email address.", output: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" },
        { id: 'cron', icon: '⏰', name: 'Cron', input: "Run backup every Monday at 3 AM.", output: "0 3 * * 1 /path/to/backup.sh" },
        { id: 'rust', icon: '🦀', name: 'Rust', input: "Hello world.", output: "println!(\"Hello world.\");" },
        { id: 'json', icon: '{}', name: 'JSON', input: "My name is Alice and I am 25.", output: "{\n  \"name\": \"Alice\",\n  \"age\": 25\n}" },
        { id: 'log', icon: '🪵', name: 'System Log', input: "I woke up late.", output: "[09:00:01] [WARN] System.WakeUpEvent delayed.\n[09:00:05] [CRITICAL] Coffee module not found. Initiating panic." },
        { id: 'latex', icon: '📝', name: 'LaTeX', input: "The quadratic formula.", output: "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$" },

        // --- Abstract / Math ---
        { id: 'math', icon: '📐', name: 'Math Proof', input: "I want a burger.", output: "Theorem 1: Let B be the set of all burgers. Proof: The hunger level H(t) of subject I satisfies dH/dt > 0... Therefore, consuming b ∈ B is necessary. Q.E.D." },
        { id: 'logic', icon: '🧠', name: 'Formal Logic', input: "All humans are mortal. Socrates is human.", output: "∀x (Human(x) → Mortal(x))\nHuman(Socrates) ⊢ Mortal(Socrates)" },
        { id: 'binary', icon: '01', name: 'Binary', input: "Hi", output: "01001000 01101001" },
        { id: 'morse', icon: '📡', name: 'Morse Code', input: "SOS", output: "... --- ..." },
        { id: 'base64', icon: '🔒', name: 'Base64', input: "Secret", output: "U2VjcmV0" },

        // --- Creative / Fun ---

        { id: 'rap', icon: '🎤', name: 'Rap God', input: "I code all night.", output: "Yo, I stay up late, coding till the dawn,\nBugs beware, cause my skills are never gone.\nSyntax sharp, logic flows like a stream,\nLiving inside the compiler's dream. 🔥" },
        { id: 'ransom', icon: '🔪', name: 'Ransom Note', input: "Give me the money.", output: "gIvE mE tHe mOnEy. oR eLsE." },
        { id: 'reverse', icon: '◀️', name: 'Reverse', input: "Tenet", output: "teneT" },
        { id: 'dice', icon: '🎲', name: 'Roll D6', input: "Roll the dice!", output: "┌───────┐\n│ ●   ● │\n│   ●   │\n│ ●   ● │\n└───────┘" },

        // --- Persona / Character ---
        { id: 'xhs', icon: '📕', name: 'Xiaohongshu', input: "This cake is delicious.", output: "家人们！这家店的蛋糕真的绝绝子🍰✨！好吃到哭😭 必须冲鸭！#yyds #下午茶" },
        { id: 'chuuni', icon: '🎭', name: 'Chuunibyou', input: "I have a headache.", output: "My right eye... the seal of the dark dragon is weakening... Grahhh!" },
        { id: 'soft', icon: '🎀', name: 'Soft Girl', input: "Can you help me?", output: "Could you pwease help me? 👉👈 🥺 I'd be so happy~ (｡♥‿♥｡)" },
        { id: 'genz', icon: '💀', name: 'Gen Z', input: "That was funny.", output: "Bro that was wild fr no cap 💀 I'm dead. LMAO." },
        { id: 'corporate', icon: '🍌', name: 'Corporate', input: "We need to fix this bug.", output: "Let's deep dive into this issue and leverage our synergy to circle back with a scalable solution by EOD." },
        { id: 'trump', icon: '🇺🇸', name: 'Trump', input: "The weather is nice.", output: "The weather is tremendous, folks! Maybe the best weather in the history of weather. Everyone agrees!" },
        { id: 'pirate', icon: '🏴‍☠️', name: 'Pirate', input: "Where is the bathroom?", output: "Ahoy! Where be the head, ye scurvy dog? Arrr!" },
        { id: 'medieval', icon: '⚔️', name: 'Medieval', input: "Can I have a beer?", output: "Hark, Innkeeper! Fetch me a flagon of thy finest ale, lest I perish of thirst!" },
        { id: 'uwu', icon: '😻', name: 'UwU Furry', input: "Please help me.", output: "Pwease help me mistew... uwu *looks at you with puppy eyes* I'm so scared... >w<" },
        { id: 'bird', icon: '🐦', name: 'Birb', input: "I found a seed.", output: "SCREM! Seed! Is for me? *happy hops* Chirp! 🐦" },
        { id: 'bunny', icon: '🐰', name: 'Bunny', input: "I am hungry.", output: "Um... c-can I have a carrot? *nervous nose wiggle* Please? 🐰" },
        { id: 'robot', icon: '🤖', name: 'Robot', input: "I love you.", output: "AFFIRMATIVE. EMOTION DETECTED. PROCESSING LOVE... ERROR: DOES NOT COMPUTE. INITIATE HUG_SUBROUTINE.EXE." },
        { id: 'yoda', icon: '👽', name: 'Yoda', input: "I am ready.", output: "Ready, I am. Hmmm." },
        { id: 'elvish', icon: '🧝', name: 'Elvish', input: "Hello friend.", output: "Mae govannen, mellon." },
        { id: 'minion', icon: '👓', name: 'Minion', input: "I am hungry.", output: "Banana? Banana! Me want banana! Poopaye!" },
        { id: 'dnd', icon: '🐉', name: 'D&D Align', input: "I found a wallet.", output: "Lawful Good: Return it.\nChaotic Neutral: Keep the cash, leave the ID.\nChaotic Evil: Burn it for fun." },

        // --- Pokémon ---
        { id: 'pikachu', icon: '⚡', name: 'Pikachu', input: "I am happy!", output: "Pika Pika! Pikachu! ⚡" },
        { id: 'snorlax', icon: '💤', name: 'Snorlax', input: "Wake up.", output: "Snor... lax... 💤" },
        { id: 'charizard', icon: '🔥', name: 'Charizard', input: "Fight me!", output: "CHARIZAAAARD! 🔥" },
        { id: 'meowth', icon: '🪙', name: 'Meowth', input: "Give me money.", output: "Hand over da cash! Meowth, dat's right! 😼" }
    ],
    demoCards: [
        {
            key: "demo.a1.title",
            badgeClass: "badge",
            input: "\"So, um, basically, I just want to say that, like, thanks.\"",
            output: "\"So basically, I just want to say that thanks.\""
        },
        {
            key: "demo.b1.title",
            badgeClass: "badge blue",
            input: "\"Can you tell me where the nearest library is?\"",
            output: "\"¿Puedes decirme dónde está la biblioteca más cercana?\""
        },
        {
            key: "demo.a2.title",
            badgeClass: "badge",
            input: "\"The battery life is bad. We must improve it now.\"",
            output: "\"The battery life is inadequate; it must be improved immediately.\""
        },
        {
            key: "demo.b2.title",
            badgeClass: "badge blue",
            input: "\"The scenery here is so beautiful that I have forgotten to return home.\"",
            output: "\"此地风光甚美，忘返归家。\""
        },
        {
            key: "demo.a4.title",
            badgeClass: "badge",
            input: "\"那个，我觉得这个 UI design，嗯...有点 too busy，我们需要 simplify 一下，make it clean，对吧。\"",
            output: "\"我觉得这个 UI 设计有点 too busy，我们需要 simplify 一下，make it clean，对吧。\""
        },
        {
            key: "demo.a3.title",
            badgeClass: "badge",
            input: "\"This idea is stupid and I hate it.\"",
            output: "\"I do not find this idea suitable and have concerns about its viability.\""
        },
        {
            key: "demo.b3.title",
            badgeClass: "badge blue",
            input: "\"Today is a good day to fight!\"",
            output: "\"DaHjaj QaQ jaj 'ej QobmeH.\""
        },
        {
            key: "demo.b5.title",
            badgeClass: "badge purple",
            input: "\"Write a function to check if a number is prime.\"",
            output: `<pre style="white-space: pre-wrap; margin: 0; font-family: 'Menlo', monospace;">def is_prime(n: int) -> bool:
    """Return True if n is prime."""
    if n <= 1: return False
    if n <= 3: return True
    if n % 2 == 0 or n % 3 == 0: return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True</pre>`,
            outputStyle: "font-size: 0.8rem; text-align: left;"
        },
        {
            key: "demo.b8.title",
            badgeClass: "badge purple",
            input: "\"Hello.\"",
            output: "<code>01001000 01100101 01101100 01101100 01101111 00101110</code>",
            outputStyle: "font-size: 0.9rem;"
        },
        {
            key: "demo.b6.title",
            badgeClass: "badge pink",
            input: "\"All humans are mortal.\"",
            output: "<code>∀x (Human(x) → Mortal(x))</code>"
        },
        {
            key: "demo.b7.title",
            badgeClass: "badge pink",
            input: "\"Why are you eating without me? I am hungry!\"",
            output: "\"Why are you munchin’ without me? I’m super hungry, woof!\""
        }
    ]
};
