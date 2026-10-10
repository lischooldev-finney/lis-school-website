import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

type DocumentFile = {
 label: string;
 fileName: string;
};

type RequiredDocument = {
 title: string;
 files?: DocumentFile[];
};

const requiredDocuments: RequiredDocument[] = [
 {
  title:
   "Copies of Affiliation / Upgradation Letter and recent Extension of Affiliation, if any",
 },
 {
  title:
   "Copies of Societies / Trust / Company Registration / Renewal Certificate, as applicable",
  files: [
   {
    label: "Registration Certificate",
    fileName: "light house registration.pdf",
   },
  ],
 },
 {
  title:
   "Copy of No Objection Certificate (NOC) issued by the State Government / UT, if applicable",
 },
 {
  title:
   "Copy of Recognition Certificate (COR) under the RTE Act, 2009, and its renewal, if applicable",
  files: [
   {
    label: "Recognition Certificate",
    fileName: "The light house school pedatadivada.pdf",
   },
  ],
 },
 {
  title:
   "Copy of valid Building Safety Certificate as per the National Building Code",
  files: [
   {
    label: "Building Safety Certificate",
    fileName: "Stability and Soundness.jpeg",
   },
  ],
 },
 {
  title:
   "Copy of valid Fire Safety Certificate issued by the competent authority",
  files: [{ label: "Fire Safety Certificate", fileName: "Google.pdf" }],
 },
 {
  title: "Self-Certification by the school",
  files: [{ label: "Self-Certification", fileName: "2026-10-10 15-17-25.pdf" }],
 },
 {
  title: "Copies of valid Water, Health and Sanitation Certificates",
  files: [
   {
    label: "Water, Health and Sanitation Certificates",
    fileName: "2026-10-10 15-36-06.pdf",
   },
  ],
 },
 {
  title: "Fee Structure of the school",
  files: [{ label: "Fee Structure", fileName: "2026-10-10 15-58-17.pdf" }],
 },
 {
  title: "Annual Academic Calendar",
  files: [{ label: "Academic Calendar", fileName: "2026-10-10 15-48-58.pdf" }],
 },
 {
  title: "List of School Management Committee (SMC)",
  files: [{ label: "SMC List", fileName: "2026-10-10 15-03-47.pdf" }],
 },
 {
  title: "List of Parents Teachers Association (PTA) Members",
  files: [{ label: "PTA Members", fileName: "2026-10-10 15-05-31.pdf" }],
 },
 { title: "Last three-year result of the Board Examination, as applicable" },
];

const getDocumentUrl = (fileName: string) =>
 `/FIles/${encodeURIComponent(fileName)}`;

const schoolDetails = [
 { label: "Name of the School", value: "The Light House School" },
 { label: "Affiliation No. (if applicable)", value: "Not provided" },
 { label: "School Code (if applicable)", value: "Not provided" },
 {
  label: "Complete Address with PIN Code",
  value:
   "Main Road, Pedatadivada, Mercy Mission Center, Denkada Mandal, Vizianagaram, Andhra Pradesh - 535006",
  icon: MapPin,
  wide: true,
 },
 {
  label: "Principal Name & Qualification",
  value: "A. Usha Rani · M.A., B.Sc., B.Ed.",
 },
 {
  label: "School Email ID",
  value: (
   <a
    href="mailto:lighthouse.school.intl@gmail.com"
    className="inline-flex items-center gap-2 text-maroon transition-colors hover:text-navy"
   >
    lighthouse.school.intl@gmail.com <Mail size={15} aria-hidden="true" />
   </a>
  ),
 },
 {
  label: "Contact Details",
  value: (
   <a
    href="tel:+919887226699"
    className="inline-flex items-center gap-2 text-maroon transition-colors hover:text-navy"
   >
    9887226699 <Phone size={15} aria-hidden="true" />
   </a>
  ),
 },
];

