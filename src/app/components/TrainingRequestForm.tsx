"use client";

import React, { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type FormState = {
  name: string;
  designation: string;
  organisation: string;
  orgType: string;
  email: string;
  phone: string;
  city: string;
  areas: string[];
  mode: string;
  participants: string;
  duration: string;
  datesStart: string;
  datesEnd: string;
  objectives: string;
  heard: string;
  file: File | null;
};

const initialState: FormState = {
  name: "",
  designation: "",
  organisation: "",
  orgType: "",
  email: "",
  phone: "",
  city: "",
  areas: [],
  mode: "",
  participants: "",
  duration: "",
  datesStart: "",
  datesEnd: "",
  objectives: "",
  heard: "",
  file: null,
};

export const trainingAreasList = [
  "Business and Professional English Communication",
  "Technical Writing and Documentation",
  "Presentation and Public Speaking Skills",
  "Academic Writing and Research Communication",
  "English for Specific Purposes (Legal, Medical, Engineering, IT)",
  "Cross-Cultural Communication and Workplace English",
  "Interview and Group Discussion Preparation",
  "Email and Workplace Writing",
  "Train-the-Trainer Programmes in English Language Teaching",
];

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
  // simple validation: digits, spaces, +, -, parentheses
  return /^[-+() 0-9]{7,20}$/.test(phone.trim());
}

type Props = {
  onClose: () => void;
  onSuccess: (message: string) => void;
};

export default function TrainingRequestForm({ onClose, onSuccess }: Props) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function toggleArea(area: string) {
    setForm((s) => ({ ...s, areas: s.areas.includes(area) ? s.areas.filter((a) => a !== area) : [...s.areas, area] }));
  }

  function validate() {
    const nextErrors: typeof errors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.designation.trim()) nextErrors.designation = "Designation is required.";
    if (!form.organisation.trim()) nextErrors.organisation = "Organisation is required.";
    if (!form.orgType.trim()) nextErrors.orgType = "Organisation type is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!validateEmail(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.phone.trim()) nextErrors.phone = "Phone is required.";
    else if (!validatePhone(form.phone)) nextErrors.phone = "Enter a valid phone number.";
    if (!form.city.trim()) nextErrors.city = "City / Location is required.";
    if (!form.areas.length) nextErrors.areas = "Select at least one training area.";
    if (!form.mode.trim()) nextErrors.mode = "Select a preferred mode of delivery.";
    if (!form.participants.trim()) nextErrors.participants = "Select estimated number of participants.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // simulate submission
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setForm(initialState);
    onClose();
    onSuccess("Thank you for your interest in our training programmes. Your request has been recorded successfully. Our team will review it and contact you soon.");
  }

  return (
    <div className="flex flex-col" style={{ minWidth: 0 }}>
      {/* Header */}
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold text-gray-900">Training Request Form</h3>
        <p className="text-sm text-gray-600">All fields marked with * are required.</p>
      </div>

      {/* Body */}
      <div className="p-4 overflow-y-auto" style={{ maxHeight: "calc(90vh - 160px)" }}>
        <form id="training-form" onSubmit={handleSubmit} className="space-y-6">
          <fieldset>
            <legend className="text-sm font-medium text-gray-900">Organisation Information</legend>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Name *</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Designation / Role *</label>
                <Input value={form.designation} onChange={(e) => setForm({ ...form, designation: e.target.value })} />
                {errors.designation && <p className="text-xs text-destructive mt-1">{errors.designation}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Organisation / Institution Name *</label>
                <Input value={form.organisation} onChange={(e) => setForm({ ...form, organisation: e.target.value })} />
                {errors.organisation && <p className="text-xs text-destructive mt-1">{errors.organisation}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Organisation Type *</label>
                <select className="w-full rounded-md border px-3 py-2" value={form.orgType} onChange={(e) => setForm({ ...form, orgType: e.target.value })}>
                  <option value="">Select</option>
                  <option>Corporate</option>
                  <option>Educational Institution</option>
                  <option>Government Body</option>
                  <option>NGO</option>
                  <option>Other</option>
                </select>
                {errors.orgType && <p className="text-xs text-destructive mt-1">{errors.orgType}</p>}
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-medium text-gray-900">Contact Information</legend>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Email Address *</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">City / Location *</label>
                <Input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-medium text-gray-900">Training Information</legend>
            <div className="mt-3 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Training Area of Interest *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 max-h-40 overflow-auto border rounded-md p-2">
                  {trainingAreasList.map((area) => (
                    <label key={area} className="flex items-center gap-2">
                      <input type="checkbox" checked={form.areas.includes(area)} onChange={() => toggleArea(area)} />
                      <span className="text-sm text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
                {errors.areas && <p className="text-xs text-destructive mt-1">{errors.areas}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Preferred Mode of Delivery *</label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2"><input type="radio" name="mode" value="In-person" checked={form.mode === "In-person"} onChange={(e) => setForm({ ...form, mode: e.target.value })} /> In-person</label>
                  <label className="flex items-center gap-2"><input type="radio" name="mode" value="Online" checked={form.mode === "Online"} onChange={(e) => setForm({ ...form, mode: e.target.value })} /> Online</label>
                  <label className="flex items-center gap-2"><input type="radio" name="mode" value="Hybrid" checked={form.mode === "Hybrid"} onChange={(e) => setForm({ ...form, mode: e.target.value })} /> Hybrid</label>
                </div>
                {errors.mode && <p className="text-xs text-destructive mt-1">{errors.mode}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Estimated Number of Participants *</label>
                  <select className="w-full rounded-md border px-3 py-2" value={form.participants} onChange={(e) => setForm({ ...form, participants: e.target.value })}>
                    <option value="">Select</option>
                    <option>Up to 20</option>
                    <option>21–50</option>
                    <option>51–100</option>
                    <option>100+</option>
                  </select>
                  {errors.participants && <p className="text-xs text-destructive mt-1">{errors.participants}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Preferred Duration</label>
                  <select className="w-full rounded-md border px-3 py-2" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })}>
                    <option value="">Select</option>
                    <option>Half-day</option>
                    <option>Full-day</option>
                    <option>2–3 Days</option>
                    <option>1 Week</option>
                    <option>Custom</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Preferred Dates / Start</label>
                  <Input type="date" value={form.datesStart} onChange={(e) => setForm({ ...form, datesStart: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Preferred Dates / End</label>
                  <Input type="date" value={form.datesEnd} onChange={(e) => setForm({ ...form, datesEnd: e.target.value })} />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Specific Objectives or Requirements</label>
                <textarea rows={4} className="w-full rounded-md border px-3 py-2" value={form.objectives} onChange={(e) => setForm({ ...form, objectives: e.target.value })} />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">How did you hear about us?</label>
                <select className="w-full rounded-md border px-3 py-2" value={form.heard} onChange={(e) => setForm({ ...form, heard: e.target.value })}>
                  <option value="">Select</option>
                  <option>Website</option>
                  <option>Referral</option>
                  <option>Social Media</option>
                  <option>Conference</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Attach a Brief (optional)</label>
                <label className="inline-flex items-center gap-2 text-amber-600 hover:underline cursor-pointer mt-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setForm({ ...form, file: e.target.files ? e.target.files[0] : null })}
                  />
                  <span className="font-medium">Choose file</span>
                </label>
                {form.file && <p className="text-sm text-gray-600 mt-1">Selected: {form.file.name}</p>}
              </div>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Footer */}
      <div className="p-4 border-t flex items-center justify-end gap-3">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} disabled={loading}>{loading ? "Submitting..." : "Submit Training Request"}</Button>
      </div>
    </div>
  );
}
