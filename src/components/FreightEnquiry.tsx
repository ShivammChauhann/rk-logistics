import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { COMPANY, VEHICLE_OPTIONS } from '@/data/company';

type FormState = {
  contact: string;
  mobile: string;
  email: string;
  pickup: string;
  delivery: string;
  weight: string;
  loadType: string;
  vehicle: string;
  cargo: string;
  dispatchDate: string;
  requirements: string;
};

const EMPTY: FormState = {
  contact: '',
  mobile: '',
  email: '',
  pickup: '',
  delivery: '',
  weight: '',
  loadType: '',
  vehicle: '',
  cargo: '',
  dispatchDate: '',
  requirements: '',
};

const INDIAN_MOBILE = /^[6-9]\d{9}$/;

export default function FreightEnquiry() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState('');

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.contact.trim()) next.contact = 'Please enter a contact person or company name.';
    if (!form.mobile.trim()) next.mobile = 'Please enter a mobile number.';
    else if (!INDIAN_MOBILE.test(form.mobile.replace(/\s+|-/g, '')))
      next.mobile = 'Enter a valid 10-digit Indian mobile number (starting 6–9).';
    if (!form.pickup.trim()) next.pickup = 'Please enter a pickup location.';
    if (!form.delivery.trim()) next.delivery = 'Please enter a delivery location.';
    if (!form.weight.trim()) next.weight = 'Please enter an approximate cargo weight.';
    if (!form.loadType) next.loadType = 'Please select a load type.';
    if (!form.vehicle) next.vehicle = 'Please select a vehicle option.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildSummary = (f: FormState): string => {
    const lines = [
      `Contact: ${f.contact}`,
      `Mobile: ${f.mobile}`,
      f.email && `Email: ${f.email}`,
      `Pickup: ${f.pickup}`,
      `Delivery: ${f.delivery}`,
      `Approx Weight: ${f.weight}`,
      `Load Type: ${f.loadType}`,
      `Vehicle: ${f.vehicle}`,
      f.cargo && `Cargo: ${f.cargo}`,
      f.dispatchDate && `Dispatch Date: ${f.dispatchDate}`,
      f.requirements && `Requirements: ${f.requirements}`,
    ].filter(Boolean);
    return lines.join('\n');
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (!validate()) return;

    setSubmitting(true);
    const text = buildSummary(form);
    const waText = encodeURIComponent(
      `Hello RK Logistics, I would like to request a freight quote.\n\n${text}`
    );
    const url = `https://wa.me/${COMPANY.whatsapp}?text=${waText}`;

    // Open WhatsApp with prefilled enquiry
    window.open(url, '_blank', 'noopener,noreferrer');

    // Show reviewable summary; do not claim the quote reached the company
    setSummary(text);
    setSubmitted(true);
    setSubmitting(false);
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setSummary('');
    setSubmitted(false);
  };

  return (
    <section id="enquiry" className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-amber-600 text-xs font-semibold tracking-[0.2em] uppercase">
            Freight Enquiry
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#071533] leading-tight tracking-tight">
            Request a freight quote
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Share your consignment details and our dispatch team will follow up. Your enquiry opens
            a prefilled WhatsApp message addressed to our dispatch line — review it before sending.
          </p>
        </div>

        {submitted ? (
          <div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid place-items-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-bold text-[#071533] text-lg">Review your enquiry</h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  A WhatsApp window has opened with your details prefilled. Please review and press
                  send in WhatsApp to deliver your enquiry to our dispatch team. A quote is only
                  confirmed once our team responds.
                </p>
              </div>
            </div>
            <pre className="mt-5 bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs sm:text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
              {summary}
            </pre>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#071533] font-semibold px-5 py-3 rounded-md transition-colors"
              >
                <Send className="w-4 h-4" />
                Open WhatsApp Again
              </a>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#071533] font-semibold px-5 py-3 rounded-md border border-gray-300 transition-colors"
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <Field label="Contact Person / Company Name" required error={errors.contact}>
                <input
                  type="text"
                  value={form.contact}
                  onChange={(e) => update('contact', e.target.value)}
                  className={inputCls(errors.contact)}
                  placeholder="Your name or company"
                  autoComplete="organization"
                />
              </Field>

              <Field label="Mobile Number" required error={errors.mobile}>
                <input
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => update('mobile', e.target.value)}
                  className={inputCls(errors.mobile)}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  inputMode="numeric"
                />
              </Field>

              <Field label="Email Address" error={undefined} optional>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className={inputCls(undefined)}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </Field>

              <Field label="Preferred Dispatch Date" optional>
                <input
                  type="date"
                  value={form.dispatchDate}
                  onChange={(e) => update('dispatchDate', e.target.value)}
                  className={inputCls(undefined)}
                />
              </Field>

              <Field label="Pickup Location" required error={errors.pickup}>
                <input
                  type="text"
                  value={form.pickup}
                  onChange={(e) => update('pickup', e.target.value)}
                  className={inputCls(errors.pickup)}
                  placeholder="e.g. Ghaziabad"
                />
              </Field>

              <Field label="Delivery Location" required error={errors.delivery}>
                <input
                  type="text"
                  value={form.delivery}
                  onChange={(e) => update('delivery', e.target.value)}
                  className={inputCls(errors.delivery)}
                  placeholder="e.g. Dehradun"
                />
              </Field>

              <Field label="Approximate Cargo Weight" required error={errors.weight}>
                <input
                  type="text"
                  value={form.weight}
                  onChange={(e) => update('weight', e.target.value)}
                  className={inputCls(errors.weight)}
                  placeholder="e.g. 20 kg / 10 tons"
                />
              </Field>

              <Field label="Load Type" required error={errors.loadType}>
                <select
                  value={form.loadType}
                  onChange={(e) => update('loadType', e.target.value)}
                  className={inputCls(errors.loadType)}
                >
                  <option value="">Select load type</option>
                  <option value="Part Load (PTL)">Part Load (PTL)</option>
                  <option value="Full Truck Load (FTL)">Full Truck Load (FTL)</option>
                </select>
              </Field>

              <Field label="Select Vehicle" required error={errors.vehicle} full>
                <select
                  value={form.vehicle}
                  onChange={(e) => update('vehicle', e.target.value)}
                  className={inputCls(errors.vehicle)}
                >
                  <option value="">Select vehicle option</option>
                  {VEHICLE_OPTIONS.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
                <p className="mt-1.5 text-[11px] text-gray-500">
                  Selecting a vehicle is a preference only and does not confirm availability or a booking.
                </p>
              </Field>

              <Field label="Cargo Description" optional full>
                <input
                  type="text"
                  value={form.cargo}
                  onChange={(e) => update('cargo', e.target.value)}
                  className={inputCls(undefined)}
                  placeholder="Brief description of goods"
                />
              </Field>

              <Field label="Additional Requirements" optional full>
                <textarea
                  value={form.requirements}
                  onChange={(e) => update('requirements', e.target.value)}
                  className={inputCls(undefined) + ' min-h-[90px] resize-y'}
                  placeholder="Any special handling, packaging, or scheduling notes"
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-gray-500 leading-relaxed">
                By submitting, you agree to be contacted by our dispatch team via WhatsApp or phone.
                We do not store your details on this website.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-[#071533] font-semibold px-6 py-3.5 rounded-md shadow-lg shadow-amber-500/25 transition-all w-full sm:w-auto"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Preparing…
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Enquiry via WhatsApp
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function inputCls(error?: string): string {
  return `w-full rounded-md border px-3.5 py-2.5 text-sm text-[#071533] bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/60 transition-colors ${
    error ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:border-amber-400'
  }`;
}

function Field({
  label,
  required,
  optional,
  error,
  full,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label className="block text-sm font-medium text-[#071533] mb-1.5">
        {label}
        {required && <span className="text-amber-600 ml-0.5">*</span>}
        {optional && <span className="text-gray-400 text-xs ml-1.5 font-normal">(optional)</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}
