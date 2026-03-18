// =============================================
// supabase.js — Supabase client helpers
// =============================================

// NOTE: This file is meant to be used as a lightweight helper for saving form submissions to a Supabase table.
//       It is intentionally minimal so it can work in a static site without a build step.

// 1) Create a Supabase project at https://app.supabase.com
// 2) Create a table (example: "forms") with at least these columns:
//      - id (uuid, primary key, default: gen_random_uuid())
//      - created_at (timestamp, default: now())
//      - form_type (text)
//      - reference (text)
//      - data (jsonb)
// 3) Set SUPABASE_URL and SUPABASE_ANON_KEY below.
// 4) In index.html, include this file with <script type="module" src="js/supabase.js"></script>
//    and import/consume the helpers from your app logic.

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// TODO: Replace the placeholders below with your Supabase project values.
export const SUPABASE_URL = 'https://judxuqqwgdsovdhjobvj.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_SO8WCQJQ2XMTTjOFWtBhig_M1mfkHRT';

let supabase = null;

function getSupabaseClient() {
  if (supabase) return supabase;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || SUPABASE_URL.includes('<') || SUPABASE_ANON_KEY.includes('<')) {
    console.warn('Supabase is not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY in js/supabase.js');
    return null;
  }
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return supabase;
}

/**
 * Save a form submission record into a Supabase table.
 * @param {string} table - Supabase table name.
 * @param {object} payload - JSON-serializable payload to insert.
 * @returns {Promise<{data: any, error: any}>}
 */
export async function saveFormSubmission(table, payload) {
  const client = getSupabaseClient();
  if (!client) {
    return { data: null, error: new Error('Supabase client not initialized') };
  }
  return client.from(table).insert([payload]);
}

/**
 * Generates a short reference code to show the user.
 */
export function generateReference(prefix = 'PGP') {
  const now = Date.now().toString();
  return `${prefix}-${now.slice(-8)}`;
}

// Expose helpers globally so non-module scripts can use them without needing imports.
if (typeof window !== 'undefined') {
  window.SupabaseHelpers = window.SupabaseHelpers || {
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    getSupabaseClient,
    saveFormSubmission,
    generateReference,
  };
}
