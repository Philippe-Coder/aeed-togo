/*
# Create contact_messages table for AEED-TOGO website

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — name of the person contacting
  - `email` (text, not null) — email address of the person contacting
  - `subject` (text, not null) — subject of the message
  - `message` (text, not null) — the contact message body
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated to INSERT (public contact form, no sign-in needed).
- No SELECT/UPDATE/DELETE for anon — only site admins should read messages,
  and since this site has no auth flow, we restrict reads to the service role only.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);
