import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Truck,
  Calculator,
  AlertCircle,
  Store,
  MapPin,
  Headphones,
  Copy,
  Check,
} from "lucide-react";
import toast from "react-hot-toast";

const HELPLINE_24_7 = "+919527351890";
const HELPLINE_DISPLAY = "+91 95373 51890";
const WHATSAPP_NUMBER = "919527351890";

const DEPARTMENTS = [
  {
    id: "delivery",
    icon: Truck,
    title: "Delivery Support",
    titleGu: "ડિલિવરી સપોર્ટ",
    hint: "Status, delays & scheduling · સ્થિતિ, વિલંબ",
    waIntro: "Hello — Delivery Support / નમસ્તે, ડિલિવરી સપોર્ટ",
  },
  {
    id: "accounts",
    icon: Calculator,
    title: "Accounts Support",
    titleGu: "એકાઉન્ટ્સ સપોર્ટ",
    hint: "Payments, invoices & statements · ચુકવણી, ઇન્વોઇસ",
    waIntro: "Hello — Accounts / નમસ્તે, એકાઉન્ટ્સ",
  },
  {
    id: "complaint",
    icon: AlertCircle,
    title: "Complaint Desk",
    titleGu: "ફરિયાદ ડેસ્ક",
    hint: "Damage, quality, replacement · નુકસાન, ગુણવત્તા, બદલી",
    waIntro: "Hello — Complaint / નમસ્તે, ફરિયાદ",
  },
  {
    id: "sales",
    icon: Store,
    title: "Sales & Showroom",
    titleGu: "સેલ્સ અને શોરૂમ",
    hint: "Quotes, products & orders · કોટેશન, પ્રોડક્ટ",
    waIntro: "Hello — Sales / નમસ્તે, સેલ્સ",
  },
] as const;

const COMPLAINT_TYPE_CHIPS: { id: string; labelEn: string; labelGu: string }[] = [
  { id: "damaged", labelEn: "Damaged material", labelGu: "નુકસાનગ્રસ્ત મટીરિયલ" },
  { id: "wrong", labelEn: "Wrong product delivered", labelGu: "ખોટું પ્રોડક્ટ" },
  { id: "delay", labelEn: "Delivery delay", labelGu: "ડિલિવરી વિલંબ" },
  { id: "install", labelEn: "Installation issue", labelGu: "ઇન્સ્ટોલેશન" },
  { id: "billing", labelEn: "Billing issue", labelGu: "બિલિંગ" },
  { id: "quality", labelEn: "Quality concern", labelGu: "ગુણવત્તા" },
  { id: "replace", labelEn: "Replacement request", labelGu: "બદલી" },
  { id: "other", labelEn: "Other", labelGu: "અન્ય" },
];

const SHOWROOM_LINES = {
  gu: "૧૭,૧૮,૧૯, પ્રથમ માળ, સ્નેહસાગર સોસાયટી, અબ્રામા રોડ, સંસ્કારતીર્થ સ્કૂલ સામે, મોટા વરાછા, સુરત, ગુજરાત ૩૯૪૧૦૧",
  en: "17–19, First floor, Snehsagar Soc., Abrama Rd., opp. Sanskartirth School, Mota Varachha, Surat, Gujarat 394101",
};

function buildComplaintMessage(selectedType: string) {
  const typeBlock = selectedType
    ? `Complaint type / ફરિયાદ પ્રકાર: ${selectedType}\n`
    : `Complaint type / ફરિયાદ પ્રકાર: (select / પસંદ કરો)\n`;

  return `*Vishwa Ply & Hardware*
_Customer complaint · ગ્રાહક ફરિયાદ_

${typeBlock}
Please fill every *required* line below, then SEND this message.
નીચે દરેક *જરૂરી* લાઇન ભરીને મેસેજ મોકલો.

━━━━━━━━━━━━━━━━

Party / Firm name *required* / પાર્ટી અથવા ફર્મ નામ:
→ 

Contact person (optional) / સંપર્ક વ્યક્તિ:
→ 

Mobile *required* / મોબાઇલ:
→ 

Full address *required* / સંપૂર્ણ સરનામું:
→ 

Product name *required* / પ્રોડક્ટ નામ:
→ 

Invoice number (optional) / ઇન્વોઇસ નંબર:
→ 

Detailed description *required* / વિગતવાર વર્ણન:
→ 

Photo / ફોટો: Attach image in WhatsApp after typing (ટાઇપ પછી ફોટો જોડો)

━━━━━━━━━━━━━━━━
Thank you / આભાર`;
}

function waUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const Support = () => {
  const [complaintType, setComplaintType] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const complaintMessage = useMemo(
    () => buildComplaintMessage(complaintType),
    [complaintType],
  );

  const complaintWaHref = useMemo(() => waUrl(complaintMessage), [complaintMessage]);

  const copyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(complaintMessage);
      setCopied(true);
      toast.success("Template copied — paste in WhatsApp if needed.");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy. Select text manually from the preview.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-Cabin text-[#2C2C2C] pb-20 antialiased">
      {/* Header */}
      <header className="border-b border-[#8B5E3C]/10 bg-gradient-to-b from-[#EDE6DD] to-[#FAF9F6] pt-24 pb-10 sm:pt-28">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <p className="font-Cinzel text-[10px] font-semibold uppercase tracking-[0.4em] text-[#8B5E3C]">
              Support · સપોર્ટ
            </p>
            <h1 className="mt-3 font-Cinzel text-2xl font-semibold sm:text-3xl md:text-[2.1rem]">
              Vishwa Ply &amp; Hardware
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-sm text-gray-600 sm:text-base">
              One place for departments, helpline &amp; complaints. Complaints are filled{" "}
              <span className="font-semibold text-[#2C2C2C]">inside WhatsApp</span> — no form on this page.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${HELPLINE_24_7}`}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#8B5E3C] px-6 py-4 text-white shadow-md transition hover:bg-[#6D4C3D]"
              >
                <Headphones className="h-5 w-5 shrink-0" />
                <span className="text-left">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#E6C9A8]/95">
                    24×7 Helpline / હેલ્પલાઇન
                  </span>
                  <span className="font-Cinzel text-lg font-bold">{HELPLINE_DISPLAY}</span>
                </span>
              </a>
              <a
                href={waUrl("Hello — Vishwa Ply & Hardware support.\nનમસ્તે — વિશ્વા પ્લાય એન્ડ હાર્ડવેર.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#20BD5A]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp — quick chat
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 sm:px-8">
        {/* Departments — list UI, no cards */}
        <section className="mt-14">
          <h2 className="font-Cinzel text-lg font-bold sm:text-xl">
            Departments / વિભાગો
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Tap <span className="font-medium text-[#8B5E3C]">Call</span> or{" "}
            <span className="font-medium text-[#128C7E]">WhatsApp</span> — message opens with a short English + Gujarati intro.
          </p>

          <ul className="mt-6 divide-y divide-[#8B5E3C]/10 rounded-2xl border border-[#8B5E3C]/12 bg-white/90 overflow-hidden shadow-sm">
            {DEPARTMENTS.map((d, i) => (
              <motion.li
                key={d.id}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6 hover:bg-[#FFFCF8]/80 transition-colors"
              >
                <div className="flex min-w-0 flex-1 gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8B5E3C]/10 text-[#8B5E3C]">
                    <d.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-Cinzel text-base font-semibold text-[#2C2C2C]">{d.title}</p>
                    <p className="text-sm text-[#8B5E3C]">{d.titleGu}</p>
                    <p className="mt-1 text-sm text-gray-500">{d.hint}</p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                  <a
                    href={`tel:${HELPLINE_24_7}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#8B5E3C]/25 bg-[#FAF9F6] px-4 py-2 text-xs font-semibold text-[#8B5E3C] transition hover:border-[#8B5E3C] hover:bg-white"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Call
                  </a>
                  <a
                    href={waUrl(`${d.waIntro}\n\nPlease describe your need / તમારી જરૂરિયાત લખો.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#20BD5A]"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    WhatsApp
                  </a>
                </div>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Showroom — inline strip */}
        <section className="mt-12 border-t border-[#8B5E3C]/10 pt-10">
          <div className="flex gap-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#8B5E3C]" />
            <div>
              <h2 className="font-Cinzel text-lg font-bold">Showroom location / શોરૂમ</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{SHOWROOM_LINES.en}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{SHOWROOM_LINES.gu}</p>
              <a href={`tel:${HELPLINE_24_7}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#8B5E3C]">
                <Phone className="h-4 w-4" />
                {HELPLINE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* Complaints — WhatsApp only, no web form UI */}
        <section className="mt-14 border-t border-[#8B5E3C]/10 pt-12">
          <div className="overflow-hidden rounded-3xl border border-[#8B5E3C]/12 bg-gradient-to-b from-white via-[#FFFCF9] to-[#FAF9F6] shadow-[0_20px_50px_-28px_rgba(62,39,35,0.25)]">
            <div className="border-b border-[#8B5E3C]/10 bg-[#E6C9A8]/12 px-6 py-8 sm:px-10 sm:py-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#128C7E]">
                  <MessageCircle className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-Cinzel text-xl font-bold text-[#2C2C2C] sm:text-2xl">
                    Complaint · ફરિયાદ
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                    <span className="font-semibold text-[#2C2C2C]">This website has no complaint form.</span> Tap the green
                    button — WhatsApp opens with a ready message. You only complete and send the chat there (photos:
                    attach in WhatsApp).
                  </p>
                </div>
              </div>

              <ol className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-4">
                {[
                  {
                    n: "1",
                    t: "Continue to WhatsApp",
                    tGu: "વોટ્સએપ ખોલો",
                    d: "A draft message is prepared for you.",
                  },
                  {
                    n: "2",
                    t: "Complete details in chat",
                    tGu: "ચેટમાં વિગત ભરો",
                    d: "Party name, mobile, address, product & description.",
                  },
                  {
                    n: "3",
                    t: "Send",
                    tGu: "મોકલો",
                    d: "Our team receives it on the same number.",
                  },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4 rounded-2xl bg-white/70 px-4 py-4 ring-1 ring-[#8B5E3C]/8">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B5E3C] font-Cinzel text-sm font-bold text-white">
                      {step.n}
                    </span>
                    <div>
                      <p className="font-semibold text-[#2C2C2C]">
                        {step.t}{" "}
                        <span className="font-normal text-[#8B5E3C]">· {step.tGu}</span>
                      </p>
                      <p className="mt-1 text-sm text-gray-600">{step.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="px-6 py-8 sm:px-10 sm:py-9">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Optional topic / વિષય (adds one line in WhatsApp)
              </p>
              <div className="mt-3 flex flex-wrap gap-x-1 gap-y-2 text-sm leading-relaxed">
                {COMPLAINT_TYPE_CHIPS.map((c, idx) => {
                  const label = `${c.labelEn} · ${c.labelGu}`;
                  const active = complaintType === label;
                  return (
                    <span key={c.id}>
                      <button
                        type="button"
                        onClick={() => setComplaintType(active ? "" : label)}
                        className={`font-medium transition ${
                          active ? "text-[#8B5E3C] underline decoration-2 underline-offset-4" : "text-gray-600 hover:text-[#8B5E3C]"
                        }`}
                      >
                        {c.labelEn}
                      </button>
                      {idx < COMPLAINT_TYPE_CHIPS.length - 1 && (
                        <span className="mx-2 text-gray-300" aria-hidden>
                          ·
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-gray-500">Tap a word to include it; tap again to clear.</p>

              <a
                href={complaintWaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] py-4 text-base font-bold text-white shadow-lg shadow-[#25D366]/25 transition hover:bg-[#20BD5A] sm:py-5 sm:text-lg"
              >
                <MessageCircle className="h-6 w-6" />
                Open WhatsApp — complaint draft
              </a>

              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
                <button
                  type="button"
                  onClick={copyTemplate}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B5E3C] underline-offset-4 hover:underline"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied to clipboard" : "Copy draft text only"}
                </button>
                <span className="hidden text-gray-300 sm:inline" aria-hidden>
                  |
                </span>
                <a href={`tel:${HELPLINE_24_7}`} className="text-sm font-semibold text-gray-600 hover:text-[#8B5E3C]">
                  Or call {HELPLINE_DISPLAY}
                </a>
              </div>

              <details className="group mt-8 rounded-2xl border border-dashed border-[#8B5E3C]/25 bg-[#FAF9F6] px-4 py-3 text-sm">
                <summary className="cursor-pointer list-none font-medium text-[#8B5E3C] marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="underline-offset-2 group-open:underline">
                    What text is sent to WhatsApp? / મેસેજમાં શું જશે?
                  </span>
                </summary>
                <pre className="mt-4 max-h-48 overflow-auto whitespace-pre-wrap break-words rounded-xl bg-[#2C2C2C] p-4 font-mono text-[10px] leading-relaxed text-[#f0ebe6] sm:text-xs">
                  {complaintMessage}
                </pre>
              </details>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Support;
