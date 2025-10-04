const stats = [
  { label: 'واحدهای منتخب', value: '۱۲۰+' },
  { label: 'تورهای هوشمند برگزار شده', value: '۳٫۸K' },
  { label: 'میانگین امتیاز پیاده‌روی', value: '۸۷' },
  { label: 'رضایت مشتریان', value: '۴٫۹/۵' }
];

export function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center md:grid-cols-4 md:text-right">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-200/60 bg-slate-50/60 p-6 shadow-sm">
            <p className="text-3xl font-semibold text-primary-600">{stat.value}</p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
