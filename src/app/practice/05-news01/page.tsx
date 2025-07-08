'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SoccerNewsPage() {
  useEffect(() => {
    // 足球比赛相关的JavaScript示例
    const currentMatchTime = 45; // 比赛时间
    console.log('⚽ 当前比赛时间:', currentMatchTime);
    
    const homeTeam = '皇家马德里';
    const awayTeam = '巴塞罗那';
    console.log('🏆 比赛对阵:', homeTeam, 'vs', awayTeam);
    
    // 球员信息
    const playerName = 'C罗';
    const playerNumber = 7;
    const goals = 5;
    console.log('球员信息:', playerName, '号码:', playerNumber, '进球数:', goals);
    
    // 数据类型演示
    console.log('数据类型检查:');
    console.log('typeof 比赛时间:', typeof currentMatchTime);
    console.log('typeof 球队名称:', typeof homeTeam);
    console.log('typeof 是否获胜:', typeof true);
    
    // 字符串与数字
    const scoreStr = '3';
    console.log('字符串分数:', scoreStr);
    console.log('数字分数:', goals + Number(scoreStr));
    
    // 比较运算
    const targetScore = 5; // 改为数字类型
    console.log('进球数 == 目标分数:', goals == targetScore);
    console.log('进球数 === 目标分数:', goals === targetScore);
    
    // 条件判断 - 比赛状态
    const matchTime = '90:00';
    if (matchTime === '90:00') {
      console.log('🏁 比赛结束！');
    } else {
      console.log('⏰ 比赛进行中...');
    }
    
    // 循环 - 球员进球统计
    console.log('🎯 球员进球记录:');
    for (let minute = 10; minute <= 90; minute += 20) {
      console.log(`第${minute}分钟 - 进球机会！`);
    }
    
    // while循环 - 训练时间
    let trainingMinutes = 90;
    while (trainingMinutes > 0) {
      console.log(`🏃‍♂️ 继续训练... 剩余${trainingMinutes}分钟`);
      trainingMinutes -= 30;
    }
    
    // 函数定义
    function showPlayerInfo() {
      console.log('🏆 球员介绍：C罗，世界足坛传奇！');
    }
    showPlayerInfo();
    
    function calculateGoalRate(goals: number, matches: number) {
      const rate = goals / matches;
      console.log(`⚽ 进球率：${rate.toFixed(2)} 球/场`);
      return rate;
    }
    
    const goalRate = calculateGoalRate(890, 1100);
    console.log('计算结果:', goalRate);
    
    function createMatchReport(homeGoals: number, awayGoals: number, matchDate: string) {
      console.log(`📊 比赛报告：${homeGoals}-${awayGoals} (${matchDate})`);
      return `比赛结果：${homeGoals > awayGoals ? '主队获胜' : awayGoals > homeGoals ? '客队获胜' : '平局'}`;
    }
    
    const matchResult = createMatchReport(3, 1, '2024-12-18');
    console.log('📈 比赛结果:', matchResult);
    
    alert('🏟️ 足球新闻页面加载完成！请查看控制台了解比赛数据分析！');
  }, []); // 添加空的依赖项数组

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
          <h2 className="text-2xl font-bold text-green-300 mb-4">🏆 足球数据分析：JavaScript基础语法</h2>
          <ul className="list-disc list-inside text-green-200 space-y-2 mb-2">
            <li>本案例展示了JavaScript/TypeScript在足球数据分析中的应用：变量定义、类型检查、条件判断、循环控制、函数编程等。</li>
            <li>页面加载后会弹窗提示，并在控制台输出详细的比赛数据分析。</li>
            <li>请按 F12 打开浏览器控制台，观察足球数据的处理过程。</li>
          </ul>
        </section>
        
        <section className="max-w-3xl mx-auto bg-green-900/60 rounded-xl border border-green-700 shadow-2xl p-8 flex flex-col items-center">
          <div className="mb-6">
            <Image
              src="/practice/images/生成C罗图片 (7).png"
              alt="足球新闻 - C罗传奇"
              width={400}
              height={300}
              className="rounded-lg shadow-lg border-2 border-green-600"
            />
          </div>
          
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-green-300">🎯 绿茵场数据分析系统</h3>
            <div className="bg-green-800/40 rounded-lg p-6 border border-green-600">
              <p className="text-green-200 mb-4">
                （本页面主要展示JavaScript数据处理逻辑，请查看控制台输出获取完整的足球数据分析结果）
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-green-700/30 p-3 rounded">
                  <p className="font-semibold text-green-300">⚽ 球员统计</p>
                  <p className="text-green-200">进球、助攻、比赛场次</p>
                </div>
                <div className="bg-green-700/30 p-3 rounded">
                  <p className="font-semibold text-green-300">🏆 比赛分析</p>
                  <p className="text-green-200">实时比分、战术分析</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 