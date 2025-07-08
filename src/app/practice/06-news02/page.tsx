'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SoccerCommunityPlatform() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 足球俱乐部类和球员继承
    class SoccerClub {
      name: string;
      city: string;
      founded: number;
      
      constructor(name: string, city: string, founded: number) {
        this.name = name;
        this.city = city;
        this.founded = founded;
      }
      
      celebrate() {
        console.log(`🏆 ${this.name} 俱乐部庆祝胜利！`);
      }
      
      training() {
        console.log(`⚽ ${this.name} 开始日常训练`);
      }
    }
    
    const realMadrid = new SoccerClub('皇家马德里', '马德里', 1902);
    realMadrid.celebrate();
    realMadrid.training();

    class SoccerPlayer extends SoccerClub {
      position: string;
      goals: number;
      
      constructor(name: string, city: string, founded: number, position: string, goals: number) {
        super(name, city, founded);
        this.position = position;
        this.goals = goals;
      }
      
      score() {
        this.goals++;
        console.log(`⚽ ${this.name} 球员进球了！当前进球数: ${this.goals}`);
      }
      
      showStats() {
        console.log(`📊 球员统计 - 姓名: ${this.name}, 位置: ${this.position}, 进球数: ${this.goals}`);
      }
    }
    
    const cristiano = new SoccerPlayer('C罗', '马德拉岛', 1985, '前锋', 890);
    cristiano.score();
    cristiano.showStats();

    // 足球比赛回调函数练习
    console.log('🏟️ 比赛开始');
    setTimeout(function () {
      console.log('⚽ 第45分钟 - 上半场结束');
    }, 2000);
    console.log('⏰ 比赛进行中...');

    // 足球相关DOM操作
    if (divRef.current) {
      console.log('🎮 足球互动区域:', divRef.current);
      divRef.current.innerHTML = '⚽ 点击我体验足球游戏互动！';
      divRef.current.onclick = function () {
        alert('🏆 恭喜！你体验了足球互动功能！');
      };
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-green-950 text-green-50">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-green-800/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回绿茵首页</span>
          </Link>
        </div>
        
        <section className="max-w-3xl mx-auto mb-10 bg-green-900/70 rounded-xl border border-green-700 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-green-300 mb-4">⚽ 足球社区平台：类、继承、回调与DOM操作</h2>
          <ul className="list-disc list-inside text-green-200 space-y-2 mb-2">
            <li>本案例展示了 TypeScript 在足球系统中的应用：俱乐部类、球员继承、比赛回调、DOM 操作等。</li>
            <li>页面加载后请按 F12 打开浏览器控制台，观察足球系统的运行过程。</li>
            <li>你可以点击标题和下方内容，体验足球互动功能。</li>
          </ul>
        </section>
        
        <section className="max-w-3xl mx-auto bg-green-900/60 rounded-xl border border-green-700 shadow-2xl p-8">
          <div className="flex flex-col items-center">
            <Image
              src="/practice/images/生成C罗图片 (9).png"
              alt="足球社区平台"
              width={400}
              height={200}
              className="rounded-lg mb-6 shadow-lg border-2 border-green-600"
            />
            
            <h1
              ref={h1Ref}
              style={{ cursor: 'pointer', transition: 'color 0.3s' }}
              onClick={() => alert('🏆 欢迎来到足球编程世界！')}
              className="text-3xl font-bold mb-6 text-center hover:text-green-300 transition-colors"
            >
              ⚽ 足球编程语法 (点击我试试)
            </h1>
            
            <div className="bg-green-800/40 rounded-lg p-6 border border-green-600 mb-6 w-full">
              <h3 className="text-lg font-bold text-green-300 mb-3">🏟️ 编程概念演示</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-green-700/30 p-3 rounded">
                  <p className="font-semibold text-green-300">📚 类(Class):</p>
                  <p className="text-green-200">SoccerClub 俱乐部基类</p>
                </div>
                <div className="bg-green-700/30 p-3 rounded">
                  <p className="font-semibold text-green-300">🔄 继承(Inheritance):</p>
                  <p className="text-green-200">SoccerPlayer 继承俱乐部</p>
                </div>
                <div className="bg-green-700/30 p-3 rounded">
                  <p className="font-semibold text-green-300">⏰ 回调(Callback):</p>
                  <p className="text-green-200">比赛时间计时器</p>
                </div>
                <div className="bg-green-700/30 p-3 rounded">
                  <p className="font-semibold text-green-300">🎮 DOM操作:</p>
                  <p className="text-green-200">足球互动区域</p>
                </div>
              </div>
            </div>
            
            <div
              ref={divRef}
              className="text-lg text-green-200 bg-green-700/60 rounded p-4 text-center cursor-pointer hover:bg-green-600/40 transition-colors w-full border border-green-600"
            >
              ⚽ 足球互动内容区域
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 