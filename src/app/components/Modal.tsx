"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  width?: number | string;
};

export default function Modal({ open, onClose, title, children, width = 850 }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const lastActive = useRef<HTMLElement | null>(null);

  // No custom portal root required; we'll render into document.body.
  // This avoids crashes if a specific element is missing.

  // Open/close side effects
  useEffect(() => {
    if (open) {
      lastActive.current = document.activeElement as HTMLElement | null;
      // Lock scroll
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // focus first focusable element in modal
      requestAnimationFrame(() => {
        const el = contentRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        el?.focus();
      });

      return () => {
        document.body.style.overflow = prev;
        lastActive.current?.focus();
      };
    }
  }, [open]);

  // Escape to close & focus trap (Tab)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab") {
        // basic focus trap
        const container = contentRef.current;
        if (!container) return;
        const focusable = Array.from(container.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )).filter((el) => !el.hasAttribute("disabled"));
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (typeof window === "undefined") return null;

  return createPortal(
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 flex items-center justify-center ${open ? "" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={(e) => {
          // click on overlay closes
          if (e.target === overlayRef.current) onClose();
        }}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm`}
      />

      {/* Modal container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title || "Dialog"}
        ref={contentRef}
        onClick={(e) => e.stopPropagation()} /* prevent closing when clicking inside */
        className="relative z-60 w-full flex items-stretch justify-center px-4"
      >
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          style={{ width: typeof width === "number" ? `${width}px` : width, maxWidth: "95vw", maxHeight: "90vh" }}
        >
          {children}
        </div>
      </div>
    </div>,
    // Render into document.body which always exists in the browser environment
    document.body
  );
}
