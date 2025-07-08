import Link from 'next/link';
import Image from 'next/image';
import CristianoDemo from "../my-app-demo";
import SoccerClubHello from "../my-app-hello";

export default function SoccerClubHome() {
  return (
    <div className="flex flex-col min-h-screen bg-green-950 text-green-50">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-green-800/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] z-0"></div>
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回绿茵首页</span>
          </Link>
        </div>
        <section className="max-w-3xl mx-auto mb-10 bg-green-900/70 rounded-xl border border-green-700 shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0">
            <Image 
              src="/practice/images/生成C罗图片 (1).png" 
              alt="足球俱乐部管理系统" 
              width={220} 
              height={140} 
              className="rounded-lg shadow-lg border-2 border-green-600" 
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-300 mb-2">⚽ 足球俱乐部管理系统</h2>
            <p className="text-green-200 mb-2">基于React构建的现代化足球俱乐部管理平台，展示球员信息、比赛安排和战术分析的完整解决方案。</p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-green-800/50 text-green-200 px-3 py-1 rounded text-xs font-mono border border-green-600">React</span>
              <span className="bg-green-800/50 text-green-200 px-3 py-1 rounded text-xs font-mono border border-green-600">俱乐部管理</span>
              <span className="bg-green-800/50 text-green-200 px-3 py-1 rounded text-xs font-mono border border-green-600">足球</span>
            </div>
          </div>
        </section>
        <section className="max-w-3xl mx-auto bg-green-900/60 rounded-xl border border-green-700 shadow-2xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-green-200">🏟️ 俱乐部管理系统演示</h1>
          <div className="space-y-6">
            <div className="bg-green-800/30 rounded-lg p-6 border border-green-600">
              <h3 className="text-xl font-semibold text-green-300 mb-3">🎯 系统功能介绍</h3>
              <ul className="space-y-2 text-green-200 text-sm">
                <li>• 球员信息管理：球员档案、技能评估、转会记录</li>
                <li>• 比赛安排系统：赛程管理、对阵分析、成绩统计</li>
                <li>• 战术分析工具：阵型设计、数据分析、表现评估</li>
                <li>• 财务管理模块：预算控制、薪资管理、收入分析</li>
              </ul>
            </div>
            <CristianoDemo />
            <SoccerClubHello />
          </div>
        </section>
      </main>
    </div>
  );
} 