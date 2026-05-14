import { useState } from "react";

const weeks = [
  {
    week: 1,
    title: "Знакомство с ПДД",
    tasks: [
      "Изучить дорожные знаки (категории 1–3)",
      "Пройти первые 10 тем билетов",
      "Записаться в автошколу / выбрать инструктора",
    ],
    focus: "Теория",
  },
  {
    week: 2,
    title: "Углублённое изучение правил",
    tasks: [
      "Изучить приоритеты и перекрёстки",
      "Пройти темы 11–20 билетов",
      "Первое занятие на закрытой площадке",
    ],
    focus: "Теория + Автодром",
  },
  {
    week: 3,
    title: "Автодром: базовые упражнения",
    tasks: [
      "Отработать «змейку» и «эстакаду»",
      "Повторить знаки и разметку",
      "Пройти темы 21–30 билетов",
    ],
    focus: "Автодром",
  },
  {
    week: 4,
    title: "Автодром: сложные элементы",
    tasks: [
      "Отработать параллельную парковку",
      "Разворот и заезд в гараж",
      "Решить 200 билетов онлайн (с таймером)",
    ],
    focus: "Автодром",
  },
  {
    week: 5,
    title: "Первые выезды в город",
    tasks: [
      "Вождение по простым маршрутам",
      "Разобрать типичные ошибки с инструктором",
      "Повторить сложные темы теории",
    ],
    focus: "Город",
  },
  {
    week: 6,
    title: "Городское вождение",
    tasks: [
      "Сложные перекрёстки и развязки",
      "Парковка в городских условиях",
      "Пробные экзаменационные билеты (без ошибок)",
    ],
    focus: "Город",
  },
  {
    week: 7,
    title: "Финальная шлифовка",
    tasks: [
      "Ежедневно решать по 50 билетов",
      "Проехать экзаменационный маршрут",
      "Психологическая подготовка к экзамену",
    ],
    focus: "Подготовка",
  },
  {
    week: 8,
    title: "Экзамен",
    tasks: [
      "Хороший сон за день до экзамена",
      "Теоретический экзамен в ГИБДД",
      "Практический экзамен в городе",
    ],
    focus: "Экзамен",
  },
];

const focusColors: Record<string, string> = {
  "Теория": "bg-blue-100 text-blue-700",
  "Теория + Автодром": "bg-purple-100 text-purple-700",
  "Автодром": "bg-orange-100 text-orange-700",
  "Город": "bg-green-100 text-green-700",
  "Подготовка": "bg-yellow-100 text-yellow-700",
  "Экзамен": "bg-red-100 text-red-700",
};

export default function WeeklyPlan() {
  const [activeWeek, setActiveWeek] = useState<number | null>(null);

  return (
    <div className="bg-neutral-50 px-6 py-20" id="plan">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Глава 3 · Комплексный план</p>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          8 недель до прав
        </h2>
        <p className="text-neutral-600 text-lg mb-12 max-w-2xl">
          Пошаговый график подготовки — от первого знакомства с ПДД до успешной сдачи экзамена.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {weeks.map((w) => (
            <div
              key={w.week}
              onClick={() => setActiveWeek(activeWeek === w.week ? null : w.week)}
              className={`border cursor-pointer transition-all duration-300 ${
                activeWeek === w.week
                  ? "border-neutral-900 bg-white shadow-lg"
                  : "border-neutral-200 bg-white hover:border-neutral-400"
              }`}
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-neutral-400 text-xs font-mono">НЕДЕЛЯ {w.week}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${focusColors[w.focus]}`}>
                    {w.focus}
                  </span>
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm leading-snug mb-3">{w.title}</h3>

                {activeWeek === w.week && (
                  <ul className="mt-3 space-y-2 border-t border-neutral-100 pt-3">
                    {w.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                        <span className="text-neutral-300 mt-0.5">→</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                )}

                <div className={`text-xs text-neutral-400 mt-2 transition-all ${activeWeek === w.week ? "hidden" : ""}`}>
                  Нажми, чтобы раскрыть
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
