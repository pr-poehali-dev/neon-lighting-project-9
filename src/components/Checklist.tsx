import { useState } from "react";

const checklistGroups = [
  {
    group: "Теоретический экзамен",
    id: "theory",
    items: [
      "Знаю все категории дорожных знаков",
      "Уверенно решаю билеты без ошибок",
      "Понимаю правила проезда перекрёстков",
      "Знаю правила остановки и стоянки",
      "Изучил правила приоритета на дороге",
      "Прошёл не менее 500 билетов онлайн",
    ],
  },
  {
    group: "Автодром",
    id: "autodrom",
    items: [
      "Уверенно выполняю «змейку»",
      "Сдаю «эстакаду» без отката",
      "Освоил параллельную парковку",
      "Выполняю разворот на ограниченном участке",
      "Заезжаю в гараж с первой попытки",
    ],
  },
  {
    group: "Вождение в городе",
    id: "city",
    items: [
      "Правильно перестраиваюсь в потоке",
      "Уверенно проезжаю регулируемые перекрёстки",
      "Не нарушаю скоростной режим",
      "Правильно выполняю повороты и развороты",
      "Парковка параллельная и перпендикулярная",
    ],
  },
  {
    group: "Психологическая готовность",
    id: "psych",
    items: [
      "Не паникую при ошибке — исправляю спокойно",
      "Хорошо выспался накануне экзамена",
      "Знаю маршрут экзамена в ГИБДД",
      "Подготовил все необходимые документы",
    ],
  },
];

export default function Checklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const total = checklistGroups.reduce((acc, g) => acc + g.items.length, 0);
  const done = Object.values(checked).filter(Boolean).length;
  const percent = Math.round((done / total) * 100);

  return (
    <div className="bg-white px-6 py-20" id="checklist">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Глава 3 · Чек-лист</p>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          Готов к экзамену?
        </h2>
        <p className="text-neutral-600 text-lg mb-8 max-w-2xl">
          Отмечай пункты по мере подготовки — и ты будешь точно знать, когда пора идти сдавать.
        </p>

        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 bg-neutral-100 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-neutral-900 transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="text-sm font-mono text-neutral-500 shrink-0">{done}/{total}</span>
          <span className={`text-sm font-semibold shrink-0 ${percent === 100 ? "text-green-600" : "text-neutral-900"}`}>
            {percent === 100 ? "Готов! 🎉" : `${percent}%`}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {checklistGroups.map((group) => {
            const groupDone = group.items.filter((_, i) => checked[`${group.id}-${i}`]).length;
            return (
              <div key={group.id} className="border border-neutral-100 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-neutral-900">{group.group}</h3>
                  <span className="text-xs font-mono text-neutral-400">
                    {groupDone}/{group.items.length}
                  </span>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item, i) => {
                    const key = `${group.id}-${i}`;
                    const isChecked = !!checked[key];
                    return (
                      <li
                        key={key}
                        onClick={() => toggle(key)}
                        className="flex items-start gap-3 cursor-pointer group"
                      >
                        <div className={`mt-0.5 w-4 h-4 shrink-0 border transition-all duration-200 flex items-center justify-center ${
                          isChecked
                            ? "bg-neutral-900 border-neutral-900"
                            : "border-neutral-300 group-hover:border-neutral-600"
                        }`}>
                          {isChecked && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                        <span className={`text-sm transition-colors duration-200 ${
                          isChecked ? "line-through text-neutral-400" : "text-neutral-700 group-hover:text-neutral-900"
                        }`}>
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
