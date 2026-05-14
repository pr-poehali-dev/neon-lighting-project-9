export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/af1d8543-d347-456c-b006-479f468e4d72/files/d42f8bc1-edae-401a-b4ef-c315c2e4fa50.jpg"
          alt="Дорожные знаки"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600" id="theory">Глава 1 · Теоретический экзамен</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Структура экзамена, эффективные методы изучения ПДД и психологическая подготовка — всё, чтобы пройти тест без единой ошибки.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm font-mono mt-1">1.1</span>
            <span className="text-neutral-700">Структура и содержание экзамена</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm font-mono mt-1">1.2</span>
            <span className="text-neutral-700">Эффективные методы изучения ПДД</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm font-mono mt-1">1.3</span>
            <span className="text-neutral-700">Психологическая подготовка к тесту</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Читать главу
        </button>
      </div>
    </div>
  );
}