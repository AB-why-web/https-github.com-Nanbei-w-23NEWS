"use client";
import Link from 'next/link';

export default function CristianoEmbedDemo() {
  return (
    <div className="flex flex-col min-h-screen bg-green-950 text-green-50 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-green-800/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] z-0"></div>
      <main className="flex-grow w-full h-full relative z-10">
        <div className="fixed top-0 left-0 w-full z-20 bg-green-900/80 backdrop-blur-md border-b border-green-500/30 shadow-lg">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-green-400 hover:text-green-200 text-xl font-bold transition-colors">← 返回绿茵首页</Link>
              <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent drop-shadow">⚽ C罗数据展示 - 智能问答嵌入演示</span>
            </div>
            <span className="text-green-400 text-sm hidden md:block">绿茵风格嵌入式页面案例</span>
          </div>
        </div>
        <section className="max-w-3xl mx-auto mt-24 mb-6 bg-green-900/60 rounded-xl border border-green-700 shadow-xl p-6 relative z-20">
          <h2 className="text-xl font-bold text-green-300 mb-2">⚽ 案例说明</h2>
          <ul className="list-disc list-inside text-green-200 space-y-1 mb-1">
            <li>本案例演示了如何在 Next.js 页面中嵌入第三方智能问答服务，展示C罗职业生涯数据。</li>
            <li>顶部悬浮标题区采用绿茵风格美化，iframe 区域全屏沉浸式体验。</li>
            <li>如需体验交互，请直接在下方问答区输入关于C罗的问题。</li>
          </ul>
        </section>
        <iframe
          src="https://ai.youdao.com/saas/qanything/#/home"
          title="C罗数据问答服务"
          width="100%"
          height="100%"
          className="fixed left-0 w-full z-10"
          style={{
            top: 112, // 标题+说明高度
            height: 'calc(100vh - 112px)',
            border: 'none',
          }}
          allowFullScreen
        />
      </main>
    </div>
  );
} 