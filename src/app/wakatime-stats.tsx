import { Suspense } from 'react';

async function getFootballStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    console.error("Football stats API key is not configured.");
    return "绿茵统计系统未配置";
  }

  try {
    const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`;
    
    const response = await fetch(
      url,
      {
        next: {
          revalidate: 3600, // 每小时重新获取一次数据
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Football stats API request failed with status: ${response.status}`);
      console.error(`Football stats API error response: ${errorText}`);
      return "⚽ 暂无比赛数据";
    }

    const stats = await response.json();
    return stats.data?.text || "🏆 准备开始绿茵征程";
  } catch (error) {
    console.error("Failed to fetch football stats:", error);
    return "🔄 数据加载中...";
  }
}

async function FootballData() {
    const stats = await getFootballStats();
    return (
        <p>⚽ 绿茵编程时长: <span className="font-semibold text-green-300">{stats}</span></p>
    );
}

export default function FootballStats() {
  return (
    <footer className="text-green-400 text-center p-8 mt-auto w-full z-10">
        <p className="mb-2">🏆 &copy; {new Date().getFullYear()} 绿茵竞技编程挑战平台</p>
        <Suspense fallback={<p>🔄 正在加载绿茵数据...</p>}>
            <FootballData />
        </Suspense>
    </footer>
  );
} 