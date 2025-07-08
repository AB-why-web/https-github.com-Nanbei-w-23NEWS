import Link from "next/link";
import CristianoExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import FootballStats from "./wakatime-stats";

function SoccerNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-green-900/40 backdrop-blur-md text-white p-4 shadow-lg w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-green-300 transition-colors duration-300 tracking-wider">
          ⚽ 绿茵竞技场
        </Link>
        <div className="space-x-6 text-lg">
          <Link href="/" className="hover:text-green-300 transition-colors duration-300">首页</Link>
          <Link href="/archive" className="hover:text-green-300 transition-colors duration-300">比赛记录</Link>
        </div>
      </div>
    </nav>
  );
}

export default function SoccerHomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-green-950 text-green-50 items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-green-800/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] opacity-25 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500 via-green-900 to-transparent rounded-full blur-3xl"></div>
      
      <SoccerNavbar />

      <main className="flex-grow container mx-auto px-4 py-12 pt-28 w-full z-10">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-200 to-green-600 mb-6 drop-shadow-lg">
            🏆 绿茵竞技编程挑战
          </h1>
          <p className="text-lg md:text-xl text-green-200/90 max-w-3xl mx-auto tracking-wide">
            在代码的绿茵场上，书写属于你的足球传奇故事。
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {exercisesData.map((exercise: ExerciseCardProps) => (
              <CristianoExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>
      </main>

      <FootballStats />
    </div>
  );
}
