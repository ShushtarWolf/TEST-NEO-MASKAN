import { Button } from '@/ui/Button';

const contactReasons = ['Schedule a private tour', 'Investment partnership', 'Media & collaborations', 'Product feedback'];

export default function ContactPage() {
  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl space-y-10 px-6">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">Neo concierge</p>
          <h1 className="text-3xl font-semibold text-dark">Connect with the NeoMaskan studio</h1>
          <p className="text-sm text-muted">
            Our advisors align Inspire Maskan&apos;s hospitality principles with your personal timeline. Share how we can co-create your living story.
          </p>
        </div>
        <form className="space-y-6 rounded-3xl border border-primary-100 bg-white p-10 shadow-neo">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="font-semibold text-dark">Full name</span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span className="font-semibold text-dark">Email</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span className="font-semibold text-dark">Phone</span>
              <input
                type="tel"
                name="phone"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span className="font-semibold text-dark">Preferred date</span>
              <input
                type="date"
                name="date"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </label>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-dark">I&apos;m reaching out about</p>
            <div className="flex flex-wrap gap-3">
              {contactReasons.map((reason) => (
                <label key={reason} className="flex items-center space-x-2 rounded-full border border-slate-200 px-4 py-2 text-sm">
                  <input type="checkbox" name="reason" value={reason} className="rounded-full border-primary-300 text-primary-600 focus:ring-primary-200" />
                  <span>{reason}</span>
                </label>
              ))}
            </div>
          </div>
          <label className="space-y-2 text-sm">
            <span className="font-semibold text-dark">Message</span>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
            />
          </label>
          <Button type="submit" className="w-full justify-center shadow-neo">
            Submit request
          </Button>
          <p className="text-xs text-muted">
            By submitting, you agree to NeoMaskan&apos;s concierge terms and will receive a curated follow-up within 24 hours.
          </p>
        </form>
      </div>
    </div>
  );
}