export const MandatoryDocumentsPage = () => (
 <div className="bg-slate-50 pb-16 pt-24 sm:pt-26">
  <div className="mx-auto max-w-6xl px-6 sm:px-10">
   <motion.section
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-light to-maroon px-6 py-8 text-white shadow-large sm:px-10 sm:py-10"
   >
    <div
     aria-hidden="true"
     className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[36px] border-white/[0.06]"
    />
    <div className="relative z-10 max-w-3xl">
     <p className="mb-3 font-poppins text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
      Public information
     </p>
     <h1 className="font-playfair text-3xl font-bold sm:text-4xl md:text-5xl">
      Mandatory Disclosure
     </h1>
     <p className="mt-3 max-w-2xl font-inter text-sm leading-6 text-white/80 sm:text-base">
      Official school information and documents for The Light House School.
     </p>
     {/* <a
      href="#documents-and-information"
      className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 font-poppins text-sm font-semibold text-white transition-colors hover:bg-white/20"
     >
      View required documents <ArrowUpRight size={16} aria-hidden="true" />
     </a> */}
    </div>
   </motion.section>

   <motion.section
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4 }}
    className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8"
    aria-labelledby="general-information-heading"
   >
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
     <div>
      <p className="font-poppins text-xs font-semibold uppercase tracking-[0.18em] text-maroon">
       Section A
      </p>
      <h2
       id="general-information-heading"
       className="mt-1 font-playfair text-2xl font-bold text-navy sm:text-3xl"
      >
       General Information
      </h2>
     </div>
     <span className="rounded-full bg-slate-100 px-3 py-1.5 font-poppins text-xs font-medium text-slate-600">
      The Light House School
     </span>
    </div>

    <dl className="grid gap-4 sm:grid-cols-2">
     {schoolDetails.map(({ label, value, icon: Icon, wide }) => (
      <div
       key={label}
       className={`rounded-2xl border border-slate-100 bg-slate-50/80 px-5 py-4 ${
        wide ? "sm:col-span-2" : ""
       }`}
      >
       <dt className="font-poppins text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
       </dt>
       <dd className="mt-1.5 flex items-start gap-2 font-inter text-sm font-semibold leading-6 text-navy">
        {Icon && (
         <Icon
          className="mt-1 shrink-0 text-maroon"
          size={16}
          aria-hidden="true"
         />
        )}
        <span>{value}</span>
       </dd>
      </div>
     ))}
    </dl>
   </motion.section>

   <motion.section
    id="documents-and-information"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.4 }}
    className="mt-8 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:p-6 mb-12"
    aria-labelledby="documents-heading"
   >
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
     <div>
      <p className="font-poppins text-xs font-semibold uppercase tracking-[0.18em] text-maroon">
       Section B
      </p>
      <h2
       id="documents-heading"
       className="mt-1 font-playfair text-2xl font-bold text-navy sm:text-3xl"
      >
       Documents &amp; Information
      </h2>
     </div>
     <span className="rounded-full bg-slate-100 px-3 py-1.5 font-poppins text-xs font-medium text-slate-600">
      13 required documents
     </span>
    </div>

    <div className="border-y border-slate-100 mb-4">
     {requiredDocuments.map((document, index) => (
      <article
       key={document.title}
       className="flex items-center justify-between gap-3 border-b border-slate-100 px-1 py-3 transition-colors last:border-0 hover:bg-slate-50 sm:gap-4 sm:px-3"
      >
       <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy/[0.06] font-poppins text-xs font-bold text-navy">
         {String(index + 1).padStart(2, "0")}
        </span>
        <p className="min-w-0 font-inter text-sm font-medium leading-6 text-slate-800 sm:text-[15px]">
         {document.title}
        </p>
       </div>
       <div className="flex shrink-0 items-center justify-end">
        {document.files ? (
         document.files.map((file) => (
          <a
           key={file.fileName}
           href={getDocumentUrl(file.fileName)}
           target="_blank"
           rel="noreferrer"
           aria-label={`View ${file.label}`}
           className="inline-flex min-h-9 w-36 items-center justify-center gap-2 rounded-lg border border-maroon/20 bg-white px-3 py-2 font-poppins text-xs font-semibold text-maroon transition-colors hover:border-maroon hover:bg-maroon hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
          >
           View document <ArrowUpRight size={14} aria-hidden="true" />
          </a>
         ))
        ) : (
         <span className="inline-flex min-h-9 w-36 items-center justify-center rounded-lg bg-amber-50 px-3 py-2 text-center font-poppins text-xs font-medium text-amber-800">
          Document to be added
         </span>
        )}
       </div>
      </article>
     ))}
    </div>
   </motion.section>
  </div>
 </div>
);
